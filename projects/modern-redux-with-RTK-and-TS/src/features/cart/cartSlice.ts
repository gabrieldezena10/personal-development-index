import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CartState {
    items: {
        [productID: string]: number
    }
}

const initialState: CartState = {
    items: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<string>) {
            const id = action.payload;
            if(state.items[id]) {
                state.items[id]++
            } else {
                state.items[id] = 1;
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            delete state.items[action.payload]
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// this function is applien at the same place as getMemoizedNumItems
// although this function
export function getNumItems(state: RootState) {
    console.log('test')
    let numItems = 0;
    for (let id in state.cart.items) {
      numItems += state.cart.items[id];
    }
    return numItems;
  }

// createSelector remembers o valor final do seletor  desde que o primeiro parâmetro(estado)  não mude
// esse fator não muda nada para questões do usuário em relação a função acima
// No entanto, influencia nas questões de processamento já que não é processado mais do que deveria ser
export const getMemoizedNumItems = createSelector(
(state: RootState) => state.cart.items,
(items) => {
    console.log("calling getMemoizedNumItems");
    let numItems = 0;
    for (let id in items) {
    numItems += items[id];
    }
    return numItems;
}
);

export const getTotalPrice = createSelector(
    (state: RootState) => state.cart.items,
    (state: RootState) => state.products.products,
    (items, products) => {
        let total = 0;
        for (let id in items) {
            total += products[id].price * items[id];
        }
        return total.toFixed(2);
    }
)