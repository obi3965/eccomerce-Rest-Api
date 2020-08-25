const Cart = require('../models/cart')


exports.addItemToCart = async (req,res)=>{
   
try {
    const cart = await Cart.findOne({user:req.user._id})
    
    if(cart){
        //CHECK IF CART ALREADY EXIST, THEN UPDATE THE CART WITH QUANTITY
          const product = req.body.cartItems.product
          const item = cart.cartItems.find(c => c.product == product )
        if(item){
            
           
            const cartsUpdate1 = await Cart.findOneAndUpdate({user:req.user._id, "cartItems.product":product },{
                "$set":{
                    "cartItems.$":{ 
                        ...req.body.cartItems,
                        quantity: item.quantity + req.body.cartItems.quantity
                    }
                }
            })
            return res.status(201).json({
                cart:cartsUpdate1
            })
        }else{
            const cartsUpdate1 = await Cart.findOneAndUpdate({user:req.user._id},{
                "$push":{
                    "cartItems":req.body.cartItems
                }
            })
            return res.status(201).json({
                cart:cartsUpdate1
            })
        }
      
    }else{
        
          const createCart = new Cart({
            user: req.user._id,
            cartItems:[req.body.cartItems ]
        })
        const cart = await createCart.save()
       return res.status(201).json({
            cart:cart
        })  
        
        
    }
      
      
       
} catch (error) {
    res.status(401).json({
       
    })
}
     
}