import axios from "axios";
import envConfig from "./EnvConfig";
import type { AnimeReview } from '@/models/AnimeReview';

export default async function saveAnimmeReview(animeReview: AnimeReview): Promise<void> {
    try {
        await axios.post(envConfig.API_URL, animeReview);
    } catch (error) {
        console.error(error)
    }
}