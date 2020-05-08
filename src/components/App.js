import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
// import React, {Component} from 'react';
// import {Switch, Route, Link} from 'react-router-dom';

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
            <hr />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/nodes">
                <Nodes nodes={nodeall}/>
              </Route>
              {
                routes.map( (myroute, index) => {
                  return (
                    <Route key={index} path={myroute}>
                      <Nodes nodes={nodes[myroute.substring(1)]} />
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

const Nav = () => {
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Family Tree</h1>
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/nodes">Nodes</Link>
        </li>
      </ul>
    </div>
  );
};

const Nodes = (props) => (
  <>
  <h1 id="nodes" className="display-4 my-4 text-center text-muted">Toys</h1>
  <div className="row">
    {
      props.nodes.map((node, index) => <Card key={index} node={node}/>)
    }
  </div>
  </>
);

const Card = (props) => (
  <div className="col-md-6 col-lg-3">
    <div className="card mb-3">
      {/* <img className="card-img-top" src={`img/${props.toy.image}.png`} alt=""/> */}
      <div className="card-body">
        <h4 className="card-title text-center">{props.node.name}</h4>
        <p className="card-text">
          {props.node.description}
          <Link to={props.node.link}>{props.node.link}</Link>
        </p>
      </div>
    </div>
  </div>
);

const Home = () => {
  // let { path, url } = useRouteMatch();
  // console.log(path);
  // console.log(url);
  // console.log(nodes["one"]["description"]);
  return (
    <div>
      <h2> Home Component </h2>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
};

const routes = [
  '/one',
  '/two',
  '/three',
  '/four',
  '/five',
  '/six',
  '/seven',
  '/eight',
];

const nodes = {
  one: [
    {
      name: 'Toy One',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '1',
      link: '/one'
    },
    {
      name: 'Toy Two',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '2',
      link: '/two'
    }    
  ],
  two: [
    {
      name: 'Toy Two',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '2',
      link: '/two'
    },
    {
      name: 'Toy Three',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '3',
      link: '/three'
    }   
  ],
  three: [
    {
      name: 'Toy Three',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '3',
      link: '/three'
    },
    {
      name: 'Toy Four',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '4',
      link: '/four'
    }
  ],
  four: [
    {
      name: 'Toy Four',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '4',
      link: '/four'
    },
    {
      name: 'Toy Five',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '5',
      link: '/five'
    },    
  ],
  five: [
    {
      name: 'Toy Five',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '5',
      link: '/five'
    },
    {
      name: 'Toy Six',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '6',
      link: '/six'
    },    
  ],
  six: [
    {
      name: 'Toy Six',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '6',
      link: '/six'
    },
    {
      name: 'Toy Seven',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '7',
      link: '/seven'
    },    
  ],
  seven: [
    {
      name: 'Toy Seven',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '7',
      link: '/seven'
    },
    {
      name: 'Toy Eight',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '8',
      link: '/eight'
    },    
  ],
  eight: [
    {
      name: 'Toy Eight',
      description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.`,
      image: '8',
      link: '/eight'
    }        
  ]
};

const nodeall = [
  {
    name: 'Toy One',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '1',
    link: '/one'
  },
  {
    name: 'Toy Two',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '2',
    link: '/two'
  },
  {
    name: 'Toy Three',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '3',
    link: '/three'
  },
  {
    name: 'Toy Four',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '4',
    link: '/four'
  },
  {
    name: 'Toy Five',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '5',
    link: '/five'
  },
  {
    name: 'Toy Six',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '6',
    link: '/six'
  },
  {
    name: 'Toy Seven',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '7',
    link: '/seven'
  },
  {
    name: 'Toy Eight',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '8',
    link: '/eight'
  },
];

export default App;
