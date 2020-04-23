import axios from 'axios'

//Axios instace to base database URL
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default instance;