import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://weight-lift-journal-dev.herokuapp.com",
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth;