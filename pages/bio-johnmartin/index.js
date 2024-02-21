import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from './johnD.module.css'
import Head from 'next/head'
export default function index() {
  return (
    <>
  <Head>
        <title>johnmartin</title>
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
          <meta property="og:title" content="John D. Martin: Expert Healthcare Consultant | Polaris Business Consultants"></meta>
        <meta name="keywords" content="John D. Martin, Healthcare Consultant, Healthcare Consulting, Polaris Business Consultants, Strategic Planning, Financial Management, Operational Improvement, Physician-Hospital Integration, Project Development"></meta>
        <meta property="og:description" content="With over 35 years of progressive healthcare leadership, John D. Martin is a trusted name in healthcare consulting. Explore his career highlights, expertise, and projects at Polaris Business Consultants. "></meta>
        <meta property="og:url" content="https://polaris.betoparedes.com/bio-johnmartin "></meta>
        </Head>

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
