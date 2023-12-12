import { ref } from 'vue';
import axios from 'axios';

const getMatches = () => {
    const matchState = ref({
        match: {
            homeTeam: { name: '' },
            awayTeam: { name: '' },
            startTimestamp: 0 
        }
    });

    const getPrevMatch = async () => {
        const options = {
            method: 'GET',
            url: 'https://handballapi.p.rapidapi.com/api/handball/team/262312/matches/near',
            headers: {
              'X-RapidAPI-Key': 'e28f289294mshbb813c98940987dp1ce59fjsn035af3e92da6',
              'X-RapidAPI-Host': 'handballapi.p.rapidapi.com'
            }
        };
    
        try {
            const response = await axios.request(options);
            matchState.value.match = response.data.previousEvent;
    
            if (matchState.value.match && matchState.value.match.startTimestamp) {
                const date = new Date(matchState.value.match.startTimestamp * 1000);
                matchState.value.match.formattedStartDate = new Intl.DateTimeFormat('hu-HU', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                }).format(date);
            }
            console.log(matchState.value.match)
        } catch (error) {
            console.error(error);
        }
    };

    const getNextMatch = async () => {
        const options = {
            method: 'GET',
            url: 'https://handballapi.p.rapidapi.com/api/handball/team/262312/matches/near',
            headers: {
              'X-RapidAPI-Key': 'e28f289294mshbb813c98940987dp1ce59fjsn035af3e92da6',
              'X-RapidAPI-Host': 'handballapi.p.rapidapi.com'
            }
        };
    
        try {
            const response = await axios.request(options);
            matchState.value.match = response.data.nextEvent; // Assign the nextEvent directly to matchState.match
    
            // If there's a startTimestamp, format it and add to matchState.match
            if (matchState.value.match && matchState.value.match.startTimestamp) {
                const date = new Date(matchState.value.match.startTimestamp * 1000);
                matchState.value.match.formattedStartDate = new Intl.DateTimeFormat('hu-HU', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                }).format(date);
            }
            console.log(matchState.value.match)
        } catch (error) {
            console.error(error);
        }
    };    

    return {
        matchState,
        getPrevMatch,
        getNextMatch
    }
}

export default getMatches;