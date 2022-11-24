import React from 'react';
import img from "./foto/Group2.png"
const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <img src={img} />
            </div>
            <div className='parthners'>
                <div>Партнерам</div>
                <div>Разработчикам</div>
                <div>Вакансии</div>
            </div>
            <div className='intocode'>
            ООО “интукод”, 2020г.
            </div>
        </div>
    );
};

export default Footer;