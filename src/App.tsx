import React from 'react';
import { Button } from './components/Button/button';
import { Alert } from './components/Alert/alert';
import { Menu } from './components/Menu/menu';
import { MenuItem } from './components/Menu/menuItem';
import { SubMenu } from './components/Menu/subMenu';
function App() {
  return (
    <div className="App">
      aaa
      <h1>Hello World</h1>
      <h2>Hello World</h2>
      <h3>Hello World</h3>
      <hr />
      <code style={{ display: "block" }}>const a = b</code>
      <Menu defaultIndex={"2"} mode="vertical" defaultOpenSubMenus={["3"]} >
        <MenuItem>cool link1</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>
        <MenuItem>cool link3</MenuItem>
        <SubMenu title="dropDown">
          <MenuItem>dropDown1</MenuItem>
          <MenuItem>dropDown2</MenuItem>
          <MenuItem>dropDown3</MenuItem>
        </SubMenu>
      </Menu>
      <Button size="lg" btnType="primary" disabled>
        Hello
      </Button>
      <Button size="lg" btnType="primary" className={"aaa"}>
        Hello
      </Button>
      <Button btnType="default" size="lg">
        default
      </Button>
      <Button btnType="danger" size="lg">
        danger
      </Button>
      <Button href="https://baidu.com" btnType="link" size="sm" target="_blank">
        <p>Baidu</p>
      </Button>
      <Button
        href="https://baidu.com"
        btnType="link"
        size="sm"
        target="_blank"
        disabled
      >
        <p>Baidu</p>
      </Button>
      <Alert className="aaa" desc="111" />
      <Alert close={false} desc="111" title="hello" />
    </div>
  );
}

export default App;
