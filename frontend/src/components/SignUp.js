import React,{useState} from 'react';

export default function SignUp() {
    const [getName, setName] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    const [getCPassword, setCPassword] = useState('');
    return (
        <React.Fragment>
            <div className="RegCom">
                <div className="FormView">
                <h1>Join my beloved guests</h1>
                <form>
                    <div className="formGroup">
                        <label>
                        Full Name
                        </label>
                        <input type="email" className="inputF" name="" value={getName} onChange={e =>setName(e.currentTarget.value)}/>
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
