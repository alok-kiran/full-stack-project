import React from 'react'

class ContestPreview extends React.Component {
  render(){
    return (<div className="link container" onClick={()=>alert(JSON.stringify(this.props))}>
    <div className="category-name">
    {this.props.categoryName}
    </div>
    <div className="contest-name">
    {this.props.contestName}
    </div>
  </div>)
  }
}

export default ContestPreview;