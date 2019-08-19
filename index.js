const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 3030;

// TODO: Move to routes folder.
app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname + '/client/views/index.html'));
});

// *Server initialized.
app.listen(port, () => console.log(`Server initialized on port: ${port}.`));