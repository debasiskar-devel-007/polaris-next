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
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
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

     {/* -------------- block1 ------------ */}

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

      {/* -------------- block2 ------------ */}

      <div className={styles.PBC_block2}>
         <div className={styles.common_width}>
            <div className={styles.PBC_block2_wrpr}>
               <h1>AMBULATORY SURGERY CENTER DEVELOPMENT COURSE OUTLINE</h1>
               <p>This is a six-week course designed to give the participant an understanding of the stages of development when developing a new ambulatory surgery center. The course will include the following sessions:</p>
               <div className={`${styles.PBC_boxes} ${styles.windowBulletOrange}`}>
                  <div className={styles.PBC_InnerBox}>
                     <h2>Module 1: Project Assessment</h2>
                     <ul>
                        <li>Introduction</li>
                        <li>Market Study</li>
                        <li>Strategic Planning</li>
                     </ul>
                  </div>
                  <div className={styles.PBC_InnerBox}>
                     <h2>Module 2: Pre-Project Planning</h2>
                     <ul>
                        <li>Preliminary Design </li>
                        <li>Investment Structure </li>
                        <li>Financial Projection - Initial</li>
                        <li>Real Estate</li>
                     </ul>
                  </div>
                  <div className={styles.PBC_InnerBox}>
                     <h2>Module 3: Planning and Development: Facility Design and Construction</h2>
                     <ul>
                        <li>Legal / Regulatory / Organizational</li>
                        <li>Financial Projections</li>
                        <li>Facility Development: Design and Construction</li>
                     </ul>
                  </div>
                  <div className={styles.PBC_InnerBox}>
                     <h2>Module 4: Planning and Development: Non-Clinical Operations</h2>
                     <ul>
                        <li>Administration</li>
                        <li>Human Resources</li>
                        <li>Medical Records</li>
                        <li>Facility</li>
                        <li>Financial Management</li>
                        <li>Marketing</li>
                        <li>Support Services</li>
                        <li>Miscellaneous</li>
                     </ul>
                  </div>
                  <div className={styles.PBC_InnerBox}>
                     <h2>Module 5: Planning and Development: Clinical Operations</h2>
                     <ul>
                        <li>Administration</li>
                        <li>Supporting Physician Coverage Models</li>
                        <li>Policies and Procedures</li>
                        <li>Medical Staff</li>
                        <li>Ancillary Services </li>
                        <li>Quality Preparedness</li>
                     </ul>
                  </div>
                  <div className={styles.PBC_InnerBox}>
                     <h2>Module 6: Go Live</h2>
                     <ul>
                        <li>Grand Opening</li>
                        <li>Test Clinical Systems</li>
                        <li>Test Non-Clinical Systems</li>
                        <li>Accreditation Preparedness</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
     {/* <div className={styles.demo_img}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/business_blk1_img.webp'/>
     </div> */}

      {/* -------------- block3 ------------ */}
      <div className={styles.PBC_block3}>
         <div className={styles.common_width}>
            <div className={styles.PBC_block3_wrpr}>
               <h1>PRE-RELEASE SURVEY</h1>
               <p>What are your top 3 concerns regarding the development of an ambulatory surgery center?</p>
               <p>How long has it been since your last strategic plan was developed?</p>
               <div className={styles.PBC_B3_inner}>
                  
                     <h3>Within 1 year  </h3>
                     <h3>1-3 years</h3>
                     <h3>More than 3 years</h3>
                  
               </div>
               <p>What is your top concern regarding strategic planning?</p>
               <h2>Bonus: ASC Development Life Cycle</h2>
               <p>Receive for taking the survey and registering for the course</p>
            </div>
         </div>
      </div>
     {/* <div className={styles.demo_img}>
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
