import os

from dotenv import load_dotenv

load_dotenv()  # Load environment variables

NEWS_API_KEY = os.getenv("NEWS_API_KEY")
NEWS_API_URL = (
    "https://newsapi.org/v2/everything?q={query}&sortBy=publishedAt&apiKey={api_key}"
)
