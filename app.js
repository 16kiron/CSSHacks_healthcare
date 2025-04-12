import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import geminiCall from "./geminiCall.js";
import multer from "multer";

const app = express();
const  PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload = multer();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','templates/main.html'));
})

app.post('/prompt', upload.none(), (req, res) => {
    const query = req.body.query;
    geminiCall(query).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send('Error processing request');
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});