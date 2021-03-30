import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Style from './Register.module.css'
import axiosObj from '../axiosCredentials';

function Register() {
    const [userInfo, setUserInfo] = useState({
        username : "",
        Firstname: "",
        email:"",
        gender:"",
        password:"",
        confirmPassword:""
    })
    const [warning, setWarning] = useState({
        warning1 : true
    })

    let warningPassword = userInfo.password == '' || userInfo.password != userInfo.confirmPassword;

    const onChangeUsername = (e) =>{
        setUserInfo({...userInfo, username: e.target.value})
    }
    const onChangeFirstname = (e) =>{
        setUserInfo({...userInfo, Firstname: e.target.value})
    }
    const onChangeGender = (e) =>{
        setUserInfo({...userInfo, gender: e.target.value})
    }
    const onChangeEmail = (e) =>{
        setUserInfo({...userInfo, email: e.target.value})
    }
    const onChangePassword = (e) =>{
        setUserInfo({...userInfo, password: e.target.value})
    }
    const onChangeConfirmPassword = (e) =>{
        setUserInfo({...userInfo, confirmPassword: e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        // if (userInfo.password != userInfo.confirmPassword){
        //     setWarning({...warning, warning1 : true})
        // }
        // if (userInfo.name === "" || userInfo.lastname === "" ||
        //     userInfo.email === "" || userInfo.password === "" ||
        //     userInfo.confirmPassword === ""){
        //         setWarning({...warning, warning2 : true})
        // }
        const SendUserInfo = {
            username : userInfo.username,
            Firstname : userInfo.Firstname,
            email : userInfo.email,
            gender: userInfo.gender,
            password : userInfo.password,
        }
        console.log(SendUserInfo);
        // axiosObj.API.post('http://localhost:3030/api/user/register', SendUserInfo)
        // .then(res =>{
        //     console.log(res.data);
        // })
        // .catch(err =>{
        //     console.log(err);
        // });  

        try {
            const response = await axiosObj.API.post('api/user/register', SendUserInfo);
            console.log(response.data); 
            window.location.href='/login';
        } catch(err) {
            console.log('Error is ->');
            console.error(err);
            console.error(err.response);
            alert(err.response.data);
        }

    }

    useEffect(() =>{
        console.log('run useEffect')
        // if ( userInfo.password == userInfo.confirmPassword){
        //     setWarning({...warning, warning1 : false})
        //     console.log('ok')
            
        // }else{
        //     console.log('gg')
        //     setWarning({...warning, warning1 : true})
        // }
        if (userInfo.name === "" || userInfo.lastname === "" ||
                userInfo.email === "" || userInfo.password === "" ||
                userInfo.confirmPassword === ""){

            setWarning({...warning, warning2 : true})
        }else{
            setWarning({...warning, warning2 : false})
        }
    },[userInfo])
    return (
        <div>
            <div>
                <form >
                    <label>Username : </label>
                    <input type="text" 
                        placeholder="กรุณาใส่ชื่อที่ใช้ในระบบ"
                        value={userInfo.username}
                        onChange={onChangeUsername}
                    />
                    <br/>
                    <label>Firstname : </label>
                    <input type="text" 
                        placeholder="กรุณาใส่ชื่อ"
                        value={userInfo.Firstname}
                        onChange={onChangeFirstname}
                    />
                    <br/>
                    <label>Email : </label>
                    <input type="email" 
                        placeholder="กรุณาใส่อีเมล"
                        value={userInfo.email}
                        onChange={onChangeEmail}
                    />
                    <br/>
                    <label>Gender : </label>
                    <input type="text" 
                        placeholder="กรุณาใส่เพศ"
                        value={userInfo.gender}
                        onChange={onChangeGender}
                    />
                    <br/>
                    <label>Password : </label>
                    <input type="password" 
                        placeholder="กรุณาใส่รหัสผ่าน"
                        value={userInfo.password}
                        onChange={onChangePassword}
                    />
                    <br/>
                    <label>ConfirmPassword : </label>
                    <input type="password" 
                        placeholder="กรุณาใส่รหัสผ่านอีกครั้ง"
                        value={userInfo.confirmPassword}
                        onChange={onChangeConfirmPassword}
                    />
                    <br/>
                </form>
                <button onClick={onSubmit} disabled={warningPassword}>Submit</button>
                {warningPassword     ? <p>"รหัสผ่านไม่ตรงกัน"</p> : ""}
                {warning.warning2 ? <p>"ห้ามเว้นว่างแม้แต่ช่องเดียว"</p> : ""}
            </div>
        </div>
    )
}

export default Register
