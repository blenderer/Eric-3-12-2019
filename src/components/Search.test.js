import "jest-dom/extend-expect";
import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

import { render, fireEvent } from "react-testing-library";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Search classes={{}} search={""} onSearch={() => {}} onClear={() => {}} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("doesnt render a clear button when typed into", () => {
  const { queryByTestId } = render(
    <Search classes={{}} search={""} onSearch={() => {}} onClear={() => {}} />
  );
  const domNode = queryByTestId("clear");
  expect(domNode).toBeFalsy();
});

it("renders a clear button when typed into", () => {
  const { queryByTestId } = render(
    <Search classes={{}} search={"a"} onSearch={() => {}} onClear={() => {}} />
  );
  const domNode = queryByTestId("clear");
  expect(domNode).not.toBeFalsy();
});
