import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import routes from '../routes';

function fetchRoutes(routesCfg: RouteConfig[]): ItemType[] {
  const result: ItemType[] = [];
  routesCfg.forEach((val) => {
    if (!val.hideInMenu) {
      if (val.routes && val.routes.length > 0) {
        result.push({
          key: val.path as string,
          label: <Link to={val.path as string}>{val.name}</Link>,
          children: fetchRoutes(val.routes),
        });
      } else {
        result.push({
          key: val.path as string,
          label: <Link to={val.path as string}>{val.name}</Link>,
        });
      }
    }
  });

  return result;
}

const Navbar = () => {
  useEffect(() => {
    console.log(fetchRoutes([routes]));
  });

  return (
    <div>
      <Menu items={fetchRoutes([routes])} mode={'horizontal'} />
      asdf
      asdf
      asdf
      asdf
    </div>
  );
};

export default Navbar;
