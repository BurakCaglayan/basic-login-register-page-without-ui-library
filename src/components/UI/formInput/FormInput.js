import { useState } from "react";

function FormInput({ label, type = "text", index }) {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="FormInput">
      <label htmlFor={`label_${index}`}>{label}</label>
      <input
        id={`inpıt_${index}`}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
