//LISTA DE CONTACTOS 
import { useEffect, useState } from "react";
import type { Contact } from "../types/Contact";
import ContactCard from "./ContactCard";

const API_URL = "https://ggznchgfwi.execute-api.us-east-2.amazonaws.com/dev";

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5;

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch(`${API_URL}/contacts`);
        if (!res.ok) throw new Error("Failed to fetch contacts");

        const data = await res.json();
        setContacts(data || []);
      } catch (err) {
        console.error(err);
        alert("Error fetching contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName} ${contact.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (loading) return <p className="text-center mt-6">Loading contacts...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6 px-4 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="border p-2 rounded w-full"
        />
      </div>

      {currentContacts.length === 0 ? (
        <p className="text-center mt-6">No contacts found.</p>
      ) : (
        currentContacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      )}

      {totalPages > 1 && (
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

