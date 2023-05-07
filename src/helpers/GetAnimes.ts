import axios from 'axios';
import { ref } from 'vue';
import type { AxiosResponse } from 'axios';
import type { Anime } from '../models/AnimeModel';

const API_URL: string = import.meta.env.VITE_API_URL ?? ''; 

export default async function getAnimes(): Promise<Anime[]> {
    const animesResponse = ref<Anime[]>([])
    let axiosResponse: AxiosResponse;

    try {
        axiosResponse = await axios.get(API_URL) 
        animesResponse.value = axiosResponse.data.animes
    } catch (error) {
        console.error(error)
    }

    return animesResponse.value
}