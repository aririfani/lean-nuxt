import { useFetch } from "nuxt/app"

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const repo = await useFetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        Authorization: `token ${config.githubToken}`
      }
    })
  
    return repo
})