const express = require('express');
const path = require('path');

const booksRouter = require('./routes/books');
const userAccountRouter = require('./routes/userAccount');

const clientBuildDir = path.resolve('./dist/client');
const port = 8080;

const app = express();

app.use(express.static(clientBuildDir));

app.use('/api/books', booksRouter);
app.use('/api/user', userAccountRouter);

app.get('/*', (req, res) => {
    res.sendFile(
        'index.html',
        {
            root: clientBuildDir
        }
    );
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
