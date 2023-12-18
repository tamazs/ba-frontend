import { ref } from 'vue';
import axios from 'axios';

const getStanding = () => {
    const standingState = ref({
        standing: []
    });

    const getTeamImage = async (teamId) => {
        const options = {
            method: 'GET',
            responseType: 'blob', // Set responseType to 'blob'
            url: `https://handballapi.p.rapidapi.com/api/handball/team/${teamId}/image`,
            headers: {
                'X-RapidAPI-Key': 'e28f289294mshbb813c98940987dp1ce59fjsn035af3e92da6',
                'X-RapidAPI-Host': 'handballapi.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            const imageBlob = new Blob([response.data], { type: 'image/png' });
            const imageObjectURL = URL.createObjectURL(imageBlob);
            return imageObjectURL;
        } catch (error) {
            console.error(error);
            return ''; // Return a default image or an empty string if the fetch fails
        }
    };

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const getStandings = async () => {
        const options = {
            method: 'GET',
            url: 'https://handballapi.p.rapidapi.com/api/handball/unique-tournament/14037/season/53411/standings/total',
            headers: {
                'X-RapidAPI-Key': 'e28f289294mshbb813c98940987dp1ce59fjsn035af3e92da6',
                'X-RapidAPI-Host': 'handballapi.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            standingState.value.standing = response.data.standings[0].rows;

            // Fetch and assign team images
            for (const teamStanding of standingState.value.standing) {
                await delay(300); // Delay to prevent rate limiting
                teamStanding.team.image = await getTeamImage(teamStanding.team.id);
            }

        } catch (error) {
            console.error(error);
        }
    };

    return {
        standingState,
        getStandings
    }
}

export default getStanding;
