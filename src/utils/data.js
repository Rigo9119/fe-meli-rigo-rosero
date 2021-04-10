import axios from 'axios';

const baseUrl = 'http://localhost:5050/api/items';

async function getItems(query) {
    try {
        const res = await axios.get(`${baseUrl}/search`, {params: {query}});
        return res.data
    } catch (error) {
        console.log('netwrok error 🌍🔥:>> ', error);
    }
}

async function getItem(itemId) {
    try {
        const res = await axios.get(`${baseUrl}/${itemId}`)
        
        return res.data
    } catch (error) {
        console.log('netwrok error 🌍🔥:>> ', error);
    }
}

export { getItems, getItem };
