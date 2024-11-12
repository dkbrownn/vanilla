import React from "react";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { Menu, MenuProps } from "./menu";
import { MenuItem } from "./menuItem";

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: 'test'
}
const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: 'vertical'
}
const generateMenu = (props: MenuProps) => {
   return <Menu {...props}>
     <MenuItem>active</MenuItem>
     <MenuItem disabled>
       disabled
     </MenuItem>
     <MenuItem>xyz</MenuItem>
   </Menu>;
}
let menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe('test Menu and MenuItem component base on default props', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(generateMenu(testProps));
    menuElement = screen.getByTestId('test-menu')
    activeElement = screen.getByText("active");
    disabledElement = screen.getByText('disabled')
  })
  it('1', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('menu test')
    // eslint-disable-next-line testing-library/no-node-access
    expect(menuElement.getElementsByTagName('li').length).toBe(3)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it("2", () => {
    const thirdItem = screen.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith("2") // 调用参数（"2"）
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1")
  });
  it("3", () => {
    cleanup()
    render(generateMenu(testVerProps))
    const menuElement = screen.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  });
})