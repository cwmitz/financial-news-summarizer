import requests
from config import NEWS_API_KEY, NEWS_API_URL


def fetch_stock_news(ticker: str):
    response = requests.get(NEWS_API_URL.format(query=ticker, api_key=NEWS_API_KEY))
    if response.status_code == 200:
        articles = response.json().get("articles", [])[:5]  # Limit to 5 news items
        return [{"title": a["title"], "url": a["url"]} for a in articles]
    return {"error": "Failed to fetch news"}
