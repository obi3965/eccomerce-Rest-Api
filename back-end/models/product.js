const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity:{
      type:String,
      required:true
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    offer: {
      type: Number,
      required: true,
    },
    productPictures: [
      {
        img: {
          type: String,
          required: true,
        },
      },
    ],
    review: [
      {
        userId: {
           type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        
        review:String
      },
    ],
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    updatedAt:Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
