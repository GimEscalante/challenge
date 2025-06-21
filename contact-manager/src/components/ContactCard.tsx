//COMPONENTE CARD 
import type { Contact } from "../types/Contact";

export default function ContactCard({ contact }: { contact: Contact }) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white max-w-md mx-auto my-4">
      <h2 className="text-xl font-semibold mb-2">
        {contact.firstName} {contact.lastName}
      </h2>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phoneNumber}</p>
      {contact.companyName && <p><strong>Company:</strong> {contact.companyName}</p>}
      {contact.rolePosition && <p><strong>Role:</strong> {contact.rolePosition}</p>}
      {contact.notes && <p><strong>Notes:</strong> {contact.notes}</p>}
    </div>
  );
}
