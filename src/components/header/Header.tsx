import React, { FC } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface HeaderProps {
  logout: () => void;
  changeOpen: () => void;
}

const Header: FC<HeaderProps> = ({ logout, changeOpen }) => {
  return (
    <div className="navbar bg-purple-600 text-primary-content">
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost inline-block min-lg:hidden"
          onClick={changeOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-white">
          Dasboard Admin
        </a>
      </div>
      <div className="flex-none">
        <Tooltip title="Logout">
          <IconButton aria-label="logout" color="inherit" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>

        {/* <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button> */}
      </div>
    </div>
  );
};
export default Header;
