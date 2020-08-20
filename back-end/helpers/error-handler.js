

// //NOT FOUND ERROR HANDLER
// exports.notFound = (req,res,next)=>{
//     const error = new Error('404, Page Not Found')
//     error.status = 404
//     next(error)
// }

// exports.catchErrors = fn =>{
//     return async (req,res,next) =>{
//         try {
//             await fn(req,res)
//         } catch (error) {
//             next(error)
//         }
//     }
// }

// //DEFAULT ERROR HANDLER
// exports.logErrors = (error,req,res)=>{
//     res.status(error.status || 500)
//     res.send(error.message)
// }