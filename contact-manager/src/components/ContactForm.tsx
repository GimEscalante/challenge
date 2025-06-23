//FORMULARIO PARA AGREGAR CONTACTOS
import { useForm } from "react-hook-form";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Textarea from "./ui/TextArea";
import type { Contact } from "../types/Contact";
import { v4 as uuidv4 } from "uuid";

const API_URL = "https://ggznchgfwi.execute-api.us-east-2.amazonaws.com/dev";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Omit<Contact, "id">>();

  const onSubmit = async (data: Omit<Contact, "id">) => {
    const newContact: Contact = { id: uuidv4(), ...data };

    try {
      const res = await fetch(`${API_URL}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });

      if (!res.ok) throw new Error("Failed to submit");

      alert("Contact added successfully!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Error submitting contact");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 p-8 bg-white rounded shadow-lg w-full max-w-md "
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Form</h2>

        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <Input
            {...register("firstName", {
                required: "First name is required",
                pattern: {
                value: /^[A-Za-zÀ-ÿ\u00f1\u00d1\s'-]+$/,
                message: "First name must contain only letters",
                },
            })}
            />

          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Last Name</label>
          <Input
            {...register("lastName", {
                required: "Last name is required",
                pattern: {
                value: /^[A-Za-zÀ-ÿ\u00f1\u00d1\s'-]+$/,
                message: "Last name must contain only letters",
                },
            })}
            />

          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
                }

            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <Input
            {...register("phone", {
              required: "Phone number is required",
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Company Name</label>
          <Input {...register("companyName")} />
        </div>

        <div>
          <label className="block mb-1 font-medium">Role/Position</label>
          <Input {...register("rolePosition")} />
        </div>

        <div>
          <label className="block mb-1 font-medium">Notes</label>
          <Textarea {...register("notes")} />
        </div>

        <div className="flex space-x-4 pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 hover:bg-green-600"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          <Button
            type="button"
            onClick={() => reset()}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Clear Form
          </Button>
        </div>
      </form>
    </div>
  );
}
