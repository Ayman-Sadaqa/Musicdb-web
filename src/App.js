import React, { Component } from 'react';
import './App.css';




class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    Artist1:[],
    Album:[],
    Song:[],
    };

  }
   
  componentDidMount() {
    const endpoint = "http://localhost:8000";
    fetch(endpoint+"/artists")
    .then (responce => responce.json())
    .then(result=> this.setState({Artist1:result}));

    
    fetch(endpoint+"/albums")
    .then (responce => responce.json())
    .then(result=> this.setState({Album:result}));

    fetch(endpoint+"/songs")
    .then (responce => responce.json())
    .then(result=> this.setState({Song:result}));
  }

  

  render() {
    const {Artist1, Album, Song} = this.state;
console.log (Artist1, Album, Song)
if(Artist1.lenght === 0 && Album.lenght === 0 && Song.lenght === 0){
  return(<p>Nothing To Show</p>)
}else{
    return (
      <div className="all">
      <div className="artist">
        <table className="table">
            <thead><tr>{Object.entries(Artist1).map((el,i) => <th key={i}>{el[0]}</th>)}
          </tr>
          </thead>
        <tbody>
          {Artist1.map(el =>(
            <tr key={el.id}>
              {Object.entries(el).map((el,i) => <td key={i}>{el[1]}</td>)}
            </tr>
          ))}
        </tbody>
        </table>
      </div>

<div className="album">
<table className="table">
    <thead><tr>{Object.entries(Album).map((el,i) => <th key={i}>{el[0]}</th>)}
  </tr>
  </thead>
<tbody>
  {Album.map(el =>(
    <tr key={el.id}>
      {Object.entries(el).map((el,i) => <td key={i}>{el[1]}</td>)}
    </tr>
  ))}
</tbody>
</table>
</div>

<div className="song">
<table className="table">
    <thead><tr>{Object.entries(Song).map((el,i) => <th key={i}>{el[0]}</th>)}
  </tr>
  </thead>
<tbody>
  {Song.map(el =>(
    <tr key={el.id}>
      {Object.entries(el).map((el,i) => <td key={i}>{el[1]}</td>)}
    </tr>
  ))}
</tbody>
</table>
</div>
</div>
    );
  }

}}



export default List;
