import React from 'react'
import styles from "./about.module.css";
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

export default function index() {
  return (
    <>

    <div className="polaris_about_full_width">
      <div className={styles.about_page}></div>
      <Navbar/>
      <Footer/>
    </div>
    </>
  )
}
