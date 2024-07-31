const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies

app.use("/api/products", productRoutes); // Route for products

// MongoDB Connection
mongoose
  .connect(
    (MONGO_URI =
      "mongodb+srv://yemsrach2024:eyu&nati123@cluster0.kx8c3hr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
