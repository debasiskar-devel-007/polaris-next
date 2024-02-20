import React from 'react'
import styles from './businessconsulyants.module.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import Head from 'next/head'

export default function Index() {
  return (
    <>
    <Head>
      <title>Polaris Business Consultants</title>
    </Head>

     <Navbar />
     <div className={styles.PBC_banner}>
      <div className={styles.common_width}>
         <div className={styles.PBC_banner_wrpr}>
            <div className={styles.PBC_bannerTop}>
               {/* <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris-business-consultants/docGlobe.png" /> */}
               <h1>Polaris Business Consultants</h1>
            </div>
            <div className={styles.PBC_bannerBottom}>
               <p>Ambulatory Surgical Center Development Course</p>
               <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris-business-consultants/PBC_bannerBottomLogo.png" />
            </div>
         </div>
      </div>
     </div>
     {/* <div className={styles.demo_1img}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/business_banner_img.webp'/>
     </div> */}
      <div className={styles.PBC_block1}>
         <div className={styles.common_width}>
            <div className={styles.PBC_block1_wrpr}>
               <h1>AMBULATORY SURGERY CENTER DEVELOPMENT COURSE</h1>
               <p>Welcome to the exciting world of Ambulatory Surgery Center Development! This comprehensive course is designed to be your guide through the intricacies of establishing and developing Ambulatory Surgery Centers. Whether you’re a healthcare professional, administrator, or entrepreneur looking to develop in the dynamic field of outpatient surgical care, this course is tailored to equip you with the Knowledge, tools, and skills needed for successful Ambulatory Surgical Center Development.</p>
               <p>Over  the duration of this course, we will explore the key components of Ambulatory Surgical Center Development, from regulatory considerations and compliance to operational efficiency and strategic planning. Gain insight into the latest industry trends, best practices, and essential tools that will empower you to navigate the complex landscape of Ambulatory Surgical Center Development with confidence.</p>
               <p>Our goal is to provide you with a comprehensive understanding of the various facets involved in establishing and managing ASCs, enabling you to contribute to the delivery of high-quality, patient-centered care in the outpatient setting. Get ready to embark on a transformative learning journey that will position you at the forefront of Ambulatory Surgical Center Development. Let’s dive in!</p>
               
            </div>
         </div>
      </div>
     {/* <div className={styles.demo_img}>
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
     </div> */}
    <Footer />
    </>
   
  )
}
