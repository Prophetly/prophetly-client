import tornado.ioloop
import tornado.web
from os import listdir, path, remove
import json
import ast
import time
from random import random

# use notification center to notify about import exceptions
import pandas as pd
import numpy as np
from fbprophet import Prophet
import plotly.plotly as py
import plotly.graph_objs as go
import plotly.tools as tls

m = Prophet()

UPLOAD_DIR = '/Users/pravj-mac/Projects/prophetly-modules/prophetly-react/uploads'

class MainHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "http://localhost:8080")
        self.set_header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header("Access-Control-Allow-Credentials", "true")

    def get(self):
        self.write(path(__dirname))

class DataHandler(MainHandler):
    def get(self):
        print self.get_arguments('ds')
        print self.get_arguments('y')
        print self.get_arguments('file')

        df = pd.read_csv(UPLOAD_DIR + '/' + self.get_arguments('file')[0])
        new_df = pd.DataFrame()
        new_df['ds'] = df[self.get_arguments('ds')[0]]
        new_df['y'] = df[self.get_arguments('y')[0]]
        #df['y'] = np.log(df['y'])

        m.fit(new_df)
        future = m.make_future_dataframe(periods=365)
        forecast = m.predict(future)
        plot_object = m.plot(forecast)
        plotly_fig = tls.mpl_to_plotly(plot_object)
        res = ast.literal_eval(plotly_fig['data'].__str__())

        self.write({'plots': res})

class FileDataHandler(MainHandler):
    def get(self, file_param):
        df = pd.read_csv(UPLOAD_DIR + '/' + file_param)

        cols = df.columns.tolist()
        res = {'columns': cols, 'rows': []}

        for index, row in df.iterrows():
            row_dict = {}
            for col in cols:
                row_dict[col] = row[col]
            res['rows'].append(row_dict)

        self.write(res)

    def post(self, file_param):
        try:
            remove(UPLOAD_DIR + '/' + file_param)
        except OSError:
            raise 'delete error'

        self.write({'status': 'OK'})

class ColumnHandler(MainHandler):
    def get(self, file_param):
        df = pd.read_csv(UPLOAD_DIR + '/' + file_param)
        res = {'columns': [{'value': col.encode('utf-8'), 'label': col.encode('utf-8')} for col in df.columns.tolist()]}

        ans = json.loads(json.dumps(res))
        self.write(ans)

class UploadHandler(MainHandler):
    def post(self):
        try:
            file_info = self.request.files['file'][0]

            with open(UPLOAD_DIR + '/' + file_info.filename, 'w') as req_file:
                req_file.write(file_info.body)

            self.write('some post')
        except Exception as e:
            raise

    def get(self):
        file_list = listdir(UPLOAD_DIR)
        r = json.dumps({'files': file_list})
        r = json.loads(r)
        self.write(r)

    def options(self):
        self.set_status(204)
        self.finish()

def make_app():
    print 'make_app..'
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/upload", UploadHandler),
        (r"/column/(.+)", ColumnHandler),
        (r"/data", DataHandler),
        (r"/filedata/(.+)", FileDataHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
