import "jest-dom/extend-expect";
import React from "react";
import ReactDOM from "react-dom";
import Files from "./Files";

import { render, getByLabelText } from "react-testing-library";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Files
      classes={{}}
      files={[
        {
          id: 251521,
          name: "bleh.jpg",
          size: 2500
        },
        {
          id: 251522,
          name: "bleh1.jpg",
          size: 10000
        },
        {
          id: 251523,
          name: "bleh2.jpg",
          size: 2500
        }
      ]}
      onDelete={() => {}}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders total file(s) size in KB", () => {
  const { getByText } = render(
    <Files
      classes={{}}
      files={[
        {
          id: 251521,
          name: "bleh.jpg",
          size: 2500
        },
        {
          id: 251522,
          name: "bleh1.jpg",
          size: 10000
        },
        {
          id: 251523,
          name: "bleh2.jpg",
          size: 2500
        }
      ]}
      onDelete={() => {}}
    />
  );
  const domNode = getByText(/Total Size\: /);
  expect(domNode).toHaveTextContent(/15\s+KB/);
});

it("renders total file count", () => {
  const { getByText } = render(
    <Files
      classes={{}}
      files={[
        {
          id: 251521,
          name: "bleh.jpg",
          size: 2500
        },
        {
          id: 251522,
          name: "bleh1.jpg",
          size: 10000
        },
        {
          id: 251523,
          name: "bleh2.jpg",
          size: 2500
        }
      ]}
      onDelete={() => {}}
    />
  );
  const domNode = getByText(/Documents/);
  expect(domNode).toHaveTextContent(/3\sDocuments/);
});
