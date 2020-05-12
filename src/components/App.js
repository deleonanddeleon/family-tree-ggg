import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useParams,
  // useRouteMatch
} from "react-router-dom";
import Nav from './Nav';
import * as data from './Data';
import Card from './Card';
import CardParent from './CardParent';
import About from './About';
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {familytree: true};
  } 
  render () {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/about"><About /></Route>
              <Route path="/contact"><Contact /></Route>
              {
                data.routes.map( (route, index) => {
                  return (
                    <Route key={index} path={route}>
                      <Nodes nodes={data.nodes[route.substring(1)]} />
                    </Route>
                  );
                }
                )
              }
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const Nodes = (props) => (
  <>
  {/* <h1 id="nodes" className="display-4 my-4 text-center text-muted">{props.nodes.parent.name}</h1> */}
  <section className="hero">
    <div className="container">
      <div className="row">
        <CardParent node={props.nodes.parent}/>
      </div>
      <hr/>
      <div className="row">
        {
          props.nodes.offspring.map((node, index) => <Card key={index} node={node}/>)
        }
      </div>
    </div>
  </section>
  </>
);


const Home = () => {
  // let { path, url } = useRouteMatch();
  // console.log(path);
  // console.log(url);
  // console.log(nodes["one"]["description"]);
  return (
    <div>
      <Nodes nodes={data.nodes["ganggang"]} />
    </div>
  );
};


export default App;
