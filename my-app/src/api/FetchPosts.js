export const fetchPosts = async () => {
    // fetching posts data
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

// checking if the response is not okay
if (!response.ok) {
    throw new Error("Data fetching failed")
}

// returning data
const data = await response.json()
return data 

}

