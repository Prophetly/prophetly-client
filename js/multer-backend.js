module.exports = (app) => {
  const multer = require('multer');
  const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      // Mimetype stores the file type, set extensions according to filetype
      switch (file.mimetype) {
        case 'text/csv':
          ext = '.csv';
          break;
      }

      cb(null, file.originalname);
    }
  });
  const upload = multer({storage: storage});

  app.post('/upload', upload.single('file'), function (req, res, next) {
    if (req.file && req.file.originalname) {
      console.log(`Received file ${req.file.originalname}`);
    }

    res.send({ responseText: req.file.path }); // You can send any response to the user here
  });
}
