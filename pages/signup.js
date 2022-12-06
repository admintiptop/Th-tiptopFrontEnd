import { BsEnvelope } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa";
import { RiKey2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import Link from "next/link";
import Head from "next/head";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [passportNumber, setPassport] = useState();
  const [password, setPassword] = useState();
  const [isSocialSign, setSocialSign] = useState(false);
  const router = useRouter();

  const getUser = async () => {
    try {
      const url = "http://localhost:3001/api/v1/auth/google/login/success";
      const res = await fetch(url, {
        credentials: "include",
        method: "get",
        mode: "cors",
      });
      const data = await res.json();

      if (!data.error) {
        if (data.isAlreadySignUp) {
          localStorage.setItem("accessToken", data.accessToken);
          router.push("http://localhost:3000");
        } else {
          setEmail(data.user._json.email);
          setName(data.user._json.name);
          setSocialSign(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isAuthenticated = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (token != null) {
        let jwtSecretKey = "gfg_jwt_secret_key";
        const user = jwt.verify(token, jwtSecretKey);

        if (user.userType === "User") {
          router.push("http://localhost:3000");
        } else if (user.userType === "Admin") {
          router.push("http://localhost:3000/admin/contestlist");
        } else if (user.userType === "Employee") {
          router.push("http://localhost:3000/employee/changeprizestatus");
        } else {
          router.push("http://localhost:3000");
        }
      } else {
        console.log("Not log");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    isAuthenticated();
    getUser();
  }, []);

  const signUp = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/api/v1/auth/sign-up", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
        passportNumber: passportNumber,
      }),
    });

    if (res.status == "200") {
      const data = await res.json();
      localStorage.setItem("accessToken", data.accessToken);
      alert("Successfully Registered");
      router.push("http://localhost:3000");
    } else {
    }
  };

  const googleAuth = () => {
    window.open("http://localhost:3001/api/v1/auth/google/callback", "_self");
    // alert("Hello");
  };

  return (
    <>
      <div>
      <Head>
        <title>TheTipTop - Draw Contest</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Here is the signup for Tiptop draw. Enter you email or signup with google or facebook. We ThéTipTop offers you  very high quality tea ranges with
          company signature blends, detox teas, white teas, vegetable teas, infusions, etc.
          All teas are organic and Handmade. To celebrate the opening of their 10th store, ThéTipTop would like to organize a draw-type contest. Buy greater than €49 worth tea to enter the contest."
        />
      </Head>
        <header className="greenheader">
          <div className="container">
            <div className="logo">
              <img src="/logo-white.svg" alt="" />
            </div>
            <div className="links">
              <a href="#" className="active">
                HOME
              </a>
              <a href="#">legal notice contest</a>
            </div>

            <Link href="/login">
              <button>Login</button>
            </Link>
          </div>
        </header>
        <main>
          <div className="container">
            <form action="#" className="sign">
              <h1>Signup</h1>
              <div className="fild">
                <div className="i">
                  <AiOutlineUser />
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  disabled={isSocialSign ? true : false}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="fild">
                <div className="i">
                  <BsEnvelope />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  disabled={isSocialSign ? true : false}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="fild">
                <div className="i">
                  <FaRegIdCard />
                </div>
                <input
                  type="text"
                  placeholder="Passport number"
                  onChange={(e) => setPassport(e.target.value)}
                />
              </div>

              {isSocialSign === false ? (
                <div className="fild">
                  <div className="i">
                    <RiKey2Fill />
                  </div>

                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              ) : null}

              <button className="submit" onClick={(e) => signUp(e)}>
                Signup
              </button>

              {/* <div className="social">
                <button
                  onClick={(e) => {
                    googleAuth();
                  }}
                >
                  <img src="/google.svg" alt="" /> Google
                </button>
                <button>
                  <img src="/fb.svg" alt="" /> Facebook
                </button>
              </div> */}

              {/* <p className="ask">
                Already have an account? <a href="/login">Login</a>
              </p> */}
              {isSocialSign === false ? (
                <>
                  <div className="social">
                    <button
                      onClick={(e) => {
                        googleAuth();
                      }}
                    >
                      <img src="/google.svg" alt="" /> Google
                    </button>

                    <button
                      onClick={(e) => {
                        facebookAuth();
                      }}
                    >
                      <img src="/fb.svg" alt="" /> Facebook
                    </button>
                  </div>

                  <p className="ask">
                    Already have an account? <a href="/login">Login</a>
                  </p>
                </>
              ) : null}
            </form>
          </div>
        </main>
        {/* <footer>
          <div className="container"></div>
        </footer> */}
      </div>
    </>
  );
};

export default Signup;
