const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(5000, () => console.log("listening on 5000"))