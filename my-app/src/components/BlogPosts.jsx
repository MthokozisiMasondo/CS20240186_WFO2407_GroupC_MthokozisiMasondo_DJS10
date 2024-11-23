import React, { useEffect, useState } from "react"
import { fetchPosts } from "../api/FetchPosts"

function BlogPosts () {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

useEffect(() => {
    async function loadPosts() {
        try {
            const data = await fetchPosts()
            setPosts(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    loadPosts()
}, []) 

// Rendering the loading state
if (loading) {
    return <div>Loading posts...</div>
  }

  // Rendering the error state
  if (error) {
    return <h2>{error}</h2>
  }

  // Rendering the posts
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogPosts
