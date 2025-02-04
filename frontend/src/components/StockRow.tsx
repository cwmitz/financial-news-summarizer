import { useState } from "react"
import { fetchStockNews } from "../services/api"
import { NewsArticle } from "../types/news"
import { Stock } from "../types/stock"
import NewsModal from "./NewsModal"

const StockRow = ({ stock }: { stock: Stock }) => {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const loadStockNews = async () => {
    try {
      const newsData = await fetchStockNews(stock.ticker)
      setNews(newsData)
      setIsModalOpen(true)
    } catch (error) {
      console.error("Error fetching news:", error)
    }
  }

  return (
    <tr className="border">
      <td className="p-2">{stock.ticker}</td>
      <td className="p-2">${stock.price.toFixed(2)}</td>
      <td
        className={`p-2 ${
          stock.change >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {stock.change.toFixed(2)}
      </td>
      <td className="p-2">
        <button
          onClick={loadStockNews}
          className="px-3 py-1 bg-gray-700 text-white rounded"
        >
          Summarize News
        </button>
      </td>
      <NewsModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        news={news}
      />
    </tr>
  )
}

export default StockRow
