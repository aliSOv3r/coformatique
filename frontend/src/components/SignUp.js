import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
    const history = useHistory();
    const [getName, setName] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    const [getCPassword, setCPassword] = useState('');

    //submit function
    function onSubmit(e){
        e.preventDefault();
        if (getCPassword === getPassword) {
            let regDAta = {
                fullname : getName,
                email : getEmail,
                password : getPassword,
                hasMsg : false 
            };
            axios({
                url: '/auth/check',
                method : 'POST',
                data : regDAta
            })
            .then((res) => {

                if (res['data'] === true){
                    console.log(res);
                    setName('');
                    setEmail('');
                    setPassword('');
                    setCPassword('');
                    history.push('/');
                } else {

                    alert('Email already in use')
                } 
            })
            .catch(() =>{
                console.log('data lost');
            });
        } else {
            alert('check password')
        }
    }
    
    return (
        <React.Fragment>
            <div className="RegCom">
                <div className="FormView">
                <h1>Join my beloved guests</h1>
                <form onSubmit={onSubmit}>
                    <div className="formGroup">
                        <label>
                        Full Name
                        </label>
                        <input type="text" className="inputF" name="" value={getName} onChange={e =>setName(e.currentTarget.value)}/>
                    </div>
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
                        <label>
                        Confirm Password
                        </label>
                        <input type="password" className="inputF" name="" value={getCPassword} onChange={e =>setCPassword(e.currentTarget.value)}/>   
                    </div>
                    <div className="formGroup">                    
                        <button type="submit">Sign In</button>
                    </div>
                </form>
                </div>
            </div>
        </React.Fragment>    
    )
}
