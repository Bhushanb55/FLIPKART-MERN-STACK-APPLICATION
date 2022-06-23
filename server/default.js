// This file puts the default data to the server 


import  { products }   from './constants/product.js'
import Product from './model/productSchema.js'

const DefaultData = async () => {
    try{
        await Product.insertMany(products);
        

        console.log('Data imported Successfully')
    }catch(error){
        console.log('Error while connecting with db  ', error.message);
    }
}

export default DefaultData;