// import logo from './logo.svg';
import './App.css';
// import Menu from './form_order_fruit/Menu';
import React from 'react';
import Menu from './vidu_map/vidu1';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// function AppTest() {
//   return (
//     <div>
//       <Score />
//     </div>
//   );
// }
// export default AppTest;

class App extends React.Component {
  render(){
    return (
      <div>
        <Menu></Menu>
      </div>
    )
  }
}
export default App;