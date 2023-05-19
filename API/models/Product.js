const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: {type: String,required: true,unique: true,},
    desc: {type: String,required: true,},
    Img: {type: String,required: true,},
    categories: {type: Array,},
    size:{type:String},
    color:{type:String},
    price:{type:Number,required:true}
  },
  { timestamps: true }

);

const User = mongoose.model('Product', ProductSchema);

module.exports = User;
