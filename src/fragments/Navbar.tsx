import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import React, { useEffect, useState } from 'react';

import routes from '../routes';

function fetchRoutes(routesCfg: RouteConfig[]): ItemType[] {
  const result: ItemType[] = [];

  routesCfg.map((val) => (
    result.push({
      key: val.path as string,
      label: val.name,
    })
  ));

  return result;
}

const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  useEffect(() => {
  });

  return (
    <div
      {...props}
      className={ `navbar-wrapper ${props.className ? props.className : ''}` }>
      <Menu items={fetchRoutes([routes])}></Menu>
      asdf
      asdf
      asdf
      asdf
    </div>
  );
};

export default Navbar;
