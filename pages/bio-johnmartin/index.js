import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import Head from 'next/head'
import React from 'react'
import styles from './johnD.module.css'
import Link from 'next/link'

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

      {/* ---------------------------------------------biswarup------------------------------------------- */}

      <div className="polaris_j_martin_page_main_width">

        <div className={styles.polaris_j_martin_page_full_width}>

          <div className={styles.j_martin_page_banner_main_width}>
            <Navbar />
            <div className={styles.common_width}>
              <div className={styles.j_martin_bnr_left_cont}>
                <h1>BIO</h1>

                <div className={styles.yellow_box_sec_main_width}>
                  <h2>Our leadership team</h2>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.j_martin_page_block1_main_width}>
            <div className={styles.common_width}>
              <div className={styles.j_martin_page_block1_white_box}>
                <div className={styles.block1_white_box_grey_bar}>
                  <h1>John D Martin</h1>
                </div>

                <div className={styles.block1_white_box_main_wrpr}>

                  <div className={styles.block1_white_box_left_sec}>
                    <div className={styles.white_box_left_sec_img_box}>
                      <div className={styles.left_sec_img_sub_box}>
                        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/john_d_martin/john_d_martin_img.webp'></img>
                      </div>
                    </div>
                  </div>

                  <div className={styles.block1_white_box_right_sec}>
                    <p>John Martin is the Managing Director – Healthcare Consulting of Polaris Business Consultants. With over thirty-five years of experience in healthcare, he has worked in large medical practices, specialty hospitals, and health systems. John graduated with an accounting degree from the Indiana University Kelley School of Business in 1988. His career has included roles as Director of Business Development, Administrator, Chief Financial Officer, and Chief Executive Officer.</p>

                    <p>John began his consulting career in 2012 after leaving his role as Chief Executive Officer of Orthopaedics Indianapolis in Indianapolis, IN. Throughout his career in healthcare, he has participated in more than 20 development projects including hospitals, specialty hospitals, ambulatory surgery centers, and medical office buildings. The cornerstone of every project has been to achieve alignment between hospitals and physicians in the delivery of healthcare services. He has participated in service line development covering every major specialty in healthcare delivery improving financial performance, care delivery, and creating specialty specific physician alignment strategies.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className={styles.j_martin_page_block2_main_width}>
            <div className={styles.common_width}>
              <div className={styles.j_martin_page_block2_blue_box}>

                <div className={styles.block2_grey_bar}>
                  <h1>Career Highlights</h1>
                </div>

                <div className={styles.block2_blue_box_sub_white_box}>
                  <p>John is a senior executive with over thirty-five years of progressive financial management, strategic planning, and operational experience in the healthcare industry. In addition to all facets of financial and operational management, he has most recently been involved with financial feasibility studies, joint venture planning and execution, physician hospital development, physician/hospital integration, process improvement, hospital and physician practice management, and enterprise level strategic and operational planning.</p>

                  <div className={styles.block2_white_box_sub_heading}>
                    <h2>Specific areas of expertise include:</h2>
                  </div>

                  <div className={styles.block2_bullet_cont_main_wrpr}>

                    <div className={styles.bullet_cont_part_main_width}>
                      <h3 className={styles.orange_bullet_cont}>Strategic Planning</h3>
                      <h3 className={styles.orange_bullet_cont}>Financial Management</h3>

                      <div className={styles.green_bullet_cont_wrpr}>
                        <h5 className={styles.green_bullet_cont}>Financial Improvement</h5>
                        <h5 className={styles.green_bullet_cont}>Financial Projections</h5>
                        <h5 className={styles.green_bullet_cont}>Operational Budgeting</h5>
                        <h5 className={styles.green_bullet_cont}>Capital Budgeting</h5>
                        <h5 className={styles.green_bullet_cont}>Financial Statement Review and Analysis</h5>
                      </div>
                    </div>

                    <div className={`${styles.bullet_cont_part_main_width} ${styles.part_2}`}>
                      <h3 className={styles.orange_bullet_cont}>Operational and Process Improvement</h3>
                      <h3 className={styles.orange_bullet_cont}>Project Development</h3>

                      <div className={styles.green_bullet_cont_wrpr}>
                        <h5 className={styles.green_bullet_cont}>Facility Design</h5>
                        <h5 className={styles.green_bullet_cont}>Project Management</h5>
                        <h5 className={styles.green_bullet_cont}>Financial Due Diligence</h5>
                      </div>
                    </div>

                    <div className={`${styles.bullet_cont_part_main_width} ${styles.part_3}`}>
                      <h3 className={styles.orange_bullet_cont}>Transactions </h3>

                      <h5 className={styles.green_bullet_cont}>Structure</h5>
                      <h5 className={styles.green_bullet_cont}>Physician / Hospital Partnerships</h5>
                      <h5 className={styles.green_bullet_cont}>Analysis</h5>
                      <h5 className={styles.green_bullet_cont}>Financial Due Diligence</h5>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className={styles.common_width}>
            <div className={styles.blue_heading}>
              <h1>Resume Details</h1>
            </div>
          </div>

          <div className={styles.j_martin_page_block3_main_width}>
            <div className={styles.common_width}>
              <div className={styles.j_martin_page_grey_box}>

                <div className={styles.j_martin_page_sub_box}>

                  <div className={styles.block3_sky_bar}>
                    <div className={styles.sky_bar_main_wrpr}>

                      <div className={styles.sky_bar_left_section}>
                        <h2>Polaris Business Consultants</h2>
                        <p>9292 N Meridian Street Suite 150 Indianapolis, IN 46260</p>
                      </div>

                      <div className={styles.sky_bar_right_section}>
                        <h3>September, 2023 – Current</h3>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cont_part_main}>
                    <div className={styles.block3_cont_part}>
                      <h2>Managing Director – Healthcare Consulting</h2>
                      <p>In September, 2023, JD Martin Healthcare Advisors was combined into Polaris Business Consultants. The focus of this consulting practice remains the same:</p>

                      <div className={styles.block3_bullet_cont_part}>
                        <div className={styles.orange_bullet_cont_wrpr}>
                          <h3 className={styles.orange_bullet_cont}>Strategic Planning</h3>
                          <h3 className={styles.orange_bullet_cont}>Operational and Process Improvement</h3>
                          <h3 className={styles.orange_bullet_cont}>Project Development</h3>
                          <h3 className={styles.orange_bullet_cont}>Capital Transactions</h3>
                          <h3 className={styles.orange_bullet_cont}>Financial Management</h3>
                        </div>

                        <div className={styles.green_bullet_cont_wrpr}>
                          <h5 className={styles.green_bullet_cont}>Financial Projections</h5>
                          <h5 className={styles.green_bullet_cont}>Operational and Capital Budgeting</h5>
                        </div>
                      </div>

                      <p>Through my consulting practice I served as the Chief Executive Officer and the Chief Financial Officer of Caribbean Healthcare Partners. I have also served as the part-time Chief Financial Officer of other companies. My company focuses on all aspects of financial management and project development for large capital projects.</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className={styles.j_martin_page_block4_main_width}>
            <div className={styles.common_width}>
              <div className={styles.j_martin_page_grey_box}>

                <div className={styles.j_martin_page_sub_box}>
                  <div className={styles.block3_sky_bar}>
                    <div className={styles.sky_bar_main_wrpr}>

                      <div className={styles.sky_bar_left_section}>
                        <h2>JD Martin Enterprises</h2>
                        <h2>d/b/a JD Martin Healthcare Advisors</h2>
                        <p>9046 E 10th Street Indianapolis, IN 46219</p>
                      </div>

                      <div className={styles.sky_bar_right_section}>
                        <h3>April, 2018 – Current</h3>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cont_part_main}>
                    <div className={styles.block3_cont_part}>
                      <h2>Managing Partner</h2>
                      <p>In April, 2018, I became the Managing Partner of JD Martin Enterprises d/b/a JD Martin Healthcare Advisors. The focus of my consulting practice is:</p>

                      <div className={styles.block3_bullet_cont_part}>
                        <div className={styles.orange_bullet_cont_wrpr}>
                          <h3 className={styles.orange_bullet_cont}>Strategic Planning</h3>
                          <h3 className={styles.orange_bullet_cont}>Operational and Process Improvement</h3>
                          <h3 className={styles.orange_bullet_cont}>Project Development</h3>
                          <h3 className={styles.orange_bullet_cont}>Capital Transactions</h3>
                          <h3 className={styles.orange_bullet_cont}>Financial Management</h3>
                        </div>

                        <div className={styles.green_bullet_cont_wrpr}>
                          <h5 className={styles.green_bullet_cont}>Financial Projections</h5>
                          <h5 className={styles.green_bullet_cont}>Operational and Capital Budgeting</h5>
                        </div>
                      </div>

                      <p>Through my consulting practice I served as the Chief Executive Officer and the Chief Financial Officer of Caribbean Healthcare Partners. I have also served as the part-time Chief Financial Officer of other companies. My company focuses on all aspects of financial management and project development for large capital projects.</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className={styles.j_martin_page_block5_main_width}>
            <div className={styles.common_width}>
              <div className={styles.j_martin_page_grey_box}>

                <div className={styles.j_martin_page_sub_box}>
                  <div className={styles.block3_sky_bar}>
                    <div className={styles.sky_bar_main_wrpr}>

                      <div className={styles.sky_bar_left_section}>
                        <h2>Caribbean Healthcare Partners</h2>
                        <p>St. Christopher and Nevis, West Indies</p>
                      </div>

                      <div className={styles.sky_bar_right_section}>
                        <h3>April, 2018 – December, 2020</h3>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cont_part_main}>
                    <div className={styles.block3_cont_part}>
                      <h2>Chief Executive Officer / Chief Financial Officer</h2>
                      <p>Caribbean Healthcare Partners is a company that was formed to develop an orthopedic and spine surgical facility in the Federation of St. Christopher (St. Kitts) & Nevis. My responsibilities included:</p>

                      <div className={styles.block3_bullet_cont_part}>
                        <div className={styles.orange_bullet_cont_wrpr}>
                          <h3 className={styles.orange_bullet_cont}>All aspects of financial projections including assumptions and financial results</h3>
                          <h3 className={styles.orange_bullet_cont}>Staff planning</h3>
                          <h3 className={styles.orange_bullet_cont}>Service planning</h3>
                          <h3 className={styles.orange_bullet_cont}>Facility sizing and design management</h3>
                          <h3 className={styles.orange_bullet_cont}>Strategic planning including development of a non-surgical clinic</h3>
                          <h3 className={styles.orange_bullet_cont}>Design of investment structure</h3>
                          <h3 className={styles.orange_bullet_cont}>Cash flow management</h3>
                          <h3 className={styles.orange_bullet_cont}>Negotiations with equity investors</h3>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className={`${styles.j_martin_page_block5_main_width} ${styles.j_martin_page_block6_main_width}`}>
            <div className={styles.common_width}>
              <div className={styles.j_martin_page_grey_box}>

                <div className={styles.j_martin_page_sub_box}>
                  <div className={styles.block3_sky_bar}>
                    <div className={styles.sky_bar_main_wrpr}>

                      <div className={styles.sky_bar_left_section}>
                        <h2>Katz, Sapper & Miller (KSM)</h2>
                        <p>800 East 96th Street ,Suite 500 Indianapolis, IN 46240</p>
                      </div>

                      <div className={styles.sky_bar_right_section}>
                        <h3>January, 2015 – March, 2018</h3>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cont_part_main}>
                    <div className={styles.block3_cont_part}>
                      <h2>Managing Director, Healthcare Consulting</h2>
                      <p>In January, 2015, I became the Managing Director, Healthcare Consulting for KSM.  In this role, I am responsible for growth of the hospital consulting practice within the firm.  While our firm provides comprehensive consulting services to our physician and hospital clients, initially we are focused on the following service areas from a marketing and growth perspective:</p>

                      <div className={styles.block3_bullet_cont_part}>
                        <div className={styles.orange_bullet_cont_wrpr}>
                          <h3 className={styles.orange_bullet_cont}>Strategic Planning</h3>
                          <h3 className={styles.orange_bullet_cont}>Market Assessment</h3>
                          <h3 className={styles.orange_bullet_cont}>Financial Planning</h3>
                          <h3 className={styles.orange_bullet_cont}>Operational Improvement</h3>
                          <h3 className={styles.orange_bullet_cont}>Physician/Hospital Integration</h3>
                          <h3 className={styles.orange_bullet_cont}>Healthcare Reform Preparedness</h3>
                        </div>
                      </div>

                      <p>Early projects have included development of specialty specific institutes, market analyses, strategic planning, new service development, hospital acquisition due diligence, physician manpower needs assessments, practice combinations, physician/hospital integration strategies and execution</p>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className={styles.j_martin_page_block7_main_width}>
            <div className={styles.common_width}>
              <div className={styles.j_martin_page_grey_box}>

                <div className={styles.j_martin_page_sub_box}>
                  <div className={styles.block3_sky_bar}>
                    <div className={styles.sky_bar_main_wrpr}>

                      <div className={styles.sky_bar_left_section}>
                        <h2>JD Martin Company, LLC</h2>
                        <p>1547 N State Street,PMB 107, Greenfield, IN 46140</p>
                      </div>

                      <div className={styles.sky_bar_right_section}>
                        <h3>June, 2012 – December, 2014</h3>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cont_part_main}>
                    <div className={styles.block3_cont_part}>
                      <h2>Principal</h2>
                      <p>After the success I enjoyed as Chief Executive Officer of OrthoIndy Enterprises, I left to start a healthcare consulting firm.</p>
                      <p>This firm focuses on:</p>

                      <div className={styles.block3_bullet_cont_part}>
                        <div className={styles.orange_bullet_cont_wrpr}>
                          <h3 className={styles.orange_bullet_cont}>Strategic Planning</h3>
                          <h3 className={styles.orange_bullet_cont}>Financial Planning</h3>
                          <h3 className={styles.orange_bullet_cont}>Operational Planning</h3>
                          <h3 className={styles.orange_bullet_cont}>Physician/Hospital Integration</h3>
                        </div>
                      </div>

                      <p>Early projects have included developing orthopaedic centers of excellence, general surgery centers of excellence, integration with primary care, and due diligence on orthopaedic focused hospital expansions.</p>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className={styles.j_martin_page_block8_main_width}>
            <div className={styles.common_width}>
              <div className={styles.j_martin_page_grey_box}>

                <div className={styles.j_martin_page_sub_box}>
                  <div className={styles.block3_sky_bar}>
                    <div className={styles.sky_bar_main_wrpr}>

                      <div className={styles.sky_bar_left_section}>
                        <h2>OrthoIndy Enterprises</h2>
                        <p>8450 Northwest Boulevard Indianapolis, IN 46278</p>
                      </div>

                      <div className={styles.sky_bar_right_section}>
                        <h3>Aug, 2004 – June, 2012</h3>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cont_part_main}>
                    <div className={styles.block3_cont_part}>

                      <div className={styles.block3_cont_top_sec_wrpr}>

                        <div className={styles.cont_top_sec_wrpr_left}>
                          <h2>Chief Executive Officer</h2>
                          <h3>(OrthoIndy/OrthoIndy Enterprises)</h3>
                        </div>

                        <div className={styles.cont_top_sec_wrpr_right}>
                          <h3>Oct, 2006 – June, 2012</h3>
                        </div>

                      </div>

                      <div className={styles.block1_white_box_cont_sec}>

                        <div className={styles.block1_white_box_left_sec}>
                          <div className={styles.white_box_left_sec_img_box}>
                            <div className={styles.left_sec_img_sub_box}>
                              <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/john_d_martin/john_d_martin_block8_right_img.webp'></img>
                            </div>
                          </div>
                        </div>

                        <div className={styles.block1_white_box_right_sec_cont}>
                          <p>After success opening Indiana Orthopaedic Hospital, I earned the opportunity to become the CEO of OrthoIndy in October of 2006.  Our focus had been on planning and opening the hospital for several years, so the practice was in need of attention.  Since taking over in 2006, my focus has been on improving operations, adjusting to the new healthcare climate, rightsizing existing locations, developing key new locations, identifying new markets, and enterprise level strategic planning.</p>

                          <p>Under my direction, we have reduced staff 17%, increased physician staff by 24%, and improved service to our patients and physicians. We have also opened two new full service outpatient locations under my direction: one in Brownsburg and one in Greenwood.  We have entered new markets in Jennings, Dunn, and Hancock County. Two years ago we identified the need to create a management company and take advantage of our experience in running hospital orthopedic departments and physician practices. I led the project to create OrthoIndy Enterprises. OrthoIndy Enterprises is a management company that employs all of our non-clinical employees. We are positioned to provide management services to hospitals and physician practices throughout a five state area.</p>

                          <p>I have also been responsible for fostering our relationship with St. Vincent Hospital Indianapolis, St. Vincent Carmel, Community Health Network, and Hancock Regional Hospital among others.  Under my direction, we have significantly improved our physician/hospital relationships.  We are beginning to partner more closely with certain hospitals in our market and in surrounding communities.</p>
                        </div>

                      </div>

                      <div className={styles.block3_cont_top_sec_wrpr}>
                        <div className={styles.cont_part2_left_sec}>
                          <h3>Indiana Orthopaedic Hospital, Chief Executive Officer</h3>
                        </div>

                        <div className={styles.cont_part2_right_sec}>
                          <h4>Aug, 2004 – Oct, 2006</h4>
                        </div>
                      </div>

                      <div className={styles.part2_cont}>
                        <div className={styles.block1_white_box_right_sec_cont}>
                          <p>I began my career with OrthoIndy as the Chief Executive Officer for their new hospital, the Indiana Orthopaedic Hospital.  Formed as a 100% physician owned and operated hospital, my responsibility was to take the facility from mid-construction to Medicare certified and open for operations.  We opened on time and within budget on March 1, 2005.  It was my responsibility to ensure that we complied with all state and federal guidelines to open.  I was also responsible for ensuring that we opened with a fully electronic health record.  We opened with Meditech fully operational and utilizing all of its components for a completely electronic health record.  We passed both our pre-occupancy survey and our full survey 3 weeks later with no major citations.  Our Medicare certification was retroactive to our date of opening.</p>

                          <p>I was also responsible for negotiating payer contracts and ensuring profitability.  I was able to secure managed care contracts with all major payers in our market within our first year of operation.  Additionally, we were able to pay off all of our revolving debt and produced a profit in our first 12 months of operation.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className={styles.j_martin_page_block9_main_width}>
            <div className={styles.common_width}>
              <div className={styles.j_martin_page_grey_box}>

                <div className={styles.j_martin_page_sub_box}>
                  <div className={styles.block3_sky_bar}>
                    <div className={styles.sky_bar_main_wrpr}>

                      <div className={styles.sky_bar_left_section}>
                        <h2>St. Francis Hospital and Health Centers</h2>
                        <p>1500 Albany Street Suite 1101,Beech Grove, IN  46107</p>
                      </div>

                      <div className={styles.sky_bar_right_section}>
                        <h3>Sep, 2000 – Aug, 2004</h3>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cont_part_main}>
                    <div className={styles.block3_cont_part}>
                      <h2>Director of Financial Planning and Business Development</h2>
                      <p>In this position, I have been responsible for all of the major capital projects of St. Francis Hospital.  I have done the financial feasibility work on all of our projects with a capital value greater than $150,000.  The three largest active projects with which I have been involved include the new $60,000,000 cardiac facility, the $20,000,000 expansion project in Mooresville, and the new (as of July, 2002) developer owned medical office building on our Indianapolis Campus.  I report directly to the regional chief financial officer, and spend the majority of my time supporting our senior management team.</p>

                    </div>

                    <div className={styles.block3_cont_part}>
                      <h2>Business Development</h2>
                      <p>My business development responsibilities include bringing new lines of business to the hospital, evaluating current lines of business for expansion/improvement opportunities, and evaluating joint venture opportunities with our physician partners. In addition to the three projects mentioned above, I have performed all of the financial feasibility work on at least 6 joint ventures and numerous other new hospital programs. Typical business development analysis will include one or more of the following elements:</p>

                      <div className={styles.block3_bullet_cont_part}>
                        <div className={styles.orange_bullet_cont_wrpr}>
                          <h3 className={styles.orange_bullet_cont}>Evaluate the market for and financial feasibility of entering into a new business opportunity. This includes determining market need for the service being considered, capital required to launch the new business venture and the long-term probability of financial success.</h3>
                          <h3 className={styles.orange_bullet_cont}>Evaluate financing alternatives available to the new venture. I determine the proper mix of equity, debt, and working capital line of credit for the long-term success of the new venture.</h3>
                          <h3 className={styles.orange_bullet_cont}>Evaluate the best location and facilities required for the new venture. This includes determining whether or not the venture should be located in hospital, joint venture, or developer owned facilities.</h3>
                          <h3 className={styles.orange_bullet_cont}>Finally, I have negotiated several transactions that include having a developer/owner build and own a building on hospital owned ground. I have assisted in negotiating the underlying ground lease and related financial terms.</h3>
                        </div>
                      </div>

                    </div>

                    <div className={styles.block3_cont_part}>
                      <h2>Financial/Capital Planning</h2>
                      
                      <div className={styles.block1_white_box_main_width}>
                        <div className={styles.block1_white_box_main_wrpr}>

                          <div className={styles.block1_white_box_left_sec}>
                            <div className={styles.white_box_left_sec_img_box}>
                              <div className={styles.left_sec_img_sub_box}>
                                <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/john_d_martin/j_martin_page_block9_left_img.webp'></img>
                              </div>
                            </div>
                          </div> 

                          <div className={styles.block1_white_box_right_sec}>
                            <p>My financial planning responsibilities include determining how to improve the financial and operational performance of existing lines of business. This includes evaluating opportunities for growth, cost reductions, and operational improvement. I work with product line managers and directors to set improvement plans and then deliver those plans to senior management.</p>

                            <p>My capital planning responsibilities include determining the growth opportunities available for projects with an initial investment in excess of $500,000. Analysis includes market opportunity, financial statement proforma development, discounted cash flow analysis, and calculation of internal rate of return. These projects are often evaluated with a team of six or eight managers/directors. My responsibilities include leading the evaluation team, building a business and financial plan, and then writing and presenting the recommendation(s) to senior management.</p>
                          </div>

                        </div>
                      </div>

                    </div>

                    <div className={styles.block3_cont_part}>
                      <h2>Decision Support</h2>
                      <p>I am also responsible for the development and maintenance of a hospital (and system) wide decision support system.  This system is designed to enhance decision making at the operational and capital/business planning levels.</p>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className={styles.j_martin_page_block10_main_width}>
            <div className={styles.common_width}>
              <div className={styles.j_martin_page_grey_box}>

                <div className={styles.j_martin_page_sub_box}>
                  <div className={styles.block3_sky_bar}>
                    <div className={styles.sky_bar_main_wrpr}>

                      <div className={styles.sky_bar_left_section}>
                        <h2>BKD, LLP (formerly Olive LLP)</h2>
                        <p>201 North Illinois Street Suite 700 Indianapolis, IN  46204</p>
                      </div>

                      <div className={styles.sky_bar_right_section}>
                        <h3>May, 1999 – Sep, 2000</h3>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cont_part_main}>
                    <div className={styles.block3_cont_part}>
                      <h2>Consultant – Healthcare</h2>
                      <p>As a consultant with BKD Healthcare Services, I was responsible for working primarily with physician practices, radiology practices, management services organizations, small hospitals and multi-specialty clinics on operational performance issues. The scope of these engagements included: </p>

                      <div className={styles.block3_bullet_cont_part}>
                        <div className={styles.orange_bullet_cont_wrpr}>
                          <h3 className={styles.orange_bullet_cont}>Making recommendations regarding entity specific turnaround opportunities</h3>
                          <h3 className={styles.orange_bullet_cont}>Analysis of lost revenue opportunities and plans for future recapture</h3>
                          <h3 className={styles.orange_bullet_cont}>Development of finance policies and procedures</h3>
                          <h3 className={styles.orange_bullet_cont}>Operational and financial improvement planning and recommendation</h3>
                          <h3 className={styles.orange_bullet_cont}>Information systems evaluation and recommendation</h3>
                        </div>
                      </div>

                      <p>I was also charged with writing business plans to address opportunities in the radiology niche market and for healthcare information technology services.  These business plans detailed specific opportunities for practice expansion.</p>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className={styles.j_martin_page_block11_main_width}>
            <div className={styles.common_width}>
              <div className={styles.j_martin_page_grey_box}>

                <div className={styles.j_martin_page_sub_box}>
                  <div className={styles.block3_sky_bar}>
                    <div className={styles.sky_bar_main_wrpr}>

                      <div className={styles.sky_bar_left_section}>
                        <h2>Radiology Associates of Indianapolis</h2>
                        <p>1500 Albany Street, Suite 906 Beech Grove, IN  46107</p>
                      </div>

                      <div className={styles.sky_bar_right_section}>
                        <h3>Oct, 1995 – April, 1999</h3>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cont_part_main}>
                    <div className={styles.block3_cont_part}>
                      <h2>Administrator</h2>
                      <p>I was responsible for the day-to-day operations of the practice. I kept physician leadership informed of current industry trends affecting the group practice environment. Also kept physician leadership up-to-date on financial and operational status of the corporation. I managed a staff of 15 FTE’s who were responsible for carrying out daily activities as directed. I had four key areas of responsibility including: information systems selection, design and implementation; financial reporting, compliance monitoring and opportunity analysis; human resources benefit management and design, physician recruiting support, and pension administration; and administrative responsibility for daily operations, general insurance coverage, and hospital relationship management.</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>



      {/* ---------------------------------------------biswarup--------------------------------------------- */}












      {/* <Navbar /> */}
      <div className={styles.polaris_JDM_BIO_width}>

        <div className={styles.JDM_bio_page}>
          {/* <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/john_d_martin/POLARIS_JOHN_D_MARTIN_BIO_img.webp" /> */}
        </div>
        <div className={styles.JDM_bio_page}>
          <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/john_d_martin/POLARIS_JOHN_D_MARTIN_BLOCK1_img.webp" />
        </div>
        {/* <div className={styles.JDM_bio_page}>
        <img src="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_john_d_block2.webp"/>
      </div> */}

      </div>

      {/* -------------------------------------------------------------------souvik--------------------------------------------------------------------------- */}
      <div className={styles.polaris_j_martin_page_key_main_main_blk}>
        <div className={styles.common_width}>
          <div className={styles.polaris_j_martin_page_key_main_main_sub_blk}>
            <h1>Key Career Accomplishments</h1>
          </div>
          <div className={styles.polaris_j_martin_page_key_main_sub1_main_blk}>
            <div className={styles.polaris_j_martin_page_key_main_sub1_sec1_blk}>
              <h2>Specialization</h2>
            </div>
            <div className={styles.block2_bullet_cont_main_wrpr}>

              <div className={styles.bullet_cont_part_main_width}>
                <h3 className={styles.orange_bullet_cont}>Strategic Planning</h3>
                <h3 className={styles.orange_bullet_cont}>Financial Management</h3>

                <div className={styles.green_bullet_cont_wrpr}>
                  <h5 className={styles.green_bullet_cont}>Financial Improvement</h5>
                  <h5 className={styles.green_bullet_cont}>Financial Projections</h5>
                  <h5 className={styles.green_bullet_cont}>Operational Budgeting</h5>
                  <h5 className={styles.green_bullet_cont}>Capital Budgeting</h5>
                  <h5 className={styles.green_bullet_cont}>Financial Statement Review and Analysis</h5>
                </div>
              </div>

              <div className={`${styles.bullet_cont_part_main_width} ${styles.part_2}`}>
                <h3 className={styles.orange_bullet_cont}>Operational and Process Improvement</h3>
                <h3 className={styles.orange_bullet_cont}>Project Development</h3>

                <div className={styles.green_bullet_cont_wrpr}>
                  <h5 className={styles.green_bullet_cont}>Facility Design</h5>
                  <h5 className={styles.green_bullet_cont}>Project Management</h5>
                  <h5 className={styles.green_bullet_cont}>Financial Due Diligence</h5>
                </div>
              </div>

              <div className={`${styles.bullet_cont_part_main_width} ${styles.part_3}`}>
                <h3 className={styles.orange_bullet_cont}>Transactions </h3>

                <h5 className={styles.green_bullet_cont}>Structure</h5>
                <h5 className={styles.green_bullet_cont}>Physician / Hospital Partnerships</h5>
                <h5 className={styles.green_bullet_cont}>Analysis</h5>
                <h5 className={styles.green_bullet_cont}>Financial Due Diligence</h5>
              </div>

            </div>
          </div>


          <div className={styles.polaris_j_martin_page_key_main_sub2_main_blk}>
            <div className={styles.polaris_j_martin_page_key_main_sub1_main_blk}>
              <div className={styles.polaris_j_martin_page_key_main_sub1_sec1_blk}>
                <h2>Service Line Strategies</h2>
              </div>
              <p>Assessed and implemented strategies in every major service line within a full-service hospital setting including:</p>
              <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_blk}>
                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                  <p>Orthopedics</p>
                </div>
                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                  <p>General Surgery</p>
                </div>
                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                  <p>Minimally Invasive Surgery</p>
                </div>
                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                  <p>Oncology</p>
                </div>
                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                  <p>Cardiology</p>
                </div>
                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                  <p>Bariatrics</p>
                </div>
                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                  <p>Women’s Health</p>
                </div>
                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                  <p>Pediatrics</p>
                </div>
                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                  <p>Behavior Health / Autism</p>
                </div>

              </div>
            </div>
          </div>

          <div className={styles.polaris_j_martin_page_key_main_sub3_main_blk}>
            <div className={styles.polaris_j_martin_page_key_main_sub2_main_blk}>
              <div className={styles.polaris_j_martin_page_key_main_sub1_main_blk}>
                <div className={styles.polaris_j_martin_page_key_main_sub1_sec1_blk}>
                  <h2>International Development</h2>
                </div>
                <h6>Roatan, Honduras</h6>
                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_blk}>
                  <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                    <p>Worked with local hospital owner, physicians and developer to create plans for an ambulatory surgery center to be developed in an
                      “economic free trade zone” on the island of Roatan</p>
                  </div>
                  <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                    <p>Initial capital and operating budgets were developed</p>
                  </div>
                  <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                    <p>Investment framework developed for future investors in the project</p>
                  </div>
                  <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                    <p>Designed to provide advanced surgery services to locals and as a travel medicine program</p>
                  </div>





                </div>
              </div>
            </div>
          </div>

          <div className={styles.polaris_j_martin_page_key_main_sub4_main_blk}>
            <div className={styles.polaris_j_martin_page_key_main_sub3_main_blk}>
              <div className={styles.polaris_j_martin_page_key_main_sub2_main_blk}>
                <div className={styles.polaris_j_martin_page_key_main_sub1_main_blk}>
                  <div className={styles.polaris_j_martin_page_key_main_sub1_sec1_blk}>
                    <h2>St. Kitts and Nevis</h2>
                  </div>
                  <h6>Oceans Medical Clinic</h6>
                  <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_blk}>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Working with physician to bring advanced treatments to the island of St. Kitts</p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Facility provides physical therapy, pain management including injections, 5 patient exam rooms, diagnostic cardiology, laboratory services, x-ray / C-Arm, ultrasound, and DXA scanning</p>
                    </div>

                  </div>
                  <h6>Surgical Facility</h6>
                  <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Worked with Caribbean Healthcare Partners to develop a spine and
                        orthopedic surgical facility in St. Kitts and Nevis</p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Selected architecture firm and designed facility</p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>The surgical facility was designed to be a travel-medicine destination</p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Developed financial due diligence package, investor
                        presentation, investment documents, and secure investment
                        for the facility</p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Worked with founder of Caribbean Healthcare Partners to raise capital
                        for the operating company</p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Project was put on hold due to COVID</p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Selected real estate developer to raise capital for the construction and to
                        manage development of the real estate and building</p>
                    </div>

                  </div>

                  <h6>Clinic</h6>
                  <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Designed to bring advanced services to the island for both
                        island nationals and as a component of the medical travel program</p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Developed a medical clinic in Frigate Bay, St. Kitts</p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Facility provided physical therapy, pain management including injections,
                        5 patient exam rooms, laboratory services, x-ray/C-Arm, ultrasound,
                        and DXA scanning</p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>Project was put on hold due to COVID</p>
                    </div>




                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.polaris_j_martin_page_key_main_sub5_main_blk}>
            <div className={styles.polaris_j_martin_page_key_main_sub4_main_blk}>
              <div className={styles.polaris_j_martin_page_key_main_sub3_main_blk}>
                <div className={styles.polaris_j_martin_page_key_main_sub2_main_blk}>
                  <div className={styles.polaris_j_martin_page_key_main_sub1_main_blk}>
                    <div className={styles.polaris_j_martin_page_key_main_sub1_sec1_blk}>
                      <h2>Transactions</h2>
                    </div>
                    <h6>Orthopaedics Indianapolis (“OrthoIndy”) / Indiana Orthopaedic Hospital</h6>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_blk}>
                      <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                        <p>Began career in August, 2004 as CEO of the Indiana Orthopaedic Hospital</p>
                      </div>
                      <div className={styles.green_bullet_cont_wrpr}>
                        <h5 className={styles.green_bullet_cont}>Hospital was successfully opened on March 1, 2005</h5>
                        <h5 className={styles.green_bullet_cont}>Hospital nationally recognized by PressGaney and HealthGrades</h5>
                        <h5 className={styles.green_bullet_cont}>Achieved profitability and made owner distributions by the end of the first twelve months of operations</h5>
                      </div>


                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_blk}>
                      <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                        <p>In 2006, transitioned to CEO of OrthoIndy and the Indiana Orthopaedic Hospital</p>
                      </div>
                      <div className={styles.green_bullet_cont_wrpr}>
                        <h5 className={styles.green_bullet_cont}>Streamlined organization through consolidation of entities</h5>
                        <h5 className={styles.green_bullet_cont}>Reduced overhead by consolidating certain locations and building strategically placed centers in
                          Brownsburg and Greenwood</h5>
                        <h5 className={styles.green_bullet_cont}>Reduced overhead 17% while increasing the number of
                          physicians by 24%</h5>
                        <h5 className={styles.green_bullet_cont}>Developed strategy to organize new centers as combination hospital outpatient surgical departments
                          and physician office clinics</h5>
                        <h5 className={styles.green_bullet_cont}>Added freestanding physical therapy locations under the hospital license</h5>

                      </div>


                    </div>

                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_blk}>
                      <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                        <p>Developed strategy during 2007 and 2008 to create a strategic partnership with Ascension / St. Vincent Indianapolis</p>
                      </div>
                      <div className={`${styles.green_bullet_cont_wrpr} ${styles.one_mini}`}>
                        <h5 className={styles.green_bullet_cont}>Purpose of the partnership to improve orthopedic standard of care throughout the state of Indiana</h5>
                        <h5 className={styles.green_bullet_cont}>Four key elements to the transaction:</h5>
                      </div>
                      <div className={styles.blue_bullet_cont_wrp}>
                        <p className={styles.blue_bullet_cont}><span>Ownership:</span> Ascension/St. Vincent to own 20% of the Indiana Orthopaedic Hospital</p>
                        <p className={styles.blue_bullet_cont}><span>Management:</span> OrthoIndy to manage the Ascension / St. Vincent orthopedic program in central
                          Indiana under a joint venture management agreement</p>
                        <p className={styles.blue_bullet_cont}><span>Partnership:</span> OrthoIndy to be the statewide orthopedic provider for Ascension
                          / St. Vincent Indiana
                        </p>
                        <p className={styles.blue_bullet_cont}><span>Program Development:</span> Ascension / St. Vincent to develop a Level II trauma program to be
                          staffed by OrthoIndy trauma surgeons at the Ascension / St. Vincent Indianapolis campus
                          on west 86th Street</p>
                      </div>


                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>October, 2009, transaction between OrthoIndy and Ascension / St. Vincent was completed</p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>During 2012, the Level II trauma program was created at Ascension / St. Vincent and OrthoIndy moved its program to the 86th Street campus
                      </p>
                    </div>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                      <p>In June, 2012, left OrthoIndy to open a healthcare consulting company
                      </p>
                    </div>
                    <h5 className={`${styles.green_bullet_cont} ${styles.two_mini}`}>During tenure as CEO of OrthoIndy and the Indiana Orthopaedic Hospital, enterprise grew from $96M in annual revenue to $205M in annual revenue and 900 employees
                    </h5>


                    <h6>Morgan County</h6>
                    <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                      <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_green} ${styles.three_mini}`}>
                        <p>In 2014, through my consulting company and in partnership with Katz, Sapper & Miller (a regional consulting and accounting firm) I performed the financial due diligence on a complex transaction to acquire a local hospital out of bankruptcy</p>
                      </div>
                      <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_green} ${styles.three_mini}`}>
                        <p>Transaction structure included a total package of $40M in real estate and other debt facilities</p>
                      </div>





                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.polaris_j_martin_page_key_main_sub6_main_blk}>
            <div className={styles.polaris_j_martin_page_key_main_sub5_main_blk}>
              <div className={styles.polaris_j_martin_page_key_main_sub4_main_blk}>
                <div className={styles.polaris_j_martin_page_key_main_sub3_main_blk}>
                  <div className={styles.polaris_j_martin_page_key_main_sub2_main_blk}>
                    <div className={styles.polaris_j_martin_page_key_main_sub1_main_blk}>
                      <div className={styles.polaris_j_martin_page_key_main_sub1_sec1_blk}>
                        <h2>Facility Development</h2>
                      </div>
                      <h6>Cardiac Hospital Due Diligence</h6>
                      <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                        <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                          <p>$75.0M Cardiac Hospital project </p>
                        </div>
                        <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                          <p>Included local health system, large cardiology group, and a large cardiovascular
                            surgery group</p>
                        </div>
                        <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                          <p>Designated, single-purpose facility
                            attached to local hospital emergency room</p>
                        </div>
                        <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                          <p>Managed financial and operational due diligence</p>
                        </div>





                      </div>
                      <div className={styles.four_mini}>
                        <h6>Cardiac Hospital Due Diligence</h6>
                        <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Debt funded transaction to purchase a local
                              hospital out of bankruptcy</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Included a local physician group and a
                              healthcare REIT</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Performed financial and operational
                              due diligence</p>
                          </div>






                        </div>
                      </div>

                      <div className={styles.five_mini}>
                        <h6>Indiana Orthopaedic Hospital Main Campus</h6>
                        <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>100% physician owned</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>135,000 square feet</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>42 inpatient beds</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>10 operating rooms</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>2 minor procedure rooms</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>35 pre- and post-operative
                              rooms</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>10 PACU beds</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>2 ICU capable rooms</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Physical therapy</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Laboratory</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Included renovation and
                              addition of medical
                              office space</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Performed financial and
                              operational due diligence</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Pharmacy</p>
                          </div>






                        </div>
                      </div>

                      <div className={styles.five_mini}>
                        <h6>OrthoIndy / Indiana Orthopaedic Hospital Brownsburg</h6>
                        <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>39,000 square feet </p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>2 operating rooms</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>2 minor procedure rooms</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Physical therapy</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Medical practice clinic exam space</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Performed financial and operational due diligence</p>
                          </div>










                        </div>
                      </div>

                      <div className={styles.five_mini}>
                        <h6>OrthoIndy / Indiana Orthopaedic Hospital Greenwood</h6>
                        <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>78,000 square feet </p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>4 operating rooms</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>2 minor procedure rooms</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Physical therapy</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Imaging including MRI</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Medical practice
                              clinic exam space</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Performed financial and operational due diligence</p>
                          </div>










                        </div>
                      </div>

                      <div className={`${styles.five_mini} ${styles.six_mini}`}>
                        <h6>Orthopedic Specialty Hospital Joint Venture</h6>
                        <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Large regional hospital system</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Large orthopedic group</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Close existing small hospital-owned facility</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Develop larger orthopedic specialty hospital</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Include inpatient, outpatient, imaging</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Performed financial and operational
                              due diligence
                            </p>
                          </div>


                        </div>
                      </div>

                      <div className={`${styles.five_mini} ${styles.seven_mini} `}>
                        <h6>Hospital Facility Expansion Phase I</h6>
                        <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Managed first expansion of $25M, doubled size of facility, expanded service offering</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Performed financial and operational due diligence</p>
                          </div>
                        </div>
                      </div>

                      <div className={`${styles.five_mini} ${styles.seven_mini} `}>
                        <h6>Hospital Facility Expansion Phase II</h6>
                        <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Started financial due diligence on second expansion of the facility</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Performed financial and operational due diligence</p>
                          </div>
                        </div>
                      </div>

                      <div className={`${styles.five_mini} ${styles.seven_mini} `}>
                        <h6>Neurosurgery / Orthopedic Surgery Program</h6>
                        <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Led program out of CT where a major healthcare system
                              broke ground on $150M orthopedic and spine center.  </p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Hospital project lead only consulted with a handful of ortho MDs and no
                              spine MDs, which created conflict and challenges. </p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Developed a plan that charted a way for all parties to work together for an optimal outcome. </p>
                          </div>
                        </div>
                      </div>

                      <div className={`${styles.five_mini} ${styles.eight_mini} `}>
                        <h6>Hospital Replacement</h6>
                        <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Worked with a large healthcare system to develop a plan of alternate uses for a facility that was being decommissioned</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Performed financial and operational due diligence</p>
                          </div>

                        </div>
                      </div>

                      <div className={`${styles.five_mini} ${styles.eight_mini} `}>
                        <h6>Neighborhood Hospital</h6>
                        <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Worked with a large healthcare system to develop a small neighborhood hospital in an underserved market</p>
                          </div>
                          <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                            <p>Performed financial and operational due diligence</p>
                          </div>

                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.polaris_j_martin_page_key_main_sub7_main_blk}>
            <div className={styles.polaris_j_martin_page_key_main_sub6_main_blk}>
              <div className={styles.polaris_j_martin_page_key_main_sub5_main_blk}>
                <div className={styles.polaris_j_martin_page_key_main_sub4_main_blk}>
                  <div className={styles.polaris_j_martin_page_key_main_sub3_main_blk}>
                    <div className={styles.polaris_j_martin_page_key_main_sub2_main_blk}>
                      <div className={styles.polaris_j_martin_page_key_main_sub1_main_blk}>
                        <div className={styles.polaris_j_martin_page_key_main_sub1_sec1_blk}>
                          <h2>Surgery Center Development</h2>
                        </div>


                        <div className={`${styles.five_mini} ${styles.eight_mini} `}>
                          <h6>Franciscan Surgery Center</h6>
                          <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Worked with large healthcare system to develop a joint venture multi-specialty surgery center</p>
                            </div>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Surgery center was on the ground floor of a medical office building for which I conducted the financial and feasibility due diligence</p>
                            </div>
                          </div>
                        </div>

                        <div className={`${styles.five_mini} ${styles.seven_mini} `}>
                          <h6>Southeast Surgery Center</h6>
                          <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Worked with large healthcare system to create a joint venture
                                orthopedic surgery center </p>
                            </div>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Joint venture partner was a large orthopedic practice
                              </p>
                            </div>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Surgery center was on the ground floor of the same medical
                                office building
                              </p>
                            </div>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Became one of the top orthopedic surgery centers in the country
                                at that time

                              </p>
                            </div>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Performed financial and operational due diligence</p>
                            </div>
                          </div>
                        </div>

                        <div className={`${styles.five_mini} ${styles.seven_mini} `}>
                          <h6>South Emerson Surgery Center</h6>
                          <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Worked with large healthcare system to create a joint venture
                                orthopedic surgery center
                              </p>
                            </div>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Joint venture partner was a small orthopedic practice

                              </p>
                            </div>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Performed financial and operational due diligence

                              </p>
                            </div>


                          </div>
                        </div>

                        <div className={`${styles.five_mini} ${styles.seven_mini} `}>
                          <h6>Mooresville Multi-Specialty Surgery Center</h6>
                          <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Worked with large healthcare system to develop a joint
                                venture multi-specialty surgery center
                              </p>
                            </div>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Surgery center was part of an overall campus expansion plan

                              </p>
                            </div>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Performed financial and operational due diligence


                              </p>
                            </div>


                          </div>
                        </div>

                        <div className={`${styles.five_mini} ${styles.eight_mini} `}>
                          <h6>Orthopedic Surgery Center (Montana)</h6>
                          <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Worked with a large healthcare system and the largest orthopedic surgery group in the region to develop a joint venture surgery center</p>
                            </div>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Surgery center was part of a retail big box store redevelopment plan</p>
                            </div>
                            <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                              <p>Performed financial due diligence, assisted in design of facility, and right-sizing of capital plan for the project</p>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.polaris_j_martin_page_key_main_sub8_main_blk}>
            <div className={styles.polaris_j_martin_page_key_main_sub7_main_blk}>
              <div className={styles.polaris_j_martin_page_key_main_sub6_main_blk}>
                <div className={styles.polaris_j_martin_page_key_main_sub5_main_blk}>
                  <div className={styles.polaris_j_martin_page_key_main_sub4_main_blk}>
                    <div className={styles.polaris_j_martin_page_key_main_sub3_main_blk}>
                      <div className={styles.polaris_j_martin_page_key_main_sub2_main_blk}>
                        <div className={styles.polaris_j_martin_page_key_main_sub1_main_blk}>
                          <div className={styles.polaris_j_martin_page_key_main_sub1_sec1_blk}>
                            <h2>Renovation / Expansion</h2>
                          </div>


                          <div className={`${styles.five_mini} ${styles.eight_mini} `}>
                            <h6>Laboratory / Imaging Expansion</h6>
                            <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                              <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                                <p>Oversaw renovation of laboratory, imaging center, women’s center and pediatric inpatient unit</p>
                              </div>

                            </div>
                          </div>

                          <div className={`${styles.five_mini} ${styles.seven_mini} `}>
                            <h6>Southeast Surgery Center</h6>
                            <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                              <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                                <p>Negotiated a mobile PET CT</p>
                              </div>
                              <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                                <p>Added treatment rooms
                                </p>
                              </div>

                            </div>
                          </div>

                          <div className={`${styles.five_mini} ${styles.eight_mini} `}>
                            <h6>Medical Office Building</h6>
                            <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                              <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                                <p>Developed medical office building on health system campus</p>
                              </div>
                              <div className={`${styles.green_bullet_cont_wrpr} ${styles.ten_mini}`}>
                                <h5 className={styles.green_bullet_cont}>135,000 sq. ft</h5>
                                <h5 className={styles.green_bullet_cont}>2 surgery centers</h5>
                                <h5 className={styles.green_bullet_cont}>3 office floors</h5>
                                <h5 className={styles.green_bullet_cont}>One floor built to hospital occupancy standards</h5>

                              </div>

                            </div>
                          </div>



                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.polaris_j_martin_page_key_main_sub9_main_blk}>
            <div className={styles.polaris_j_martin_page_key_main_sub8_main_blk}>
              <div className={styles.polaris_j_martin_page_key_main_sub7_main_blk}>
                <div className={styles.polaris_j_martin_page_key_main_sub6_main_blk}>
                  <div className={styles.polaris_j_martin_page_key_main_sub5_main_blk}>
                    <div className={styles.polaris_j_martin_page_key_main_sub4_main_blk}>
                      <div className={styles.polaris_j_martin_page_key_main_sub3_main_blk}>
                        <div className={styles.polaris_j_martin_page_key_main_sub2_main_blk}>
                          <div className={styles.polaris_j_martin_page_key_main_sub1_main_blk}>
                            <div className={styles.polaris_j_martin_page_key_main_sub1_sec1_blk}>
                              <h2>Orthopedic Institute Development</h2>
                            </div>

                            <div className={`${styles.five_mini} ${styles.seven_mini} `}>
                              <h6>Large Michigan based orthopedic group</h6>
                              <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                                  <p>Worked with a 35-MD orthopedic group in MI </p>
                                </div>
                                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                                  <p>Developed plan to approach the local major hospital about creating a comprehensive
                                    orthopedic institute.
                                  </p>
                                </div>

                              </div>
                            </div>

                            <div className={`${styles.five_mini} ${styles.eight_mini} `}>
                              <h6>Large Michigan based orthopedic group</h6>
                              <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                                  <p>Led a complex planning project that resulted in</p>
                                </div>
                                <div className={`${styles.green_bullet_cont_wrpr} ${styles.eleven_mini}`}>
                                  <h5 className={styles.green_bullet_cont}>Conceptual plans for a new, stand-alone facility</h5>
                                  <h5 className={styles.green_bullet_cont}>Included physician office space
                                  </h5>
                                  <h5 className={styles.green_bullet_cont}>Inpatient and outpatient surgery
                                  </h5>
                                  <h5 className={styles.green_bullet_cont}>30 inpatient beds
                                  </h5>

                                </div>

                              </div>
                            </div>

                            <div className={`${styles.five_mini} ${styles.seven_mini} `}>
                              <h6>Memphis Project</h6>
                              <div className={`${styles.polaris_j_martin_page_key_main_sub2_sec1_blk} ${styles.flex_wrp_4sub}`}>
                                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                                  <p>Worked with a 25-MD orthopedic group in TN</p>
                                </div>
                                <div className={styles.polaris_j_martin_page_key_main_sub2_sec1_green}>
                                  <p>Developed plan to approach the local major hospital about creating a comprehensive
                                    orthopedic institute.

                                  </p>
                                </div>

                              </div>
                            </div>




                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.polaris_j_martin_page_key_main_sub10_main_blk}>
            <div className={styles.polaris_j_martin_page_key_main_sub10_sec1_blk}>
              <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_logo.png'/>
            </div>
            <div className={styles.polaris_j_martin_page_key_main_sub10_sec2_blk}>
              <h1>John D Martin</h1>
              <p>9292 N Meridian Street Suite 150 Indianapolis, IN 46260</p>
              <div className={styles.polaris_j_martin_page_key_main_sub10_sec2_mini_blk}>
                <div className={styles.polaris_j_martin_page_key_main_sub10_sec2_mini_1blk}>
                <p><Link href="tel:(317) 437-6120">(317) 437-6120</Link></p>
                </div>
                <div className={styles.polaris_j_martin_page_key_main_sub10_sec2_mini_2blk}>
                  <p><Link href="mailto:JMartin@PolarisBusinessConsultants.com ">JMartin@PolarisBusinessConsultants.com </Link></p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
