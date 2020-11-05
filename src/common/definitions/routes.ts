export interface IRoute {
  path: string;
  title: string;
  exact?: boolean;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  layout?: any;
}
