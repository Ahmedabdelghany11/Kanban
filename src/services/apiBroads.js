import boardsData from "../server/db.json";

export async function fetchBroads() {
    try {
        return boardsData.boards;
    } catch (err) {
        throw new Error(`Error fetching boards: ${err.message}`);
    }
}

export async function fetchBroadByID(id) {
    try {
        const board = boardsData.boards.find(board => board.id === +id);
        if (!board) {
            throw new Error(`Board with ID ${id} not found`);
        }
        return board;
    } catch (err) {
        throw new Error(`Error fetching board with ID ${id}: ${err.message}`);
    }
}
