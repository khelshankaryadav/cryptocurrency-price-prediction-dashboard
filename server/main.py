from fastapi import FastAPI
from prophet import Prophet
import datetime
import pandas as pd
from prophet.plot import plot_plotly, plot_components_plotly
import json
import pymongo
import sqlite3
from fastapi.middleware.cors import CORSMiddleware
from prophet.serialize import model_from_json
from Models.feedback import FeedBack

app = FastAPI()
client = pymongo.MongoClient()
db = client.CRUD
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/bitcoin")
def bitcoin_pred():
    with open('../ML/models/Bitcoin.json', 'r') as fin:
        m = model_from_json(json.load(fin))

        future = pd.Series(
            pd.date_range(str(datetime.datetime.today()), freq="D", periods=3),
            name="ds"
        ).dt.strftime('%Y-%m-%d').to_frame()
        # return future
        # future.tail()
        forecast = m.predict(future)
        return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict()


@app.get("/ethereum")
def ethereum_pred():
    with open('../ML/models/Ethereum.json', 'r') as fin:
        m = model_from_json(json.load(fin))

        future = pd.Series(
            pd.date_range(str(datetime.datetime.today()), freq="D", periods=3),
            name="ds"
        ).dt.strftime('%Y-%m-%d').to_frame()
        # return future
        # future.tail()
        forecast = m.predict(future)
        return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict()


@app.get("/binance-usd")
def binance_pred():
    with open('../ML/models/Binance.json', 'r') as fin:
        m = model_from_json(json.load(fin))

        future = pd.Series(
            pd.date_range(str(datetime.datetime.today()), freq="D", periods=3),
            name="ds"
        ).dt.strftime('%Y-%m-%d').to_frame()
        # return future
        # future.tail()
        forecast = m.predict(future)
        return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict()


@app.get("/cardano")
def cardano_pred():
    with open('../ML/models/Cardano.json', 'r') as fin:
        m = model_from_json(json.load(fin))

        future = pd.Series(
            pd.date_range(str(datetime.datetime.today()), freq="D", periods=3),
            name="ds"
        ).dt.strftime('%Y-%m-%d').to_frame()
        # return future
        # future.tail()
        forecast = m.predict(future)
        return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict()


@app.get("/polkadot")
def polkadot_pred():
    with open('../ML/models/Polkadot.json', 'r') as fin:
        m = model_from_json(json.load(fin))

        future = pd.Series(
            pd.date_range(str(datetime.datetime.today()), freq="D", periods=3),
            name="ds"
        ).dt.strftime('%Y-%m-%d').to_frame()
        # return future
        # future.tail()
        forecast = m.predict(future)
        return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict()


@app.get("/litecoin")
def litecoin_pred():
    with open('../ML/models/Litecoin.json', 'r') as fin:
        m = model_from_json(json.load(fin))

        future = pd.Series(
            pd.date_range(str(datetime.datetime.today()), freq="D", periods=3),
            name="ds"
        ).dt.strftime('%Y-%m-%d').to_frame()
        # return future
        # future.tail()
        forecast = m.predict(future)
        return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict()


@app.get("/solana")
def solana_pred():
    with open('../ML/models/Solana.json', 'r') as fin:
        m = model_from_json(json.load(fin))

        future = pd.Series(
            pd.date_range(str(datetime.datetime.today()), freq="D", periods=3),
            name="ds"
        ).dt.strftime('%Y-%m-%d').to_frame()
        # return future
        # future.tail()
        forecast = m.predict(future)
        return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict()


@app.get("/terra")
def terra_pred():
    with open('../ML/models/Terra.json', 'r') as fin:
        m = model_from_json(json.load(fin))

        future = pd.Series(
            pd.date_range(str(datetime.datetime.today()), freq="D", periods=3),
            name="ds"
        ).dt.strftime('%Y-%m-%d').to_frame()
        # return future
        # future.tail()
        forecast = m.predict(future)
        return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict()


@app.get("/tether")
def tether_pred():
    with open('../ML/models/Tether.json', 'r') as fin:
        m = model_from_json(json.load(fin))

        future = pd.Series(
            pd.date_range(str(datetime.datetime.today()), freq="D", periods=3),
            name="ds"
        ).dt.strftime('%Y-%m-%d').to_frame()
        # return future
        # future.tail()
        forecast = m.predict(future)
        return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict()


@app.get("/xrp")
def xrp_pred():
    with open('../ML/models/Xrp.json', 'r') as fin:
        m = model_from_json(json.load(fin))

        future = pd.Series(
            pd.date_range(str(datetime.datetime.today()), freq="D", periods=3),
            name="ds"
        ).dt.strftime('%Y-%m-%d').to_frame()
        # return future
        # future.tail()
        forecast = m.predict(future)
        return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict()


@app.post('/feedback')
def feedback(feedback: FeedBack):
    print(feedback)
    connection = sqlite3.connect('feedback.db')
    cursor = connection.cursor()

    createTable = '''
    CREATE TABLE IF NOT EXISTS `feedback` (
        'id' integer auto_increment primary key,
        'name' VARCHAR(255) NOT NULL,
        'email' VARCHAR(255) NOT NULL,
        'message' VARCHAR(255) NOT NULL,
        'contact' VARCHAR(255) NOT NULL,
        'currency' VARCHAR(255) NOT NULL
        )
    '''
    cursor.execute(createTable)

    q = "INSERT INTO feedback(name, email, message, contact, currency) VALUES ('{}', '{}', '{}', '{}', '{}')".format(
        feedback.name, feedback.email, feedback.message, feedback.contact, feedback.currency)
    cursor.execute(q)

    connection.commit()
    connection.close()
    return {"message": "success"}
