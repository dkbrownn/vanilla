import React from "react";
import { fireEvent, render, screen } from '@testing-library/react'
import { Button, ButtonProps } from "./button";
// Mock Function jest.fn()监听函数
const defaultProps = {
  onClick: jest.fn()
}
const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'class'
}
const disabledProps = {
  disabled: true,
  onClick: jest.fn()
}
describe('test Button Components', () => {
  it('should render the correct default button', () => {
    render(<Button {...defaultProps}>Nice</Button>);
    const element = screen.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeTruthy();
    expect(element.disabled).not.toBeTruthy();
    expect(element).toBeInTheDocument(); // 是否在文档中
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);// mock 点击
    expect(defaultProps.onClick).toHaveBeenCalled() // 是否被调用
  })
  it('should render the correct component based on different props', () => {
    render(<Button {...testProps}>Nice</Button>);
    const element = screen.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn btn-lg btn-primary class')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    render(<Button btnType="link" href="https://demo.com">Link</Button>);
    const element = screen.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A")
    expect(element).toHaveClass("btn btn-link")
  })
  it('should render disabled button when disabled set to true', () => {
    render(<Button {...disabledProps}>Nice</Button>);
    const element = screen.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})