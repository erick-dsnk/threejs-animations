import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

class Doc extends React.Component {
  render() {
    return <App />
  }

  componentDidMount() {
    document.title = "Three.js Animations"
  }
}

ReactDOM.render(
  <Doc />,
  document.getElementById('root')
);

