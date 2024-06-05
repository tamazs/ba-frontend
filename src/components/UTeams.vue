<template>
    <div class="rootContainer">
        <div v-for="team in teams" :key="team.data.title">
            <PrismicLink :field="team.data.link" target="_blank" class="teams-link">
                <PrismicText :field="team.data.cim" wrapper="p" class="teams-text"/>
            </PrismicLink>
        </div>
    </div>
</template>

<script setup>
import { useAllPrismicDocumentsByType, PrismicLink, PrismicText } from '@prismicio/vue';

const { data: teams } = useAllPrismicDocumentsByType("u-csapatok", {
    orderings: [
		{ field: "document.first_publication_date", direction: "asc" }
	]});
</script>

<style lang="scss" scoped>
.rootContainer {
    width: 30vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
}

.teams-link {
    text-decoration: none;
}

.teams-text {
    color: black;
    font-size: 1.1rem;
}

.teams-text:hover {
    color: var(--c-red)
}

@media (max-width: 900px) {
    .rootContainer {
    width: 80vw;
    justify-content: space-between;
    padding: 1rem;
}

    .teams-text {
    margin-right: 1rem;
}
}
</style>