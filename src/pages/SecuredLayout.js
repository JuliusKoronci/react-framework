import React, { PropTypes } from 'react';
import Navbar from '../modules/App/components/Navbar';
import Sidebar from '../modules/App/containers/Sidebar';
import GlobalStyles from './assets/app.css';

const SecuredLayout = ({ children }) => (
  <div id="pageContent" className={GlobalStyles.pageContent}>
    <Navbar />
    <section className={GlobalStyles.flexDisplay}>
        <Sidebar />
        <main className={GlobalStyles.mainContent}>
          {this.props.children}
        </main>
    </section>
  </div>
);

SecuredLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecuredLayout;
