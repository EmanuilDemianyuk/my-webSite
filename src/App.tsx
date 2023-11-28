import classNames from 'classnames';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import './App.scss';



const theme = true;
function App() {

  return (
    <div
    className={classNames(
      "wrapper", {"DarkTheme" : !theme}, {"LightTheme" : theme}
    )}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
