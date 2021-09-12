interface IClient {
  id?: string;
  name: string;
  email: string;
  password: string;
  photo_client?: string;
  created_at?: Date;
}

export { IClient }