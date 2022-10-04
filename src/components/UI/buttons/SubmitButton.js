const SubmitButton = ({ text, className, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
