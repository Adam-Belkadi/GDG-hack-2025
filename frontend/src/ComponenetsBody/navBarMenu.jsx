import React, { useState } from 'react';

const NavbarMenu = () => {
  const [isConnected, setIsConnected] = useState(false); 
  return (
    <nav className="navbarmenu">
      <ul className="menu">
        <li><a href="/Communities">Communities</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/Ranking">Ranking</a></li>
        {isConnected && (
          <li><a href="MyCommunities">My Communities</a></li>
        )}
      </ul>
      <button onClick={() => setIsConnected(!isConnected)}>
        {isConnected ? 'Disconnect' : 'Connect'}
      </button>
    </nav>
  );
};

export default NavbarMenu;
