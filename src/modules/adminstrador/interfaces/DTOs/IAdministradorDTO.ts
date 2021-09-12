export interface IAdministrador {
  id?: string;
  name: string;
  password: string;
  permission?: boolean;
  created_at?: Date;
  updated_at?: Date;
}