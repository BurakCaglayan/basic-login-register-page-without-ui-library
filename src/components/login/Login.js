import { useState } from "react";
import FormInput from "../UI/formInput/FormInput";
import SubmitButton from "../UI/buttons/SubmitButton";

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

  const onLoginClick = () => {
    console.log("form: ", form);
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
      <SubmitButton
        className="login__submit-button mt-5"
        onClick={onLoginClick}
        text="LOGIN"
      />
    </form>
  );
};

export default Login;
