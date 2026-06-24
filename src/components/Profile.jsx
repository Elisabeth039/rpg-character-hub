import { useState, useEffect} from 'react';
import logo from '../assets/logo.png';
import '../App.css'; 
import '../styles/Profile.css';

export default function Profile ({profileOpen, setProfileOpen}) {

    const [level, setLevel] = useState(0);

    const [xp, setXp] = useState(0);

    const gainXP = () => {
        const nextXP = xp + 10;

        if (nextXP >= 100) {
            setLevel(prev => prev + 1);
            setXp(nextXP - 100);
        } else {
            setXp(nextXP);
        };
    }

    return(
        <div className='profile'>
        <div className={`opening-pf ${profileOpen ? 'open' : ''}`}>
            <div className='user-info'>
                <div className='pfp-name'>
                    <div className='pfp'></div>
                    <p className='username'>Username</p>
                </div>
                <div className='xp-bar-lvl'>
                    <div className='xp-bar'>
                        <img 
                        src={logo}
                        alt='XP bar'
                        className='bar-img'
                        />
                    </div>
                    <p className='lvl'>{level} lvl</p>
                </div>
                <button onClick={() => gainXP()}>Gain xp</button>
                <p>{xp}</p>
            </div>
        </div>

        <div className={`backdrop ${profileOpen ? 'show' : ''}`} onClick={() => setProfileOpen(false)}/>

        </div>
    );
}