import React from 'react';

export default class Dashboard extends React.Component {
componentWillMount(){
console.log('bob');
fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.movies);
    })
    .catch((error) => {
      console.error(error);
    });
}

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Dashboard</h1>
      </div>);
  }
}