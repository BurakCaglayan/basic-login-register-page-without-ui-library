import { useState } from "react";
import FormInput from "../UI/formInput/FormInput";

const Login = () => {
  const [form, setForm] = useState({
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
    <form className="login">
      <FormInput
        placeholder="E-Mail Address"
        type="text"
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

export default Login;
