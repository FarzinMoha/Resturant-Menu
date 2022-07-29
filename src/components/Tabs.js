import React from 'react'

function Tabs(props) {
    const tabs = (props.categories)
  return (
    <div className='tabs'>
        {tabs.map((category , index) =>{
            return (<button onClick={() => props.filter(category)} key={index} className='tabs-btn' >{category}</button>)
        })}
    </div>
  )
}

export default Tabs