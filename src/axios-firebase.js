import axios from 'axios';

const instance = axios.create({
    baseURL:'https://todolist-react-5af9c-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;