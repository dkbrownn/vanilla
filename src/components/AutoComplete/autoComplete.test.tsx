import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AutoComplete, AutoCompleteProps } from "./autoComplete";
const testArray = [
  { value: "ab", number: 11 },
  { value: "abc", number: 1 },
  { value: "b", number: 4 },
  { value: "c", number: 15 },
];
const testProps: AutoCompleteProps = {
  fetchSuggestios: (query) => { return testArray.filter(item => item.value.includes(query))},
  onSelect: jest.fn(),
  placeholder: "auto-complete"
}

let inputNode: HTMLInputElement;
describe('test AutoComplete component', () => {
  it("test basic AutoComplete behavior", async () => {
    const { container } = render(<AutoComplete {...testProps} />);
    inputNode = screen.getByPlaceholderText("auto-complete");
    fireEvent.change(inputNode, { target: { value: 'ab' }});
    await waitFor(() => {
      expect(screen.getByText("abc")).toBeInTheDocument()
    })
    console.log(container.innerHTML);
    // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
    const suggestionsChildren = container.querySelectorAll(".suggestion-item");
    expect(suggestionsChildren).toHaveLength(2)
    fireEvent.click(screen.getByText("ab"))
    expect(testProps.onSelect).toHaveBeenCalledWith({
      value: "ab", number: 11
    })
    expect(screen.queryByText("ab")).not.toBeInTheDocument();
    expect(inputNode.value).toBe("ab");
  });
  it('should provide keyboard support', async () => {
    const { container } = render(<AutoComplete {...testProps} />);
    inputNode = screen.getByPlaceholderText("auto-complete");
    fireEvent.change(inputNode, { target: { value: "ab" } });
    await waitFor(() => {
      expect(screen.getByText("abc")).toBeInTheDocument();
    });
    const firstElement = screen.getByText("ab");
    const secondElement = screen.getByText("abc");
    fireEvent.keyDown(inputNode, { key: "ArrowDown" });
    expect(firstElement).toHaveClass("is-active");
    fireEvent.keyDown(inputNode, { key: "ArrowDown" });
    expect(secondElement).toHaveClass("is-active");
    fireEvent.keyDown(inputNode, { key: "ArrowUp" });
    expect(firstElement).toHaveClass("is-active");
    fireEvent.keyDown(inputNode, { key: "Enter" });
    expect(inputNode.value).toBe("ab");
    fireEvent.keyDown(inputNode, { key: "Escape" });
    // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
    const suggestionsChildren = container.querySelectorAll(".suggestion-item");
    expect(suggestionsChildren).toHaveLength(0);
  })
  it("click outside should hide the dropdown", async () => {
     render(<AutoComplete {...testProps} />);
     inputNode = screen.getByPlaceholderText("auto-complete");
    fireEvent.change(inputNode, { target: { value: "a" } });
    await waitFor(() => {
      expect(screen.getByText("ab")).toBeInTheDocument();
    });
    fireEvent.click(document.body);
    expect(screen.queryByText("ab")).not.toBeInTheDocument();
  });
  it('async fetchSuggestions should works fine', async () => {
    const testPropsWithPromise: AutoCompleteProps = {
      ...testProps,
      fetchSuggestios: jest.fn((query) => {
        return Promise.resolve(
          testArray.filter((item) => item.value.includes(query))
        );
      }),
      placeholder: "auto-complete-3",
    };
    render(<AutoComplete {...testPropsWithPromise} />);
     inputNode = screen.getByPlaceholderText("auto-complete-3");
     fireEvent.change(inputNode, { target: { value : "a"}})
     await waitFor(() => {
      expect(screen.getByText("ab")).toBeInTheDocument();
     })
     expect(testPropsWithPromise.fetchSuggestios).toHaveBeenCalledWith("a");
  })
})