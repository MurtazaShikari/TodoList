import { useDispatch } from "react-redux";
import { TABS } from "../redux/actions/type";
import { toggleTab } from "../redux/actions";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();
  return TABS.map((tab, key) => (
    <button
      key={key}
      className={tab === currentTab ? "selected" : "button"}
      onClick={() => dispatch(toggleTab(tab))}
    >
      {tab}
    </button>
  ));
};

export default Tabs;
