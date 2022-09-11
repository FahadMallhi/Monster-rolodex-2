import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super(); this.state = {
      items: []
    };
  }
  getUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(user => this.setState({ items: user }))

  }
  componentDidMount() {
    this.getUser();
  }
  // filteritems = () => {
  //   const [filter, { setState }] = ({
  //     keyword: 'a',
  //   }
  //   )
  // }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className='api'>API CALLED PROJECT</h1>
          <input type="text" placeholder='search'
          />
          <div className='file1'>
            {this.state.items.map((x) => {

              return <div className='file2'>
                <img alt='robat' src={`https://robohash.org/ ${x.id}`} />
                <h4>{x.name}</h4>
                <h6>{x.email}</h6>
              </div>
            })}
          </div>


        </header>
      </div>

    );
  }
}

export default App;
