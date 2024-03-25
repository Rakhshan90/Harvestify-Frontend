import { configureStore } from "@reduxjs/toolkit";
import users from '../slices/users/usersSlices'

const store = configureStore({
    reducer: {
        users,
    }
});

export default store;