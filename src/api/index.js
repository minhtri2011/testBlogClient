import axios from 'axios';

const URL='https://test-blog-server.vercel.app'
// process.env.URL

export const fetchPosts =()=>axios.get(`${URL}/posts`)
export const createPost =(payload)=>axios.post(`${URL}/posts`,payload)
export const updatePost =(payload)=>axios.put(`${URL}/posts/update`,payload)