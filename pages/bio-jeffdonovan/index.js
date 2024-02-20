import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from './jeffD.module.css'

export default function index() {
  return (
    <>
     <Navbar />
      <div className={styles.polaris_JD_BIO_width}>
   
      <div className={styles.jd_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_jay_bughner_bio_bnnr_img.webp"/>
      </div>
      <div className={styles.jd_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_jay_bughner_bio_block1_img.webp"/>
      </div>
      
      
    </div>
    <Footer />
    </>
  )
}
