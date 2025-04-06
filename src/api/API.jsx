import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

// To fetching the data
export const fetchPosts = ()=>{
    return api.get("/posts")
}