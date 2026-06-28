import { useState, useEffect} from 'react';
import bar from '../assets/XPBar.png';
import crystalFrame from '../assets/crystal-frame.png'
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
                    <img
                    src={crystalFrame}
                    alt='Crystal frame'
                    className='frame'
                    />
                    <p className='username'>Username</p>
                </div>
                <div className='xp-bar-lvl'>
                    <div className='xp-bar'>
                        <div
                        className='xp-fill'
                        style={{ 
                        width: `${xp}%`}}
                        ></div>
                        <img 
                        src={bar}
                        alt='XP bar'
                        className='bar-img'
                        />
                    </div>
                    <p className='lvl'>{level} lvl</p>
                </div>
                <button onClick={() => gainXP()}>Gain xp</button>
                <p>{xp}</p>
                <div className='attributes'>
                    <p className='attr-label'>Attributes</p>
                    <div className='attr-ul'>
                      <div className='attr-names'>
                        <ul className='attr-name'>
                            <li>📜Knowledge</li>
                            <li>⚒Craftsmanship</li>
                            <li>💰Stewardship</li>
                            <li>❤Vitality</li>
                        </ul>
                      </div>
                        <ul className='attr-lvls'>
                            <li>knowLvl</li>
                            <li>craftLvl</li>
                            <li>stewardLvl</li>
                            <li>vitalLvl</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className={`backdrop ${profileOpen ? 'show' : ''}`} onClick={() => setProfileOpen(false)}/>

        </div>
    );
}