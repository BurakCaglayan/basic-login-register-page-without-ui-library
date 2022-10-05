import { useState } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "../UI/formInput/FormInput";
import SubmitButton from "../UI/buttons/SubmitButton";

const Register = () => {
  const { t } = useTranslation();

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
        placeholder={t("nameSurname")}
        type="text"
        name="nameSurname"
        value={form.nameSurname}
        onChange={handleFormChange}
      />
      <FormInput
        placeholder={t("emailAddress")}
        type="email"
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
        className="register__submit-button mt-5"
        onClick={onRegisterClick}
        text={t("signUp")}
      />
    </form>
  );
};

export default Register;
