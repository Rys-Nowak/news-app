import axios from "axios";
import { SearchResult } from "./searchResult";

export class SearchService {
    private static instance: SearchService;

    private constructor() { };

    public static getInstance(): SearchService {
        if (SearchService.instance == null) {
            SearchService.instance = new SearchService();
        }
        return SearchService.instance;
    }

    public async search(keyword: string, page: number = 1, count: number = 30): Promise<SearchResult[]> {
        return await axios.get(`http://localhost:8080/api/search/${keyword}?page=${page}&count=${count}`)
            .then(res => res.data)
            .catch((error) => {
                alert("Error connecting to api: " + error);
            });
    }
}