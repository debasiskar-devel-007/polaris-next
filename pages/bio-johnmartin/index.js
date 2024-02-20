import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from './johnD.module.css'
export default function index() {
  return (
    <>
      <Navbar />
      <div className={styles.polaris_JDM_BIO_width}>
   
      <div className={styles.JDM_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/POLARIS_JOHN_D_MARTIN_BIO.webp"/>
      </div>
      <div className={styles.JDM_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/POLARIS_JOHN_D_MARTIN_BLOCK1.webp"/>
      </div>
      <div className={styles.JDM_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_john_d_block2.webp"/>
      </div>
      
      
    </div>
    <Footer />
    </>
  )
}
