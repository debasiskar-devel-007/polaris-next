import React from 'react'
import styles from "./about.module.css";
import Navbar from '@/components/navbar/Navbar';

export default function index() {
  return (
    <>

    <div className="polaris_about_full_width">
      <div className={styles.polaris_about_full_page_demo}>
        <Navbar/>
        <div className={styles.polaris_about_banner_demo}>
          <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/about_page/polaris_aboutus_banner_demo.webp'></img>
        </div>
      </div>
    </div>
    </>
  )
}
