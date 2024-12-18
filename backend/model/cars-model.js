const {Schema, model}= require("mongoose");

const carSchema = Schema({
    name: {
        type:String , 
        required: true},
  img_url: {
    type:String , 
    required: true},
  price: {
    type:Number , 
    required: true},
  description: {
    type:String , 
    required: true},
  brand: {
    type:String , 
    required: true},
  rating: {
    type:String , 
    required: true},
});


const Cars = model("Car",carSchema);

module.exports = Cars;