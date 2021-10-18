export interface JobModel {

  id: string;
  title: string
  description: string
  salary: Number
  knowledges: {id: number, name: string}[]
  city: string


}
