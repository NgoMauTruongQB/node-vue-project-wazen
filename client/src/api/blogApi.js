import instance from "./axios"
import axios from 'axios'

const nameModel = '/blog'

const blogApi = {
    uploadImage: async (data) => {
        return await instance.post('/blog/upload-images', data)
    },
    addBlogPost: async (data) => {
        return await instance.post(nameModel + '/post-blog', data)
    },
}

export default blogApi