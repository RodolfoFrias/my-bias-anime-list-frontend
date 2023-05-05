import axios from 'axios';
import { ref } from 'vue';
import type { AxiosResponse } from 'axios';
import type { Anime } from '../models/AnimeModel';

const API_URL: string = import.meta.env.VITE_API_URL ?? ''; 
const API_KEY: string = import.meta.env.VITE_RAPID_API_KEY ?? '';
const API_HOST: string = import.meta.env.VITE_RAPID_API_HOST ?? '';


export default async function getAnimes(): Promise<Anime[]> {
    const animesResponse = ref<Anime[]>([])
    let axiosResponse: AxiosResponse;

    try {
        axiosResponse = await axios.get(API_URL, {
            params: {
                fields: 'id,title,main_picture,synopsis,status',
                limit: '10'
            },
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST
            }
        }) 

        animesResponse.value = axiosResponse.data.animes

    } catch (error) {
        console.error(error)
    }

    return animesResponse.value
}