import axiosObj from '../axiosCredentials';
//import axios from 'axios'

const checkLogin = (usernameInput, pw, setTokenValue, setNowLogin) =>{
    console.log(usernameInput + ' ' + pw);

    axiosObj.API.post('api/user/login', {
        username: usernameInput,
        password: pw
    })
    .then(res =>{
        console.log(res.data);
        setTokenValue(res.data);
        setNowLogin(true);
        // window.location.href='/privateData';
    })
    .catch(err =>{
        console.log(err.response.data);
    });
}

export default {
    checkLogin
};

/*
axios.post('http://localhost:3030/api/user/login', {
        username: usernameInput,
        password: pw
    })
    .then(res =>{
        console.log(res.data);
    })
    .catch(err =>{
        console.log(err);
    });
*/