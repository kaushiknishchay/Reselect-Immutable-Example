import axios from "axios/index";

const apiKey = "fcad1af9a4064741b94070a34565fe19";
const newsUrl = "https://newsapi.org/v2/top-headlines?apiKey=" + apiKey + "&sources=";
const sourcesUrl = "https://newsapi.org/v2/sources?apiKey=" + apiKey;


export const getNewsFromSource = (selectedSource) => {
    return axios.get(newsUrl + selectedSource)
};


export const getSources = () => {
    return axios.get(sourcesUrl);
};
