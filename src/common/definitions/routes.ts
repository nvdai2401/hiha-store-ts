export interface IRoute {
  // path, like in basic prop
  path: string;
  // title, document title
  title: string;
  // exact, like in basic prop
  exact?: boolean;
  // preloader for lazy loading
  fallback: NonNullable<React.ReactNode> | null;
  // lazy Loaded component
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  // layout for each page
  layout?: any;
  // sub routes
  routes?: IRoute[];
  // redirect path
  redirect?: string;
  // if router is private, this is going to be true
  private?: boolean;
}
