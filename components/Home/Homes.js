import React from 'react'
import styles from './home.module.css'

export default function Homes() {

    
  return (
    <>
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
