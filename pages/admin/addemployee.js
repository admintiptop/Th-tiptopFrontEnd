
import SideMenu from "../../components/SideMenu";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsPlusLg } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
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


  const deleteRecord =(id)=>{
    console.log("delete this id :" ,id)
    axios.delete('http://localhost:3001/api/v1/users/'+id)
    .then(response => 
      console.log("deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee :",id)
      )
    .catch(error => {
        console.error('There was an error!', error);
    });
  }
//   async function deleteRecord(id) {
//     await fetch('https://localhost:3001/api/v1/users/'+id, 
//     { method: 'delete',
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("accessToken"),
//     }  
//   });
// }

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
                        <th>Delete</th>
                      </tr>
                      {employees.length>0 &&
                      employees.filter((item)=>item.userType==="Employee").map((employee,index) => (
                        <tr key={index}>
                          <td>{employee.name}</td>
                          <td>{employee.email}</td>
                          <td><center><div className="smalldelete"><button onClick={()=>deleteRecord(employee._id)}><RiDeleteBin6Line/></button></div></center></td>
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
