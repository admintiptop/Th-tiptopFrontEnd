import { FaUserTie } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { AiFillGift } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import Link from "next/link";

const SideMenu = () => {
  return (
    <div className="side-nav">
      <Link href={"/admin/contestlist"} className='tabWrap'>
        <div className="tab">
          <div>
            <FaChartPie />
          </div>
          <p>Contests</p>
        </div>
      </Link>

      <Link href={"/admin/addprizes"} className='tabWrap'>
        <div className="tab">
          <div>
            <AiFillGift />
          </div>
          <p>Prizes</p>
        </div>
      </Link>

      <Link href={"/admin/viewusers"} className='tabWrap'>
        <div className="tab">
          <div>
            <HiUserGroup />
          </div>
          <p>Users</p>
        </div>
      </Link>

      <Link href={"/admin/addemployee"} className='tabWrap'>
        <div className="tab">
          <div>
            <FaUserTie />
          </div>
          <p>Employees</p>
        </div>
      </Link>

      <div className="tab logout">
        <div>
          <IoLogOutSharp />
        </div>
        <p>Log out</p>
      </div>
    </div>
  );
};

export default SideMenu;
