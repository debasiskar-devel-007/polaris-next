import React, { useState } from 'react'
import styles from './contact.module.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer'
import { LinearProgress, Snackbar, TextField } from '@mui/material';

export default function Index() {
    const recaptchaRef = React.createRef();
    const [user, setUser] = useState({ full_name: "", email: "", city: "", contact_number: "", state: "", comments: "" });
    const [error, setError] = useState({});
    const [loader, setLoader] = useState(false)
    const [SnackbarState, setSnackbarStare] = useState(false);
    const [newSecThreeOpen, setNewSecThreeOpen] = useState(false)

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
        if (!user?.last_name) {
            errorObject.last_name = "Last Name is Required";
        }
        if (!user?.email_id) {
            errorObject.email_id = "Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(user.email_id)) {
            errorObject.email_id = "* Invalid email format";
        }


        if (!user?.contact_number) {
            errorObject.contact_number = " Phone Number is Required";
        }

        if (!user?.address) {
            errorObject.address = "Address is Required";
        }
        // if (!user?.write_a_message) {
        //     errorObject.write_a_message = "Write a Message is Required";
        // }


        if (Object.keys(errorObject).length > 0) {
            setError(errorObject);
        } else {
            submitapi()
        }
    };



    function handleNewSecThreeOpen() {
        setNewSecThreeOpen(true)
    }

    return (
        <>

            <div className={styles.contact_banner_main_wrapper}>
                <Navbar />
                <div className={styles.common_width}>
                    <div className={styles.contact_banner_sub_wrapper}>
                        <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/contact/contact_banner_sec_blk_img.webp' />
                    </div>
                </div>
            </div>
            <div className={styles.contact_block_main_wrapper}>
                <div className={styles.common_width}>
                    <div className={styles.contact_block_sub_wrapper}>
                        <div className={styles.contact_block_sub_sec1_wrapper}>
                            <img src='https://all-frontend-assets.s3.amazonaws.com/polaris_project/contact/from_block_img.webp' />
                        </div>
                        <div className={styles.contact_block_sub_sec2_wrapper}>
                            <form onSubmit={handleSubmit}>
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

                            <h5>We won&apos;t send spam. Unsubscribe at any time.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>


    )
}
