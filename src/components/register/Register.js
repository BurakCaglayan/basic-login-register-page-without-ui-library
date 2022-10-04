import { useState } from "react";
import FormInput from "../UI/formInput/FormInput";

const Register = () => {
  const [form, setForm] = useState({
    nameSurname: "",
    emailAddress: "",
    password: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);
  };

  return (
    <form className="register">
      <FormInput
        placeholder="Name Surname"
        type="text"
        name="nameSurname"
        value={form.nameSurname}
        onChange={handleFormChange}
      />
      <FormInput
        placeholder="E-Mail Address"
        type="email"
        name="emailAddress"
        value={form.emailAddress}
        onChange={handleFormChange}
      />
      <FormInput
        placeholder="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleFormChange}
      />
    </form>
  );
};

export default Register;
