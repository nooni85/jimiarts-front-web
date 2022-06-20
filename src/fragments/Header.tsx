import React from 'react';
import Navbar from './Navbar';

const Header: React.FC<React.HTMLAttributes<HTMLElement>> = (props): JSX.Element => (
    <>
      <Navbar className={'test'} style={{ backgroundColor: 'blue' }}/>
    </>
);

export default Header;
