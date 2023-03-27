import axios from 'axios'

export const requestFetcher = (url) => axios.get(url).then((res) => res.data)
