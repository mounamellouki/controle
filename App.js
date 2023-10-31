
import React from 'react';
import { BrowserRouter as  Route, Switch, Link } from 'react';
import InscriptionForm from './InscriptionForm';
import ListeInscriptions from './ListeInscriptions';

 const App = () => {
  return (

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/inscription">Inscription</Link>
            </li>
            <li>
              <Link to="/liste">Liste d'Inscriptions</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/inscription">
            <InscriptionForm />
          </Route>
          <Route path="/liste">
            <ListeInscriptions />
          </Route>
        </Switch>
      </div>
  
  );
};

export default App;

