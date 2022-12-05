import { useState,useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import { BsPlusLg } from 'react-icons/bs';
import Link from "next/link";
import axios from "axios";


const ContestList = () => {

  const [contests, SetContests] = useState([
    {
      id: 1,
      name: "Tea party 3",
      startDate: "",
      endDate: "",
      status: "Active",
    },
    {
      id: 2,
      name: "Tea party 2",
      startDate: "",
      endDate: "",
      status: "InActive",
    },
    {
      id: 3,
      name: "Mega TopTip",
      startDate: "",
      endDate: "",
      status: "End",
    },
    {
      id: 4,
      name: "Tea party 1",
      startDate: "",
      endDate: "",
      status: "End",
    }
  ]);

    useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/contests")
      .then(response => {
        console.log('responses are :', response.data);
        SetContests(response.data)});
  }, []);

 
  return (
    <div>
      <SideMenu />
      <div className="main-wrap">
        <div className="wrapSection">
          <div className="block active">
            <div className="contest-list">
              <div className="headerwithbutton">
                <div><h2>Contest List</h2></div>
                <div><Link href='/admin/createcontest'><button><BsPlusLg/> New Contest</button></Link></div>
                </div>
              
              <div className="table">
                <table>
                  <tbody>
                    <tr>
                      <th>Contest name</th>
                      <th>Start date</th>
                      <th>End date</th>
                      <th>Status</th>
                    </tr>
                    {contests.map((contest) => {
                      if (contest.status === "Active") {
                        return <tr key={contest.id}>
                          <td>{contest.name}</td>
                          <td>{ new Date(contest.startDate).getDay()+"."+new Date(contest.startDate).getMonth()+"."+new Date(contest.startDate).getFullYear()}</td>
                          <td>{ new Date(contest.endDate).getDay()+"."+new Date(contest.endDate).getMonth()+"."+new Date(contest.endDate).getFullYear() }</td>
                
                          <td>
                            <button>View Contest</button>
                          </td>
                        </tr>
                      } else if (contest.status === "InActive") {
                        return <tr key={contest.id}>
                          <td>{contest.name}</td>
                          <td>{ new Date(contest.startDate).getDay()+"."+new Date(contest.startDate).getMonth()+"."+new Date(contest.startDate).getFullYear()}</td>
                          <td>{ new Date(contest.endDate).getDay()+"."+new Date(contest.endDate).getMonth()+"."+new Date(contest.endDate).getFullYear() }</td>
                          <td>
                            <button>Select Final Prize winner</button>
                          </td>
                        </tr>
                      } else {
                        return <tr key={contest.id}>
                          <td>{contest.name}</td>
                          <td>{ new Date(contest.startDate).getDay()+"."+new Date(contest.startDate).getMonth()+"."+new Date(contest.startDate).getFullYear()}</td>
                          <td>{ new Date(contest.endDate).getDay()+"."+new Date(contest.endDate).getMonth()+"."+new Date(contest.endDate).getFullYear() }</td>
                          <td>
                            End
                          </td>
                        </tr>
                      }
                    })}
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

export default ContestList;
