import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from './Default';
import Calcu from './Calcu';
import Todolist from './Todolist';
import Intopost from './Intopost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Calcu />} />
          <Route path="Todo" element={<Todolist />} />
          <Route path="Intopo" element={<Intopost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
