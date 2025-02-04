import yfinance as yf

STOCKS = ["META", "SPOT", "AMZN", "ANET", "DIS"]


def fetch_stock_data():
    stock_data = {}
    for stock in STOCKS:
        ticker = yf.Ticker(stock)
        stock_info = ticker.history(period="1d").iloc[-1]  # Get latest price
        stock_data[stock] = {
            "price": round(stock_info["Close"], 2),
            "change": round(stock_info["Close"] - stock_info["Open"], 2),
        }
    return stock_data
