const FormInput = ({ name, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="form__group">
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name} className="form__label">
        {placeholder}
      </label>
    </div>
  );
};

export default FormInput;
