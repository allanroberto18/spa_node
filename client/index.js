import path from 'path';
import express from 'express';

const app = express();
const port = 3000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});