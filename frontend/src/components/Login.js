import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    return (
        <div className="LoginWrapper">

            <div className="FormView">
                <h1>Welcome to my Guest Book</h1>
                <h3>Please Login To Leave Me a Massage</h3>
                <form>
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
