const express = require("express")
const cors = require('cors')
const connectDB = require("./db/mongoose")
const users = require("./routes/users");
const items = require('./routes/items')
const app = express()
connectDB();
//???
app.use(express.json());
app.use(cors())
app.use("/users", users);
app.use("/items", items)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));