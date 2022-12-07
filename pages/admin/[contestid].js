import { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import { BsPlusLg } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { userDetails } from "../../components/UserFacade";

const ViewCurrentContest = () => {
  const router = useRouter();
  let initialuserType = userDetails().userType;

  const [userType,SetUserType]=useState(initialuserType)
  let { contestid } = router.query;
  // const [contestId, SetcontestId] =useState(contestid)
  console.log("contestid :", contestid);

  const [contest, setContest] = useState([]);
  const [selected, setSelected] = useState(false);
  const [winnerData, setWinnerData] = useState([]);

  useEffect(() => {
    // const contestId = localStorage.getItem("contestId");
    axios
      .get("http://localhost:3001/api/v1/contests/" + contestid)
      .then((response) => {
        console.log("get method",response.data);
        setContest(response.data);
      });

    console.log("www", contest.name);
  }, []);

  const chooseWinner = async () => {
    console.log(contestid);
    const res = await fetch(
      `http://localhost:3001/api/v1/contests/${contestid}/main-pize-requests`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      
      setWinnerData(res.data);
      console.log("winner data",res.data);
      if (res.status === 201) {
        setSelected(true);
      } else {
        alert("Try again!");
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
                  {contest.status == "Active" ? (
                    <h2>Current Contest :</h2>
                  ) : (
                    <h2>Last Contest : {}</h2>
                  )}{" "}
                </div>
                <div>
                  {userType == "Admin" && (
                    <Link href="/admin/contestlist">
                      <button> Back </button>
                    </Link>
                  )}
                  {userType == "Employee" && (
                    <Link href="/employee/contestlist">
                      <button> Back </button>
                    </Link>
                  )}
                </div>
              </div>
              <div className="contest-board">
                <h2>{contest.name}</h2>
                <div className="table">
                  <div className="outerrow">
                    <div className="viewtb">Contest Name : </div>{" "}
                    <div>{contest.name}</div>
                  </div>
                  <div className="outerrow">
                    <div className="viewtb">Start Date : </div>{" "}
                    <div>{contest.startDate}</div>
                  </div>
                  <div className="outerrow">
                    <div className="viewtb">End Date : </div>{" "}
                    <div>{contest.endDate}</div>
                  </div>
                  <div className="outerrow">
                    <div className="viewtb">Status : </div>{" "}
                    <div>{contest.status}</div>
                  </div>
                </div>

                {contest.status=="InActive"&&<div className="Winner-chooser">
                  <center>
                    <p>
                      This contest has ended. Click to choose the winner for the
                      final prize. This winner will be choosen randomly by the
                      system.
                    </p>
                    {!selected && (
                      <button onClick={() => chooseWinner(contest.contestId)}>
                        Press to select the Winner
                      </button>
                    )}
                  </center>
                  {selected && (
                    <center>
                      <p>
                        Winner is :<span>{winnerData}</span> with a prize{" "}
                        {winnerData}. Congratulations!{" "}
                      </p>
                      <img
                        src="/congratulations.gif"
                        alt="congratulations for the winner of tiptop contest!"
                      />
                    </center>
                  )}
                </div>}
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
};

export default ViewCurrentContest;
