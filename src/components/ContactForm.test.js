import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("contact form renders corrrectly", () => {
  render(<ContactForm />);
});

test("contact form allows correct input to all fields", () => {
  const { getByLabelText, getByText } = render(<ContactForm />);

  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);
  const submitButton = getByText(/submit/i);

  fireEvent.input(firstNameInput, {
    target: {
      name: "firstName",
      value: ""
    }
  });

  fireEvent.input(lastNameInput, {
    target: {
      name: "lastName",
      value: "last"
    }
  });

  fireEvent.input(emailInput, {
    target: {
      name: "email",
      value: "email"
    }
  });

  fireEvent.input(messageInput, {
    target: {
      name: "message",
      value: "message"
    }
  });

  fireEvent.submit(submitButton);
});
