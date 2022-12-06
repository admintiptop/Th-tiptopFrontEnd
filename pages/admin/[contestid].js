import { useState,useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import { BsPlusLg } from 'react-icons/bs';
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router'


const ViewCurrentContest = () => {
  const router = useRouter()
  const { contestid } = router.query
 console.log('contestid :',contestid)
    const [contest,setContest]=useState([])
    

    useEffect( () => {
        const contestId = localStorage.getItem("contestId");
        axios.get("http://localhost:3001/api/v1/contests/"+contestid).then((response) => {
            console.log(response.data)
            setContest(response.data);})

            console.log('www',contest.name)
      }, [])


    return ( 
        <div>
        <SideMenu />
        <div className="main-wrap">
          <div className="wrapSection">
            <div className="block active">
              <div className="contest-list">
                <div className="headerwithbutton">
                  <div><h2>Current Contest : {}</h2></div>
                  <div><Link href='/admin/contestlist'><button> Back </button></Link></div>
                  </div>
                  <div className="contest-board">
          <h2>{contest.name}</h2>
          <div className="table">
            <p><span>Contest Name : </span> {contest.name}</p>
            <p><span>Start Date : </span> {contest.startDate}</p>
            <p><span>End Date : </span> {contest.endDate}</p>
            <p><span>Status : </span> {contest.status}</p>

          </div>
        </div>
        
    {/* "_id": "638e42cd0df95ba76b7e865c",
    "name": "Green Card",
    "startDate": "2022-12-06T00:41",
    "endDate": "2022-12-31T00:41",
    "ticketNumbers": 20,
    "chooseprices": [
        "tea infuser",
        "detox tea",
        "signature tea",
        "discovery box worth €39",
        "discovery box worth €69"
    ],
    "mainPrice": "tea worth €360",
    "status": "Active",
    "createdAt": "2022-12-05T19:13:17.900Z",
    "updatedAt": "2022-12-05T19:13:17.900Z",
    "__v": 0 */}

              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default ViewCurrentContest;