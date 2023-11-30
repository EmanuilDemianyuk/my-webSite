import { ThemeState } from "src/Type";
import { localStorageManager } from "src/classes/StorageManager";
import { LOCAL_HOST__THEME_USER_DATA } from "src/constants";
import { initialState } from "./initialState";

let localData = localStorageManager.getItem<ThemeState>(LOCAL_HOST__THEME_USER_DATA);

!localData && localStorageManager.setItem<ThemeState>(LOCAL_HOST__THEME_USER_DATA, initialState);

localData = localStorageManager.getItem<ThemeState>(LOCAL_HOST__THEME_USER_DATA);
                   

export const globalState = localData as ThemeState;