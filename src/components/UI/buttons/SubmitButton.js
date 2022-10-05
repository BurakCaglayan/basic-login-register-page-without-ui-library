const SubmitButton = ({ text, className, onClick }) => {
  return (
    <button
      type="button"
      className={`submit-button ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
