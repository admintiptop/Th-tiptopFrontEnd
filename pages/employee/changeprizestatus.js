import SideMenu from "../../components/SideMenu";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsPlusLg } from 'react-icons/bs';
import axios from "axios";
import { BiEditAlt } from 'react-icons/bi';


const ChangePrizeSTatus = () => {
    return ( 
        <div>
      <SideMenu />
      <div className="main-wrap">
        <div className="wrapSection">
          <div className="block active">
            <div className="contest-list">
              <div className="headerwithbutton">
                <div><h2>Contest Participents</h2></div>
                <div>
                <div className="search">
                <input type="text" placeholder="Search" onChange={(e)=>search(e.target.value)} />
                <button>
                  <FaSearch />
                </button>
              </div>
                </div>
                
                </div>

              <div className="table">
                <table>
                  <tbody>
                    <tr>
                      <th>Nom</th>
                      <th>E-mail</th>
                      <th>ID de billets</th>
                      <th>Prix</th>
                      <th>Statut du prix</th>
                    </tr>
                    <tr>
                        <td>eeee</td>
                        <td>eeee</td>
                        <td>eeee</td>
                        <td>eeee</td>
                        <td><center><div className="smalledit"><button><BiEditAlt/></button></div></center></td>
                      </tr>

                    {/* {!isSearch? users.map((users) => (
                      <tr key={users.id}>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.ticketId}</td>
                        <td>{users.prize}</td>
                      </tr>
                    )):searchUsers.map((users) => (
                      <tr key={users.id}>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.ticketId}</td>
                        <td>{users.prize}</td>
                      </tr>
                    )) } */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default ChangePrizeSTatus;