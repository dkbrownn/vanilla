import React from "react";
import { config } from "react-transition-group";
import { render, fireEvent, screen } from "@testing-library/react";
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
    const { container } = render(<Alert {...testProps}></Alert>)
    expect(screen.getByText("title")).toBeInTheDocument()
    // expect(container.querySelector(".vanilla-alert")).toHaveClass();
  })
})