import { useState } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "../UI/formInput/FormInput";
import SubmitButton from "../UI/buttons/SubmitButton";

const Login = () => {
  const { t } = useTranslation();

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
        placeholder={t("emailAddress")}
        type="text"
        name="emailAddress"
        value={form.emailAddress}
        onChange={handleFormChange}
      />
      <FormInput
        placeholder={t("password")}
        type="password"
        name="password"
        value={form.password}
        onChange={handleFormChange}
      />
      <SubmitButton
        className="login__submit-button mt-5"
        onClick={onLoginClick}
        text={t("login")}
      />
    </form>
  );
};

export default Login;
