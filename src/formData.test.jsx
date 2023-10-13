import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import FormPage from "./componets/formPage/FormPage";
import { MemoryRouter } from "react-router-dom";

describe("FormPage component validation", () => {
  it("should display validation error messages when submitting an empty form", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormPage />
        </MemoryRouter>
      </Provider>
    );

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    // Test for validation error messages for each field
    const nameError = screen.getByText("Full Name is required");
    const emailError = screen.getByText("Email is required");
    const phoneError = screen.getByText("Phone Number is required");
    const passwordError = screen.getByText("Password is required");
    const confirmPasswordError = screen.getByText(
      "Confirm Password is required"
    );

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(phoneError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
    expect(confirmPasswordError).toBeInTheDocument();
  });

  it("should display a validation error message when submitting an invalid email", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormPage />
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByLabelText("Email");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    const emailError = screen.getByText("Invalid email format");
    expect(emailError).toBeInTheDocument();
  });

  // Add more test cases for other validation rules as needed
});
