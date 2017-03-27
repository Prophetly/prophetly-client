import tornado.ioloop
import tornado.web
from os import listdir, path
import json
import pandas as pd

UPLOAD_DIR = '/Users/pravj-mac/Projects/prophetly-modules/prophetly-react/uploads'

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write(path(__dirname))

class ColumnHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "http://localhost:8080")
        self.set_header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header("Access-Control-Allow-Credentials", "true")

    def get(self, file_param):
        df = pd.read_csv(UPLOAD_DIR + '/' + file_param)
        res = {'columns': [{'value': col.encode('utf-8'), 'label': col.encode('utf-8')} for col in df.columns.tolist()]}

        ans = json.loads(json.dumps(res))
        self.write(ans)

class UploadHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "http://localhost:8080")
        self.set_header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header("Access-Control-Allow-Credentials", "true")

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
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
