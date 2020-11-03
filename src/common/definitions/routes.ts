export interface IRoutePages {
  path: string;
  title: string;
  exact?: boolean;
  component: () => React.ReactElement;
  layout?: any;
}
