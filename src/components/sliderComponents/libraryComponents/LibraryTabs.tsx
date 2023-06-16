import { useState, useRef, RefObject } from "react";
import useFocus from "../../../hook/useFocus";

type Tab = {
  id: number;
  label: string;
  content: string;
};

const LibraryTabs = () => {
  const tabs: Tab[] = [
    {
      id: 1,
      label: "Tab 1",
      content: "Content 1",
    },
    {
      id: 2,
      label: "Tab 2",
      content: "Content 2",
    },
    {
      id: 3,
      label: "Tab 3",
      content: "Content 3",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabRefs: RefObject<HTMLButtonElement>[] = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ];

  const { horizontalFocus } = useFocus(tabRefs);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <section className="md:mt-0 p-6 w-[87vw]">
    <div className="tabs ">
      <div className="flex space-x-4" role="tablist">
        {tabs.map((tab, index) => (
          <button
            ref={tabRefs[index]}
            key={tab.id}
            className={`px-4 py-2 font-semibold text-gray-600 rounded-t-lg focus:outline-black ${
              activeTab === tab.id ? "bg-gray-300" : ""
            }`}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id ? "true" : "false"}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => handleTabClick(tab.id)}
            onKeyDown={horizontalFocus}
            tabIndex={activeTab === tab.id ? 0 : -1}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-gray-400">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className={`${activeTab === tab.id ? "block" : "hidden"} bg-gray-500`}
            tabIndex={activeTab === tab.id ? 0 : -1}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default LibraryTabs;
