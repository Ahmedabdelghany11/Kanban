import axios from "axios";

export async function fetchBroads() {
    try {
        const req = await axios.get(`http://localhost:4000/boards`);

        return req.data;
    } catch (err) {
        throw new Error(`Error fetching boards: ${err.message}`);
    }
}

export async function fetchBroadByID(id) {
    try {
        const req = await axios.get(`http://localhost:4000/boards/${id}`);

        return req.data;
    } catch (err) {
        throw new Error(`Error fetching boards: ${err.message}`);
    }
}