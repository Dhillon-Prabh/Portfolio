import React from 'react';
import Image from 'react-bootstrap/Image'
import TypeAnim from './TypeAnim';

const Banner = () => {
    return (
        <div className="banner">
            <Image
                className="me-picture"
                src={require("../../img/Me.jpg")}
                roundedCircle
            />
            <TypeAnim />
        </div>
    );
}

export default Banner;