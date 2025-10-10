import axios from "axios";
import type { Note } from "../types/note";

const myToken = import.meta.env.VITE_NOTEHUB_TOKEN;

interface ResponseData {
    notes: Note[],
    totalPages: number
};

const options = {
  headers: {
    Authorization: `Bearer ${myToken}`,
    accept: 'application/json',
  }
};

export const fetchNotes = async(): Promise<ResponseData> => { 
    const response = await axios.get<ResponseData>('https://notehub-public.goit.study/api/notes', options);
    return response.data;
};