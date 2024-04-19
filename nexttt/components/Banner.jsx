import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Rectangle1 from '../images/Rectangle1.png'
import Rectangle2 from '../images/Rectangle2.png'
import Rectangle3 from '../images/Rectangle3.png'
import styles from '../page.module.css';
const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6">
            <button>Explore the World</button>
            <h2 className={styles['h2']}>
              Travel <span>top destination</span> of the world
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo
              est possimus perferendis nulla laboriosam hic incidunt soluta
              deserunt, cumque tempore repudiandae delectus, at facilis.
            </p>
            <div className="button-group">
              <Link href="/">
                <button>Get Started</button>
              </Link>
              <Link href="/">
                <button>Watch Demo</button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center ban_images position-relative">
            <div className="col-6 col-md-5">
              <div className="">
              <Image className='img-fluid my-4'
        src={Rectangle1}
        
        alt="Picture of the author"
      />
                <Image className='img-fluid'
        src={Rectangle2}
        
        alt="Picture of the author"
      />
              </div>
            </div>
            <div className="col-6 col-md-6">
              {/* <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1711580377289-eecd23d00370?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              /> */}
               <Image className='img-fluid mx-4'
        src={Rectangle3}
        
        alt="Picture of the author"
      />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
