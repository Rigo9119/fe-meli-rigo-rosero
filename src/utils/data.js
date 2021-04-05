import axios from 'axios';

const baseUrl = 'http://localhost:5050/api/items';

async function getItems(query) {
    try {
        const res = await axios.get(`${baseUrl}/search?q=${query}`);
        return res.data
    } catch (error) {
        console.log('netwrok error 🌍🔥:>> ', error);
    }
}

export default getItems
