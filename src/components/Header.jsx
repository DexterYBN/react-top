import React from 'react';
import img from './foto/Group.png'
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={img} alt="dollar" />
            </div>
           <div className='men'>
            <ul  className='menu'>
                <li>Главная</li>
                <li>О нас</li>
                <li><>Контакты</></li>
                </ul>
           </div>
        </div>
    );
};

export default Header;