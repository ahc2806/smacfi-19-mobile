import { environment } from './environments/environment';

// ROUTES
export const Routes = {
  diagnostics: 'diagnosticos',
  login: 'auth/local/',
  machines: 'maquinas/',
  persons: 'personas/',
  persons_canalizes: 'personas-canalizadas/',
  reports: 'reportes/',
  students: 'alumnos/',
  users: 'users/'
};

// APIS
export const api_mysql = environment.api_mysql;