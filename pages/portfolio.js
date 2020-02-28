import React from 'react'
import { withRouter } from 'next/router'


const Portfolio = withRouter((props) => {
  console.log('props', props)
    return (
      <>
        <div>
          asdasd
        </div>
        <h3>{props.router.query.title}</h3>
      </>
    )
  }
)

export default Portfolio

