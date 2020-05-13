import React,{useState} from 'react';
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainBook() {
    const [getMassage, setMassage] = useState('');
    const[getReplay, setReplay] = useState('');
    return (
        <div className="MainBook">
            <div className="msgWrapper">
                <div className="FormView">
                    <form>
                        <div className="formGroup">
                            <label>
                                Leave Me A Massage
                            </label>
                            <textarea type="textarea" name="" value={getMassage} onChange={e =>setMassage(e.currentTarget.value)} isRequird></textarea>
                        </div>
                        <div className="formGroup">                    
                            <button type="submit">Submit Your Massage</button>
                        </div>
                    </form>
                </div>
                <div className="guestWrapper">
                    <div className="msgItem">
                        <div className="msgBody">
                            <span style={spanStyle}>UserName</span>
                            <p>Lorem Ipsum</p>
                            <div className="msgButtons">
                                <FontAwesomeIcon className="fa" icon={faEdit} />
                                <FontAwesomeIcon className="fa trash" icon={faTrash} />
                            </div>
                        </div>
                        <div className="replies">
                            <h3>Replay</h3>
                            <div className="msgBody">
                                <span style={spanStyle}>UserName</span>
                                <p>Lorem Ipsum</p>
                                <div className="msgButtons">
                                    <FontAwesomeIcon className="fa" icon={faEdit} />
                                    <FontAwesomeIcon className="fa trash" icon={faTrash} />
                                </div>
                            </div>
                            <form>
                            <div className="formGroup">
                                <label>
                                    Leave A Replay
                                </label>
                                <textarea type="textarea" name="" value={getReplay} onChange={e =>setReplay(e.currentTarget.value)} isRequird></textarea>
                            </div>
                            <div className="formGroup">                    
                                <button type="submit">Submit Your Replay</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
const spanStyle={
    fontSize:'15px',
    fontWeight:'bold'
        
}