import classNames from 'classnames';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import './App.scss';
import { ThemeContext } from './context';
import { useManagerTheme } from './hooks/useManagerTheme';




function App() {
  const { state: { theme }, changeTheme } = useManagerTheme();
  
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
      className={classNames(
        "wrapper", "mainColor", {"DarkTheme" : !theme}, {"LightTheme" : theme}
      )}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
