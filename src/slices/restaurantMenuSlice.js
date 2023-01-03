import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadWholeMenuFromApi } from "../API/axiosAPICalls";
import * as globalConstants from "../globalDefinitions/globalConstants";
import _ from "lodash";
import { sampleMenu, sampleMenuWithImages } from "../utils/sampleData";

export const getMenu = createAsyncThunk(
    "menu/fetchMenu",
    async (restaurantId) => {
        var menuPromise = new Promise(function (resolve, reject) {
            // loadWholeMenuFromApi(restaurantId)
            //     .then((dataM) => {
            //         return resolve(dataM);
            //     })
            //     .catch((error) => {
            //         console.log("fetchMenu:: error: ", error);
            //         reject(error);
            //     });
            resolve(sampleMenu);
        });
        return menuPromise;
    }
);

const initialState = {
    restaurantMenu: [],
    restaurantMenuStatus: globalConstants.menuReadingIdle, //'idle' | 'loading' | 'succeeded' | 'failed'
    restaurantMenuError: null,
};

const restaurantMenuSlice = createSlice({
    name: "restaurantMenu",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getMenu.pending, (state, action) => {
                state.restaurantMenuStatus = globalConstants.menuReadingLoading;
            })
            .addCase(getMenu.fulfilled, (state, action) => {
                state.restaurantMenuStatus =
                    globalConstants.menuReadingSucceeded;
                state.restaurantMenu = _.cloneDeep(action.payload);
            })
            .addCase(getMenu.rejected, (state, action) => {
                state.restaurantMenuStatus = globalConstants.menuReadingFailed;
                state.restaurantMenuError = action.error.message;
            });
    },
});

// export const { resetMenu } = restaurantMenuSlice.actions;

export const getRestaurantMenu = (state) => state.restaurantMenu.restaurantMenu;
export const getRestaurantMenuStatus = (state) =>
    state.restaurantMenu.restaurantMenuStatus;
export const getRestaurantMenuError = (state) =>
    state.restaurantMenu.restaurantMenuError;

export default restaurantMenuSlice.reducer;
