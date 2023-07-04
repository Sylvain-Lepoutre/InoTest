const useAttributes = (activeTab: number) => {
  const getTabAttributes = (tabId: number) => {
    const attributes = {
      tabIndex: activeTab === tabId ? 0 : -1,
      selected: activeTab === tabId ? "true" : "false",
      visible: activeTab === tabId ? "block" : "hidden",
    };

    return attributes;
  };

  return getTabAttributes;
};

export default useAttributes;
