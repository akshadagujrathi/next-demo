import React from 'react';
import styles from '../page.module.css';
const Features = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className='col-12 col-md-5 col-lg-6'>
                
                </div>
                <div className='col-12 col-md-7 col-lg-6'>
                    <div className="col-12">
                    <h6 className={styles['pink-text']}>TRAVEL POINT</h6>
                    <h2 className={styles['h2']}>We helping you find your dream location</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos natus repudiandae fugit impedit modi necessitatibus minima rem ut. Officiis et accusantium totam cumque fugiat.</p>
                    
                    <div className='row d-flex'>
                        <div className='col-6'>
                            <div  className={`my-3 ${styles['block']}`}>
                                <h4 className={styles['count']}>500+</h4>
                                <p className='text-center'>Holiday Package</p>
                            </div>
                            <div className={`my-3 ${styles['block']}`}>
                                <h4 className={styles['count']}>7</h4>
                                <p className='text-center'>Premium Airlines</p>
                            </div>
                        </div>
                        <div className='col-6'>
                        <div className={`my-3 ${styles['block']}`}>
                                <h4 className={styles['count']}>100</h4>
                                <p className='text-center'>Luxary Hotel</p>
                            </div>
                            <div className={`my-3 ${styles['block']}`}>
                                <h4 className={styles['count']}>2k+</h4>
                                <p className='text-center'>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Features;
