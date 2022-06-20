type RouteConfig = {
  path?: string,
  name?: string,
  redirect?: string,
  hideInMenu?: boolean,
  routes?: RouteConfig[]
};
