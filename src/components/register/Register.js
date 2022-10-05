import { useState } from "react";
import FormInput from "../UI/formInput/FormInput";
import SubmitButton from "../UI/buttons/SubmitButton";

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

  const onRegisterClick = () => {
    console.log("form: ", form);
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
      <SubmitButton
        className="submit-btn"
        onClick={onRegisterClick}
        text="REGISTER"
      />
    </form>
  );
};

export default Register;
