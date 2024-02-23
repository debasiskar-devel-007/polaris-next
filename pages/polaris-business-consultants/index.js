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
          <meta property="og:title" content="Polaris Business Consultants | Ambulatory Surgery Center Development Course"></meta>
        <meta name="keywords" content="Ambulatory Surgery Center, ASC, Ambulatory Surgical Center, Surgery Center Development, Ambulatory Surgery Center Course, Polaris Business Consultants"></meta>
        <meta property="og:description" content="Join the Ambulatory Surgery Center Development Course by Polaris Business Consultants. Gain insights into ASC establishment, regulatory compliance, strategic planning, and more. Let's embark on this transformative journey together!"></meta>
        <meta property="og:url" content=" https://polaris.betoparedes.com/contact "></meta>
        </Head>

     <Navbar />
     <div className={styles.PBC_banner}>
      <div className={styles.common_width}>
         <div className={styles.PBC_banner_wrpr}>
            <div className={styles.PBC_bannerTop}>
               <h1>Polaris Business Consultants</h1>
            </div>
            <div className={styles.PBC_bannerBottom}>
               <p>Ambulatory Surgical Center Development Course</p>
               <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris-business-consultants/PBC_bannerBottomLogo.png" />
            </div>
         </div>
      </div>
     </div>


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

      <div className={styles.PBC_block5}>
         <div className={styles.common_width}>
            <h1>STRATEGIC REAL ESTATE PLANNING: NAVIGATING REQUIREMENTS AND OWNERSHIP  STRUCTURES IN ASC DEVELOPMENT</h1>
            <div className={styles.PBC_block5_wrpr}>
               <h2>Real Estate</h2>
               <p>Estimate Amount of Real Estate Required Based on Preliminary Design</p>
               <div className={styles.PBC_block5_wrprInner}>
                  <h3>Size of facility  </h3>
                  <h3>Anticipated daily patient volume</h3>
                  <h3>Planned expansion</h3>
                  <h3>Parking requirements</h3>
                  <h3>Retention ponds and other infrastructure</h3>
               </div>
               <p>How Will Real Estate be Held?</p>
               <div className={styles.PBC_block5_wrprInner}>
                  <h3>Owned {" "}
                     <span>Held in ASC</span>
                     <span>Create separate real estate company</span>
                     <span>Involve real estate development company</span>
                  </h3>
                  <h3>Leased {" "}
                     <span>Involve real estate development company</span>
                  </h3>
               </div>
               <p>Identify real estate development partner</p>
               <div className={styles.PBC_block5_wrprInner}>
                  <h3>Local vs. National</h3>
               </div>
            </div>
         </div>
      </div>


      <div className={styles.PBC_block6}>
         <div className={styles.common_width}>
            <h1>STRATEGIC INVESTMENT FRAMEWORK:CAPITAL COMMITMENT, OWNERSHIP STRUCTURES, AND FINANCING STRATEGIES IN ASC DEVELOPMENT</h1>
            <h2>Investment Structure</h2>
            <div className={`${styles.PBC_block6_wrprBlue} ${styles.PBC_block6_Flex}`}>
               <h3>Estimated Total Capital Commitment</h3>
               <div className={styles.PBC_block6_wrprWhite}>
                  <p>Facility construction</p>
                  <p>Capital equipment</p>
               </div>
            </div>
            <div className={`${styles.PBC_block6_wrprBlue} ${styles.PBC_block6_Flex}`}>
               <h3>Capital Raise / Financing</h3>
               <div className={styles.PBC_block6_wrprWhite}>
                  <p>Corporate structure
                     <span>ASC only</span>
                     <span>Include real estate</span>
                  </p>
                  <p>Ownership allocation among partners
                     <span>Current</span>
                     <span>Future</span>
                  </p>
                  <p>Capital Structure
                     <span>Debt</span>
                     <span>Equity</span>
                  </p>
                  <p>Physician ownership
                     <span>Active owners</span>
                     <span>Passive owners</span>
                  </p>
               </div>
            </div>
            <div className={styles.PBC_block6_innerBlock}>
               <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris-business-consultants/PBC_block6_innerBlockImage.webp" />
               <div className={styles.PBC_B6_innerBlock_SubWrpr}>
                  <h1>STRATEGIC FINANCIAL PLANNING FOR ASC SUCCESS:STRATEGIC FINANCIAL PLANNING FROM COMPREHENSIVE FIVE-YEAR PLANS</h1>
                  <h4>Financial Projection – Initial</h4>
                  <p>Order of magnitude projection</p>
                  <p>Assumed volume and mix of cases</p>
                  <p>Broad revenue and expense assumptions</p>
                  <p>Initial financial plan based on:</p>
                  <div className={styles.BlackBullet}>
                     <h5>Market study / strategic plan</h5>
                     <h5>Size and scope of project </h5>
                     <h5>Investment structure</h5>
                  </div>
                  <p>Projection packet</p>
                  <div className={styles.BlackBullet}>
                     <h5>Assumptions</h5>
                     <h5>Five year financial projection</h5>
                     <h5>Capital budget</h5>
                  </div>
               </div>
            </div>
            <div className={`${styles.PBC_block6_wrprBlue} ${styles.PBC_block6_innerBlock2}`}>
               <h3>Completion Survey (take before next module)</h3>
               <div className={styles.PBC_block6_wrprWhite}>
                  <p>What is your top question about Pre-Project Planning?</p>
                  <p>What is your top question or concern about beginning the process of planning and developing an ASC?</p>
               </div>
               <h3>Bonus: Pre-Planning Project Checklist</h3>
               <div className={styles.PBC_block6_wrprWhite}>
                  <p>Receive bonus when survey is completed</p>
               </div>
            </div>
         </div>
      </div>

      <div className={styles.PBC_block7}>
         <div className={styles.common_width}>
            <h1>MODULE 3: PLANNING AND DEVELOPMENT: FACILITY DESIGN AND CONSTRUCTION</h1>
            <h4>In this ASC Development course section dedicated to Legal, Regulatory, and Organizational intricacies, where we delve into the critical legal and structural aspects shaping the foundation of ambulatory surgical centers (ASCs). Explore project-specific legal considerations, including joint venture structures and the pivotal decision on physician, hospital, and ASC development company partnerships. Navigate the process of determining entity types, recruiting investors, and crafting comprehensive investor decks. Uncover the nuances of board organization and development, defining size, representation, and committee structures with a focus on administrative and medical committees. This section also provides insights into refining financial projections, evaluating financing alternatives, conducting payer analyses, and tightening projection assumptions. Join us as we delve into the multifaceted landscape of ASC development, covering legal, regulatory, and organizational dimensions crucial for success.</h4>
            <div className={styles.PBC_block7_innerBlock}>
               <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris-business-consultants/PBC_block7_innerBlockImage.webp"  />
                  <h2>NAVIGATING LEGAL AND ORGANIZATIONAL FRAMEWORKS IN ASC DEVELOPMENT: STRUCTURING JOINT  VENTURES, ENTITIES, AND BOARDS</h2>
               <div className={styles.PBC_B7_innerBlock_SubWrpr}>
                  <h3>LEGAL / REGULATORY / ORGANIZATIONAL</h3>
                  <div className={styles.PBC_B7_innerBlock_Flex}>
                     <div className={styles.PBC_B7_MiniBlock}>
                        <p>Project specific legal issues</p>
                        <div className={styles.BlackBullet}>
                           <h5>Joint venture structure</h5>
                           <h6>i. Only physician and physician group partners?</h6>
                           <h6>ii. Hospital (for profit vs. non-profit)?</h6>
                           <h6>iii. ASC development company?</h6>
                        </div>
                     </div>
                     <div className={styles.PBC_B7_MiniBlock}>
                        <p>Determine entity type</p>
                        <p>Recruit investors</p>
                        <div className={styles.BlackBullet}>
                           <h5>Develop investor deck </h5>
                           <h5>Equity partners </h5>
                           <h5>Debt partners</h5>
                        </div>
                     </div>
                     <div className={styles.PBC_B7_MiniBlock}>
                        <p>Board organization and development</p>
                        <div className={styles.BlackBullet}>
                           <h5>Size of board</h5>
                           <h5>Representation</h5>
                           <h6>i. Hospital executives </h6>
                           <h6>ii. Participating physicians</h6>
                           <h6>iii. Local business leaders</h6>
                        </div>
                     </div>
                     <div className={styles.PBC_B7_MiniBlock}>
                        <p>Committee structure and operating authority</p>
                        <div className={styles.BlackBullet}>
                           <h5>Administrative committees</h5>
                           <h5> Medical committees </h5>
                           <h5>Scope of authority (sample authority matrix)</h5>
                           <h5>Participation requirements</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={`${styles.PBC_block6_wrprBlue} ${styles.PBC_block7_wrprBlue}`}>
               <h3>STRATEGIC FINANCIAL PROJECTIONS IN ASC DEVELOPMENT:<br/> ANALYZING ALTERNATIVES, REFINING ASSUMPTIONS, AND CRAFTING COMPREHENSIVE PLANS</h3>
                  <h6>Financial Projections</h6>
                  <div className={styles.PBC_block6_wrprWhite}>
                     <p>Financing alternatives </p>
                     <p>  Payer analysis </p>
                     <p>Tighten projection assumptions</p>
                     <div className={styles.BlackBullet}>
                        <h5>Volume and revenue analysis</h5>
                        <h5>Expense analysis</h5>
                     </div>
                     <p>Develop charge master</p>
                     <p>Financial projections – second draft</p>
                  </div>
            </div>
         </div>
      </div>

      <div className={styles.PBC_block8}>
         <div className={styles.common_width}>
            <h1>ARCHITECTING SUCCESS:A COMPREHENSIVE GUIDE TO FACILITY DEVELOPMENT IN ASC PLANNING AND CONSTRUCTION</h1>
            <h2>Facility Development: Design and Construction</h2>
            <div className={`${styles.PBC_block6_wrprBlue} ${styles.PBC_block7_wrprBlue}  ${styles.PBC_block8_wrprBlue}`}>
               <div className={styles.PBC_block6_wrprWhite}>
                  <div className={styles.BlackBullet}>
                     <p>Real estate</p>
                     <h5>How will real estate be held?</h5>
                     <h5>Secure land</h5>
                  </div>
                  <div className={styles.BlackBullet}>
                     <p> Architecture</p>
                     <h5>Schematic design</h5>
                     <h5>Design development</h5>
                     <h5>Construction drawings</h5>
                  </div>
                  <p>Interior design</p>
                  <p>Capital equipment</p>
                  <p>Construction</p>
                  <p>Facility management</p>
                  <p>Physical plant management</p>
               </div>
            </div>
         </div>
      </div>


      <div className={styles.PBC_block9}>
         <div className={styles.common_width}>
            <div className={`${styles.PBC_block6_wrprBlue}  ${styles.PBC_block7_wrprBlue}`}>
               <h3>Completion Survey (take before next module)</h3>
               <div className={styles.PBC_block6_wrprWhite}>
                  <p>What is your top question or concern about the Planning and Development process?</p>
                  <p>What is your top question or concern about Non-Clinical Operations?</p>
               </div>
            </div>
            <div className={`${styles.PBC_block6_wrprBlue}  ${styles.PBC_block7_wrprBlue}`}>
               <h3>Bonus: Planning and Development Checklist</h3>
               <div className={styles.PBC_block6_wrprWhite}>
                  <p>Receive bonus when survey is completed </p>
               </div>
            </div>
            <div className={styles.PBC_block9_inner}>
               <h1>MODULE 4 : PLANNING AND DEVELOPMENT: NON-CLINICAL OPERATIONS</h1>
               <p>Delve into the Non-Clinical Operations module in our ASC Development course, exploring the administrative landscape of ambulatory surgical centers (ASCs). Covering licensure, accreditation, HIPAA compliance, financial management, information systems, revenue cycles, payer relations, human resources, marketing, medical records, support services, and facility considerations. This module invites participants to share concerns and questions through a Completion Survey, shaping discussions on non-clinical and clinical operations. Completing the survey unlocks a bonus Non-Clinical Operations Checklist, ensuring a comprehensive grasp of key operational dimensions. Join us in navigating the essential components of non-clinical operations crucial for ASC success.</p>
               <div className={`${styles.PBC_block6_wrprBlue} ${styles.PBC_block9_wrprBlue} `}>
                  <h3>FOUNDATIONS OF ASC GOVERNANCE:ADMINISTRATION, PHYSICIAN COLLABORATION, LICENSURE AND HIPAA COMPLIANCE</h3>
                  <div className={`${styles.PBC_block6_wrprWhite} ${styles.BlackBullet}`}>
                     <h5>Administration:</h5>
                     <h6>1. Physicians </h6>
                     <h6>2. Licensure / Accreditation</h6>
                     <h6>3. HIPAA</h6>
                  </div>
                  <h3>FINANCIAL EXCELLENCE INASC OPERATIONS: MANAGEMENT, INFORMATION SYSTEMS, REVENUE CYCLE, AND PAYER RELATIONS</h3>
                  <div className={`${styles.PBC_block6_wrprWhite} ${styles.BlackBullet}`}>
                     <h5>Financial management:</h5>
                     <h6>1. Information systems </h6>
                     <h6>2. Revenue cycle </h6>
                     <h6>3. Payer relations</h6>
                  </div>   
               </div>
               <h1>OPTIMIZING NON-CLINICAL OPERATIONS IN ASCS:HUMAN RESOURCES MARKETING, RECORDS, FACILITIES, AND BEYOND</h1>
               <div className={styles.PBC_B6_Miniwrpr}>
                  <p>Human resources</p>
                  <p>Marketing</p>
                  <p>Medical records</p>
                  <p>Support services</p>
                  <p>Facility</p>
                  <p>Miscellaneous</p>
               </div>
               <div className={styles.PBC_B6_Miniwrpr2}>
                  <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                     <h3><span>Completion Survey (take before next module)</span></h3>
                     <p>What is your top question or concern about Non-Clinical Operations?</p>
                     <p>What is your top question or concern about Clinical Operations?</p>
                  </div>
                  <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                     <h3><span>Bonus: Non-Clinical Operations Checklist</span></h3>
                     <p>Receive bonus when survey is completed </p>
                  </div>
               </div>
            </div>
         </div>
      </div>      

      <div className={styles.PBC_block10}>
         <div className={styles.common_width}>
            <h1>MODULE 5: PLANNING AND DEVELOPMENT: CLINICAL OPERATIONS</h1>
            <p>Delve into the Non-Clinical Operations module in our ASC Development course, exploring the administrative landscape of ambulatory surgical centers (ASCs). Covering licensure, accreditationExplore the intricacies of Clinical Operations in Module 5 of the Ambulatory Surgical Center Development Class. This comprehensive module navigates through key components crucial for successful planning and development. From establishing administration and medical staff leadership to crafting policies, procedures, and quality management protocols, participants will gain insights into EMS and transfer agreements, credentialing processes, and supporting physician coverage models. The module concludes with a Completion Survey, enabling participants to express their top concerns about Clinical Operations and Go-Live Planning. Additionally, completing the survey unlocks a valuable Clinical Operations Checklist, ensuring a comprehensive understanding of essential clinical operational dimensions. Join us as we delve into the heart of ASC development. HIPAA compliance, financial management, information systems, revenue cycles, payer relations, human resources, marketing, medical records, support services, and facility considerations. This module invites participants to share concerns and questions through a Completion Survey, shaping discussions on non-clinical and clinical operations. Completing the survey unlocks a bonus Non-Clinical Operations Checklist, ensuring a comprehensive grasp of key operational dimensions. Join us in navigating the essential components of non-clinical operations crucial for ASC success.</p>
            <div className={`${styles.PBC_block6_wrprBlue} ${styles.PBC_block9_wrprBlue} `}>
               <h3>NAVIGATING ASC OPERATIONS: ADMINISTRATION, EMS AGREEMENTS, AND TRANSFER AGREEMENTS</h3>
               <div className={`${styles.PBC_block6_wrprWhite} ${styles.BlackBullet}`}>
                  <h5>Administration:</h5>
                  <h6>1. EMS agreements </h6>
                  <h6>2. Transfer agreements</h6>
               </div>
            </div>
            <h1>BUILDING EXCELLENCE: MEDICAL STAFF LEADERSHIP AND CREDENTIALING IN ASC DEVELOPMENT</h1>
            <h2>MEDICAL STAFF</h2>
            <div className={styles.PBC_B4_wrpr2_Inner1}>
               <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                  <h3><span>Establish physician leadership</span></h3>
                  <p>Chief medical officer</p>
                  <p>Chief of anesthesia</p>
               </div>
               <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                  <h3><span>Establish medical staff office</span></h3>
                  <p>Administrative / Committee structure</p>
                  <p>Develop medical staff bylaws</p>
                  <p>Draft medical staff rules and regulations</p>
               </div>
               <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                  <h3><span>Credentialing </span></h3>
                  <p>Physician credentialing process</p>
                  <p>Allied health credentialing process</p>
                  <p>Complete initial credentialing process</p>
               </div>
            </div>
            <div className={styles.PBC_block10_SubWrpr}>
               <div className={styles.PBC_block10_InnerBlockWrpr}>
                  <div className={styles.PBC_B10_InnerBlockHeader}>
                     <h4>OPTIMIZING CLINICAL TEAMS:PHYSICIAN COVERAGE MODELS AND COLLABORATIONS IN ASC DEVELOPMENT</h4>
                  </div>
                  <h6>Supporting physician coverage models</h6>
                  <div className={styles.PBC_B10_InnerBlockList}>
                     <h5>Anesthesia</h5>
                     <h5>Hospitalist</h5>
                     <h5>Radiologist</h5>
                     <h5>Consulting physician agreements</h5>
                  </div>
                  <div className={styles.PBC_B10_InnerBlockHeader}>
                     <h4>STRATEGIC GOVERNANCE:DEVELOPING POLICIES AND PROCEDURES IN AMBULATORY SURGERY CENTERS</h4>
                  </div>
                  <h6>Policies and procedures</h6>
                  <div className={styles.PBC_B10_InnerBlockList}>
                     <h5>Department level</h5>
                     <h5>Patient related processes and protocols</h5>
                     <h5>Medical administration</h5>
                  </div>
               </div>
            </div>
            <div className={`${styles.PBC_block6_wrprBlue} ${styles.PBC_block9_wrprBlue} ${styles.PBC_block10_wrprBlue}`}>
               <h3>EXCEL IN EXCELLENCE:A COURSE ON QUALITY PREPAREDNESS AND CLINICAL OPERATIONS IN AMBULATORY SURGERY CENTERS</h3>
               <div className={`${styles.PBC_block6_wrprWhite} ${styles.BlackBullet}`}>
                  <h5>Quality preparedness:</h5>
                  <span>
                  <h6>1. Clinical quality improvement plan </h6>
                  <h6>2. Quality management</h6>
                  <h6>3. Outcomes management and report card</h6>
                  <h6>4. Environment of care</h6>
                  </span>
               </div>
            </div>
            <div className={`${styles.PBC_B4_wrpr2_Inner1} ${styles.PBC_B10_wrpr_Inner1}`}>
               <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                  <h3><span>Completion Survey (take before next module)</span></h3>
                  <p>What is your top question or concern about Clinical Operations?</p>
                  <p>What is your top question or concern about Go-Live Planning?</p>
               </div>
               <div className={styles.PBC_B4_wrpr2_InnerBoxs}>
                  <h3><span>Bonus: Clinical Operations Checklist</span></h3>
                  <p>Receive bonus when survey is completed</p>
               </div>
            </div>
         </div>
      </div>

      <div className={styles.PBC_block11}>
         <div className={styles.common_width}>
            <h1>MODULE 6: GO LIVE</h1>
            <p>Welcome to Module 6 of the Ambulatory Surgical Center Development Class – the pivotal stage of Go Live. In this crucial phase, we dive into the grand opening, rigorously testing both clinical and non-clinical systems to ensure a seamless transition. Accreditation preparedness takes center stage, setting the foundation for operational excellence. As we navigate through Go-Live Planning, your insights matter. Share your top questions and concerns through the Completion Survey, guiding our coaching program tailored to address your needs. Completing the survey unlocks a valuable Go-Live Planning Checklist, empowering you with essential tools for a successful launch. Join us in this dynamic transition towards operational excellence in ambulatory surgical center development.</p>
            <div className={`${styles.PBC_block6_wrprBlue} ${styles.PBC_block11_wrprBlue}`}>
                  <h3>SEAMLESS UNVEILING: NAVIGATING GO-LIVE AND ENSURING EXCELLENCE IN ASC OPERATIONS SURGICAL CENTER DEVELOPMENT</h3>
               <div className={`${styles.PBC_block6_wrprWhite}`}>
                  <span className={styles.BlackBullet}>
                     <h5>Grand Opening</h5>
                     <h5>Test Clinical Systems</h5>
                     <h5>Test Non-Clinical Systems</h5>
                     <h5>Accreditation Preparedness</h5>
                  </span>
                  <h6>Completion Survey (take before next module)</h6>
                  <span className={styles.BlackBullet}>
                     <h5>What is your top question or concern about Go-Live Planning?</h5>
                     <h5>What other questions or concerns do you have about the process?</h5>
                  </span>
                  <h6>Bonus: Go-Live Planning Checklist</h6>
                  <span className={styles.BlackBullet}>
                     <h5>Receive bonus when survey is completed</h5>
                  </span>
               </div>
            </div>
            <span className={styles.PBC_block11_subWrpr}>
               <span className={styles.PBC_B11_InnerBlock}>
                  <h3>TRAINING SERIES</h3>
                  <span className={styles.PBC_B11_Submini}>
                     <h6>Six modules over 6 weeks</h6>
                     <h6>Price: $2,495</h6>
                     <h6>Discount: $500 during initial sales period or first 10 registrations</h6>
                  </span>
               </span>
               <span className={styles.PBC_B11_InnerBlock}>
                  <h3>COACHING PROGRAM</h3>
                  <span className={styles.PBC_B11_SubInnerBlock}>
                  <span>
                     <h6>Up to 10 members per group</h6>
                     <h6>Facilitated interaction among participants</h6>
                     <h6>Price: $950/month. Meet 2x/month; 90 minute per week</h6>
                  </span>
                  <span>
                     <h6>Individual mentoring: $1,250/month. Meet 4x/month; 1 hour sessions</h6>
                     <h6>Discount: $500 for the first month to the first 5 sign-up</h6>
                  </span>
                  </span>
               </span>
            </span>
         </div>
      </div>
    <Footer />
    </>
   
  )
}
