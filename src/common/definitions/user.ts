export interface IUser {
  id?: string;
  displayName?: string;
  email?: string;
  createdAt?: string;
}

export interface IAuthInfo {
  email: string;
  password: string;
  displayName?: string;
}
