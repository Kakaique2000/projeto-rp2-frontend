import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

interface IParam {
    id: number;
    label: string;
  }

  export interface TypeJob {

    Tecnologia: String
    Engenharia: String
    Industria: Number
    Educação: String
    Financeiro: String
    Artes: String
    Administração: String
    Saúde: Number
    Transportes: String
    Construção: String

}

export interface TypeSalary {

  Entre2000e3000: String
  Entre1000e2000: String
  Entre4000e6000: Number
  Ate1000: String
  Entre3000e4000: String
  AcimaDe6000: StringMapWithRename

}

export interface NewJob {
  title: string;
  description: string;
  salary: string;
  occupation: string;
  companyId: string;
  knowledges: Array<any>;
}


  export interface ICategoria extends IParam {

  }
