const FormInput = ({ name, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="formInput">
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
