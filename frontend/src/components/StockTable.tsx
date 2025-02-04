import { useEffect, useState } from "react"
import { fetchStockData } from "../services/api"
import { Stock } from "../types/stock"
import StockRow from "./StockRow"

const StockTable = () => {
  const [stocks, setStocks] = useState<Stock[]>([])

  const loadStockData = async () => {
    try {
      const data = await fetchStockData()
      setStocks(Object.keys(data).map((key) => ({ ticker: key, ...data[key] })))
    } catch (error) {
      console.error("Error fetching stock data:", error)
    }
  }

  useEffect(() => {
    loadStockData()
  }, [])

  return (
    <div className="p-6">
      <button
        onClick={loadStockData}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Refresh Stocks
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Ticker</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Change</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <StockRow key={stock.ticker} stock={stock} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StockTable
