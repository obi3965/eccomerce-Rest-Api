import Axios from '../helpers/axios'
import { categoryConstants } from './constants'

export const getAllCategories = () =>{
    return async dispatch =>{
        dispatch({
            type: categoryConstants.GET_ALL_CATEGORIES_REQUEST,
            
        })
        const res = await Axios.get('category/getCategory')
        console.log(res)
        if(res.status === 200){
            const { categoryList } = res.data
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: {categories: categoryList}
            })
        }else{
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: {error: res.data.error}
            })
        }
    }
}

export const addCategory = (form) =>{
    return async dispatch =>{
        const res = await Axios.post('/create/category', form)
        console.log(res)
    }
    
}