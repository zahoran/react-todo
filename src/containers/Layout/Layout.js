import React from 'react';
import Header from '../../components/header/Header';

const layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        {props.children}
      </main>
    </React.Fragment>
  )
};

export default layout;
