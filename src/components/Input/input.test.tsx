import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Input, InputProps } from "./input";
import { Icon } from "../Icon/icon";


const IconProps: InputProps = {
  icon: "coffee",
  onChange: jest.fn(),
}

describe("test Input Component", () => {
  it("shuold render a current icon input", () => {
    render(<Input {...IconProps}/>)
    const inputElement = screen.getByTestId("test-input") as HTMLInputElement;
    const iconElement = screen.getByTestId('test-icon')
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('vanilla-input-inner')
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('icon-wrapper');
    expect(screen.getByTestId("test-wrapper")).not.toHaveClass("is-disabled")
    fireEvent.change(inputElement, { target: {value: '23'}});
    expect(IconProps.onChange).toHaveBeenCalled()
  })
  it("should render the disabled Input on disabled property", () => {
    render(<Input disabled />)
    const inputElement = screen.getByTestId("test-input") as HTMLInputElement;
    expect(inputElement.disabled).toBeTruthy()
  });
  it('should render different input sizes on size property', () => {
    render(<Input size="lg" />);
     const containerElement = screen.getByTestId("test-wrapper");
     expect(containerElement).toHaveClass("input-size-lg")
  })
  it("should render prepand and append element on prepand/append property", () => {
    render(<Input prepend={"https://"} append={".com"}/>)
    expect(screen.getByTestId("test-wrapper")).toHaveClass(
      "input-group input-group-append input-group-prepend"
    );
    expect(screen.getByText("https://")).toBeInTheDocument()
    expect(screen.getByText(".com")).toBeInTheDocument();
  });
})