import { useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile.jsx';
import Header from './components/Header.jsx';

export default function App () {

    const [profileOpen, setProfileOpen] = useState(false);

    return(
        <>
        <Profile
            profileOpen={profileOpen}
            setProfileOpen={setProfileOpen}
            ></Profile>
        <div className='main-content'>
            <Header
            profileOpen={profileOpen}
            setProfileOpen={setProfileOpen}
            ></Header>
        </div>
        </>
    )

}