import React,{Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      isLoaded : false,
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json =>{
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }
  render(){
    var {
      isLoaded ,items
    }= this.state;
    if(!isLoaded){
      return <div>Chargement ...</div>;
    }
    else{
    return (
      <div className="App">
        Les informations sont chargées
        <ul>
          {items.map(item =>(
            <li key={item.id}>
             Nom : {item.name} Email : {item.email}
            </li>
          ))};
        </ul>

      </div>
    );
  }}
  }
export default App;
