import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import { AutoComplete } from "./autoComplete";
import { Input } from "../Input/input";
import { DataSourceProps } from './autoComplete';

interface GithubProps {
  value: string,
  url: string
}

const meta = {
  title: "AutoComplete组件",
  component: AutoComplete,
  // @ts-ignore
  subcomponents: { Input}
} satisfies Meta<typeof AutoComplete>
export default meta

const FootBallPlayersProps = [
  { value: "bradley", number: 1 },
  { value: "pope", number: 2 },
  { value: "caruso", number: 3 },
  { value: "cousins", number: 4 },
  { value: "kuzma", number: 5 },
  { value: "rando", number: 6 },
  { value: "green", number: 7 },
  { value: "brahowarddley", number: 8 },
  { value: "AD", number: 9 },
  { value: "james", number: 10 },
]
const handleSearch = (value: string) => {
    const item = FootBallPlayersProps.filter((item) => item.value.includes(value))
    return item
} 
const hadleAsyncSearch = (value: string) => {
    console.log(value)
    return fetch(`https://api.github.com/search/users?q=${value}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        return items?.slice(0, 10)?.map((item: any) => {
          return { value: item.login, ...item };
        });
      });
  }; 

  const renderOptions = (item: DataSourceProps) => {
    const itemWithNumber = item as DataSourceProps<GithubProps>;
    return (
      <>
        <h5>Name: {itemWithNumber.value}</h5>
        <h5>url : {itemWithNumber.url}</h5>
      </>
    );
  };
export const DefaultAutoComplete: StoryFn<typeof AutoComplete> = () => (
  <AutoComplete placeholder="试试输入足球运动员名(en)" fetchSuggestios={handleSearch}/>
)
DefaultAutoComplete.storyName = "自定义模板搜索的AutoComplete"
export const AsyncAuotComplete: StoryFn<typeof AutoComplete> = () => (
  <AutoComplete renderOptions={renderOptions} fetchSuggestios={hadleAsyncSearch} placeholder="试试输入github用户名"/>
)
AsyncAuotComplete.storyName = "异步搜索的AutoComplete"