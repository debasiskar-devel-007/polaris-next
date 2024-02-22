import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import Head from 'next/head'
import React from 'react'
import styles from './johnD.module.css'

export default function index() {
  return (
    <>
  <Head>
        <title>Bio-JohnMartin</title>
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
          <meta property="og:title" content="John D. Martin: Expert Healthcare Consultant | Polaris Business Consultants"></meta>
        <meta name="keywords" content="John D. Martin, Healthcare Consultant, Healthcare Consulting, Polaris Business Consultants, Strategic Planning, Financial Management, Operational Improvement, Physician-Hospital Integration, Project Development"></meta>
        <meta property="og:description" content="With over 35 years of progressive healthcare leadership, John D. Martin is a trusted name in healthcare consulting. Explore his career highlights, expertise, and projects at Polaris Business Consultants. "></meta>
        <meta property="og:url" content="https://polaris.betoparedes.com/bio-johnmartin "></meta>
        <meta property="og:image" content="https://all-frontend-assets.s3.amazonaws.com/polaris_project/og_img/Bio-johnmartin_OG_image.webp"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="627"></meta>
        </Head>


  <div className="polaris_j_martin_page_main_width">

    <div className={styles.polaris_j_martin_page_full_width}>

      <div className={styles.j_martin_page_banner_main_width}>
      <Navbar/>
        <div className={styles.common_width}>
          <div className={styles.j_martin_bnr_left_cont}>
            <h1>BIO</h1>

            <div className={styles.yellow_box_sec_main_width}>
              <h2>Our leadership team</h2>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
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
