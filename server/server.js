import app from "./app.js";

//Start the server
const port = 8000 || process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});