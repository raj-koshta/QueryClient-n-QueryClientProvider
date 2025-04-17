import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

// To fetching the data // old way
export const fetchPosts = () => {
    return api.get("/posts")
}

// RQ way
export const fetchPostsRQ = async () => {
    try {
        const res = await api.get("/posts")
        return res.status === 200 ? res.data : []
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchPostDeatil = async (id)=>{
    try {
        const res = await api.get(`/posts/${id}`)
        return res.status === 200 ? res.data : [];
    } catch (error) {
        console.log(error.message);
    }
}