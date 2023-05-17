import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequestForm from "./pages/request_form";
import HomePage from "./pages/homepage";

import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/join" element={<RequestForm />}>
          
          <Route index element={<HomePage />} />

        </Route>
        <Route path="/dash" element={<Dashboard />}>
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);