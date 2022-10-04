const Tabs = ({ setSelectedView }) => {
  return (
    <div className="tabs">
      <button
        type="button"
        className="tabs__btn"
        onClick={() => setSelectedView(1)}
      >
        Login
      </button>
      <button
        type="button"
        className="tabs__btn"
        onClick={() => setSelectedView(2)}
      >
        Register
      </button>
    </div>
  );
};

export default Tabs;
