import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsEnvelope } from "react-icons/bs";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { FaUserTie } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Header from "../components/Header";
import WhiteHeader from "../components/WhiteHeader";

export default function Home() {
  const isAuthenticated = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (token != null) {
        let jwtSecretKey = "gfg_jwt_secret_key";
        const user = jwt.verify(token, jwtSecretKey);
        setUser(user);
      } else {
        console.log("not log");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const logout = async () => {
  //   try {
  //     localStorage.removeItem("accessToken");
  //     setUser(null);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    isAuthenticated();
  }, []);

  const validationSchema = Yup.object().shape({
    ticketid: Yup.string()
      .required("Ticket Id is required")
      .matches(/^[0-9]{10}$/, "Ticket Id format is invalid"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (e) => {
    const token = localStorage.getItem("accessToken");
    if (token == null) {
      router.push("https://dsp-archiwebo21-ss-da-om-en.fr/login");
    }

    try {
      const res = await fetch(
        "https://dsp-archiwebo21-ss-da-om-en.fr/api/v1/contest-participents/ticket-validatation-requests",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.userId,
            ticketId: e.ticketid,
          }),
        }
      );

      const response = await res.json();

      if (res.status == "201") {
        localStorage.setItem("ticketId", response.ticketId);
        localStorage.setItem("contestId", response.contestId);
        router.push("https://dsp-archiwebo21-ss-da-om-en.fr/spinner");
      } else if (res.status == "422") {
        alert("Entered ticket id is invalid ");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <div className={styles.container}>
       <h1>Hello</h1>
       <Link href={'/login'}>login</Link>
       <br/>
       <Link href={'/signup'}>signup</Link>
       <br/>
       <Link href={'/viewuser'}>viewUserDetail</Link>
       <br/>
       <Link href={'/viewhistory'}>viewhistory</Link>
       <br/>
       <br/>
       <Link href={'/admin/addemployee'}>addemployee</Link>
       <br/>
       <Link href={'/admin/addprizes'}>addprizes</Link>
       <br/>
       <Link href={'/admin/contestlist'}>contestlist</Link>
       <br/>
       <Link href={'/admin/viewusers'}>viewusers</Link>
       <br/>
       <Link href={'/admin/createcontest'}>createcontest</Link>
       <BsEnvelope />
     </div> */}

      <div>
        <WhiteHeader />
        <main>
          <div className="container">
            <div className="row">
              <div className="content">
                <h1 className="title">
                  <span>thétiptop</span> play <span>=</span> win
                  <span>! - update</span>
                </h1>
                <div className="ticket-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      placeholder="Your ticket number"
                      {...register("ticketid")}
                      className={`form-control ${
                        errors.ticketid ? "is-invalid" : ""
                      }`}
                    />
                    <button type="submit">Check ticket</button>
                  </form>
                  <div className="invalid-feedback2">
                    {errors.ticketid?.message}
                  </div>
                </div>
              </div>
              <div className="ticket">
                <img className="wheel" src="/wheel.png" alt="" />
              </div>
            </div>
            <img src="/leav.png" className="overlay" alt="" />
          </div>
        </main>
        <div>
          <div className="container">
            <div id="mc_embed_signup">
              <form
                action="https://gmail.us11.list-manage.com/subscribe/post?u=17eb0fc9f60a035f869b0fafd&amp;id=5805488496&amp;f_id=00b18de0f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <div id="mce-responses" className="clear foot">
                    <div
                      className="response"
                      id="mce-error-response"
                      // style={{display: none}}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      // style={{display: none}}
                    ></div>
                  </div>
                  <footer className="indexfooter">
                    <div className="signup">
                      <div
                        className="mc-field-group"
                        style={{ marginLeft: "50px" }}
                      >
                        <input
                          type="email"
                          name="EMAIL"
                          placeholder="Email"
                          className="required email"
                          id="mce-EMAIL"
                          required
                        />
                        <span
                          id="mce-EMAIL-HELPERTEXT"
                          className="helper_text"
                        ></span>
                      </div>
                      <div className="optionalParent">
                        <div className="clear foot">
                          <button
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="button"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </footer>

                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_17eb0fc9f60a035f869b0fafd_5805488496"
                      tabindex="-1"
                    />
                  </div>
                </div>
              </form>
            </div>
            <script
              type="text/javascript"
              src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
            ></script>
            {/* <script type="text/javascript">
          (function ($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0] = "EMAIL";
            ftypes[0] = "email";
            fnames[1] = "FNAME";
            ftypes[1] = "text";
            fnames[2] = "LNAME";
            ftypes[2] = "text";
            fnames[3] = "ADDRESS";
            ftypes[3] = "address";
            fnames[4] = "PHONE";
            ftypes[4] = "phone";
            fnames[5] = "BIRTHDAY";
            ftypes[5] = "birthday";
          })(jQuery);
          var $mcj = jQuery.noConflict(true);
        </script> */}
            {/* End mc_embed_signup */}

            <div className="other-info"></div>
          </div>
        </div>
        <script src="app.js"></script>
      </div>
    </>
  );
}
