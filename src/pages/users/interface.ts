interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone: number;
  image: string | null;
}

export default User;