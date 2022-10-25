import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Therapist from './components/Therapist';
import Missing from './components/pages/Missing';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/pages/Unauthorized';
import { Routes, Route } from 'react-router-dom';

const ROLES = {
  'Therapist': "THERAPIST",
  'Admin': "ADMIN"
}

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="unauthorized" element={<Unauthorized />} />
      {/* <Route path="therapist/*" element={<Therapist />} /> */}

      {/* we want to protect these routes */}
      <Route element={<RequireAuth allowedRoles={[ROLES.Therapist]} />}>
        <Route path="therapist/*" element={<Therapist />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
