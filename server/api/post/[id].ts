import { useFetch } from "nuxt/app"

export default defineEventHandler(async (event) => {
    const id = parseInt(event.context.params.id) as number
    const repo = await useFetch('https://jsonplaceholder.typicode.com/posts/' + id)
    return repo
})