import SideMenu from "../../components/SideMenu";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsPlusLg } from 'react-icons/bs';

const ViewUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Name",
      email: "Nassim1@gmail.com",
      ticketId: "1231234561",
      prize: "$42",
    },
    {
      id: 2,
      name: "Name",
      email: "Usef1@gmail.com",
      ticketId: "0001234561",
      prize: "$79",
    },
    {
      id: 3,
      name: "Name",
      email: "Nassim2@gmail.com",
      ticketId: "7003123456",
      prize: "$99",
    },
    {
      id: 4,
      name: "Name",
      email: "Usef2@gmail.com",
      ticketId: "1777234599",
      prize: "$45",
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(response => setUsers(response.data));
  // }, []);

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
                <input type="text" placeholder="Search" />
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

                    {users.map((users) => (
                      <tr key={users.id}>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.ticketId}</td>
                        <td>{users.prize}</td>
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

export default ViewUsers;
