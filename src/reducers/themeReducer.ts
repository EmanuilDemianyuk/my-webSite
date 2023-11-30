import { ThemeAction, ThemeState } from "src/Type";
import { localStorageManager } from "src/classes/StorageManager";
import { CHANGE__THEME, LOCAL_HOST__THEME_USER_DATA } from "src/constants";

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch(action.type) {
        case CHANGE__THEME: 
            const changeState = {
                ...state,
                theme: !state.theme
            };
            
            localStorageManager.setItem<ThemeState>(LOCAL_HOST__THEME_USER_DATA, changeState)
            return changeState;

        default: 
            return state;
    }
}

export default themeReducer;