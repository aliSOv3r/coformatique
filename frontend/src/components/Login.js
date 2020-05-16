import React,{useState} from 'react';
import { Link ,useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const history =useHistory();
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');

    function onSubmit(e){
        e.preventDefault();
        let loginData = {
            email : getEmail,
            password : getPassword
        };
        axios({
            url: '/auth/login',
            method : 'POST',
            data : loginData
        })
        .then((res) =>{
            if(res['data'] === true){
                alert('welcome');
               history.push('/GuestMAssages');
            } else {
                alert('Email or password is wrong');
            }
        })
    }

    return (
        <div className="LoginWrapper">

            <div className="FormView">
                <h1>Welcome to my Guest Book</h1>
                <h3>Please Login To Leave Me a Massage</h3>
                <form onSubmit={onSubmit}>
                    <div className="formGroup">
                        <label>
                        E-mail Address
                        </label>
                        <input type="email" className="inputF" name="" value={getEmail} onChange={e =>setEmail(e.currentTarget.value)}/>
                    </div>
                    <div className="formGroup">
                        <label>
                        Password
                        </label>
                        <input type="password" className="inputF" name="" value={getPassword} onChange={e =>setPassword(e.currentTarget.value)}/>   
                    </div>
                    <div className="formGroup">                    
                        <button type="submit">Login</button>
                    </div>
                </form>
                <div className="logicalQ" style={{display:'flex'}}>
                    <Link className="logicLink" to="/signup" >don't have an account ?</Link>
                </div>
            </div>
        </div>
    )
}
