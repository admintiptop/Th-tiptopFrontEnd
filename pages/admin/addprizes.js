import { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import {BsPlusLg} from 'react-icons/bs';
import axios from "axios";

const AddPrizes = () => {

  const [prizes, SetPrizes] =useState();
  const [name, SetName] = useState();
  const [winningChance, SetWinningChance] = useState();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const price = { name, winningChance };
    const res=await fetch('http://localhost:3001/api/v1/prices', {
      method: 'POST',
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + localStorage.getItem("accessToken"), },
      body: JSON.stringify(price)
    }).then(res => {
      getPrices();
      SetName("");
      SetWinningChance("");

    })

    // if (res.status == "422") {
    //   alert("Price add operation failure");
    //  }else if(res.status == "201"){
    //    alert("Price added Successfully");
    //     router.push("http://localhost:3000/admin/contestlist")
    //  }
  }
 
  return (
    <div>
      <SideMenu />
      <div className="block active">
        <div className="prize-board">
          <h2>Prizes</h2>
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
        <form action="#">
          <div className="add">
            <input type="text" placeholder="Prize name" value={name} onChange={(e) => SetName(e.target.value)} />
            <input type="number" placeholder="Winning chance in %" value={winningChance} onChange={(e) => SetWinningChance(e.target.value)} />
            <button onClick={handleSubmit}><BsPlusLg/> Add List Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPrizes;
