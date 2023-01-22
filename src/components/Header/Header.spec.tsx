import { screen, render } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("should be render Header", () => {
    render(<Header />);
    // trocando
    // expect(screen.getByAltText("lgo")).toBeInTheDocument();
  });
});
