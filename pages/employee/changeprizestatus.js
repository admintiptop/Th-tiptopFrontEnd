import SideMenu from "../../components/SideMenu";
import { FaSearch } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import axios from "axios";
import { BiEditAlt } from "react-icons/bi";
import { userDetails } from "../../components/UserFacade";
import { useRouter } from "next/router";

const ChangePrizeSTatus = () => {
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [userType, setUserType] = useState([]);
  const [searchTerm, setsearchTerm] = useState();
  const [searchUsers, setsearchUsers] = useState([]);
  const [isSearch, setsearch] = useState(false);

  useEffect(() => {
    Authorize();
    getUserList();
  }, []);

  const Authorize = () => {
    const user = userDetails();
    console.log("userType :", user.userType);
    if (user.userType === "User") {
      router.push("http://localhost:3000");
    } else if (user.userType === "Admin") {
      router.push("http://localhost:3000/admin/contestlist");
    } else if (user.userType === "Employee") {
      router.push("http://localhost:3000/employee/changeprizestatus");
    } else {
      router.push("http://localhost:3000");
    }
  };

  const getUserList = async () => {
    await axios
      .get("http://localhost:3001/api/v1/contest-participents")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      });
  };

  const search = (value) => {
    console.log(value);
    let searchUsers = users.filter(
      (item) => item.name == value || item.email == value
    );
    console.log(searchUsers);
    if (value == "") {
      console.log("awa");
      setsearch(false);
      getUserList();
    } else {
      console.log("awa-1");
      // setUsers(searchUsers);
      setsearchUsers(searchUsers);
      setsearch(true);
    }
  };

  const clickDelivered = async (users) => {
    console.log("users: ", users);

    await fetch("http://localhost:3001/api/v1/users/prizes/status-change-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: users.userId,
        ticketId: users.ticketId,
        contestId: users.contestId,
        prize: users.prize,
      }),
    }).then((res) => {
      if (res.status === 200) {
        alert("Status update success!");
        getUserList();
        // router.push("http://localhost:3000/admin/addemployee")
      } else if (res.status === 422) {
        alert("Cannot update status!");
        getUserList();
      }
    });
  };

  return (
    <div>
      <SideMenu />
      <div className="main-wrap">
        <div className="wrapSection">
          <div className="block active">
            <div className="contest-list">
              <div className="headerwithbutton">
                <div>
                  <h2>Deliver Prizes</h2>
                </div>
                <div>
                  <div className="search">
                    <input
                      type="text"
                      placeholder="Search"
                      onChange={(e) => search(e.target.value)}
                    />
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
                      <th>Ticket id</th>
                      <th>Prize</th>
                      <th>Prize Status</th>
                      <th>Action</th>
                    </tr>

                    {/* <tr>
                        <td>{users.name}</td>
                        <td>{users.ticketId}</td>
                        <td>{users.prize}</td>
                        <td>{users.prizeStatus =="Delivered"?(<span><FaCheckCircle/> Prize Delivered</span>)
                        :(users.prizeStatus =="Pending")?(<span>Pending</span>):(<span></span>)} </td>
                        <td><center><div className="smalledit"><button>Deliver</button></div></center></td>
                      </tr> */}

                    {!isSearch
                      ? users
                          .filter((item) => item.prize !== "")
                          .map((users) => (
                            <tr key={users.ticketId}>
                              <td>{users.name}</td>
                              <td>{users.ticketId}</td>
                              <td>{users.prize}</td>
                              <td>
                                {users.prizeStatus == "Delivered" ? (
                                  <span>
                                    <FaCheckCircle /> Prize Delivered
                                  </span>
                                ) : users.prizeStatus == "Pending" ? (
                                  <span>Pending</span>
                                ) : (
                                  <span></span>
                                )}{" "}
                              </td>
                              <td>
                                <center>
                                  {users.prizeStatus === "Delivered" ? (
                                    <div className="delivereddisabled">
                                      Deliver
                                    </div>
                                  ) : (
                                    <div className="smalledit">
                                      <button
                                        onClick={() => clickDelivered(users)}
                                      >
                                        Deliver
                                      </button>
                                    </div>
                                  )}
                                </center>
                              </td>
                            </tr>
                          ))
                      : searchUsers
                          .filter((item) => item.prize !== "")
                          .map((users) => (
                            <tr key={users.ticketId}>
                              <td>{users.name}</td>
                              <td>{users.ticketId}</td>
                              <td>{users.prize}</td>
                              <td>
                                {users.prizeStatus == "Delivered" ? (
                                  <span>
                                    <FaCheckCircle /> Prize Delivered
                                  </span>
                                ) : users.prizeStatus == "Pending" ? (
                                  <span>Pending</span>
                                ) : (
                                  <span></span>
                                )}{" "}
                              </td>
                              <td>
                                <center>
                                  {users.prizeStatus === "Delivered" ? (
                                    <div className="delivereddisabled">
                                      Deliver
                                    </div>
                                  ) : (
                                    <div className="smalledit">
                                      <button
                                        onClick={() =>
                                          clickDelivered(users.ticketId)
                                        }
                                      >
                                        Deliver
                                      </button>
                                    </div>
                                  )}
                                </center>
                              </td>
                            </tr>
                          ))}
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

export default ChangePrizeSTatus;
