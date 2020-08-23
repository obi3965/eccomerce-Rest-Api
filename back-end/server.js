const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv');
//const cors = require('cors')
//const { notFound, logErrors} = require('./helpers/error-handler')



const authRouter = require('./routes/auth')
const adminRouter = require('./routes/admin/auth')
const categoryRouter = require('./routes/category')
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')

const app = express();


//to work with our assets files which is static files
app.use(express.static(path.join(__dirname,'public')))
    

app.use(express.json());
app.use(bodyParser.urlencoded({ limit:'10mb', extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))  
//app.use(cors())


dotenv.config({ path:'./config.env' })
mongoose.connect(process.env.DB,{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,
useFindAndModify:false
}, ()=>{
 console.log('db connected')
})






 app.use('/api', authRouter)
 app.use('/api', adminRouter)
 app.use('/api', categoryRouter)
 app.use('/api', productRouter)
 app.use('/api', cartRouter)


//ERROR HANDLER MIDDLEWARE
//app.use(notFound)
//app.use(logErrors)


    
   

const PORT = process.env.PORT || 3015
app.listen(PORT, function(){
      console.log('app is running on:' , + PORT)
})

