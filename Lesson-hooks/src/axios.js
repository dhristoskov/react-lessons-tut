import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-hooks-cceb1.firebaseio.com/'
});

export default instance;