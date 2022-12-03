import { useState } from "react";
import SideMenu from "../../components/SideMenu";
import {BsPlusLg} from 'react-icons/bs'


const AddPrizes = () => {

  const [prizes, SetPrizes] =useState([
    {id:1,
      name:'$24',
      winningChance:50},
    {id:2,
      name:'$46',
      winningChance:30},
    {id:3,
      name:'$67',
      winningChance:10},
    {id:4,
      name:'$140',
      winningChance:5},
    {id:5,
      name:'$150',
      winningChance:5},
  ])

  //    useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(response => SetPrizes(response.data));
  // }, []);
 
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
                  prizes.map((prize)=>(
                    <tr key={prize.id}>
                    <td>{prize.id}</td>
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
            <input type="text" placeholder="Prize name" />
            <input type="number" placeholder="Winning chance in %" />
            <button><BsPlusLg/> Add List Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPrizes;
