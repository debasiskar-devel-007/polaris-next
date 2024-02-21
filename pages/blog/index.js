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
        </Head>

      <div className={styles.polaris_main_wdth}>
        <div className={styles.polaris_blog_bnnr}>
          <div className={styles.pol_blog_nav}> <Navbar /></div> 

          <div className={styles.common_width}>

           <div className={styles.pol_blog_bnnrleft}>

           <div className={styles.pol_bnnr_h1}>
            <h1><span>BLog</span></h1>
           </div>
          

           <div className={`${styles.pol_orng_wrpr}`}>
            <p><span className={styles.spn1}>Discover a World of Insight: </span> <span className={styles.spn2}>Dive into Our Blog Archive</span></p>
           </div>
 
          </div>
  
         </div>


       </div>
      </div>

      <div className={styles.pol_blog_wrpr}>

        <div className={styles.common_width}>

          <div className={styles.pol_blog_innr}>

            <div className={styles.pol_blog_div}>

              <div className={styles.pol_blog_img_sec}>
                <div className={styles.pol_blog_img_sec_innr}><img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/blog_page/about_block/blog_img1.webp'/></div>
              </div>
             <div className={styles.pol_blog_txt_wrpr}>
              <div className={styles.pol_blog_txt_div}>
                <h2>Revenue Improvement in Healthcare: 5 Vital Roles of Financial Planning and Analysis</h2>
              </div>

              <div className={styles.pol_blog_flx_sec}>

                <div className={styles.pol_blog_flx_innr}>
                  <p> #Financialplanningandanalysis </p> 
                </div>

                <div className={styles.pol_blog_flx_innr}>
                  <p> #Healthcare </p> 
                </div>

                <div className={styles.pol_blog_flx_innr}>
                  <p> #Polarisbusinessconsultants </p> 
                </div>

                <div className={styles.pol_blog_flx_innr}>
                  <p> #Revenueimprovement </p> 
                </div>

              </div>

              <div className={styles.pol_blog_orng_div}>
                  <p>Oct 11, 2023</p>
              </div>

              <div className={styles.blog_para}>
                <h4>In the ever-evolving landscape of healthcare, financial executives are facing a trifecta of challenges that could make or break the future of their organizations. Rising costs, staff shortages, and declining reimbursements are creating a perfect storm, leaving many healthcare institutions with...</h4>
              </div>



             </div>

             <div className={styles.continue_bttn}>
                <h5>Continue Reading...</h5>
             </div>

            </div>

            <div className={styles.pol_blog_div}>

<div className={styles.pol_blog_img_sec}>
  <div className={styles.pol_blog_img_sec_innr}><img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/blog_page/about_block/blog_img2.webp'/></div>
</div>
<div className={styles.pol_blog_txt_wrpr}>
<div className={styles.pol_blog_txt_div}>
  <h2>Unlocking Success: A Framework for Financial Planning and Analysis</h2>
</div>

<div className={styles.pol_blog_flx_sec}>

  <div className={styles.pol_blog_flx_innr}>
    <p> #Financialplanningandanalysis  </p> 
  </div>

  <div className={styles.pol_blog_flx_innr}>
    <p> #Healthcare</p> 
  </div>

  <div className={styles.pol_blog_flx_innr}>
    <p> #Polarisbusinessconsultants </p> 
  </div>

  

</div>

<div className={styles.pol_blog_orng_div}>
    <p>Oct 18, 2023</p>
</div>

<div className={styles.blog_para}>
  <h4>In the fast-paced world of healthcare finance, financial executives and their finance departments have their plates full, managing a myriad of responsibilities. Amidst the daily hustle, one critical aspect that often takes a back seat is effective financial planning and analysis (FP&A)....</h4>
</div>



</div>

<div className={styles.continue_bttn}>
  <h5>Continue Reading...</h5>
</div>

</div>

<div className={styles.pol_blog_div}>

<div className={styles.pol_blog_img_sec}>
  <div className={styles.pol_blog_img_sec_innr}><img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/blog_page/about_block/blog_img3.webp'/></div>
</div>
<div className={styles.pol_blog_txt_wrpr}>
<div className={styles.pol_blog_txt_div}>
  <h2>Unlocking Financial Success in Healthcare:
 Why Financial Planning and Analysis is Critical</h2>
</div>

<div className={styles.pol_blog_flx_sec}>

  <div className={styles.pol_blog_flx_innr}>
    <p> Financialplanninngandanalysis  </p> 
  </div>

  <div className={styles.pol_blog_flx_innr}>
    <p>  #Healthcare</p> 
  </div>

  

  

</div>

<div className={styles.pol_blog_orng_div}>
    <p>Oct 11, 2023</p>
</div>

<div className={styles.blog_para}>
  <h4>In the ever-evolving landscape of healthcare, financial executives are facing a trifecta of challenges that could make or break the future of their organizations. Rising costs, staff shortages, and declining reimbursements are creating a perfect storm, leaving many healthcare institutions with...  </h4>
</div>



</div>

<div className={styles.continue_bttn}>
  <h5>Continue Reading...</h5>
</div>

</div>

<div className={styles.pol_blog_div}>

<div className={styles.pol_blog_img_sec}>
  <div className={styles.pol_blog_img_sec_innr}><img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/blog_page/about_block/blog_img4.webp'/></div>
</div>
<div className={styles.pol_blog_txt_wrpr}>
<div className={styles.pol_blog_txt_div}>
  <h2>Introducing Polaris Business Consultants</h2>
</div>

<div className={styles.pol_blog_flx_sec}>

  <div className={styles.pol_blog_flx_innr}>
    <p>#Ambulatorysurgerycenterplanning </p> 
  </div>

  <div className={styles.pol_blog_flx_innr}>
    <p>#Businessdevelopment</p> 
  </div>

  <div className={styles.pol_blog_flx_innr}>
    <p>#Financialplanningandanalysis
      </p> 
  </div>
<div className={styles.pol_blog_flx_innr}>
    <p> #Polarisbusinessconsultants </p> 
  </div>

  <div className={styles.pol_blog_flx_innr}>
    <p> #Strategicplanning</p> 
  </div>

</div>

<div className={styles.pol_blog_orng_div}>
    <p>Oct 11, 2023</p>
</div>

<div className={styles.blog_para}>
  <h4>I am thrilled to announce an exciting new partnership between JD Martin Healthcare Advisors and Donovan CPAs, resulting in the inception of a new entity, Polaris Business Consultants. The Polaris consulting team is dedicated to fulfilling strategy, financial advising, operational, and business...</h4>
</div>



</div>

<div className={styles.continue_bttn}>
  <h5>Continue Reading...</h5>
</div>

</div>
          </div>

        </div>

      </div>
      <Footer/>
       

    
    </>
  )
}
