import Image from "next/image";
import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import { RiKey2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const googleAuth = () => {
    window.open("http://localhost:3001/api/v1/auth/google/callback", "_self");
    alert("Hello");
  };

  const signIn = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/api/v1/auth/sign-in", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (res.status == "200") {
      const data = await res.json();
      localStorage.setItem("accessToken", data.accessToken);
      alert("Sign in successfull");
    } else {
    }
  };

  return (
    <>
      <div>
        <header>
          <div className="container">
            <div className="logo">
              <img src="logo-white.svg" alt="" />
            </div>
            <div className="links">
              <Link href="#" className="active">
                HOME
              </Link>
              <Link href="#">legal notice contest</Link>
            </div>
            <Link href="#">
              <button>Login</button>
            </Link>
          </div>
        </header>
        <main>
          <div className="container">
            <form action="#" className="sign">
              <h1>Login</h1>
              <div className="fild">
                <div className="i">
                  <BsEnvelope />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="fild">
                <div className="i">
                  <RiKey2Fill />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="submit"
                onClick={(e) => {
                  signIn(e);
                }}
              >
                Login
              </button>
              <div className="social">
                <button
                  onClick={(e) => {
                    googleAuth();
                  }}
                >
                  <img src="/google.svg" /> Google
                </button>
                <button>
                  <img src="/fb.svg" /> Facebook
                </button>
              </div>
              <p className="ask">Don't have an account?</p>
            </form>
          </div>
        </main>
        <footer>
          <div className="container"></div>
        </footer>
      </div>
    </>
  );
};

export default Login;
