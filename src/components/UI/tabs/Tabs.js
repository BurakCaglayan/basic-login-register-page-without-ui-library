const Tabs = ({ setSelectedView, selectedView }) => {
  return (
    <div className="tabs">
      <button
        type="button"
        className={`tabs__button tabs__button__login${
          selectedView === 1 ? "-active" : ""
        }`}
        onClick={() => setSelectedView(1)}
      >
        Login
      </button>
      <button
        type="button"
        className={`tabs__button tabs__button__register${
          selectedView === 2 ? "-active" : ""
        }`}
        onClick={() => setSelectedView(2)}
      >
        Register
      </button>
    </div>
  );
};

export default Tabs;
