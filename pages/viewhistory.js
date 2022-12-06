import { useState, useEffect } from "react";
import WhiteHeader from "/components/WhiteHeader";
import axios from "axios";

import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

const viewHistory = () => {
  const router = useRouter();

  const [userId, setUserId]=useState()
  const [activeContestEndDate,setActiveContestEndDate]=useState();

    const isAuthenticated = async () => {
   
  };

  const [data,SetData]=useState([])
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    let userid
    let userType
    try {
      let username = localStorage.getItem("username");
      setUserName(username);
      const token = localStorage.getItem("accessToken");
      if (token != null) {
        let jwtSecretKey = "gfg_jwt_secret_key";
        const user = jwt.verify(token, jwtSecretKey);
        userid=user.userId
        userType=user.userType
        setUserId(user.userId)
      
      } else {
        router.push("http://localhost:3000/login");
      }
    } catch (err) {
      console.log(err);
      router.push("http://localhost:3000/login");
    }

    if (userType==='Admin'){
      router.push("http://localhost:3000/admin/contestlist");
    }else if(userType==='Employee'){
      router.push("http://localhost:3000/employee/changeprizestatus");
    }else{
      axios.get(`http://localhost:3001/api/v1/users/`+userid+`/history-requests`)
      .then((response)=> {
        SetData(response.data)
        if (response.data.length > 0) {
          let endDate=response.data.filter((item)=>item.contestStatus ==="Active").map(element=>element.contestEndDate);
          let date =new Date(endDate[0])

          let format=date.getDay()+"."+date.getMonth()+"."+date.getFullYear()
          setActiveContestEndDate(format);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    
    }

  }, []);


  return (
    <>
      <div className="headercontainer">
        <WhiteHeader/>
      </div>

      <div className="viewhistorycontainer">
        <div className="contest-result">
          <h2>
            costest result will be published on <span>{activeContestEndDate}</span>
          </h2>
        </div>
        <div className="winning-order">
          <h2>Your winning prize status</h2>
          <div className="table">
            <table>
              <tbody>
                <tr>
                  <th>Prize number</th>
                  <th>Prize name</th>
                  <th>Status</th>
                </tr>

                { data.length>0 &&
                data.filter((item)=>item.prize.length > 0 && item.contestStatus === "Active").map((myprize,index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{myprize.prize}</td>
                    <td>{myprize.prizeStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="history">
          <h2>Your contest history</h2>
          <div className="table">
            <table>
              <tbody>
                <tr>
                  <th>Costest name</th>
                  <th>Date</th>
                  <th>Prize</th>
                  <th>Contest draw</th>
                </tr>
                {
                data.length>0 &&
                data.filter((item)=> item.prize.length > 0 && item.contestStatus === "InActive" || item.contestStatus === "End").map((history,index) => (
                  <tr key={index}>
                    <td>{history.contestName}</td>
                    <td>{history.contestEndDate}</td>
                    <td>{history.prize}</td>
                    <td>{history.mainPrizeResult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer>
        <div className="container"></div>
      </footer>
    </>
  );
};

export default viewHistory;
