import { useState } from "react";
import WhiteHeader from "/components/WhiteHeader";

const viewHistory = () => {
  const [myprizes, Setmyprizes] = useState([
    { id: 1, name: "tea bag", status: "pending" },
    { id: 2, name: "green tea ", status: "pending" },
    { id: 3, name: "tea bag", status: "pending" },
    { id: 4, name: "Lemon tea", status: "pending" },
    { id: 5, name: "Peach tea", status: "pending" },
  ]);

  const [myhistory, Setmyhistory] = useState([
    { id: 1,endDate:'20-05-2022' , contestName:'tea', name: "tea bag", contestDraw: "loose" },
    { id: 2,endDate:'20-05-2022' , contestName:'mega tea ', name: "green tea ", contestDraw: "loose" },
    { id: 3,endDate:'20-05-2022' , contestName:'tea prize', name: "tea bag", contestDraw: "won" },
    { id: 4,endDate:'20-05-2022' , contestName:'mega tea 2', name: "Lemon tea", contestDraw: "loose" },
    { id: 5,endDate:'20-05-2022' , contestName:'mega tea 3', name: "Peach tea", contestDraw: "loose" },
  ]);

  // useEffect(() => {
  ////  get current contest end date
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(response => setemployees(response.data));

  //   //get myprizes
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(response => setemployees(response.data));

  ////   get myhistory
  //     axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(response => setemployees(response.data));

  // }, []);


  return (
    <>
      <div className="headercontainer">
        <WhiteHeader />
      </div>

      <div className="viewhistorycontainer">
        <div className="contest-result">
          <h2>
            costest result will be published on <span>30.01.2023</span>
          </h2>
        </div>
        <div className="winning-order">
          <h2>Your winning prize status</h2>
          <div className="table">
            <table>
              <tbody>
                <tr>
                  <th>Prize number</th>
                  <th>Prize name</th>
                  <th>Status</th>
                </tr>

                {myprizes.map((myprize) => (
                  <tr key={myprize.id}>
                    <td>{myprize.id}</td>
                    <td>{myprize.name}</td>
                    <td>{myprize.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="history">
          <h2>Your contest history</h2>
          <div className="table">
            <table>
              <tbody>
                <tr>
                  <th>Costest name</th>
                  <th>Date</th>
                  <th>Prize</th>
                  <th>Contest draw</th>
                </tr>
                {myhistory.map((history) => (
                  <tr key={history.id}>
                    <td>{history.contestName}</td>
                    <td>{history.endDate}</td>
                    <td>{history.name}</td>
                    <td>{history.contestDraw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer>
        <div className="container"></div>
      </footer>
    </>
  );
};

export default viewHistory;
