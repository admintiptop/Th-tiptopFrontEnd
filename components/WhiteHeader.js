import { useRouter } from "next/router";
import {userDetails} from "./UserFacade";
import { useState, useEffect } from "react";
import Link from "next/link";

const WhiteHeader = () => {
  const router = useRouter();
  const [user,setUser]=useState(null);

  useEffect( () => {
    const user= userDetails();
    setUser(user.name);
  }, [])
  

  const logout = async () => {
    try {
      localStorage.removeItem("accessToken");
      router.push("http://localhost:3000");

    } catch (err) {
      console.log(err);
    }
  };

    return ( 
        <header>
        <div className="container">
          <div>
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>

          </div>
          <div>
          <div className="links">
            <Link href='/' className="active">HOME</Link>
            <Link href="#">legal notice contest</Link>
          </div>
          </div>
          
          <div className="outerdd">
          <div className="dd">
            <Link href='/viewuser'><button><i className="uil uil-user">{user}</i></button></Link>
            <i className="uil uil-align-center-alt menu"></i>
          </div>
          <div className="dd">
              {user != null ? (
                <button
                  onClick={() => {
                    logout();
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
     );
}
 
export default WhiteHeader;