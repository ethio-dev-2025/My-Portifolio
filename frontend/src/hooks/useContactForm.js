import { useState } from "react";
import { sendContactForm } from "../services/api";
import { validateContact } from "../utils/validators";

const initialState = { name: "", email: "", subject: "", message: "" };

export default function useContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateContact(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const res = await sendContactForm(form);
      setStatus("success");
      setServerMessage(res.message || "Message sent!");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setServerMessage(err.message || "Something went wrong.");
    }
  };

  return { form, errors, status, serverMessage, handleChange, handleSubmit };
}