import { Dialog } from "@headlessui/react"
import { NewsArticle } from "../types/news"

const NewsModal = ({
  isOpen,
  closeModal,
  news,
}: {
  isOpen: boolean
  closeModal: () => void
  news: NewsArticle[]
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
    >
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-2">Stock News</h2>
        <ul>
          {news.length > 0 ? (
            news.map((article, index) => (
              <li key={index} className="mb-2">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {article.title}
                </a>
              </li>
            ))
          ) : (
            <p>No news available.</p>
          )}
        </ul>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </Dialog>
  )
}

export default NewsModal
