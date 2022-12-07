import SideMenu from "../../components/SideMenu";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

import axios from "axios";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm,setsearchTerm]=useState();
  const [searchUsers,setsearchUsers]=useState([]);
  const [isSearch,setsearch]=useState(false);

  useEffect(() => {
    getUserList();
  }, []);


  const getUserList = async ()=>{
   await axios.get("http://localhost:3001/api/v1/contest-participents")
    .then(response => setUsers(response.data));
  }

  const search =(value)=>{
    console.log(value);
    let searchUsers=users.filter((item)=>item.name == value || item.email == value );
    console.log(searchUsers)
    if (value == "") {
      console.log("awa")
      setsearch(false);
      getUserList();
    }else{
      console.log("awa-1")
      // setUsers(searchUsers);
      setsearchUsers(searchUsers);
      setsearch(true);

    }
   

  }
  

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
                      <th>Name</th>
                      <th>Email</th>
                      <th>Ticket id</th>
                      <th>Prize</th>
                      
                    </tr>

                    {!isSearch? users.filter(item=>item.prize!=='').map((users) => (
                      <tr key={users.ticketId}>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.ticketId}</td>
                        <td>{users.prize}</td>
                      </tr>
                    )):searchUsers.filter(item=>item.prize!=='').map((users) => (
                      <tr key={users.ticketId}>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.ticketId}</td>
                        <td>{users.prize}</td>
                      </tr>
                    )) }
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

export default ViewUsers;
