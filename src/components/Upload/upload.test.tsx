import "@testing-library/jest-dom/extend-expect";
import React from "react";
import axios from "axios";
import {
  render,
  screen,
  RenderResult,
  fireEvent,
  waitFor,
} from "@testing-library/react";

import { Upload, UploadProps } from "./upload";

jest.mock("../Icon/icon", () => {
  return (props: any) => {
    return <span onClick={props.onClick}>{props.icon}</span>;
  };
});
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const testProps: UploadProps = {
  action: "fakeurl.com",
  onSuccess: jest.fn(),
  onChange: jest.fn(),
  onRemove: jest.fn(),
  drag: true,
};
let wrapper: RenderResult, fileInput: HTMLInputElement, uploadArea: HTMLElement;
const testFile = new File(["xyz"], "test.png", { type: "image/png" });
describe("test upload component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    wrapper = render(<Upload {...testProps}>Click to upload</Upload>);
    // eslint-disable-next-line testing-library/no-node-access
    fileInput = wrapper.container.querySelector(
      ".vanilla-file-input"
    ) as HTMLInputElement;
    // eslint-disable-next-line testing-library/prefer-screen-queries
    uploadArea = wrapper.queryByText("Click to upload") as HTMLElement;
  });
  it("upload process should works fine", async () => {
    // mockedAxios.post.mockImplementation(() => {
    //   return Promise.resolve({'data': 'cool'})
    // })
    mockedAxios.post.mockResolvedValue({ data: "cool" });
    expect(uploadArea).toBeInTheDocument();
    expect(fileInput).not.toBeVisible();
    const testInput = screen.getByTestId("test-input") as HTMLInputElement;
    expect(testInput).toBeInTheDocument();
    console.log(testInput);
    fireEvent.change(testInput, { target: { files: [testFile] } });
    // expect(screen.getByText("spinner")).toBeInTheDocument();
    
   expect(screen.getByTestId("test-list")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("test.png")).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText("check-circle")).toBeInTheDocument();
    });
    expect(testProps.onSuccess).toHaveBeenCalledWith(
      "cool",
      expect.objectContaining({
        raw: testFile,
        status: "success",
        response: "cool",
        name: "test.png",
      })
    );
    expect(testProps.onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        raw: testFile,
        status: "success",
        response: "cool",
        name: "test.png",
      })
    );

    //remove the uploaded file
    expect(screen.getByText("times")).toBeInTheDocument();
    fireEvent.click(screen.getByText("times"));
    expect(screen.queryByText("test.png")).not.toBeInTheDocument();
    expect(testProps.onRemove).toHaveBeenCalledWith(
      expect.objectContaining({
        raw: testFile,
        status: "success",
        name: "test.png",
      })
    );
  });
  it("drag and drop files should works fine", async () => {
    mockedAxios.post.mockResolvedValue({ data: "cool" });
    fireEvent.dragOver(uploadArea);
    expect(uploadArea).toHaveClass("is-dragover");
    fireEvent.dragLeave(uploadArea);
    expect(uploadArea).not.toHaveClass("is-dragover");
    // const mockDropEvent = createEvent.drop(uploadArea)
    // Object.defineProperty(mockDropEvent, "dataTransfer", {
    //   value: {
    //     files: [testFile]
    //   }
    // })
    // fireEvent(uploadArea, mockDropEvent)
    fireEvent.drop(uploadArea, {
      dataTransfer: {
        files: [testFile],
      },
    });
    await waitFor(() => {
      expect(screen.getByText("test.png")).toBeInTheDocument();
      // expect(wrapper.queryByText('check-circle')).toBeInTheDocument()
    });
    expect(testProps.onSuccess).toHaveBeenCalledWith(
      "cool",
      expect.objectContaining({
        raw: testFile,
        status: "success",
        response: "cool",
        name: "test.png",
      })
    );
  });
});
