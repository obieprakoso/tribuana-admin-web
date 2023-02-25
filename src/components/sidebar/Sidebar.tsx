import React, { FC, useState } from "react";
import AuthUser from "../../helpers/AuthUser";
import { useNavigate, useLocation } from "react-router-dom";
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse, InboxIcon, ExpandLess, ExpandMore } from "@mui/material/"

interface SidebarProps {
  open: boolean;
  closeMenu: () => void;
}

const Sidebar: FC<SidebarProps> = ({ open, closeMenu }) => {
  const user = AuthUser.GetAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const arrayCurrentUrl = location.pathname.trim().split("/");
  const [collspan, setCollspan] = useState("");



  const handleClick = (urlMenu: string, urlSubMenu: string, subMenu: boolean, isSubMenu: boolean) => {
    console.log("loc", location);
    console.log("sub", urlSubMenu);
    if (subMenu) {
      if (collspan === urlMenu) {
        setCollspan("")
      } else {
        setCollspan(urlMenu)
      }
    } else {
      if (isSubMenu) {
        setCollspan(urlMenu)
        navigate(urlSubMenu)
      } else {
        setCollspan("")
        navigate(urlMenu)
      }
    }
  };
  const sampleJSON = {
    menuAccess: [
      {
        Submenus: [],
        active: true,
        icon: "-",
        id: 1,
        name: "Beranda",
        url: "/beranda",
        ordering: 1,
      },
      {
        Submenus: [
          {
            url: "/menu-management/user",
            name: "User",
          },
          {
            url: "/menu-management/role",
            name: "Role",
          },
        ],
        active: true,
        icon: "-",
        id: 1,
        name: "Menu Management",
        url: "/menu-management",
        ordering: 2,
      },
      {
        Submenus: [
          {
            url: "/administrasi/keamanan",
            name: "Keamanan",
          },
          {
            url: "/administrasi/kebersihan",
            name: "Kebersihan",
          },
          {
            url: "/administrasi/kas",
            name: "Kas",
          },
        ],
        active: true,
        icon: "-",
        id: 1,
        url: "/administrasi",
        name: "Administrasi",
        ordering: 3,
      },
    ],
  };

  return (
    <div
      className={`fixed w-full min-lg:w-64 bg-white h-screen transform transition-all duration-300 z-20 min-lg:translate-x-0 overflow-y-auto ${open ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <div className="absolute top-3 right-3">
        <button onClick={closeMenu} className=" inline-block min-lg:hidden">
          Close
        </button>
      </div>
      <div className="pt-5 pb-5 px-6">
        <a href="#!">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                className="rounded-full w-10"
                alt="Avatar"
              />
            </div>
            <div className="grow ml-3">
              <p className="text-sm font-semibold text-blue-600">
                {user?.name?.toUpperCase()}
              </p>
            </div>
          </div>
        </a>
      </div>
      <div>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              List Menu
            </ListSubheader>
          }>
          {sampleJSON?.menuAccess?.map((item, index) => (
            <div>
              <ListItemButton selected={arrayCurrentUrl.some(s => s === item.url.replace('/', ''))} onClick={() => handleClick(item?.url, "", item.Submenus.length > 0 ? true : false, false)}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={item?.name} />
                {
                  item.Submenus.length > 0 ? arrayCurrentUrl.some(s => s === item.url.replace('/', '')) ? <ExpandLess /> : <ExpandMore /> : null
                }
              </ListItemButton>
              {item?.Submenus?.map((itemSub: any, indexSub: any) => (
                <Collapse in={collspan === item.url ? true : false} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton selected={location.pathname === itemSub.url ? true : false} sx={{ pl: 4 }} onClick={() => handleClick(item?.url, itemSub?.url, false, true)}>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary={itemSub?.name} />
                    </ListItemButton>
                  </List>
                </Collapse>
              ))}
            </div>
          ))}
        </List>
        {/* <ul className="space-y-2">
          {sampleJSON?.menuAccess?.map((item, index) => (
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-purple-600 text-black hover:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{item?.name}</span>
                <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              {item?.Submenus?.map((item, index) => (
                <ul id="dropdown-example" className="py-2 space-y-2">
                  <li>
                    <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-purple-600 text-black hover:text-white">{item?.name}</a>
                  </li>

                </ul>
              ))}
            </li>
            // <div key={"menu" + index} className="px-4">
            //   <p>{item?.name}</p>
            //   {item?.Submenus?.map((sub: any, idx: any) => (
            //     <div key={"sub" + idx} className="px-4">
            //       <Link to={sub?.url}>{sub?.name}</Link>
            //     </div>
            //   ))}
            // </div>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
