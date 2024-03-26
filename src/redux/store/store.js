import { configureStore } from "@reduxjs/toolkit";
import users from '../slices/users/usersSlices';
import products from '../slices/products/productSlices';

const store = configureStore({
    reducer: {
        users,
        products,
    }
});

export default store;