import * as React from "react";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";

import { GlobalContext } from "../context/global";

function setCategory(category: string) {
  return { type: "category", payload: category.toLowerCase() };
}

const Navigation = ({ value, onChange }) => {
  const tabs = ["pizza", "steak", "all"];

  const handleChange = (event: any, newValue: number) => {
    if (newValue >= 0) {
      onChange(newValue);
    }
  };

  return (
    <AppBar position="sticky">
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        {tabs.map((tab) => (
          <Tab label={tab} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default Navigation;
