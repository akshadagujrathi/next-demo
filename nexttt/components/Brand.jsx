import React from 'react';
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import Image from 'next/image';

const Brand = () => {
    
    return (
        <div className='container-fluid'>
            <div className="row d-flex justify-content-center">
                <div className='col-6 col-md-2'>
                    <Image src={logo1} className="img-fluid" />
                </div>
                <div className='col-6 col-md-2'>
                <Image src={logo2} className="img-fluid" />
                </div>
                <div className='col-6 col-md-2'>
                <Image src={logo3} className="img-fluid" />
                </div>
                <div className='col-6 col-md-2'>
                <Image src={logo4} className="img-fluid" />
                </div>
                <div className='col-6 col-md-2'>
                <Image src={logo5} className="img-fluid" />
                </div>
            </div>
            
        </div>
    );
}

export default Brand;
