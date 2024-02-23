import React, { useState } from 'react'
import styles from './login.module.css'
import Head from 'next/head'
import { Checkbox, FormControlLabel, FormGroup, Link, TextField } from '@mui/material';
export default function Index() {

  const [user, setUser] = useState({ email_id: "", password: "", });
  const [error, setError] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
   

    setUser({ ...user, [name]: value });
  };


  const handleSubmit = (e) => {


    e.preventDefault();

    let errorObject = {};

   
    if (!user?.email_id) {
      errorObject.email_id = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(user.email_id)) {
      errorObject.email_id = "* Invalid email format";
    }


    
    if (!user?.password) {
      errorObject.password = "Password is required";
    }

    if (Object.keys(errorObject).length > 0) {
      setError(errorObject);
      console.log("uyftgfg",errorObject);
    } else {
     
      console.log("uyftgfg");

    }

console.log("userrrr",user)

console.log("errorrrrr",errorObject)
    
  };

  return (
    <>
    <Head>
        <title>Polaris-Login</title>
        <link
          rel="icon"
          href="https://all-frontend-assets.s3.amazonaws.com/polaris_project/home/polaris_fav_icon_new.png"
        />
        </Head>

      <div className={styles.login_main_wrpr}>

        <div className={styles.login_sub_wrpr}>

          <div className={styles.polar_logo}><img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/login/login_page_logo.webp'/></div>
          
          <div className={styles.log_header}><h1>Log In</h1></div>
          <div className={styles.padd_form}>
           <form className={styles.form_sec} onSubmit={handleSubmit}>

             <TextField
                      className={styles.inpt_fields}
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
                      className={styles.inpt_fields}
                      id="outlined-basic"
                      name='password'
                      label="Password*"
                      variant="outlined"
                      value={user?.password ? user.password : ""}
                      onChange={handleInput}
                      error={error.password ? true : false}
                      helperText={error.password}
                      onKeyDown={() => {
                        error.password = "";
                      }}

                    />

            <div className={styles.login_flex}> <div className={styles.checkbx}> <FormGroup className={styles.Checkbox}> <FormControlLabel control={<Checkbox />} label="Remember Me" /></FormGroup> </div>
              <div className={styles.frgt_pwd}><Link>Forget Password</Link></div> </div>

             <div className={styles.pol_btn}> <button className={styles.polaris_home_button}>submit</button> </div>
           </form>

           </div>

        </div>
        
      </div>
      {/* <div className={styles.login_main_wrpr}>
        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/login/Polarise_Login_Page.webp'/>
      </div> */}
    </>
  )
}
