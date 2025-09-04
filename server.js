const express = require('express');
const app = express();
const port = 5000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get("/about", (req, res) => {
    res.json({ message: "This is the about page." });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});