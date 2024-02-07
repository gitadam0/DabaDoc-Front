export interface Question {
  id: number;
  title: string;
  content: string;
  location: string;
  user: {
    username: string;
    password: string;
    enabled: boolean; // You might want to define a type for answers as well
  };
}
