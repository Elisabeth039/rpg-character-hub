import { useState, useEffect} from 'react';
import '../App.css'; 
import '../styles/Header.css';
import crystalFrame from '../assets/crystal-frame.png'
import leftShelf from '../assets/left-shelf.png'
import rightShelf from '../assets/right-shelf.png'
import middleShelf from '../assets/middle-shelf.png'

export default function Header ({profileOpen, setProfileOpen}) {

    return(
        <div className='profile-header'>
            <div className='pfp'></div>
            <img
            src={crystalFrame}
            alt='Crystal frame'
            className='frame'
            onClick={(() => setProfileOpen(!profileOpen))}
            />
            <div className='badges'>
                <div className='slot'>
                    <div className='badge'></div>
                    <img 
                    src={leftShelf}
                    alt='Middle Shelf'
                    className='shelf'
                    />
                </div>
                <div className='slot'>
                    <div className='badge'></div>
                    <img 
                    src={middleShelf}
                    alt='Middle Shelf'
                    className='shelf'
                    />
                </div>
                <div className='slot'>
                    <div className='badge'></div>
                    <img 
                    src={middleShelf}
                    alt='Middle Shelf'
                    className='shelf'
                    />
                </div>
                <div className='slot'>
                    <div className='badge'></div>
                    <img 
                    src={middleShelf}
                    alt='Middle Shelf'
                    className='shelf'
                    />
                </div>
                <div className='slot'>
                    <div className='badge'></div>
                    <img 
                    src={middleShelf}
                    alt='Middle Shelf'
                    className='shelf'
                    />
                </div>
                <div className='slot'>
                    <div className='badge'></div>
                    <img 
                    src={middleShelf}
                    alt='Middle Shelf'
                    className='shelf'
                    />
                </div>
                <div className='slot'>
                    <div className='badge'></div>
                    <img 
                    src={rightShelf}
                    alt='Middle Shelf'
                    className='shelf'
                    />
                </div>
            </div>
        </div>
    )
}