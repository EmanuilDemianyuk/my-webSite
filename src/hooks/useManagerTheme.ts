import { useReducer } from 'react';
import { ManagerTheme } from 'src/Type';
import { CHANGE__THEME } from 'src/constants';
import { globalState } from 'src/context/state';
import themeReducer from 'src/reducers/themeReducer';




export const useManagerTheme = (): ManagerTheme => {
    const [state, dispatch] = useReducer(themeReducer, globalState)
    const changeTheme = (): void => {
      dispatch({type: CHANGE__THEME})
    }

    return {
        state,
        changeTheme
    }
}

