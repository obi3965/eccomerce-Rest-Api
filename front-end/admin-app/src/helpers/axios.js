import axios from 'axios'
import { api } from '../urlConfig'

const Axios = axios.create({
    baseURL:api
})

export default Axios;