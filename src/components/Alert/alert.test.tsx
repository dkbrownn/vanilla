import React from "react";
import { config } from "react-transition-group";
import { fireEvent, render, screen } from "@testing-library/react";
import { Alert, AlertProps } from "./alert";
config.disabled = true

jest.mock("../Icon/icon", () =>{
  return (props: any) => {
    return <span>{props.icon}</span>
  }
})
const testProps: AlertProps = {
  title: "title",
  onClose: jest.fn(),
};
const typeProps = {
  ...testProps,
  type: "success",
  description: "hello",
  closable: false,
};
describe("test Alert Component", () => {
  it("should render the correct default Alert", () => {
    const { container } = render(
      <Alert {...testProps} />
    );
    expect(screen.getByText("title")).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(".vanilla-alert")).toHaveClass(
      "vanilla-alert-default"
    );
    fireEvent.click(screen.getByText("times"));
    expect(testProps.onClose).toHaveBeenCalled();
    expect(screen.queryByText("title")).not.toBeInTheDocument();
  });
  it("should render the correct Alert based on different type and description", () => {
    const { container } = render(<Alert {...typeProps} />);
    expect(screen.queryByText("title")).toHaveClass("bold-title");
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(".vanilla-alert")).toHaveClass(
      "vanilla-alert-success"
    );
    expect(screen.getByText("hello")).toBeInTheDocument();
    expect(screen.queryByText("times")).not.toBeInTheDocument();
  });
})