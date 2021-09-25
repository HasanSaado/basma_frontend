// Libraries
import React from 'react';

// Components
import { Header } from '../../components/Header';

// Style
import './DashboardPage.scss';

function DashboardPage() {

  /**
   *
   */
  return (
    <div>
      <Header />
      <div className="text-center mt-5 container">
        <h1>Welcome!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default DashboardPage;