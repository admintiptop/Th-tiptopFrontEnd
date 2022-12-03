import SideMenu from "../../components/SideMenu";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

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
  return (
    <div>
      <div>
        <SideMenu />
        <div className="main-wrap">
          <div className="wrapSection">
            <div className="block active">
              <div className="contest-list">
                <h2>Employees</h2>
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
