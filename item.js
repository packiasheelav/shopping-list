const mongoose=require('mongoose');
const schema=mongoose.Schema;
const itemSchema=new schema({
    name:{
        type:String
    },
    date:{
        type:date,
        default:Date.now()
    }
})