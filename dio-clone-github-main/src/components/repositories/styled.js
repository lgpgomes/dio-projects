import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  flex-direction: column; 
  flex-basis: fit-content;
  display: flex;  
  max-width: 60vw;
`;

export const WrapperTabList = styled(TabList)`
  display: flex;
  padding: 4px 8px;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`  
  padding: 7px 14px;
  border-radius: 7px;
  border: 1px solid #ccc;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 8px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  border: 1px solid "#ccc";
  display: none;

  &.is-selected {
    display: flex;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`;