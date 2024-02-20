import React, { useEffect, useState } from 'react'
import styles from './home.module.css'
import Navbar from '../navbar/Navbar'
import { LinearProgress, Link, Snackbar, TextField } from '@mui/material';
import Footer from '../Footer';

import Head from 'next/head';

export default function Homes() {
  const recaptchaRef = React.createRef();
  const [user, setUser] = useState({ full_name: "", email: "", city: "", contact_number: "", state: "", comments: "" });
  const [error, setError] = useState({});
  const [loader, setLoader] = useState(false)
  const [SnackbarState, setSnackbarStare] = useState(false);
  const [newSecThreeOpen, setNewSecThreeOpen] = useState(false)
  useEffect(()=>{
    console.log(loader,"loader");
  },[loader])

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "state") {

      setError({ ...error, [name]: undefined })
    }

    setUser({ ...user, [name]: value });
  };


  async function submitapi() {
    // setUser({...user,["contact_number"]:user.contact_number.replace(/^\((.+)\)$/,"")})
    setLoader(true)


    setError({})
    let requestOptions = {
      method: 'POST',
      // mode:'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }
    console.log(user)

    setTimeout(() => {
      setLoader(false)
      setSnackbarStare(true)
      setUser(null)

    }, 4000);


    // try {
    //   let req = await fetch("  https://u7yxpmocqi.execute-api.us-west-1.amazonaws.com/dev/contact/ai-contact-add", requestOptions)
    //   console.log("req", req);
    //   let res = await req.json()
    //   setSnackbarStare(true)

    // } catch (error) {
    //   console.log(error, "this is submit error");
    //   setLoader(false)
    // }
    // setLoader(false)
    // setUser(null)
    // console.log("kjhkjh", user)

  }

  const phoneFormatting = (event) => {
    console.log("event", event);
    if (event.target.value.split("").length <= 14) {
      var formatted = formatPhoneText(event.target.value);
      let name = event.target.name;
      user.phone = formatted;
      setUser({ ...user, [name]: formatted });
    }
    console.log("event formatted", user);
  };

  function formatPhoneText(value) {
    value = value.trim().replaceAll("-", "");
    value = value.trim().replaceAll("(", "");
    value = value.trim().replaceAll(")", "");
    value = value.trim().replaceAll(" ", "");

    if (value.length > 3 && value.length <= 6)
      value = "(" + value.slice(0, 3) + ")" + " " + value.slice(3);
    else if (value.length > 6)
      value =
        "(" +
        value.slice(0, 3) +
        ")" +
        " " +
        value.slice(3, 6) +
        "-" +
        value.slice(6);
    return value;
  }

  const handleSubmit = (e) => {


    e.preventDefault();

    let errorObject = {};

    if (!user?.first_name) {
      errorObject.first_name = "First Name is Required";
    }
    if (!user?.email_id) {
      errorObject.email_id = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(user.email_id)) {
      errorObject.email_id = "* Invalid email format";
    }


    if (!user?.contact_number) {
      errorObject.contact_number = " Phone Number is Required";
    }
    // if (!user?.write_a_message) {
    //   errorObject.write_a_message = "Write a Message is Required";
    // }


    if (Object.keys(errorObject).length > 0) {
      setError(errorObject);
      console.log("uyftgfg",errorObject);
    } else {
      submitapi()
      console.log("uyftgfg");

    }
  };



  function handleNewSecThreeOpen() {
    setNewSecThreeOpen(true)
  }


  return (
    <>

<Head>
        <title>Home</title>
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
        </Head>

      <div className={styles.polaris_home_main_wrp}>
        <div className={styles.polaris_home_wrp}>
          <img className={styles.polaris_position_img} src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_banner_man_img.webp' />
          <Navbar />
          <div className={styles.common_width}>
            <div className={styles.polaris_home_sub_wrp}>
              <div className={styles.polaris_home_sub_left_wrp}>
                <h1><span>POLARIS BUSINESS CONSULTANTS</span></h1>
              </div>
              <div className={styles.polaris_home_sub_left1_wrp}>
                <h1>Experts in <span>Strategic</span> Healthcare & Financial  Consulting</h1>
                <div className={styles.polaris_home_sub_left1_mini1_wrp}>
                  <p>Your partner in creating sustainable strategic, financial, and operational strategies to provide for continued
                    growth and success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.polaris_blk1_main_wrp}>
          <div className={styles.common_width}>
            <div className={styles.polaris_blk1_sub_wrp}>
              <h1><span>AMBULATORY SURGERY CENTER DEVELOPMENT COURSE</span></h1>
              <p>Unlock the Blueprint of Success in Ambulatory Surgery Center Development! Join our immersive six-week course and gain comprehensive insights into the strategic stages of ASC development. Elevate your expertise, navigate regulatory intricacies, and master the art of creating a cutting-edge ambulatory surgery center. Transform your vision into reality with our expert-led program. <span>Enroll now</span> for a future in healthcare innovation!</p>
              <Link href="/polaris-business-consultants"><button className={styles.polaris_home_button}>Click Here to Learn More</button></Link>
            </div>
          </div>
        </div>

        <div className={styles.polaris_blk2_main_wrp}>
          <div className={styles.polaris_blk2_main1_wrp}>

            <div className={styles.common_width}>
              <div className={styles.polaris_blk2_sub1_wrp}>
                <h1>About Polaris</h1>
                <h4>Polaris was formed in 2023 as a partnership between Donovan Consulting and JD Martin Healthcare Advisors</h4>
                <h4>Polaris  is a full-service healthcare consulting firm with more than three decades of experience in the healthcare industry</h4>
                <h4>Our services include:</h4>
                <p>Ambulatory surgical center development training and education</p>
                <p>Healthcare consulting specializing in strategic planning, financial planning and analysis (FP&A), transactions support, and project management and development</p>
                <p>Operational improvement including revenue recovery strategies and workflow automation</p>
              </div>
            </div>
          </div>
          <div className={styles.polaris_blk2_main2_wrp}>
            <div className={styles.common_width}>
              <div className={styles.polaris_blk2_sub2_wrp}>
                <div className={styles.polaris_blk2_sub2_left_wrp}>
                  <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_logo.png' />
                </div>
                <div className={styles.polaris_blk2_sub2_right_wrp}>
                  <h1>Healthcare is changing rapidly, faster than <span>at any other time.</span></h1>
                  <p>Polaris Business Consultants brings together an innovative and winning formula - Donovan&apos;s over five decades of financial solutions with JD Martin Healthcare Advisors three-plus decades of experience in working within the healthcare industry. Polaris brings an experienced and innovative team together to provide an extensive offering of services to this rapidly changing market.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className={styles.polaris_blk3_main_wrp}>
          <div className={styles.common_width}>
            <div className={styles.polaris_blk3_sub_wrp}>
              <h1>Services</h1>
              <div className={styles.polaris_blk3_1sub_wrp}>
                <div className={styles.polaris_blk3_evn_od}>
                  <div className={styles.polaris_blk3_evn_od_heading}>
                    <h1>Ambulatory Surgery Center Development</h1>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_white}>
                    <p>Video Training Series</p>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_gray}>
                    <p>Mastermind Group</p>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_white}>
                    <p>Mentoring</p>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_gray}>
                    <p>Consulting</p>
                  </div>



                </div>
                <div className={styles.polaris_blk3_evn_od}>
                  <div className={styles.polaris_blk3_evn_od_heading}>
                    <h1>Ambulatory Surgery Center Development</h1>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_white}>
                    <p>Video Training Series</p>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_gray}>
                    <p>Mastermind Group</p>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_white}>
                    <p>Mentoring</p>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_gray}>
                    <p>Consulting</p>
                  </div>



                </div>
                <div className={styles.polaris_blk3_evn_od}>
                  <div className={styles.polaris_blk3_evn_od_heading}>
                    <h1>Ambulatory Surgery Center Development</h1>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_white}>
                    <p>Video Training Series</p>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_gray}>
                    <p>Mastermind Group</p>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_white}>
                    <p>Mentoring</p>
                  </div>
                  <div className={styles.polaris_blk3_evn_od_heading_gray}>
                    <p>Consulting</p>
                  </div>



                </div>
                

              </div>
              {/* <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/home_page_table_img.webp' /> */}
              <div className={styles.polaris_blk3_sub_sec_wrp}>
                <div className={`${styles.polaris_blk3_sub_sec_mini1_wrp} ${styles.polaris_blk3_sub_sec_mini_wrp}`}>
                  <div className={styles.polaris_blk3_logo_wrp}>
                    <div className={styles.polaris_blk3_logo_sec_wrp}>
                      <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_healthcare_logo.png' />
                    </div>
                  </div>
                  <div className={styles.polaris_blk3_text_wrp}>
                    <p>35+ Years in
                      the Healthcare
                      Industry</p>
                  </div>

                </div>
                <div className={`${styles.polaris_blk3_sub_sec_mini2_wrp} ${styles.polaris_blk3_sub_sec_mini_wrp}`}>
                  <div className={styles.polaris_blk3_logo_wrp}>
                    <div className={styles.polaris_blk3_logo_sec_wrp}>
                      <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/business_tax_logo.png' />
                    </div>
                  </div>
                  <div className={styles.polaris_blk3_text_wrp}>
                    <p>50+ Years in
                      Business and
                      Tax Strategy
                      Planning</p>
                  </div>
                </div>
                <div className={`${styles.polaris_blk3_sub_sec_mini3_wrp} ${styles.polaris_blk3_sub_sec_mini_wrp}`}>
                  <div className={styles.polaris_blk3_logo_wrp}>
                    <div className={styles.polaris_blk3_logo_sec_wrp}>
                      <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/development_logo.png' />
                    </div>
                  </div>
                  <div className={styles.polaris_blk3_text_wrp}>
                    <p>20+ Healthcare
                      Development
                      Projects</p>
                  </div>
                </div>
                <div className={`${styles.polaris_blk3_sub_sec_mini4_wrp} ${styles.polaris_blk3_sub_sec_mini_wrp}`}>
                  <div className={styles.polaris_blk3_logo_wrp}>
                    <div className={styles.polaris_blk3_logo_sec_wrp}>
                      <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/business_transformations_logo.png' />
                    </div>
                  </div>
                  <div className={styles.polaris_blk3_text_wrp}>
                    <p>Endless
                      Business
                      Transformations</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className={styles.polaris_blk4_main_wrp}>
          <div className={styles.common_width}>

            <div className={styles.polaris_blk4_main_sub_wrp}>
              <h1>Our Leadership Team</h1>
              <div className={styles.polaris_blk4_sub_wrp}>
                <div className={styles.polaris_blk4_sub_sec_wrp}>
                  <div className={styles.polaris_blk4_sub_sec_img_wrp}>
                    <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/jeff_img.webp' />
                  </div>
                  <div className={styles.polaris_blk4_sub_sec_heading_wrp}>
                    <h2>Jeff Donovan</h2>
                  </div>
                  <div className={styles.polaris_blk4_sub_sec_p_wrp}>
                    <p>Managing Partner
                      Tax Planning</p>
                  </div>
                  <button className={styles.team_sec_btn}><Link href='/bio-jeffdonovan'>Read Bio</Link></button>
                </div>
                <div className={styles.polaris_blk4_sub_sec_wrp}>
                  <div className={styles.polaris_blk4_sub_sec_img_wrp}>
                    <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/jhon_img.webp' />
                  </div>
                  <div className={styles.polaris_blk4_sub_sec_heading_wrp}>
                    <h2>John D Martin</h2>
                  </div>
                  <div className={styles.polaris_blk4_sub_sec_p_wrp}>
                    <p>Managing Director
                      Healthcare Consulting</p>
                  </div>
                  <button className={styles.team_sec_btn}><Link href=''>Read Bio</Link></button>

                </div>
                <div className={styles.polaris_blk4_sub_sec_wrp}>
                  <div className={styles.polaris_blk4_sub_sec_img_wrp}>
                    <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/jay_img.webp' />
                  </div>
                  <div className={styles.polaris_blk4_sub_sec_heading_wrp}>
                    <h2>Jay Boughner</h2>
                  </div>
                  <div className={styles.polaris_blk4_sub_sec_p_wrp}>
                    <p>Managing Director
                      Process Design and Workflow</p>
                  </div>
                  <button className={styles.team_sec_btn}><Link href='/bio-jayboughner'>Read Bio</Link></button>

                </div>



              </div>
            </div>
          </div>
        </div>

        <div className={styles.polaris_blk5_main_wrp}>
          <div className={styles.common_width}>

            <div className={styles.polaris_blk5_sub_wrp}>
              <h1>Signup for our <span>weekly newsletter!</span></h1>
              <div className={styles.polaris_blk5_sub_sec_wrp}>
                <form onSubmit={handleSubmit} className={styles.hm_form}>
                  <div className={styles.polaris_home_from_sec}>
                    <TextField
                      className={styles.input_fields}
                      id="outlined-basic"
                      name='first_name'
                      label="Name*"
                      variant="outlined"
                      value={user?.first_name ? user.first_name : ""}
                      onChange={handleInput}
                      error={error.first_name ? true : false}
                      helperText={error.first_name}
                      onKeyDown={() => {
                        error.first_name = "";
                      }}
                    />


                    <TextField
                      className={styles.input_fields}
                      id="outlined-basic"
                      name='email_id'
                      label="Email*"
                      variant="outlined"
                      value={user?.email_id ? user.email_id : ""}
                      onChange={handleInput}
                      error={error.email_id ? true : false}
                      helperText={error.email_id}
                      onKeyDown={() => {
                        error.email_id = "";
                      }}

                    />

                    <TextField
                      className={styles.input_fields}
                      id="outlined-basic"
                      name='contact_number'
                      label="Phone Number*"
                      variant="outlined"
                      value={user?.contact_number ? user.contact_number : ""}
                      onChange={(e) => phoneFormatting(e)}
                      error={error.contact_number ? true : false}
                      helperText={error.contact_number}

                      onKeyPress={(e) => {
                        error.contact_number = ""
                        console.log("this is number onkeydown", charTyped);

                        var charTyped = e.keyCode

                        console.log("this is number onkeydown=====", e.code, e.key, e.which);


                        if (e.which < 48 || e.which > 57) {
                          e.preventDefault();
                        }
                        else {

                          let input = e.target.value;

                          let result = input.replace(/\D/g, '');
                          console.log(input, result, "suyagudsa");

                        }
                      }
                      }
                    />



                    <TextField
                      className={styles.input_fields_text}
                      id="outlined-basic"
                      name='write_a_message'
                      label="How may we help you? "
                      multiline rows={5}
                      variant="outlined"
                      value={user?.write_a_message ? user.write_a_message : ""}
                      onChange={handleInput}
                      error={error.write_a_message ? true : false}
                      helperText={error.write_a_message}
                      onKeyDown={() => {
                        error.write_a_message = "";
                      }}
                    />


                  </div>


                  <button className={styles.polaris_home_button}>submit</button>

                </form>
                {loader && <LinearProgress className='progressbar' />}

                <Snackbar
                  open={SnackbarState}
                  id="snackbar"
                  autoHideDuration={5000}
                  onClose={() => setSnackbarStare(false)}
                  message={<>
                    <p>Thank You For Connecting Us.</p>
                    <p>Someone From Our Team Will Connect With You Soon.</p>
                  </>}
                
                />
              </div>
              <h5>We won&apos;t send spam. Unsubscribe at any time.</h5>
            </div>
          </div>
        </div>
        
      <Footer />
      </div>


      {/* <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/home_bnr_demo.webp'/>
          </div> */}

      {/* <div className={styles.polaris_demo_wrp}>
            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_blk1_img.webp'/>
          </div> */}
      {/* <div className={styles.polaris_demo_wrp}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_blk2_img.webp' />
      </div> */}
      {/* <div className={styles.polaris_demo_wrp}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_blk3_img.webp' />
      </div> */}
      {/* <div className={styles.polaris_demo_wrp}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_home_last_blk_img.webp' />
      </div> */}
    </>
  )
}
