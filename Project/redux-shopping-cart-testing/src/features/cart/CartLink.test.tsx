import React from "react";
import { screen } from "@testing-library/react";
import { CartLink } from "./CartLink";
import { store } from "../../app/store";
import { addToCart, updateQuantity, removeFromCart } from "./cartSlice";
import { renderWithContext } from "../../test-utils";

test("should contain a link", () => {
  renderWithContext(<CartLink />);
  expect(screen.getByRole("link")).toBeInTheDocument();
});

test("should show text when there are no items", () => {
    renderWithContext(<CartLink />);
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Cart");
    expect(link).not.toHaveTextContent("0");
    expect(link).not.toHaveTextContent("1");
  });

  test("should show the correct number of items", () => {
    store.dispatch(addToCart("testItem"));
    renderWithContext(<CartLink />);
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("1");
    store.dispatch(updateQuantity({ id: "testItem", quantity: 5 }));
    expect(link).toHaveTextContent("5");
    store.dispatch(addToCart("anotherItem"));
    expect(link).toHaveTextContent("6");
    store.dispatch(removeFromCart("testItem"));
    store.dispatch(removeFromCart("anotherItem"));
    expect(link).toHaveTextContent("Cart");
  });
