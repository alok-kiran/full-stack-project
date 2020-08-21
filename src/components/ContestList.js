import React from 'react'
import ContestPreview from './ContestPreview'

const ContestList = ({contests}) => {
  return (<div>
    <div className="text-left">
    {
      contests.map((item)=> (<ContestPreview {...item} key={item.id}/>))
    }
    </div>
    </div>)
}

export default ContestList;