import { FaUserTie } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { AiFillGift } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import { logout } from "./UserFacade";


const SideMenu = () => {
  const router = useRouter();

  // const logout = () => {
  //   console.log('clicked')
  //   try {
  //     localStorage.removeItem("accessToken");
  //     router.push("http://localhost:3000");
  //     // setUser(null);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="side-nav">
      <Link href={"/admin/contestlist"} className="tabWrap">
        <div className="tab">
          <div>
            <FaChartPie />
          </div>
          <p>Contests</p>
        </div>
      </Link>

      <Link href={"/admin/addprizes"} className="tabWrap">
        <div className="tab">
          <div>
            <AiFillGift />
          </div>
          <p>Prizes</p>
        </div>
      </Link>

      <Link href={"/admin/viewusers"} className="tabWrap">
        <div className="tab">
          <div>
            <HiUserGroup />
          </div>
          <p>Users</p>
        </div>
      </Link>

      <Link href={"/admin/addemployee"} className="tabWrap">
        <div className="tab">
          <div>
            <FaUserTie />
          </div>
          <p>Employees</p>
        </div>
      </Link>

      <div className="sidebarlogout">
        <button onClick={()=>{logout();router.push("http://localhost:3000");}}><IoLogOutSharp /></button>
        <p>Log out</p>
      </div>
    </div>
  );
};

export default SideMenu;
