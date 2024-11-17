import React from "react";
import axios from "axios";
import {
  render,
  fireEvent,
  screen,
  RenderResult,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Upload, UploadProps } from "./upload";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
jest.mock('../Icon/icon', () => {
  return ({ icon }: { icon: string }) => {
    return <span>{icon}</span>;
  };
})
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const testProps: UploadProps = {
  action: "fakeurl.com",
  onSuccess: jest.fn(),
  onChange: jest.fn(),
};
let  fileInput: HTMLInputElement, uploadArea: HTMLElement;
const testFile = new File(["xyz"], "test.txt", { type: "text/plain" })

describe("test upload component",() => {
  beforeEach(() => {
  })
  it('upload process should works fine',async() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    const { container } = render(
      <Upload {...testProps}>Click to upload</Upload>
    );
    const fileInput = screen.getByTestId("test-input")
    // eslint-disable-next-line testing-library/prefer-screen-queries
    uploadArea = screen.queryByText("Click to upload") as HTMLElement;
    expect(uploadArea).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();
    console.log(fileInput);
    mockedAxios.post.mockImplementation(() => {
      return Promise.resolve({ data: "cool" });
    });
    expect(fileInput).not.toBeVisible();
    console.log(fileInput.outerHTML)
    userEvent.upload(fileInput, testFile);
    
    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(".vanilla-upload-list-item") as HTMLElement
      ).toBeInTheDocument();
    });
    expect(screen.getByText("check.cirlce")).toBeInTheDocument();
  })
});