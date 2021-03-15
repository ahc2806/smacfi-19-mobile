import Machine from './machine';
import Person from './person';

export default interface Report {
  id: number;
  temperature: number;
  maquina: Machine;
  persona: Person;
  status: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}
