import { useTranslation } from "react-i18next";

const Tabs = ({ setSelectedView, selectedView }) => {
  const { t } = useTranslation();
  return (
    <div className="tabs">
      <button
        type="button"
        className={`tabs__button tabs__button__login${
          selectedView === 1 ? "-active" : ""
        }`}
        onClick={() => setSelectedView(1)}
      >
        {t("login")}
      </button>
      <button
        type="button"
        className={`tabs__button tabs__button__register${
          selectedView === 2 ? "-active" : ""
        }`}
        onClick={() => setSelectedView(2)}
      >
        {t("signUp")}
      </button>
    </div>
  );
};

export default Tabs;
