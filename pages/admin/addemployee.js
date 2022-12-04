
import SideMenu from "../../components/SideMenu";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsPlusLg } from 'react-icons/bs';
import Link from "next/link";
import axios from "axios";

import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

const AddEmployee = () => {
  const router = useRouter();

  const [employees, setemployees] = useState([]);


  useEffect(() => {
    let userid
    let userType
    try {
      const token = localStorage.getItem("accessToken");
      if (token != null) {
        let jwtSecretKey = "gfg_jwt_secret_key";
        const user = jwt.verify(token, jwtSecretKey);
        userid=user.userId
        userType=user.userType
        console.log(user);
      } else {
        console.log("ELSE");
        router.push("http://localhost:3000/login");
      }
    } catch (err) {
      console.log(err);
      console.log("CATCH");
      router.push("http://localhost:3000/login");
    }

    if (userType==='User'){
      router.push("http://localhost:3000");
    }else if(userType==='Employee'){
      router.push("http://localhost:3000");
    }else{
      axios.get(`http://localhost:3001/api/v1/users`)
      .then((response)=> {
        setemployees(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    }
  }, []);
  // localhost:3001/api/v1/users

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
                      {employees.length>0 &&
                      employees.filter((item)=>item.userType==="Employee").map((employee,index) => (
                        <tr key={index}>
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
