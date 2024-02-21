import React from 'react'
import styles from "./blog.module.css";
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Index() {
  return (
    <>
    <Head>
        <title>Polaris-Blog</title>
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
           <meta property="og:title" content="Polaris Business Consultants - Blog"></meta>
        <meta name="keywords" content="Ambulatory Surgery Center Planning, Business Development, Financial Planning and Analysis, Polaris Business Consultants, ASC Strategy, ASC Financial Management, ASC Consulting Services"></meta>
        <meta property="og:description" content="Discover expert insights on Ambulatory Surgery Center planning, business development, and financial planning with Polaris Business Consultants. Gain industry-leading knowledge and optimize your ASC for success."></meta>
        <meta property="og:url" content="https://polaris.betoparedes.com/blog "></meta>
        </Head>

    <div className="polaris_blog_full_width">
      <div className={styles.polaris_blog_full_page_demo}>
        <Navbar/>
        <div className={styles.polaris_blog_banner_demo}>
          <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/blog_page/polaris_aboutus_banner_demo.webp'></img>
          <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/blog_page/polaris_aboutus_block1_demo.webp'></img>
          <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/blog_page/polaris_aboutus_block2_demo.webp'></img>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  )
}
