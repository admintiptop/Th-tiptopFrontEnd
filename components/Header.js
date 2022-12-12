import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { logout } from "../components/UserFacade";

const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="greenHeader">
      <div className="container">
        <div>
          <div className="logo">
            <Link href="/">
              <img src="/logo-white.svg" alt="" />
            </Link>
          </div>
        </div>
        <div>
          <div className={navActive ? "links active" : "links"}>
            <Link href="/" className="active">
              HOME
            </Link>
            <Link href="/legalnotice">legal notice contest</Link>
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
            <i
              className="uil uil-align-center-alt menu"
              onClick={() => {
                setNavActive((pre) => !pre);
              }}
            ></i>
          </div>
          {/* <div className="dd">
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
              </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
