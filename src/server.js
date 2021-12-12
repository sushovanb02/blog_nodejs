const express = require('express');

const app = express();


app.listen(7788, () => {
    console.log('Server started on http://localhost:7788/');
});
