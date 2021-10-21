export interface JobModel {

  id: number;
  title: string;
  description: string;
  salary: Number;
  knowledges: { id: number, name: string }[];
  city: string;
  companyLogo?: string;

}

export interface JobDetailsModel {
  id:              number;
  title:           string;
  description:     string;
  fullDescription: string;
  salary:          number;
  knowledges:      Knowledge[];
  company:         CompanyModel;
}

export interface Knowledge {
  id:   number;
  name: string;
  jobs?: any[];
}


export interface CompanyModel {
  id:         number;
  name:       string;
  city:       string;
  state:      string;
  street:     null;
  number:     number;
  complement: string;
  logoUrl:    string;
}

