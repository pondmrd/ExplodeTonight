import React, { useState, useEffect } from 'react'
import axiosObj from '../axiosCredentials';
import Styles from './SecretData.module.css'

function SecretData(props){

    const [data, setData] = useState('');

    useEffect(() =>{
        const config = {
            headers: { 'auth-token': props.tokenValue }
        };
        axiosObj.API.get('http://localhost:3030/api/user/privateData', config)
        .then(res =>{
            console.log(res.data);
            setData(res.data);
        })
        .catch(err =>{
            console.log(err);
            // console.error(err);
            // console.error(err.response);
            //console.error(err.data);
            console.error(err.response.data);
            setData(err.response.data);
        });

    }, []);

    return (
        <div>
            <h4 className={Styles.container}>Our token value is {props.tokenValue}</h4>
            <p className={Styles.container}>{data}</p>
        </div>
    )
}

export default SecretData