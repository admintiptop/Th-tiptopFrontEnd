import SideMenu from "../../components/SideMenu";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsPlusLg } from 'react-icons/bs';
import Link from "next/link";


const AddEmployee = () => {
  const [employees, setemployees] = useState([
    {
      id: 1,
      name: "Name",
      email: "Nassim1@gmail.com",
    },
    {
      id: 2,
      name: "Name",
      email: "Usef1@gmail.com",
    },
    {
      id: 3,
      name: "Name",
      email: "Nassim2@gmail.com",
    },
    {
      id: 4,
      name: "Name",
      email: "Usef2@gmail.com",
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(response => setemployees(response.data));
  // }, []);

  return (
    <div>
      <div>
        <SideMenu />
        <div className="main-wrap">
          <div className="wrapSection">
            <div className="block active">
              <div className="contest-list">
                <div className="headerwithbutton">
                <div><h2>Employees</h2></div>
                <div><Link href='/admin/createemployee'><button><BsPlusLg/> New Employee</button></Link></div>
                </div>
                <div className="table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                      </tr>
                      {employees.map((employee) => (
                        <tr key={employee.id}>
                          <td>{employee.name}</td>
                          <td>{employee.email}</td>
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
    </div>
  );
};

export default AddEmployee;
