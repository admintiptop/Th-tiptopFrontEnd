import SideMenu from "../../components/SideMenu";
import { HiUsers } from "react-icons/hi";
import { FaTicketAlt } from "react-icons/fa";
import { PieChart } from "react-minimal-pie-chart";
import UserData from "../../components/UsersData";
import { useEffect, useState } from "react";
import axios from "axios";

const home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    await axios
      .get("http://localhost:3001/api/v1/dashbord-data")
      .then((response) => setData(response.data));
  };
  // console.log(data);
  return (
    <div className="home">
      <SideMenu />
      {/* Top Bar */}
      <div className="topbar">
        <h1>@thetiptop</h1>
        <div className="admin-info">
          <h2>Nassim El aoufin</h2>
          <p>admin</p>
        </div>
      </div>

      <div className="line"></div>

      {/* counter */}
      <div className="client-info">
        <div className="total-client c">
          <h4>total des client</h4>
          <h2>{data ? data.totalParticipent : "..."}</h2>
          <HiUsers className="icon-c" />
        </div>
        <div className="total-employee c">
          <h4>total des empoly</h4>
          <h2>{data ? data.totalEmpoly : "..."}</h2>
          <HiUsers className="icon-c" />
        </div>
      </div>

      {/* Graphs*/}
      <div className="graphs">
        <div>
          <div className="total-tickets">
            <h3>Total Tickets</h3>
            <div>
              <h4>total des ticket</h4>
              <h2>{data ? data.totalTicket : "..."}</h2>
              <FaTicketAlt className="icon-t" />
            </div>
          </div>

          <div className="total-tickets">
            <h3>Total Tickets Left</h3>
            <div style={{ backgroundColor: "red" }}>
              <h4>total des ticket left</h4>
              <h2>{data ? data.totalTicketLeft : "..."}</h2>
              <FaTicketAlt className="icon-t" />
            </div>
          </div>
        </div>

        {/* Ticket Percentage */}
        <div className="ticket-percentage">
          <h3>statistiques sur les tickets</h3>
          <div className="ticket-graph">
            <div className="graph-item">
              <div className="ticket-graph t"></div>
              <h4>ticket graphs</h4>
            </div>
            <div className="graph-item">
              <div className="ticket-non-graph t"></div>
              <h4>tickets non graph</h4>
            </div>
          </div>

          {/* Chart */}
          <div className="chart">
            <PieChart
              className="pie-chart"
              data={[
                {
                  title: "Total Tickets Left",
                  value: (data?.totalTicketLeft / data?.totalTicket) * 100,
                  color: "#06853d",
                },
                {
                  title: "total des client",
                  value: (data?.totalParticipent / data?.totalTicket) * 100,
                  color: "#1e1312",
                },
              ]}
            />
            ;
          </div>
        </div>
      </div>

      <div className="userData">
        <UserData />
      </div>
    </div>
  );
};

export default home;