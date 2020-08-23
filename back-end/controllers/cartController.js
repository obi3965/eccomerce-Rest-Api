const Cart = require('../models/cart')


exports.addItemToCart = async (req,res)=>{
   

try {
    const cart = await Cart.findOne({user:req.user._id})
   
if(cart){
    const Item= cart.cartItems.findIndex(c => c.product == product )
    const product = req.body.cartItems.product
    if(Item){
        const updateItems =  await Cart.findOneAndUpdate({"user":req.user._id, "cartItems.product":product},{
            "$set":{
                "cartItems.$":{ 
                    ...req.body.cartItems,
                    quantity: Item.quantity + req.body.cartItems.quantity
                }
                }
                })
                if(updateItems){
                    return res.status(201).json({
                        message:"items added to the cart",
                        cart:updateItems,
                        
                    })
                }
    }else {
        const updateItems =  await Cart.findOneAndUpdate({user:req.user._id},{
            "$push":{
                "cartItems": req.body.cartItems
                }
                })
                if(updateItems){
                    return res.status(201).json({
                        message:"items added to the cart",
                        cart:updateItems
                    })
                }
    }

}else{
const createCart = new Cart({
    user: req.user._id,
    cartItems:[req.body.cartItems] 
})
const cartSaved = await createCart.save()

 return res.status(201).json({
    message:'cart added',
    cartSaved
})
}

} catch (error) {
    res.status(400).json({
        status:'cart not created',
        error
    })
}
     
}