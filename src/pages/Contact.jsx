import { useState } from "react";
import FadeInWrapper from "../components/FadeInWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!formData.message) newErrors.message = "Message required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <FadeInWrapper>
      <div>
        <h2>Contact Me</h2>
        <p>I’m looking forward to hearing from you!</p>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
          <input name="email" placeholder="Email" onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
          />
          {errors.message && <span>{errors.message}</span>}
          <button type="submit">Send</button>
        </form>
      </div>
    </FadeInWrapper>
  );
}
