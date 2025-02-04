import axios from "axios"

const API_BASE_URL = "http://127.0.0.1:8000"

export const fetchStockData = async () => {
  const response = await axios.get(`${API_BASE_URL}/stocks`)
  return response.data
}

export const fetchStockNews = async (ticker: string) => {
  const response = await axios.get(`${API_BASE_URL}/news/${ticker}`)
  return response.data
}
