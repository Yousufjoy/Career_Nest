import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabsReact = () => {
  return (
    <div>
      <h1 className=" text-3xl text-center text-blue-300"> Job Category</h1>
      <Tabs>
        <TabList>
          <Tab>On Site Job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid Job</Tab>
          <Tab>Part Time Job</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsReact;
