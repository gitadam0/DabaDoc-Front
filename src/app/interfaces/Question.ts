export interface Question {
  id: number;
  title: string;
  content: string;
  location: string;
  username:string;
  answers:[];
  liked:boolean;
}
