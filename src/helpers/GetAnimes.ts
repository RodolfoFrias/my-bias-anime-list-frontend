import axios from 'axios';
import { ref } from 'vue';
import type { AxiosResponse } from 'axios';
import type { Anime } from '@/models/Anime';
import envConfig  from '@/helpers/EnvConfig';

export default async function getAnimes(): Promise<Anime[]> {
    const animesResponse = ref<Anime[]>([])

    const axiosResponse: AxiosResponse = await axios.get(envConfig.API_URL) 
    animesResponse.value = axiosResponse.data.animes

    return animesResponse.value
}