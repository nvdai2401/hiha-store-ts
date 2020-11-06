export interface ILayout {
  children: JSX.Element | JSX.Element[];
}

export interface IRoute {
  path: string;
  title: string;
  exact?: boolean;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  layout: React.FC<ILayout>;
}
