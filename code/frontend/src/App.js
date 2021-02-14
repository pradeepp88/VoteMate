import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Result from './Components/Result'
import Questionnaire from './Components/Questionnaire'
import history from './Components/History'



function App() {
  const divstyleApp = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (

    <div style={divstyleApp}>
      <BrowserRouter history={history}>
        <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/questionnaire" component={Questionnaire} exact/>
          <Route path="/result" component={Result} exact/>
        </Switch>
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
