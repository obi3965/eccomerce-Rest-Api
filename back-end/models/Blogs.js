const mongoose = require('mongoose');



//TO DESCRIBE OUR BLOGS SCHEMA
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A blog must have a name'],
        trim: true,
    },
    text:{
        type: String,
        required: [true, 'A blog must have a Text'],
        trim: true, 
    },

    imageCover: {
        type: String,
        required: [true, 'A blog must have a cover image']
      },
      images: [String],
      createdAt: {
        type: Date,
        default: Date.now(),
        select: false
      },
      isCompleted:{
        type:Boolean,
        
      },
      startDates: [Date],
      owner:{
         type:mongoose.Schema.Types.ObjectId,
         required:true,
         ref:'User'
      }
        
})

 //IT simply removes the _id and __v in database
 blogSchema.method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  })

 // export model Blogs with blogSchema
 const Blogs = mongoose.model('Blogs', blogSchema);
 module.exports = Blogs