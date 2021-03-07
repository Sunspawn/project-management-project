const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

const appRelativePath = '../client/dist/client/';

app.get('*.*', express.static(appRelativePath));

app.get('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: appRelativePath});
});

app.listen(port, () => {
    console.log(`Server is up and running at: http://127.0.0.1:${port}`)
});