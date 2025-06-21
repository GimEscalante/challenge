import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactList from "./components/ContactList";
import Navbar from "./components/ui/NavBar"
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/form" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}
