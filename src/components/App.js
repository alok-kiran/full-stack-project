import React, { Component } from 'react'
import Header from './Header'
//import data from './TestData'
import ContestPreview from './ContestPreview'

class App extends Component {
  state = {
    test: 42,
    headerTitle: "Naming contets" 
  }
  render(){
    return (
      <React.Fragment>
        <div>
        <Header headerTitle = {this.state.headerTitle}/>
        </div> 
        <div className="text-center">
        {
          this.props.contestData.map((item, index)=> (<ContestPreview {...item} key={index}/>))
        }
        </div>
      </React.Fragment>
    )
  }
}

export default App;