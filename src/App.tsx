// App.tsx
import React from "react";
import "./App.css";
import TagInput from "./component/TagInput";
import { sampleData } from "./staticData/sampleData";

const App: React.FC = () => {
  return (
    <div className="app">
      <div>
        <h1>PICK USER</h1>
        <p className="instruction-text">
          {/* Instructions for using TagInput */}
          Click on x icon on a tag to remove it. Type in the input to add a new tag. Press
          Backspace 2 times to remove the last tag when the input is empty and
          active. To see all selected tag scroll
        </p>
      </div>
      <TagInput tagOptions={sampleData} />
    </div>
  );
};

export default App;
