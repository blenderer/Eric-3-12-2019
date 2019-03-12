import 'jest-dom/extend-expect';
import React from "react";
import ReactDOM from "react-dom";
import File from "./File";

import { render, getByLabelText } from "react-testing-library";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <File
      classes={{}}
      id={512521}
      name="yolo.png"
      size={14000}
      onDelete={() => {}}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders provided size in KB", () => {
  const { getByText } = render(
    <File
      classes={{}}
      id={512521}
      name="yolo.png"
      size={14000}
      onDelete={() => {}}
    />
  );
  const domNode = getByText(/KB/);
  expect(domNode).toHaveTextContent(/14\s+KB/);

});
