import React, { useState } from "react";

type Tab = {
  id: number;
  label: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 font-semibold text-gray-600 rounded-t-lg focus:outline-none ${
              activeTab === tab.id ? "bg-gray-200" : ""
            }`}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id ? "true" : "false"}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-gray-100">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className={`${activeTab === tab.id ? "block" : "hidden"} bg-white rounded-b-lg`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
