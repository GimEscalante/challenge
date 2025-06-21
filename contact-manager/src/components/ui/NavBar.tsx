//COMPONENTE NAVBAR
import { Link } from "react-router-dom";
import Button from "./Button"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">
        Contact Manager
      </div>

      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-500 transition-colors text-lg"
        >
          Contact Form
        </Link>

        <Link
          to="/contacts"
          className="text-gray-700 hover:text-blue-500 transition-colors text-lg"
        >
          Contact List
        </Link>

        <Button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded"
        >
          Log in
        </Button>
      </div>
    </nav>
  );
}
