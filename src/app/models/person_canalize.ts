import Student from './student';

export default interface Person_Canalize {
  id: number;
  alumno: Student;
  observations: string;
  status: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}