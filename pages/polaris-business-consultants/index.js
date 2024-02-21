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

      {/* -------------- block3 ------------ */}

      <div className={styles.PBC_block4}>
         <div className={styles.PBC_block4_wrpr1}>
            <div className={styles.common_width}>
               <div className={styles.PBC_B4_wrpr1_Inner1}>
                  <h1>MODULE 1: PROJECT ASSESSMENT</h1>
                  <p>Welcome to Module 1 of the Ambulatory Surgical Center Development Class, where we embark on the foundational phase of Project Assessment. In this module, participants will be introduced to the essential components that set the stage for a successful ambulatory surgical center (ASC) development journey. We will kick off with an exploration of the critical role of a comprehensive Market Study, laying the groundwork for informed decision-making. Building on this, we delve into the intricacies of Strategic Planning, emphasizing the importance of a well-crafted strategy in shaping the trajectory of ASC development. As a culmination, participants will engage in a Completion Survey, providing a comprehensive overview of the key takeaways from this module. Join us as we navigate the fundamental aspects of project assessment, equipping participants with the knowledge and tools necessary for a strategic and informed approach to ASC development.</p>
               </div>
               <div className={styles.PBC_B4_wrpr1_Inner2}>
                  <h2>MASTERING MARKET DYNAMICS: A COMPREHENSIVE GUIDE TO AMBULATORY SURGICAL <br/> CENTER DEVELOPMENT.  </h2>
                  <div className={styles.PBC_B4_wrpr1_Inner2Box}>
                     <h3>Market Study</h3>
                     <div className={styles.PBC_B4_wrpr1_Inner2Flex}>
                        <div className={styles.PBC_B4_wrpr1_Inner2mini}>
                           <h4>Market Definitions</h4>
                           <p>Primary</p>
                           <p>Secondary</p>
                           <p> By zip code; country</p>
                        </div>
                        <div className={styles.PBC_B4_wrpr1_Inner2mini}>
                           <h4>Market and Market Share Targets</h4>
                           <p>Current</p>
                           <p>Targeted</p>
                           <p>Timeframe</p>
                        </div>
                        <div className={styles.PBC_B4_wrpr1_Inner2mini}>
                           <h4>Targeted Growth</h4>
                           <p>Location(s) </p>
                           <p>Physician recruitment Satellite clinics / locations</p>
                           <p>Partnerships</p>
                        </div>
                     </div>
                  </div>
                  <h5><span>Bonus: Market</span> <span>Planning Worksheet</span></h5>
               </div>   
            </div>
         </div>

         <div className={styles.PBC_block4_wrpr2}>
            <div className={styles.common_width}>
               <h1>STRATEGIC EXCELLENCE IN ASC DEVELOPMENT: GROWTH, RECRUITMENT,  AND PARTNERSHIPS</h1>
               <h2>Strategic Planning</h2>
               <div className={styles.PBC_B4_wrpr2_Inner1}>
                  <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                     <h3><span>Market Study / Baseline for Strategic Plan</span></h3>
                     <p>Focus on “Targeted Growth”</p>
                     <p>Physician recruitment</p>
                     <p>Potential partnerships</p>
                  </div>
                  <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                     <h3><span>Targeted Growth: Service Offering(s)</span></h3>
                     <p>Single speciality</p>
                     <p>Multi-speciality</p>
                     <p>Excluded specialities</p>
                  </div>
                  <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                     <h3><span>Physician Recruitment: Initial Physician List</span></h3>
                     <p>Individual physicians </p>
                     <p>Physician groups</p>
                     <p>Number of active participants <span>Current</span> <span>Planned / Desired</span></p>
                  </div>
                  <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                     <h3><span>Potential Partnerships</span></h3>
                     <p>Hospitals</p>
                     <p>Physician groups</p>
                     <p>Development companies</p>
                  </div>
                  <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                     <h3><span>Anticipated / Expected Financial Results</span></h3>
                     <p>At most 5-7 strategies</p>
                     <p>Assign tasks per strategy 
                        <span>Responsible</span>
                        <span>Start date</span>
                        <span>End date</span>
                        <span>Progress notes</span>
                        <span>Monthly / Quarterly updates</span>
                     </p>
                  </div>
                  <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                     <h3><span>Accountability is Critical</span></h3>
                     <p>Strategy level </p>
                     <p>Task level</p>
                  </div>
               </div>
            </div>
         </div>

         <div className={styles.common_width}>
            <div className={styles.PBC_block4_wrpr3}>
               <div className={styles.PBC_block4_wrpr3_Inner}>
                  <h1>Potential Partnerships</h1>
                  <p>What is your top question regarding strategic-planning?</p>
                  <p>What is your top question about beginning the process of developing an ambulatory surgical center?</p>
               </div>
               <div className={styles.PBC_block4_wrpr3_Inner}>
                  <h1>Bonus: Strategic Planning Worksheet - Template</h1>
                  <p>Receive bonus when survey is completed</p>
               </div>
            </div>
         </div>
         <div className={styles.PBC_block4_wrpr4}>
            <div className={styles.common_width}>
               <h1>MODULE 2: PRE-PROJECT PLANNING</h1>
               <p>In Module 2 of the Ambulatory Surgical Center Development Class, we delve into the critical phase of Pre-Project Planning. This module focuses on laying the foundation for a Successful ambulatory surgical center (ASC) by addressing key elements in the preliminary design stage. Participants will learn the significance of engaging architects, leveraging insights from the market study and strategic plan to estimate facility size based on anticipated volume. The module covers the intricacies of determining the number of operating rooms (ORs), pre-op beds, and post-op beds, while also emphasizing the creation of a block diagram. Other essential considerations such as the incorporation of a medical office building, ancillary services, and estimating facility construction costs will be thoroughly explored. Join us as we navigate the intricacies of pre-project planning, providing participants with the tools and knowledge necessary for effective ASC development in this vital phase.</p>
               <div className={styles.PBC_B4_wrpr1_Inner2}>
                  <h2>PRELIMINARY DESIGN MASTERY: CRAFTING THE BLUEPRINT FOR SUCCESSFUL AMBULATORY SURGICAL CENTER DEVELOPMENT</h2>
                  <div className={styles.PBC_B4_wrpr1_Inner2Box}>
                     <h3>Preliminary Design</h3>
                        <div className={styles.PBC_B4_wrpr1_Inner2Boxflex}>
                           <h6>1. Engage architect </h6>
                           <h6>2. Estimate facility size based on volume </h6>
                           <h6>3. (market study / strategic plan)</h6>
                           <h6>4. Number ORs, pre-op beds, post-op beds</h6>
                           <h6>5. Create block diagram</h6>
                           <h6>6. Other considerations 
                              <span>Medical office building </span>
                              <span>Ancillary services</span>
                           </h6>
                           <h6>7. Estimate facility construction cost</h6>
                        </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
     {/* <div className={styles.demo_img}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/business_blk2_img.webp'/>
     </div> */}
     <div className={styles.demo_img}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/business_blk3_img.webp'/>
     </div>
     <div className={styles.demo_img}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/business_blk4_img.webp'/>
     </div>
    <Footer />
    </>
   
  )
}
