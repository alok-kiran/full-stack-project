import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import data from './components/TestData.json'

ReactDOM.render(
  <App initialContests={[]}/>,
  document.getElementById('root')
);