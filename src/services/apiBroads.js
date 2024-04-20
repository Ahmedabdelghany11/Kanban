import axios from "axios";

const origin = window.location.origin;

export async function fetchBroads() {
    try {
        const req = await axios.get(`${origin}/boards`);

        return req.data;
    } catch (err) {
        throw new Error(`Error fetching boards: ${err.message}`);
    }
}

export async function fetchBroadByID(id) {
    try {
        const req = await axios.get(`${origin}/boards/${id}`);

        return req.data;
    } catch (err) {
        throw new Error(`Error fetching boards: ${err.message}`);
    }
}