import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import ContestList from './ContestList'
class App extends Component {
  state = {
    test: 42,
    headerTitle: "Naming contets" ,
    contests: []
  }

  componentDidMount(){
    axios.get('/api/contests')
    .then(res => {
          this.setState({
      contests: res.data.contests
    })
      console.log(res.data.contests)
    })
    .catch(console.error)
    // this.setState({
    //   contests: data.contests
    // })
  }

  render(){
    return (
      <React.Fragment>
        <div>
        <Header headerTitle = {this.state.headerTitle}/>
        </div> 
        <ContestList contests={this.state.contests}/>
      </React.Fragment>
    )
  }
}

export default App;