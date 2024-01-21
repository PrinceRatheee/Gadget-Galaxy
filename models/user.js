import { Schema } from 'mongoose';
import { models, model } from 'mongoose';


const SingleOrderHistorySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    

})
const HistorySchema=new Schema({
    orders:[SingleOrderHistorySchema],
    totalQuantity:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    noOfProducts:{
        type:Number,
        required:true
    }
    

})
const AddressLocationSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    Pincode:{
        type:String,
        required:true
    },
    Locality:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
})

const userSchema=new Schema({
    email:{
        type:String,
        unique:[true,'Email already exist'],
        required:[true,'Email is Required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
      },
    password:{
        type:String,
        required:[true,'Password is required'],
    },
  
    isAdmin: {
        type: Boolean,
        default: false,
    },
    
    historyOrders:[HistorySchema],
    address:[AddressLocationSchema]
});

const User = models.User || model('User', userSchema);

export default User;