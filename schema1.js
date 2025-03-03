const mongoose  = require('mongoose');
const restaurantSchema = new mongoose.Schema({ 
    name : {
        type : String,
        required : true
    },

    city :{
        type : String,
        required : true 
    },

    Items_array : [{
        type : String,
        required :true
    }]

    });


const Item = mongoose.model('Item',restaurantSchema);
module.exports = Item;