const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
  {
    name: String,
    details: String,
    quantity: Number,
    price: Number,
    image: String,
    listImgExtra: [],
    category: String,
    producer: String,
    idProduct: String,
    listIdRating: [{ type: Schema.Types.ObjectId }],
    url: String,
  },
  { collection: "product" }
);

module.exports = mongoose.model("Product", ProductSchema);
