import Link from "next/link"
// import fetch from 'isomorphic-unfetch'
import axios from 'axios'
import { withRouter } from 'next/router'


const About = withRouter((props) => (
    <>
      <div>{props.router.query.title}-----
        <h1>Next stars: ArtmenV</h1>
      </div>
    </>
  ));


export default About