import React from 'react'
import styles from "./blog.module.css";
import Navbar from '@/components/navbar/Navbar';

export default function index() {
  return (
    <>

    <div className="polaris_blog_full_width">
      <div className={styles.polaris_blog_full_page_demo}>
        <Navbar/>
        <div className={styles.polaris_blog_banner_demo}>
          <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/blog_page/polaris_aboutus_banner_demo.webp'></img>
          <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/blog_page/polaris_aboutus_block1_demo.webp'></img>
          <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/blog_page/polaris_aboutus_block2_demo.webp'></img>
        </div>
      </div>
    </div>
    </>
  )
}
