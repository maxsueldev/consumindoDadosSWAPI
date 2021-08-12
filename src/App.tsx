import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Filmes } from './pages/Filmes';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/filmes" component={Filmes} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
