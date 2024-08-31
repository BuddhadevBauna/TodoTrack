import app from "./app.js";

//Start the server
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});