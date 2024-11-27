import axios from "axios"

export const generateClient = (accessToken: string, appId: string) => {
    const client = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        authorization: `Bearer ${accessToken}`,
        appId
      }
    })
  
    return client
}