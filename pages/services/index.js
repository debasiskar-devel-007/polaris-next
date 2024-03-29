import React from 'react'
import styles from "./servicepage.module.css";
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Link from 'next/link';


<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

export default function Index() {
  return (
    <>
 <Head>
        <title>Services</title>
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
          <meta property="og:title" content="Polaris - Comprehensive Healthcare Consulting Services"></meta>
        <meta name="keywords" content=" Comprehensive Healthcare, strategic planning, healthcare consulting services"></meta>
        <meta property="og:description" content=" Polaris provides comprehensive healthcare consulting services, including ASC development, strategic planning, financial analysis, operational improvement, transactional support, and revenue cycle review. Our services encompass ASC development training and education, strategic planning, financial planning, transactional support, and operational improvement."></meta>
        <meta property="og:url" content="https://polaris.betoparedes.com/services  "></meta>
        <meta property="og:image" content="https://all-frontend-assets.s3.amazonaws.com/polaris_project/og_img/Polaris_Ambulatory_SERVICE_OG_image.webp"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="627"></meta>
        </Head>
    

    <div className="polaris_service_page_main_width">

      <div className={styles.polaris_service_page_full_width}>
        
        <div className={styles.service_page_banner_main_width}>
            <Navbar/>
            <div className={styles.common_width}>
                <div className={styles.service_bnr_left_cont}>
                    <h1>OUR SERVICES</h1>
                    <p>Polaris offers a comprehensive list of services for its healthcare clients. Our extensive list of services may be found in three broad categories. You may click on each service to find a more detailed description of the services we offer.</p>

                    <div className={styles.box_sec_main_wrpr}>
                        <div className={styles.box_section}>
                            <h2>Ambulatory Surgery Center Development</h2>
                        </div>
                        <div className={`${styles.box_section} ${styles.yellow_box}`}>
                            <h2>Healthcare<br></br> Consulting</h2>
                        </div>
                        <div className={`${styles.box_section} ${styles.skyblue_box}`}>
                            <h2>Operational<br></br> Improvement</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.service_page_block1_main_width}>
            <div className={styles.common_width}>
                <div className={styles.service_block1_right_cont}>
                    <div className={styles.green_heading}>
                        <h1>ASC Development Training and Education</h1>
                    </div>

                    <div className={styles.cont_part1}>
                        <p>We have developed a training and education program for those who are considering the development of an ambulatory surgery center (ASC), perhaps for the first time</p>
    
                        <h4>Our program covers six (6) key aspects of planning and developing an ASC:</h4>
                        <div className={styles.cont_part1_sub_bullet_cont}>
                            <h5>Project Assessment</h5>
                            <h5>Pre-Project Planning</h5>
                            <h5>Facility Design and Construction</h5>
                            <h5>Non-Clinical Operations</h5>
                            <h5>Clinical Operations </h5>
                            <h5>Go-Live</h5>
                        </div>
                    </div>

                    <div className={styles.cont_part2}>
                        <p>For those who have made the decision to develop an ambulatory surgery center, we offer three levels of consulting assistance:</p>
    
                        <h4>Mastermind Group</h4>

                        <h5>Group size: Up to fifteen (15) participants per group</h5>
                        <h5>Meetings: Semi-monthly; 1½ hours per week; email access for questions</h5>
                        <h5>Participants are not in direct competition with other members of the group</h5>

                        <h4>Mentoring</h4>

                        <h5>Group size: Individuals only; no other participants</h5>
                        <h5>Meetings: Weekly; 1 hour per week; 4 weeks per month; email access for questions</h5>

                        <h4>Consulting Services</h4>

                        <h5>Traditional consulting services may be engaged on an individualized basis</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.service_page_block2_main_width}>
            <div className={styles.common_width}>
                <div className={styles.block2_yellow_bar}>
                  <div className={styles.block_main_heading}>
                    <h1>Healthcare Consulting</h1>
                  </div>
                    <div className={styles.block2_yellow_bar_bullet_cont}>
                      <p>We have been actively involved in the healthcare industry since 1986</p>
                      <p>We are not just consultants, we are operators</p>
                      <p>Healthcare consulting services</p>
                    </div>
                </div>

                <div className={styles.service_block2_left_cont}>
                    <h1 className={styles.grey_heading}>STRATEGIC Planning</h1>
                    <p>We work with our clients to identify and prioritize strategies, assign responsibilities, and build accountability into every strategic plan</p>

                    <h4 className={styles.pink_bullet}>Having a sound strategy is critical to the success of your healthcare enterprise</h4>

                    <div className={styles.block2_left_cont}>
                        <p>Our strategic planning process covers 4 key steps:</p>
                            <div className={styles.cont_part1_sub_bullet_cont}>
                              <h5>Market Study</h5>
                              <h5>Physician Planning</h5>
                              <h5>Joint Venture Planning</h5>
                              <h5>Strategic Plan</h5>
                            </div>
    
                            <h4 className={styles.pink_bullet}>Each step builds on the one before it; the culmination of which is a detailed, execution ready strategic plan that includes individual accountability</h4>
                            <h4 className={styles.pink_bullet}>We work with our clients to identify up to ten (10) strategies to be deployed over the next 2-3 years</h4>
                            <h4 className={styles.pink_bullet}>We recommend our clients focus on the top 5-7 strategies</h4>
                      </div>

                      <div className={`${styles.block2_left_cont} ${styles.part_1}`}>
                        <p>At the conclusion of our process, you will receive a strategic plan with:</p>
                            <div className={styles.cont_part1_sub_bullet_cont}>
                              <h5>Top 5-7 strategies prioritized (could be more depending on the client situation)</h5>
                              <h5>Detailed tasks for each strategy</h5>
                              <h5>Timeline for completion of each strategy</h5>
                              <h5>Individual responsibility for the execution of each strategy</h5>
                            </div>
    
                            <h4 className={styles.pink_bullet}>The strategic plan is execution ready, and clients may begin implementation immediately</h4>
                            <h4 className={styles.pink_bullet}>Our strategic planning process also includes built-in accountability with the board of directors or other governing body to ensure successful execution of the strategic plan</h4>
                            <h4 className={styles.pink_bullet}>We are available to assist our clients with implementation if asked to do so</h4>
                      </div>
                </div>
            </div>
        </div>

        <div className={styles.service_page_block3_main_width}>
            <div className={styles.common_width}>
                <div className={styles.service_block3_right_cont}>
                  <div className={styles.block_main_heading}>
                    <h1 className={styles.grey_heading}>Financial Planning and Analysis</h1>
                  </div>
                  <h4 className={styles.pink_bullet}>We have over three (3) decades of experience managing and working at the executive level of hospitals, health systems, and large physician practices</h4>
                  <h4 className={styles.pink_bullet}>Our practice is built on a thorough understanding of the discipline<br></br> of healthcare finance</h4>

                  <div className={`${styles.block3_left_cont}`}>
                    <p>Our financial planning and analysis services are built to address:</p>
                        <div className={styles.cont_part1_sub_bullet_cont}>
                            <h5>Financial improvement opportunities within individual service lines</h5>
                            <h5>Planning for business expansion of current service lines</h5>
                            <h5>Planning growth into service lines</h5>
                            <h5>Performing financial due diligence on developing a new ambulatory surgery center</h5>
                        </div>
    
                    <h4 className={styles.pink_bullet}>Whether our clients are wanting to improve current operations or plan for an expansion of the enterprise, we have the experience to guide the process</h4>
                  </div>

                  <div className={`${styles.block3_left_cont} ${styles.part_2}`}>
                    <p>We have helped:</p>
                        <div className={styles.cont_part1_sub_bullet_cont}>
                            <h5>Hospitals improve financial performance in nearly every service line within the acute care setting</h5>
                            <h5>Physician practices reduce overhead while improving service and service capacity</h5>
                            <h5>With growth projects that include diverse partnerships, joint ventures, and large capital commitments</h5>
                        </div>
    
                    <h4 className={styles.pink_bullet}>Because we have operations in hospitals, health systems, and physician practices; we have the expertise to guide our clients through the process</h4>
                  </div>
                </div>
            </div>
        </div>

        <div className={styles.service_page_block4_main_width}>
            <div className={styles.common_width}>
                <div className={styles.service_block4_left_cont}>
                  <div className={styles.block4_main_heading}>
                    <h1>Transactional Support</h1>
                  </div>
                  <div className={`${styles.block4_left_cont}`}>
                    <p>We assist our clients with a broad range of transactions services,   including:</p>
                    <div className={styles.cont_part1_sub_bullet_cont}>
                      <h5>Financial due diligence</h5>
                      <h5>Joint venture design and implementation</h5>
                      <h5>Financial projections</h5>
                      <h5>Capital raise assistance</h5>
                      <h5>Partnership review and analysis</h5>
                    </div>
                  </div>
                  <h4 className={styles.pink_bullet}>Our recommendations are provided from the perspective of the operator</h4>
                  <h4 className={styles.pink_bullet}>We not only provide recommendations; we are available to help implement what we recommend</h4>

                <div className={styles.pink_round_img}>
                    <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/p_services_block4_round_img.webp'></img>
                </div>
                </div>
            </div>
        </div>

        <div className={styles.service_page_block5_main_width}>
            <div className={styles.common_width}>
                <div className={styles.service_block5_right_cont}>
                  <div className={styles.block_main_heading}>
                    <h1 className={styles.grey_heading}>Revenue Cycle Review</h1>
                  </div>

                  <h4 className={styles.pink_bullet}>Revenue cycle management is the financial lifeblood of every healthcare enterprise</h4>
                  <h4 className={styles.pink_bullet}>Managing the revenue cycle is demanding and involves clinical as well as non-clinical staff</h4>
                  <h4 className={styles.pink_bullet}>We work with our clients to develop more efficient and effective workflows designed to help the provider receive the reimbursement they deserve</h4>

                  <h5 className={styles.skyblue_bullet}>We work through teams that include physicians, nurses, allied health providers, and members of the business office revenue cycle team</h5>

                  <h4 className={styles.pink_bullet}>We use the principles of lean six sigma to ensure that our clients design process that are efficient and effective</h4>
                </div>
            </div>
        </div>

        <div className={styles.service_page_block6_main_width}>
          <div className={styles.common_width}>

            <div className={styles.service_page_block6_sky_box}>
              <div className={styles.block6_sky_box_left_cont}>
              <div className={styles.sky_box_heading}>
                <h1>Operational Improvement</h1>
              </div>

              <h4>Operational improvement is critical to every healthcare enterprise</h4>
              <div className={styles.white_sub_bullet}>
                <h5>Process improvement (Lean six sigma principles)</h5>
                <h5>Improve revenue capture</h5>
                <h5>Reduce cost</h5>
              </div>

              <h4>Our partner firms help our clients with:</h4>
              <div className={styles.white_sub_bullet}>
                <h5>Revenue Recovery Strategies</h5>
                <h5>Workplace Automation</h5>
              </div>
            </div>
            </div>

            <div className={styles.service_page_block6_part2_full_width}>
              <div className={styles.common_width}>
                <div className={styles.block6_part2_left_cont}>
                  <div className={styles.block_main_heading}>
                    <h1 className={styles.grey_heading}>Revenue Recovery Strategies</h1>
                  </div>

                  <h4 className={styles.pink_bullet}>Electronic Medical Record (EMR) systems are well tuned to ensure that healthcare providers collect every dollar that is on the explanation of benefits as the allowable charge.</h4>
                  <h4 className={styles.pink_bullet}>However, EMR systems are not necessarily designed to ensure that the provider has been paid for what is contractually owed to them for individual procedures or groups of procedures based on that provider’s specific commercial insurance contracts.</h4>
                  <h4 className={styles.pink_bullet}>Our partner firm has developed a proprietary process that allows them to convert client contracts into a database and compare what should have been paid contractually against what was reimbursed based on the explanation of benefits.</h4>
                  <h4 className={styles.pink_bullet}>Access Health is our business partner <span><Link href="https://adhcunderpayments.com/" target="_blank">(https://adhcunderpayments.com/)</Link></span>.</h4>
                  <h4 className={styles.pink_bullet}>Their specialty is underpayment recovery through their Medical Underpayment Review and Recapture Program.</h4>

                  <div className={styles.part2_right_girl}>
                    <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/p_services_block6_main_girl_img.webp'></img>
                  </div>
                  
                </div>

              </div>
            </div>

            <div className={styles.service_page_block6_part3_full_width}>
              <div className={styles.common_width}>
                <div className={styles.block6_part3_white_box}>
                  <div className={styles.block6_part3_white_box_main_wrpr}>

                    <div className={styles.part3_white_box_left_sec}>
                      <div className={styles.part3_left_sec_grey_bar}>
                        <h2>Their Tools:</h2>
                      </div>
                      <div className={styles.bullet_cont_part1}>
                        <h5>Team of payer contract experts</h5>
                        <h5>Most advanced forensic audit software system in the healthcare space</h5>
                        <h5>Analyze paid claims to determine contractual compliance of each reimbursement</h5>
                        <h5>System goes to work AFTER all claims are paid and AFTER all internal auditing and surveillance   activities are complete</h5>
                        <h5>NO UPFRONT COSTS; paid on a contingency basis once reimbursement has been recovered by the healthcare   provider</h5>
                        <h5>Access Healthcare takes 100% of the risk and effort to recover funds</h5>
                      </div>
                    </div>

                    <div className={`${styles.part3_white_box_left_sec} ${styles.part3_white_box_right_sec}`}>
                      <div className={styles.white_box_right_sec_main_wrpr}>

                        <div className={styles.white_box_right_sec_p1}>
                          <div className={`${styles.part3_left_sec_grey_bar} ${styles.right_sec_grey_bar_p1}`}>
                            <h2>Their market position:</h2>
                          </div>
                          <div className={`${styles.bullet_cont_part1} ${styles.bullet_cont}`}>
                            <h5>Hundreds of clients across the United States</h5>
                            <h5>Billions of dollars of reimbursements and remittances audited</h5>
                            <h5>Thousands of unique and often complex payers contracts audited </h5>
                          </div>
                        </div>

                        <div className={styles.white_box_right_sec_p2}>
                          <div className={`${styles.part3_left_sec_grey_bar} ${styles.right_sec_grey_bar_p2}`}>
                            <h2>Their results:</h2>
                          </div>
                          <div className={`${styles.bullet_cont_part1} ${styles.bullet_cont}`}>
                            <h5>Found reimbursement non-compliance and underpayments for 100% of client base</h5>
                            <h5>Typical results: 10-20% of gross payer receipts in recovery</h5>
                          </div>
                        </div>

                      </div>

                      <div className={styles.white_box_right_sec_cont}>
                        <h1>Visit their site at <span><Link href="https://adhcunderpayments.com/" target="_blank">https://adhcunderpayments.com/</Link></span> for more information and blinded case studies</h1>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.service_page_block7_main_width}>
          <div className={styles.common_width}>
            <div className={styles.service_page_block7_right_cont}>
              <div className={styles.block4_main_heading}>
                <h1>Workplace Automation</h1>
              </div>

              <h4 className={styles.pink_bullet}>Every healthcare organization struggles with:</h4>

              <div className={styles.cont_part1_sub_bullet_cont}>
                <h5 className={styles.skyblue_bullet}>Staffing shortages, staff costs, and the volume of work to be completed</h5>
                <h5 className={styles.skyblue_bullet}>Manually entering key information into disparate systems by multiple staff members bottlenecks in the processing of key information</h5>
                <h5 className={styles.skyblue_bullet}>Delays in information processing due to staff time constraints (PTO, sick days, competing projects and deadlines)</h5>
              </div>

              <h4 className={styles.pink_bullet}>Business process automation is critical to capturing critical information in a timely and efficient manner, improving staff performance, and lowering operating costs for the provider</h4>
              <h4 className={styles.pink_bullet}>Our business partner, Optimally, provides businesses with enterprise-level business process automation</h4>

              <div className={styles.cont_part1_sub_bullet_cont}>
                <h5 className={styles.skyblue_bullet}>No upfront costs</h5>
                <h5 className={styles.skyblue_bullet}>No need for internal IT support</h5>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.service_page_block8_main_width}>
          <div className={styles.common_width}>
            <div className={styles.service_page_block8_left_cont}>
            <h4 className={styles.pink_bullet}>Automation of manual processes involving a variety of systems and tasks</h4>

            <div className={styles.cont_part1_sub_bullet_cont}>
              <h5 className={styles.skyblue_bullet}>Excel-based workflows and project tracking</h5>
              <h5 className={styles.skyblue_bullet}>Download of EMR, accounting, and other source information into Excel for key performance indicator and dashboard reporting, review, and analysis</h5>
            </div>

            <h4 className={styles.pink_bullet}>Optimally, digitizes and automates business processes to reduce manual labor costs and process inefficiencies</h4>
            <h4 className={styles.pink_bullet}>Business Process Automation (BPA) allows:</h4>

            <h5 className={styles.skyblue_bullet}>Streamlining and automation of repetitive and manual tasks</h5>
            <h5 className={styles.skyblue_bullet}>Frees up time and resources</h5>
            <h5 className={styles.skyblue_bullet}>Allows staff to focus on more meaningful and high impact projects</h5>
            
            <h4 className={styles.pink_bullet}>Benefits of BPA:</h4>

            <div className={styles.cont_part1_sub_bullet_cont}>
              <h5 className={styles.skyblue_bullet}>Increase productivity</h5>
              <h5 className={styles.skyblue_bullet}>Reduce errors</h5>
              <h5 className={styles.skyblue_bullet}>Cost savings</h5>
              <h5 className={styles.skyblue_bullet}>Time savings</h5>
              <h5 className={styles.skyblue_bullet}>Scalability</h5>
            </div>
            </div>
          </div>
        </div>

      </div>

      

      <div className={styles.service_demo_img}>
        {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_banner_demo.webp'></img> */}
        {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block1_demo.webp'></img> */}
        {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block2_demo.webp'></img> */}
        {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block3_demo.webp'></img> */}
        {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block4_demo.webp'></img> */}
        {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block5_demo.webp'></img> */}
        {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block6_demo.webp'></img> */}
        {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block7_demo.webp'></img> */}
        {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/polaris_service_page/Polaris_service_block8_demo.webp'></img> */}
      </div>

      <Footer/>
    </div>

    </>
  )
}
