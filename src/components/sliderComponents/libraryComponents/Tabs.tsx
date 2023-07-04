import { useState } from "react";
import { nanoid } from "nanoid";
import useAttributes from "../../../hook/useAttributes";

type Tabs = {
  id: number;
  label: string;
  content: string;
  panelId: string;
};

const TabsComponent = ({ tabs }: { tabs: Pick<Tabs, "content" | "label">[] }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const _tabs: Tabs[] = tabs.map((tab, index) => ({
    ...tab,
    id: index,
    panelId: nanoid(),
  }));

  const getTabAttributes = useAttributes(activeTab);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <section className="md:mt-0 p-6 w-[87vw]">
      <div className="tabs">
        <div className="flex space-x-4" role="tablist">
          {_tabs.map((tab) => {
            const { selected, tabIndex } = getTabAttributes(tab.id);
            return (
              <button
                key={tab.id}
                className={`px-4 py-2 font-semibold text-gray-600 rounded-t-lg focus:outline-black ${
                  activeTab === tab.id ? "bg-gray-300" : ""
                }`}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={tab.panelId}
                onClick={() => handleTabClick(tab.id)}
                tabIndex={tabIndex}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="p-4 bg-gray-400">
          {_tabs.map((tab) => {
            const { visible, tabIndex } = getTabAttributes(tab.id);
            return (
              <div
                key={tab.id}
                id={tab.panelId}
                role="tabpanel"
                className={`${visible} bg-gray-500`}
                tabIndex={tabIndex}
              >
                {tab.content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TabsComponent;
