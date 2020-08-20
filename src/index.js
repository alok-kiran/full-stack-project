import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import data from './components/TestData.json'

ReactDOM.render(
  <App contestData={data.contests}/>,
  document.getElementById('root')
);