import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import LightButton from ".";

describe('LightButton Component', () => {
  // Test for rendering with text
  test('renders with provided text', () => {
    const buttonText = "Click Me";
    render(<LightButton text={buttonText} />);
    expect(screen.getByRole('button')).toHaveTextContent(buttonText);
  });

  // Test for active state
  test('has active class when active prop is true', () => {
    render(<LightButton active={true} text="Active Button" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('activeButton'); // Use the actual class name used for active state
  });

  // Test for disabled state
  test('is disabled when disabled prop is true', () => {
    render(<LightButton disabled={true} text="Disabled Button" />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  // Test for click event
  test('click event is fired when clicked', () => {
    const mockOnClick = jest.fn();
    render(<LightButton onClick={mockOnClick} text="Clickable Button" />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
