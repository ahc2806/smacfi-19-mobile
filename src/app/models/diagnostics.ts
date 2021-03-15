import Person_Canalize from './person_canalize';

export default interface Diagnostics {
  id: number;
  symptoms: string;
  temperature: number;
  diagnostic: string;
  weight: number;
  height: number;
  persona_canalizada: Person_Canalize;
  status: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}