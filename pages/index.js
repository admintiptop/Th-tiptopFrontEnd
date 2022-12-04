import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import { FaUserTie } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

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

  const logout = async () => {
    try {
      localStorage.removeItem("accessToken");
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  const validationSchema = Yup.object().shape({
    ticketid: Yup.string()
      .required("Ticket Id is required")      
      .matches(
        /^[0-9]{10}$/,
        "Ticket Id format is invalid"
      ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (e) => {

    const token = localStorage.getItem("accessToken");
      if (token == null) {
        router.push("http://localhost:3000/login");
      }

    try{
      const res = await fetch("http://localhost:3001/api/v1/contest-participents/ticket-validatation-requests", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.userId,
          ticketId: e.ticketid
        }),
      });

      const response = await res.json();
      console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",response)

      if (res.status == "201") {
        alert("Success 201 : ")
        localStorage.setItem("ticketId",response.ticketId );
        localStorage.setItem("contestId",response.contestId );
        router.push("http://localhost:3000/spinner");
      } else if(res.status == "422") {
        alert("Entered ticket id is invalid ")
      }

    }catch(err){
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
        <header className="greenHeader">
          <div class="container">
            <div class="logo">
              <img src="/logo-white.svg" alt="" />
            </div>
            <div class="links">
              <a href="#" class="active">
                HOME
              </a>
              <a href="#">legal notice contest</a>
            </div>
            <div class="dd">
              {user == null ? (
                <Link href="/login">
                  <button>Login</button>
                </Link>
              ) : (
                <div>
                  <button><FaUserTie/>{user.name}</button>
                </div>
              )}
              <i class="uil uil-align-center-alt menu"></i>
            </div>
            <div class="dd">
              {user != null ? (
                <button
                  onClick={() => {
                    logout();
                  }}
                >
                  Log Out
                </button>
              ) : null}

              <i class="uil uil-align-center-alt menu"></i>
            </div>
          </div>
        </header>
        <main>
          <div class="container">
            <div class="row">
              <div class="content">
                <h1 class="title">
                  <span>thétiptop</span> play <span>=</span> win<span>!</span>
                </h1>
                <div class="ticket-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Your ticket number" {...register("ticketid")} className={`form-control ${errors.ticketid ? "is-invalid" : ""}`}/>
                    <button type="submit">Check ticket</button>
                  </form>
                  <div className="invalid-feedback2">{errors.ticketid?.message}</div>
                </div>
              </div>
              <div class="ticket">
                <img class="wheel" src="/wheel.png" alt="" />
              </div>
            </div>
            <img src="/leav.png" class="overlay" alt="" />
          </div>
        </main>
        <div>
          <div class="container">
            <div id="mc_embed_signup">
              <form
                action="https://gmail.us11.list-manage.com/subscribe/post?u=17eb0fc9f60a035f869b0fafd&amp;id=5805488496&amp;f_id=00b18de0f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <div id="mce-responses" class="clear foot">
                    <div
                      class="response"
                      id="mce-error-response"
                      // style={{display: none}}
                    ></div>
                    <div
                      class="response"
                      id="mce-success-response"
                      // style={{display: none}}
                    ></div>
                  </div>
                  {/* <footer className="indexfooter">
                    <div class="signup">
                      <div
                        class="mc-field-group"
                        style={{ marginLeft: "50px" }}
                      >
                        <input
                          type="email"
                          value=""
                          name="EMAIL"
                          placeholder="Email"
                          class="required email"
                          id="mce-EMAIL"
                          required
                        />
                        <span
                          id="mce-EMAIL-HELPERTEXT"
                          class="helper_text"
                        ></span>
                      </div>
                      <div class="optionalParent">
                        <div class="clear foot">
                          <button
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            class="button"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </footer> */}

                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div
                    // style={{position: absolute, left: '-5000px'}}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_17eb0fc9f60a035f869b0fafd_5805488496"
                      tabindex="-1"
                      value=""
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

            <div class="other-info"></div>
          </div>
        </div>
        <script src="app.js"></script>
      </div>
    </>
  );
}
