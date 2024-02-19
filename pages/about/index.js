import React from 'react'
import styles from "./about.module.css";
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <>
     <Navbar/>
    <div className={styles.polaris_about_full_width}>
   
      <div className={styles.about_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/about_page/polaris_about_us_bnr_img.webp"/>
      </div>
      <div className={styles.about_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/about_page/Polaris_about_us_block1_img.webp"/>
      </div>
      <div className={styles.about_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/about_page/polaris_block2_img.webp"/>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}
