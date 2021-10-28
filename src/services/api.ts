import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://quote-garden.herokuapp.com/api/v3/quotes'
})
