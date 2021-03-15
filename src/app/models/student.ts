import Person from './person';

export default interface Student {
  id: number;
  enrollment: string;
  degree: string;
  educational_program: string;
  area: string;
  quarter: number;
  group: string;
  system: string;
  persona: Person;
  published_at: string;
  created_at: string;
  updated_at: string;
}