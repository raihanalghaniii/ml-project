const express = require('express');
const multer = require('multer');
const upload = multer({ limits: { fileSize: 1 * 1024 * 1024 } }); // 1MB max file size

const app = express();

app.post('/predict', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ status: 'fail', message: 'No image provided' });
  }
  // Implement prediction logic here
  return res.status(200).json({ status: 'success', message: 'Prediction received' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
