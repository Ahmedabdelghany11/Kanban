import axios from "axios";

const api = axios.create({
  baseURL: "http://0.0.0.0:4000/",
});

export async function fetchBroads() {
    try {
        const req = await api.get(`boards`);

        return req.data;
    } catch (err) {
        throw new Error(`Error fetching boards: ${err.message}`);
    }
}

export async function fetchBroadByID(id) {
    try {
        const req = await api.get(`boards/${id}`);

        return req.data;
    } catch (err) {
        throw new Error(`Error fetching boards: ${err.message}`);
    }
}
