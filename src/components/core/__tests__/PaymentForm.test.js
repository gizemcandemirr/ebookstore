import { describe } from "node:test";
import * as React from "react";
import PaymentForm from "../PaymentForm";
import { fireEvent, render, screen } from "@testing-library/react";
import useToast from "../../../hooks/useToast";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("PaymentForm", () => {
  test("showToast fonksiyonu başarılı mesaj gösteriyor mu?", () => {
    const showToast = useToast();
    showToast("Başarılı işlem", "success");
  });

  test("renders the payment form", () => {
    render(<PaymentForm />);
    expect(screen.getByPlaceholderText("Card Number")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Expiration date (AA/YY)")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("CVV")).toBeInTheDocument();
  });
  test("submits form with valid data", () => {
    render(<PaymentForm />);
    fireEvent.change(screen.getByPlaceholderText("Card Number"), {
      target: { value: "1234567812345678" },
    });
    fireEvent.change(screen.getByPlaceholderText("Expiration date (AA/YY)"), {
      target: { value: "12/34" },
    });
    fireEvent.change(screen.getByPlaceholderText("CVV"), {
      target: { value: "123" },
    });
    fireEvent.click(screen.getByText("Pay"));
  });
});
