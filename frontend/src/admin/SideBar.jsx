import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiLogout,
} from "react-icons/hi";

import Logo from "../assets/earist-logo-1.png";

const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={Logo} imgAlt="Flowbite logo">
        Earist Cavite
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* {uncomment this if dashboard is needed} */}
          {/* <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}> */}
          {/*   Dashboard */}
          {/* </Sidebar.Item> */}
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Contents
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Contents
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiLogout}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
