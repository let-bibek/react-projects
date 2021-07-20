
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './my_components/Header';
import Home from './my_components/Home';
import About from './my_components/About';
import Contact from './my_components/Contact';
import Cocktail from "./my_components/cocktail-app/Cocktail";
import CocktailAbout from "./my_components/cocktail-app/pages/CocktailAbout";
import SingleCocktail from './my_components/cocktail-app/pages/SingleCocktail';
import PageNotFound from './my_components/PageNotFound';
function App() {
      return (
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home/cocktailhome">
                <Cocktail></Cocktail>
              </Route>
              <Route exact path="/home/cocktailabout">
                <CocktailAbout />
              </Route>
              <Route exact path="/home/cocktail/:id">
                <SingleCocktail />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </Router>
        </div>
      );
}

export default App;
