import { insertDB, getDB, saveDB } from "./db.js";


export const newNote = async (note, tags = []) => {
    const newNote = {
        tags,
        id: Date.now(),
        content: note,
    }

    await insertDB(newNote);

    return newNote
}

export const getAllNotes = async () => {
    const { notes } = await getDB();
    
    return notes
}


export const findNotes = async (filter) => {
    let notes = await getAllNotes();

    return notes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
}


export const removeNote = async (id) => {
    let notes = await getAllNotes();

    let not = notes.find(e => e.id === id);

    if(not) {
       let newNotes = notes.filter(el => el.id !== id);
       await saveDB({notes: newNotes});
       return id
    }
    
}


export const removeAllNotes = async () => {
    await saveDB({ notes: [] })
}

