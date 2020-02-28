import fetch from 'isomorphic-unfetch'
import React from 'react'
import Link from "next/link"
import axios from 'axios'

import NextHead from "next/head"
import dynamic from "next/dynamic"

import "./styles.scss"

// const About = dynamic(() => import('./about'),  {
//   loading: () => <div>loading...</div>
// })


function HomePage({ posts }) {
console.log('posts', posts)
  return (
    <>
      <NextHead>
        <title>You huy</title>
      </NextHead>
      <ul>
        { posts.map(post => {
          return (
            <li> { post.title } </li>
          )
        })}
      </ul>
    </>
  )
}

HomePage.getInitialProps = async () => {
  let posts = []
  const res = await axios('https://jsonplaceholder.typicode.com/todos')
  posts = res.data
  return { posts: posts.splice(0, 10) }
}

export default HomePage