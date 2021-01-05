import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Style from './Register.module.css'

function Register() {
    const [userInfo, setUserInfo] = useState({
        name : "",
        lastname: "",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [warning, setWarning] = useState({
        warning1 : false,
        warning2 : false
    })

    const onChangeName = (e) =>{
        setUserInfo({...userInfo, name: e.target.value})
    }
    const onChangeLastname = (e) =>{
        setUserInfo({...userInfo, lastname: e.target.value})
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
    const onSubmit = (e) => {
        e.preventDefault()

        // if (userInfo.password != userInfo.confirmPassword){
        //     setWarning({...warning, warning1 : true})
        // }
        // if (userInfo.name === "" || userInfo.lastname === "" ||
        //     userInfo.email === "" || userInfo.password === "" ||
        //     userInfo.confirmPassword === ""){
        //         setWarning({...warning, warning2 : true})
        // }
        if (!warning.warning1 && !warning.warning2){
            const SendUserInfo = {
                name : userInfo.name,
                lastName : userInfo.lastname,
                email : userInfo.email,
                password : userInfo.password,
            }
            // axios.post(...)
        }
    

    }
    useEffect(() =>{
        if (userInfo.password != userInfo.confirmPassword){
            setWarning({...warning, warning1 : true})
        }else{
            setWarning({...warning, warning1 : false})
        }
        if (userInfo.name === "" || userInfo.lastname === "" ||
                userInfo.email === "" || userInfo.password === "" ||
                userInfo.confirmPassword === ""){

            setWarning({...warning, warning2 : true})
        }else{
            setWarning({...warning, warning2 : false})
        }
    },[])
    return (
        <div>
            <div>
                <form >
                    <label>Name : </label>
                    <input type="text" 
                        placeholder="กรุณาใส่ชื่อ"
                        value={userInfo.name}
                        onChange={onChangeName}
                    />
                    <br/>
                    <label>Lastname : </label>
                    <input type="text" 
                        placeholder="กรุณาใส่นามสกุล"
                        value={userInfo.lastname}
                        onChange={onChangeLastname}
                    />
                    <br/>
                    <label>Email : </label>
                    <input type="email" 
                        placeholder="กรุณาใส่อีเมล"
                        value={userInfo.email}
                        onChange={onChangeEmail}
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
                {warning.warning1 ? <p>"รหัสผ่านไม่ตรงกัน"</p>: ""}
                {warning.warning2 ? <p>"ห้ามเว้นว่างแม้แต่ช่องเดียว"</p> : ""}
            </div>
        </div>
    )
}

export default Register
