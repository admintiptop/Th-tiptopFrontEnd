import { useRouter } from "next/router";
import {userDetails} from "./UserFacade";
import { useState, useEffect } from "react";

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
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>
          <div className="links">
            {/* <a href="#" className="active">HOME</a> */}
            <a href="#">legal notice contest</a>
          </div>
          <div className="dd">
            <button><i className="uil uil-user">{user}</i> </button>
            <i className="uil uil-align-center-alt menu"></i>
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
     );
}
 
export default WhiteHeader;