// Number 3
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from "vitest"; // <- Add this line
import Button from "../../components/Button";

test("renders button and handles click", async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(<Button label="Click Me" onClick={handleClick} />);

  const btn = screen.getByText("Click Me");
  expect(btn).toBeInTheDocument();

  await user.click(btn);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
