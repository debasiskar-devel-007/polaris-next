import React from 'react'
import styles from './businessconsulyants.module.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'

export default function Index() {
  return (
    <>
     <Navbar />
     <div className={styles.demo_1img}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/business_banner_img.webp'/>
     </div>
     <div className={styles.demo_img}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/business_blk1_img.webp'/>
     </div>
     <div className={styles.demo_img}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/business_blk2_img.webp'/>
     </div>
     <div className={styles.demo_img}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/business_blk3_img.webp'/>
     </div>
     <div className={styles.demo_img}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/business_blk4_img.webp'/>
     </div>
    <Footer />
    </>
   
  )
}
