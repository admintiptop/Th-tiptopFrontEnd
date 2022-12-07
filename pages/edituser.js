import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import WhiteHeader from "/components/WhiteHeader";
import Link from "next/link";
import jwt from "jsonwebtoken";
import axios from "axios";
import { userDetails } from '../components/UserFacade';
import { useRouter } from "next/router";


const EditUser = () => {
  const router = useRouter();
  // const [data,setData] =useState([])
  const [name,setname] =useState('')
  const [email,setemail] =useState('')


  useEffect( () => {
    console.log('ttttt',userDetails().userId)
    // const contestId = localStorage.getItem("contestId");
    axios.get("http://localhost:3001/api/v1/users/"+userDetails().userId).then((response) => {
        console.log(response.data.name)
        // setData(response.data);
        setname(response.data.name)
        setemail(response.data.email)
        })

  }, [])


  const editUserDetails=async(e)=>{
   let user =userDetails()
    e.preventDefault();
    console.log('edittt: ',user)
    const res = await fetch("http://localhost:3001/api/v1/users/"+user.userId, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        
      }),
    });
    console.log(res.json);
    if (res.status == "200") {
      const data = await res.json();
      localStorage.setItem("accessToken", data.accessToken);
      alert('User details updated')
      router.push("http://localhost:3000/viewuser");

    }else if(res.status == "422"){
      alert('User details update not success')
    }
     
  }
    return ( 
        <div>
        <div className="headercontainer">
        <WhiteHeader/>
      </div>   

        <section id="user-dashboard">
          <div className="container">
          <div className="block active">
              <div className="profile-edit">
                <form action="#" className="sign">
                  <h1>Edit profile</h1>
                  <div className='rowofedit'>
                    <div className='rowofeditInner'>
                      Name :
                    </div>
                    <div>
                    <div className="fild"> 
                    <i className="uil uil-user"></i>
                    <input type="text" placeholder="Name" value={name}  onChange={(e)=>{setname(e.target.value)}} />
                  </div>
                    </div>
                  </div>
                  
                  <div className='rowofedit'>
                    <div className='rowofeditInner'>
                      Email :
                    </div>
                    <div>
                    <div className="fild">
                    <i className="uil uil-envelope"></i>
                    <input type="email" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                  </div>
                    </div>
                  </div>
                  
                  
                  <div className="buttons">
                    <button className="submit" onClick={(e)=>editUserDetails(e)}>Save changes</button>
                    <Link href='/viewuser'><button className="submit" type='reset'>Cancel</button></Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container"></div>
        </footer>
      </div>
     );
}
 
export default EditUser;