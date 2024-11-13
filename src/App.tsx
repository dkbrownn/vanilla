import React, { useState } from 'react';
import { Button } from './components/Button/button';
import { Alert } from './components/Alert/alert';
import { Menu } from './components/Menu/menu';
import { MenuItem } from './components/Menu/menuItem';
import { SubMenu } from './components/Menu/subMenu';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Icon } from './components/Icon/icon';
import { Transition } from './components/Transition/transition';
import { Tabs } from './components/Tabs/tab';
import { TabItem } from './components/Tabs/tabItem';
library.add(fas);
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      aaa
      <Button onClick={() => setShow((prv) => !prv)}>toggle</Button>
      <Transition in={show} animation="zoom-in-top" timeout={300} wrapper>
        <div>
          <h1>Hello World</h1>
          <h2>Hello World</h2>
          <h3>Hello World</h3>
        </div>
        <Button btnType="primary">toggle</Button>
      </Transition>
      <hr />
      <Tabs>
        <TabItem label={"tab1"}>1</TabItem>
        <TabItem label={"tab2"} disabled>
          2
        </TabItem>
        <TabItem label={"tab3"}>3</TabItem>
      </Tabs>
      <Tabs type="card">
        <TabItem label={"tab1"}>1</TabItem>
        <TabItem label={"tab2"} disabled>
          2
        </TabItem>
        <TabItem label={"tab3"}>3</TabItem>
      </Tabs>
      <Tabs type="card">
        <TabItem
          label={
            <span>
              <Icon icon={"coffee"} size="sm"></Icon>
              111
            </span>
          }
        >
          1
        </TabItem>
        <TabItem label={"tab2"} disabled>
          2
        </TabItem>
        <TabItem label={"tab3"}>3</TabItem>
      </Tabs>
      <code style={{ display: "block" }}>const a = b</code>
      <Icon icon="envelope" theme="primary" />
      <Icon icon="coffee" theme="secondary" />
      <Icon icon="arrow-down" theme="info" />
      <Menu defaultIndex={"2"} mode="vertical" defaultOpenSubMenus={["3"]}>
        <MenuItem>cool link1</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>
        <MenuItem>cool link3</MenuItem>
        <SubMenu title="dropDown">
          <MenuItem>dropDown1</MenuItem>
          <MenuItem>dropDown2</MenuItem>
          <MenuItem>dropDown3</MenuItem>
        </SubMenu>
      </Menu>
      <Menu defaultIndex={"2"} defaultOpenSubMenus={["3"]}>
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
      <Alert className="aaa" desc="111" alType="success"/>
      <Alert className="aaa" desc="111" alType="danger" />
      <Alert className="aaa" desc="111" alType="warning" />
    </div>
  );
}

export default App;
