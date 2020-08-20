import React, { Component } from 'react'
import Header from './Header'
import ContestPreview from './ContestPreview'
import axios from 'axios'

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
        <div className="text-left">
        {
          this.state.contests.map((item)=> (<ContestPreview {...item} key={item.id}/>))
        }
        </div>
      </React.Fragment>
    )
  }
}

export default App;