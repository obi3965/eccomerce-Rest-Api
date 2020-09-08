import Axios from '../helpers/axios'

export const getAllCategories = () =>{
    return async dispatch =>{
        const res = await Axios.get('category/getCategory')
        console.log(res)
    }
}