
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesWithSearch = async (search, page) => {
    const params = new URLSearchParams({
        page: page,
        per_page: 12,
        client_id: 'LvIdGNzCPpFilw_7q1bmj5sN1bc22UrHhJ1_IQm2l-U',
        query: search,
    })

    const response = await axios.get(`/search/photos?${params}`);
    return {
        results: response.data.results,
        total: response.data.total,
    };
};

