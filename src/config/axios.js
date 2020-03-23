import Axios from 'axios'

const axios=Axios.create({
    baseURL:'http://localhost:3080'
})

export default axios