import React from "react";
import { fireEvent, render, screen, cleanup, waitFor } from "@testing-library/react";
import { Menu, MenuProps } from "./menu";
import { MenuItem } from "./menuItem";
import { SubMenu } from "./subMenu";

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: 'test',
}
const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
  onSelect: jest.fn(),
  defaultOpenSubMenus: ["5"],
};
const generateMenu = (props: MenuProps) => {
   return (
     <Menu {...props}>
       <MenuItem>active</MenuItem>
       <MenuItem disabled>disabled</MenuItem>
       <MenuItem>xyz</MenuItem>
       <SubMenu title="dropDown">
         <MenuItem>dropDownItem</MenuItem>
       </SubMenu>
       <SubMenu title="click">
         <MenuItem>clickItem</MenuItem>
       </SubMenu>
       <SubMenu title="open">
         <MenuItem>openItem</MenuItem>
       </SubMenu>
     </Menu>
   );
}
const createStyleFile = () => {
  const cssFile: string = `
    .submenu {
      display: none;
    }
    .submenu.menu-opened {
      display:block;
    }
  `;
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = cssFile;
  return style;
};
let menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe('test Menu and MenuItem component base on default props', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    const { container } = render(generateMenu(testProps));
    // eslint-disable-next-line testing-library/no-container
    container.append(createStyleFile())
    menuElement = screen.getByTestId('test-menu')
    activeElement = screen.getByText("active");
    disabledElement = screen.getByText('disabled')
    
  })
  it('1', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('menu test')
    // // eslint-disable-next-line testing-library/no-node-access
    // expect(menuElement.getElementsByTagName('li').length).toBe(3)
    // eslint-disable-next-line testing-library/no-node-access
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(6);
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
  it('should show dropdown items when hover on subMenu', async () => {
    expect(screen.queryByText("dropDownItem")).not.toBeVisible();
    const drowDownElement = screen.getByText("dropDown");
    expect(drowDownElement).toBeVisible();
    fireEvent.mouseEnter(drowDownElement)
    await waitFor(() => {
      expect(screen.queryByText("dropDownItem")).toBeVisible();
    })
    fireEvent.click(screen.getByText("dropDownItem"));
    expect(testProps.onSelect).toHaveBeenCalledWith("3-0");
    fireEvent.mouseLeave(drowDownElement)
    await waitFor(() => {
      expect(screen.queryByText("dropDownItem")).not.toBeVisible();
    })
  })
  it('should show dropdown items when click on subMenu in mode vertical', () => {
    cleanup();
    const { container } = render(generateMenu(testVerProps));
    // eslint-disable-next-line testing-library/no-container
    container.append(createStyleFile());
    expect(screen.getByText("clickItem")).not.toBeVisible();
    const clickElement = screen.getByText("click");
    expect(clickElement).toBeVisible();
    fireEvent.click(clickElement)
    expect(screen.getByText("clickItem")).toBeVisible();
    fireEvent.click(clickElement);
    expect(screen.getByText("clickItem")).not.toBeVisible();
    fireEvent.click(screen.getByText("clickItem"));
    expect(testVerProps.onSelect).toHaveBeenCalledWith("4-0")
  })
  it("should show dropdown items  when defaultOpenSubMenus contains SubMenu index", () => {
    cleanup();
    const { container } = render(generateMenu(testVerProps));
    // eslint-disable-next-line testing-library/no-container
    container.append(createStyleFile());
    expect(screen.getByText("openItem")).toBeVisible();
  });
})
// TODO getByText,queryByText区别；优化测试描述与分类；解决container样式问题
