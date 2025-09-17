import { Suspense } from 'react';
import './App.css'
import BatsMan from './BatsMan';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';
import Comments from './Comments';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())

const fetchFriends = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  return response.json()
}

const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())

const fetchComments = async () =>{
  const responseComments = await fetch('https://jsonplaceholder.typicode.com/comments')
  return responseComments.json() ;
}

function App() {

  // const friendPromise = fetchFriends() ;
  // const postsPromise = fetchPostsAsync() ;
  const commentsPromise = fetchComments() ;


  // function handleClick(){
  //   alert('I am clicked') ;
  // }

  // const handleClick3 = () =>{
  //   alert('Click 3')
  // }

  // const handleAddFive = (number) => {
  //   const newNumber = number + 5 ;
  //   alert('New number is '+ newNumber) ;
  // }

  return (
    <>
        <h3>Vite + React</h3>

        <Suspense fallback = {<h3>Comments are loading......</h3>} >
          <Comments commentsPromise = {commentsPromise} ></Comments>
        </Suspense>

        {/* <Suspense fallback= {<h3>Loading posts......</h3>} >
          <Posts fetchPosts = {fetchPosts} ></Posts>
        </Suspense> */}

        {/* <Suspense fallback = {<h3>Loading number of friends...</h3>} >
          <Friends friendPromise = {friendPromise} ></Friends>
        </Suspense>
    
       <Suspense fallback = {<p>Loading......</p>} >
        <Users fetchUsers={fetchUsers} ></Users>
       </Suspense> */}


        {/* <BatsMan></BatsMan> */}

        {/* <Counter></Counter>

        <button onClick={handleClick} >Click Me</button>
        <button onClick={function handleClick2(){
          alert('Click me again')
        }} >Click Me Again</button>
        <button onClick={handleClick3} >Click Me 3</button>
        <button onClick={() =>{
          alert('Click 4')
        }} >Click Me 4</button>

        <button onClick={() => handleAddFive(12)} >Click Add</button> */}
    </>
  )
}

export default App
