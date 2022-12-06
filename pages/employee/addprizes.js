import { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import axios from "axios";
import { useRouter } from "next/router";


const AddPrizes = () => {
  const router = useRouter();
  const [prizes, SetPrizes] =useState();
  useEffect(() => {
    if (localStorage.getItem("accessToken") == null) {
      router.push("http://localhost:3000/login")
    }
      getPrices();
  }, []);

  const getPrices = () => {
    axios.get("http://localhost:3001/api/v1/prices").then((response) => {
      SetPrizes(response.data);
  });
  }

  return (
    <div>
      <SideMenu />

      <div className="main-wrap">
        <div className="wrapSection">
          <div className="block active">
            <div className="contest-list">
            <div className="headerwithbutton">
                <div><h2>Prizes</h2></div>
                </div>
                <div className="table">
            <table>
              <tbody>
                <tr>
                  <th>Number</th>
                  <th>Prize name</th>
                  <th>Winning chance</th>
                </tr>
                {
                  prizes?.map((prize,index = 0)=>(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{prize.name}</td>
                    <td>{prize.winningChance}%</td>
                   
                  </tr>
                  ))
                }
              </tbody>
            </table>
          </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPrizes;
