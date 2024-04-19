import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mainlogo from '../images/mainlogo.png'
import styles from '../page.module.css';
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
const Footer = () => {
    return (
        <div>
            <footer className="bg-white">
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><Image src={mainlogo} className="img-fluid" />
          <p className="font-itaLinkc text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing eLinkt, sed do eiusmod tempor incididunt.</p>
          <ul className="Linkst-inLinkne mt-4 d-flex gap-3 p-0">
            <Link href="#" className="Linkst-inLinkne-item"><RiFacebookCircleFill className={styles['facebook']}/></Link>
            <Link href="#" className="Linkst-inLinkne-item"><AiFillTwitterCircle className={styles['facebook']}/></Link>
            <Link href="#" className="Linkst-inLinkne-item"><TiSocialInstagram className={styles['instagram']}/></Link>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
          <ul className="Linkst-unstyled mb-0 p-0">
            <Link href="/about" className="mb-2 d-block">About</Link>
            <Link href="#" className="mb-2 d-block">Career</Link>
            <Link href="#" className="mb-2 d-block">Mobile</Link>
            
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul className="Linkst-unstyled mb-0 p-0">
            <Link href="#" className="mb-2 d-block">Why Travlog?</Link>
            <Link href="#" className="mb-2 d-block">Partner with us</Link>
            <Link href="#" className="mb-2 d-block">FAQ's</Link>
            <Link href="#" className="mb-2 d-block">Blogs</Link>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
        <h6 className="text-uppercase font-weight-bold mb-4">Meet Us</h6>
          <ul className="Linkst-unstyled mb-0 p-0">
            <Link href="#" className="mb-2 d-block">Login</Link>
            <Link href="#" className="mb-2 d-block">Register</Link>
            <Link href="#" className="mb-2 d-block">WishLinkst</Link>
            <Link href="#" className="mb-2 d-block">Our Products</Link>
          </ul>
        </div>
      </div>
    </div>
  </footer>
        </div>
    );
}

export default Footer;
