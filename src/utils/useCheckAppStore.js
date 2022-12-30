import * as globalConstants from "../globalDefinitions/globalConstants";
import { useDispatch } from "react-redux";
import store from "../appStore/store";

import { getMenu } from "../slices/restaurantMenuSlice";

export function useCheckAppStore() {
    const dispatch = useDispatch();

    if (
        !store.getState().restaurantMenu.restaurantMenuStatus !==
        globalConstants.menuReadingSucceeded
    ) {
        dispatch(getMenu(1));
    }
    return;
}
