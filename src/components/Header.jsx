import { useState, useEffect} from 'react';
import '../App.css'; 
import '../styles/Header.css';

export default function Header ({profileOpen, setProfileOpen}) {

    return(
        <div className='profile-header'>
            <div className='pfp' onClick={(() => setProfileOpen(!profileOpen))}></div>
            <div className='badges'></div>
        </div>
    )
}