import express from 'express';

const app = express();

app.use('/public', express.static('./public'))

app.get('/', (req, res) => {
   res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Welcome to the Local Music Discovery API</h1>')
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`🚀 Server is running on http://localhost:${PORT}`);
})

