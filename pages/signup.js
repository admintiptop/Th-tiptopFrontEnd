import { BsEnvelope } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa";
import { RiKey2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

  useEffect(() => {
    getUser();
  }, []);

  const signUp = async (e) => {
    e.preventDefault();
    console.log("signupdaaaaaaaaaaaaaaaaaa");
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
      alert("Sign up successfull");
    } else {
    }
  };

  const googleAuth = () => {
    window.open("http://localhost:3001/api/v1/auth/google/callback", "_self");
    alert("Hello");
  };

  return (
    <>
      <div>
        <header>
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
            <a href="#">
              <button>Login</button>
            </a>
          </div>
        </header>
        <main>
          <div className="container">
            <form action="#" className="sign">
              <h1>Signup</h1>
              <div className="fild">
                <div classNameName="i">
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
                <div classNameName="i">
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
                <div classNameName="i">
                  <FaRegIdCard />
                </div>
                <input
                  type="text"
                  placeholder="Passport number"
                  onChange={(e) => setPassport(e.target.value)}
                />
              </div>
              <div className="fild">
                <div classNameName="i">
                  <RiKey2Fill />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="submit" onClick={(e) => signUp(e)}>
                Signup
              </button>
              <div className="social">
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
              </div>
              <p className="ask">
                Already have an account? <a href="login.html">Login</a>
              </p>
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

export default Signup;
