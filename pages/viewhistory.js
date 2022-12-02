import WhiteHeader from "./components/WhiteHeader";

const viewHistory = () => {
    return ( 
        <>
        <div className="headercontainer">
        <WhiteHeader />
        </div>
 
        <div className="viewhistorycontainer">

          <div className="contest-result">
            <h2>costest result will be published on <span>30.01.2023</span></h2>
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
                <tr>
                  <td>1</td>
                  <td>Tea bag</td>
                  <td>Pending</td>
                </tr>
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
                <tr>
                  <td>Contest name</td>
                  <td>30.11.2022</td>
                  <td>Tea bag</td>
                  <td>Loose</td>
                </tr>
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
}
 
export default viewHistory;