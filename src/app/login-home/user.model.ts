export interface Role {
  id: number;
  name: string;
  authority: string;
}

export interface Token {
  token: string;
  type: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  role: Role[];
  emailVerified: boolean;
}

