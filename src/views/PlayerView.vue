<template>
    <div class="player-body" v-if="player">
        <div class="player-head">
            <div class="player-info-wrapper">
                <div class="player-info">
                    <PrismicText :field="player.data.nev" wrapper="h1" class="name" />
                    <div class="player-infos-row">
                        <div class="player-infos-row-column">
                            <p class="info-highlight">{{ player.data.kor }}</p>
                            <p>KOR</p>
                        </div>
                        <div class="player-infos-row-column">
                            <p class="info-highlight">{{ player.data.mezszam }}</p>
                            <p>MEZSZÁM</p>
                        </div>
                        <div class="player-infos-row-column">
                            <p class="info-highlight">{{ player.data.poszt }}</p>
                            <p>POSZT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="player-image">
                <PrismicImage :field="player.data.kep" class="base-image" />
            </div>
        </div>
        <div class="player-info-body">
            <PrismicRichText :field="player.data.sztori" class="player-text"/>
        </div>
        <div class="player-prev-teams">
            <p class="clubs-title">előző KLUB(OK)</p>
            <SliceZone :slices="player.data.body" :components="components"/>
        </div>
    </div>
</template>

<script setup>
import { watchEffect } from "vue";
    import { usePrismicDocumentByUID, PrismicImage, PrismicRichText, PrismicText, defineSliceZoneComponents } from "@prismicio/vue";
    import { useRoute } from "vue-router";
    import { useSeoMeta } from '@unhead/vue'
    import PrevTeams from "../slices/PrevTeams.vue"

    const route = useRoute();

    const {data: player } = usePrismicDocumentByUID("jatekos", route.params.uid);

    const components = defineSliceZoneComponents({
        klub_ok_: PrevTeams
    });

    watchEffect(() => {
    if (player.value) {
      useSeoMeta({
        title: player.value.data.nev[0].text + " - Kisvárdai Kézilabda Klub",
        description: player.value.data.sztori[0].text,
        ogDescription: player.value.data.sztori[0].text,
        ogTitle: player.value.data.nev[0].text + " - Kisvárdai Kézilabda Klub",
        ogImage: player.value.data.kep.url
      });
    }
});
</script>

<style lang="scss" scoped>
.player-head {
    display: flex;
    max-width: 100vw;
    justify-content: space-between;
    padding: 5rem;
    align-items: center;
}

.name {
    color: var(--c-red);
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 10px var(--c-red) solid;
    overflow-wrap: break-word;
    max-width: 30vw;
}

.player-infos-row {
    display: flex;
    gap: 2.5rem;
}

.player-infos-row-column {
    text-align: center;
}

.info-highlight {
    color: var(--c-red);
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
}

.player-info-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.player-text {
    max-width: 50vw;
}

.clubs-title {
    padding: 0rem 1rem;
    text-transform: uppercase;
}

.player-prev-teams {
    margin-top: 3rem;
}

@media (max-width: 800px) {
    .player-head {
    flex-direction: column-reverse;
}

.name {
    max-width: 90vw;
}

.player-text {
    max-width: 90vw;
}
}
</style>