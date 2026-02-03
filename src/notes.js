import { insertDB, getDB, saveDB } from "./db.js";


export const newNote = async (note, tags) => {
    const newNote = {
        tags,
        id: Date.now(),
        conetent: note,
    }

    await insertDB(newNote);

    return newNote
}

export const getAllNotes = async () => {
    const { notes } = await getDB();
    
    return notes
}
