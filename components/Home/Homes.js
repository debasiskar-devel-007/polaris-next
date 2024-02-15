import React from 'react'
import styles from './home.module.css'
import Navbar from '../navbar/Navbar'

export default function Homes() {

    
  return (
    <>

    <div className={styles.polaris_home_main_wrp}>
        <div className={styles.polaris_home_wrp}>
            <img className={styles.polaris_position_img}  src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_banner_man_img.webp'/>
        <Navbar/>
            <div className={styles.common_width}>
                <div className={styles.polaris_home_sub_wrp}>
                    <div className={styles.polaris_home_sub_left_wrp}>
                        <h1>POLARIS BUSINESS CONSULTANTS</h1>
                    </div>
                    <div className={styles.polaris_home_sub_left1_wrp}>
                        <h1>Experts in <span>Strategic</span> Healthcare & Financial  Consulting</h1>
                        <div className={styles.polaris_home_sub_left1_mini1_wrp}>
                            <p>Your partner in creating sustainable strategic, financial, and operational strategies to provide for continued 
growth and success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
          <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/home_bnr_demo.webp'/>
          </div>
          
          <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_blk1_img.webp'/>
          </div>
          <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_blk2_img.webp'/>
          </div>
          <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_blk3_img.webp'/>
          </div>
          <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_last_blk_img.webp'/>
          </div>
    </>
  )
}
