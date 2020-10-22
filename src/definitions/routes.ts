import { RouteComponentProps } from 'react-router-dom';

export interface IRoutePages {
  path: string;
  title: string;
  exact?: boolean;
  component: () => React.ReactElement;
}
