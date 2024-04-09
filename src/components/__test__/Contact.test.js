import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("test cases for Contact us page" , () => {
    test("should load contact us component", () => {
        render(<Contact />);
      
        const heading = screen.getByRole("heading");
        // Assertion
        expect(heading).toBeInTheDocument();
      });
      
      test("should have 8 paragraph tags", () => {
        render(<Contact />);
      
        const heading = screen.getAllByRole("heading");
        expect(heading.length).toBe(1);
      });
});
