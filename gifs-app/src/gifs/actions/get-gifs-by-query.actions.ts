import axios from 'axios';
import type { GiphyResponse } from '../models/giphy.response';
import type { Gif } from '../models/gif.interface';


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await axios.get<GiphyResponse>(`/search`, {
        params: {
            q: query,
            limit: 10,
        }
    });


    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }))
    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=ZsRqKXWmNoqm7BFoK0jBBgm3lGXIre6P&q=${query}&limit=10&lang=es`)
}

