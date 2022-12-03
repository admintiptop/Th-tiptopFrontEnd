import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { BsEnvelope } from 'react-icons/bs';


export default function Home() {
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
    <header className='greenHeader'>
      <div class="container">
        <div class="logo">
          <img src="/logo-white.svg" alt="" />
        </div>
        <div class="links">
          <a href="#" class="active">HOME</a>
          <a href="#">legal notice contest</a>
        </div>
        <div class="dd">
          <Link href='/login'><button>Login</button></Link>
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
              <form action="#">
                <input
                  id="ticket"
                  type="text"
                  placeholder="Your ticket number"
                />
                <button>Check ticket</button>
              </form>
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
              <footer className='indexfooter'>
              <div class="signup">
                <div class="mc-field-group" style={{marginLeft:'50px'}}>
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    placeholder="Email"
                    class="required email"
                    id="mce-EMAIL"
                    required
                  />
                  <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
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
              </footer>

               {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <div 
              // style={{position: absolute, left: '-5000px'}} 
              aria-hidden="true">
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
  )
}
