import React, { useState } from "react";
export default function NavBar() {
  const [authentificated, setAuthentificated] = useState(true);

  return (
    <>
      <div className="navBar">
        <div className="navBar_logo">
          <img src="/Logo.svg" alt="logo website" />
        </div>
        <div className="navBar_search">
          <div className="searchBar">
            <input
              type="search"
              name="searchBar"
              id="searchBar"
              placeholder="Search"
            />
            <img src="/icons/Search.svg" alt="search Icon" />
          </div>
        </div>
        <div className="navBar_menu">
          {authentificated ? (
            <>
              <div className="notificationButton">
                <img src="/icons/Notification.svg" alt="bell" />
              </div>
              <div className="profileButton">
                <img src="/icons/small cat.svg" alt="avatar" />
              </div>
              <div className="menu">
                <div className="menu_container">
                  <img src="/icons/Menu.svg" alt="menu icons" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="SignInButton">
                <button>Sign Up</button>
              </div>
              <div className="menu">
                <div className="menu_container">
                  <img src="/icons/Menu.svg" alt="menu icons" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
