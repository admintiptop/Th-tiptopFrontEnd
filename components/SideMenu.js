import { FaUserTie } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { AiFillGift } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { RiHandHeartFill } from "react-icons/ri";
import { IoLogOutSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import { logout } from "./UserFacade";
import { userDetails } from "./UserFacade";

const SideMenu = () => {

  const user = userDetails();
  let userType
if(!user){
console.log("no user fron User Details")
}else{
  console.log("have User Details")
  userType = user.userType
}
  const router = useRouter();
  
  // const userType=type

  return (
    <>
    <div className="side-nav">

      {userType==="Admin"?(<>
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
      </>):(userType==="Employee")?(<>

        <Link href={"/employee/changeprizestatus"} className="tabWrap">
        <div className="tab">
          <div>
            <RiHandHeartFill />
          </div>
          <p>Deliver<br/>Prizes</p>
        </div>
      </Link>

        <Link href={"/employee/contestlist"} className="tabWrap">
        <div className="tab">
          <div>
            <FaChartPie />
          </div>
          <p>Contests</p>
        </div>
      </Link>

      <Link href={"/employee/addprizes"} className="tabWrap">
        <div className="tab">
          <div>
            <AiFillGift />
          </div>
          <p>Prizes</p>
        </div>
      </Link>

      
      </>):(<div></div>)

      }
      

      <div className="sidebarlogout">
        <button
          onClick={() => {
            logout();
            router.push("http://localhost:3000");
          }}
        >
          <IoLogOutSharp />
        </button>
        <p>Log out</p>
      </div>
    </div>
    </>
  );
};

export default SideMenu;
