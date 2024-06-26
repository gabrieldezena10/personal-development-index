import React from "react";
import { getByRole, screen, waitFor } from "@testing-library/react";
import { Products } from "./Products";
import mockProducts from "../../../public/products.json";
import * as api from "../../app/api";
import { renderWithContext } from "../../test-utils";
import userEvent from "@testing-library/user-event";


const getProductsSpy = jest.spyOn(api, "getProducts");
getProductsSpy.mockResolvedValue(mockProducts);

test("Several products should be listed", async () => {
  const { debug } = renderWithContext(<Products />);
  await waitFor(() => expect(getProductsSpy).toHaveBeenCalledTimes(1));
//   debug()
  const articles = screen.getAllByRole("article");
  expect(articles.length).toEqual(mockProducts.length);
});

test("Each individual product should contain a heading", async () => {
    renderWithContext(<Products />);
    for (let product of mockProducts) {
      await screen.findByRole("heading", { name: product.name });
    }
});

test("should be able to add a banana to your cart", async () => {
    const { store } = renderWithContext(<Products />);
    // const heading = await screen.findByRole("heading", { name: /Bananas/ });
    // const button = getByRole(heading.parentNode as HTMLElement, "button");
    const button = await screen.findByRole("button", { name: /Bananas/i });

    userEvent.click(button);
    expect(store.getState().cart.items["207"]).toEqual(1);
    userEvent.click(button);
    userEvent.click(button);
    expect(store.getState().cart.items["207"]).toEqual(3);
  });