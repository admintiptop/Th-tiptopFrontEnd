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
import { logout } from "../components/UserFacade";
import CountdownTimerForIndex from "../components/CountdownTimerForIndex";
import axios from "axios";

export default function Home() {
  const [user, setUser] = useState(null);
  const [dateTimeAfterThreeDays, setDate] = useState();
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

  const getTimerVal = async () => {
    
    await axios
      .get(`http://localhost:3001/api/v1/contests/get-active-contest-requests`)
      .then((response) => {
        if(response.status=='404'){
          setDate(null)
        }else{
          let time = new Date(response.data.endDate).getTime();
          setDate(time);
         console.log(response)
        }

      });
  };

  useEffect(() => {
    getTimerVal();
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
      router.push("http://localhost:3000/login");
    }

    try {
      const res = await fetch(
        "http://localhost:3001/api/v1/contest-participents/ticket-validatation-requests",
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
        router.push("http://localhost:3000/spinner");
      } else if (res.status == "422") {
        alert("Entered ticket id is invalid ");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>TheTipTop - Draw Contest - Buy and win</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="We ThéTipTop offers you  very high quality tea ranges with
          company signature blends, detox teas, white teas, vegetable teas, infusions, etc.
          All teas are organic and Handmade. To celebrate the opening of their 10th store, ThéTipTop would like to organize a draw-type contest. Buy greater than €49 worth tea to enter the contest."
        />
      </Head>

      <div>
        <header className="greenHeader">
          <div className="container">
            <div>
              <div className="logo">
                <img src="/logo-white.svg" alt="Logo - draw contest - TheTopTip" />
              </div>
            </div>
            <div>
              <div className="links">
                <Link href="#" className="active">
                  HOME
                </Link>
                <Link href="#">legal notice contest</Link>
              </div>
            </div>
            <div className="outerdd">
              <div className="dd">
                {user == null ? (
                  <Link href="/login">
                    <button>Login</button>
                  </Link>
                ) : (
                  <div>
                    <Link href="/viewuser">
                      <button>
                        <FaUserTie />
                        {user.name}
                      </button>
                    </Link>
                  </div>
                )}
                <i className="uil uil-align-center-alt menu"></i>
              </div>
              <div className="dd">
                {user != null ? (
                  <button
                    onClick={() => {
                      logout();
                      setUser(null);
                    }}
                  >
                    Log Out
                  </button>
                ) : null}

                <i className="uil uil-align-center-alt menu"></i>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="content">
                <h1 className="title">
                  <div>{dateTimeAfterThreeDays!=null && <CountdownTimerForIndex targetDate={dateTimeAfterThreeDays} className="indexTimer" />}</div>
                  <span>thétiptop</span> play <span>=</span> win<span>!</span>
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
                <img className="wheel" src="/wheel.png" alt="Spinwheel - draw contest - TheTopTip" />
              </div>
            </div>
            <img src="/leav.png" className="overlay" alt="Tea - draw contest - TheTopTip" />
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
                noValidate
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
                  {/* <footer className="indexfooter">
                    <div className="signup">
                      <div
                        className="mc-field-group"
                        style={{ marginLeft: "50px" }}
                      >
                        <input
                          type="email"
                          value=""
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
                  </footer> */}

                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div
                    // style={{position: absolute, left: '-5000px'}}
                    // aria-hidden="true"
                  >
                    {/* <input
                      type="text"
                      name="b_17eb0fc9f60a035f869b0fafd_5805488496"
                      tabindex="-1"
                      value=""
                    /> */}
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
