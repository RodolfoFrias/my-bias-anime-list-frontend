import axios from "axios";
import envConfig from "./EnvConfig";
import type { AnimeReview } from '@/models/AnimeReview';

export default function saveAnimmeReview(animeReview: AnimeReview): Promise<void> {
    return axios.post(envConfig.API_URL, animeReview);
}