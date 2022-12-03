import { useState } from "react";
import SideMenu from "../../components/SideMenu";

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

  const [length, setLength] = useState(4);
  return (
    <div>
      <SideMenu />
      <div className="main-wrap">
        <div className="wrapSection">
          <div className="block active">
            <div className="contest-list">
              <h2>Contest List</h2>
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
                          <td>{contest.startDate}</td>
                          <td>{contest.endDate}</td>
                          <td>
                            <button>View Contest</button>
                          </td>
                        </tr>
                      } else if (contest.status === "InActive") {
                        return <tr key={contest.id}>
                          <td>{contest.name}</td>
                          <td>{contest.startDate}</td>
                          <td>{contest.endDate}</td>
                          <td>
                            <button>Select Final Prize winner</button>
                          </td>
                        </tr>
                      } else {
                        return <tr key={contest.id}>
                          <td>{contest.name}</td>
                          <td>{contest.startDate}</td>
                          <td>{contest.endDate}</td>
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
