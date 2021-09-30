interface IParam {
  id: string;
  label: string;
}

interface IUser {
  userName: string;
}

export interface ISalary extends IParam {

}

export interface IQualification {
  id: number;
  name: string;
}

export interface IUsuario extends IUser {

}