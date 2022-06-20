const Routes: RouteConfig = {
  path: '/product',
  name: 'Product Management',
  routes: [
    {
      path: '/product',
      redirect: 'product/list',
    },
    {
      path: '/product/list',
      name: 'Product List',
    },
    {
      path: '/product/new',
      name: 'New product',
    },
    {
      path: '/product/:id',
      hideInMenu: true,
      name: 'Product Details',
    },
    {
      path: '/product/update/:id',
      hideInMenu: true,
      name: 'Modify product',
    },
  ],
};
export default Routes;
