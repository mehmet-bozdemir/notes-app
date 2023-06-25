import { defineStore } from "pinia";
import {ref} from 'vue';

export interface Note {
    name: string;
    id: string;
    body: string;
    completed: boolean;
}

export const useMainStore = defineStore("mainstore", () => {
    const notes = ref<Note[] | []>([]);
    const selectedNote = ref<Note | null>(null);

    /**
     *
     * @param data
     */
    const updateNote = (data: Note) => {
        notes.value = notes?.value?.map((item: Note) => {
            if (item.id === data.id) {
                return {
                    ...item,
                    name: data.name,
                    body: data.body,
                };
            } else {
                return item;
            }
        });

        //after updating remove selected note
        selectedNote.value = null;
    };

    /**
     *
     * @param id
     */
    const removeNote = (id: String) => {
        notes.value = notes.value.filter(
            (note: Note) => note.id !== id
        );
    };

    /**
     *
     * @param note
     */
    const addNote = (note: { name: string; body: string }) => {
        notes.value = [
            {
                name: note.name,
                id: Math.random() * 100 + "",
                body: note.body,
                completed: false
            },
            ...notes.value,
        ];
    };

    /**
     *
     * @param data
     */
    const toggleNote = (data: Note, id:String) => {
        notes.value = notes?.value?.map((item: Note) => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !data.completed,
                };
            } else {
                return item;
            }
        });
    };

    // export
    return { addNote, removeNote, updateNote, notes, selectedNote, toggleNote}
});
