import React from "react";
import PropTypes from "prop-types";

import "./tab.css";

export const Tab = ({ title, setActiveTab, activeTab, index, description }) => {
  const onTitle = () => {
    setActiveTab(index);
  };
  return (
    <div className="tab">
      <button className="tab-header" onClick={onTitle}>
        {title}
      </button>
      {activeTab === index && (
        <div className="tab-description">{description}</div>
      )}
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  setActiveTab: PropTypes.string,
  activeTab: PropTypes.string,
  index: PropTypes.string,
  description: PropTypes.string,
};
