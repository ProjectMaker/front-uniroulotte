import axios from 'axios'

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json'
  }

  return headers
}

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', // eslint-disable-line no-undef
  headers: {'Content-Type': 'application/json'}
})

export const getOptions = () => ({withCredentials: true, headers: getHeaders()})
