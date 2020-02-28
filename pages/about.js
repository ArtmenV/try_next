import Link from "next/link"
// import fetch from 'isomorphic-unfetch'
import axios from 'axios'


function About({ stars }) {
  debugger

  return (
    <>
      <div>asdas
        Next stars: {stars}
      </div>
    </>
  )
}

 About.getInitialProps = async({req}) => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const json = await res.json()

    return {
      stars: json.data
    }

}

export default About