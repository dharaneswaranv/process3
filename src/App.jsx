// const user =()=>{
//   return(
   
//     <h1>user</h1>
//      )
// }

// const App=()=>{
//   return(
//     <div>
//     <h1>App</h1>
//     <h1>user</h1>
//     </div>
//   )
// }
// export default App



// const 

// const App =()=>{
//   const firstName = "Tony"
//   const lastName  = "stark"
//   const age = 40

//   return (
//     <div>
//       <user firstNmae={"Tony"}lastName={"stark"} age={40}/>
//       <user> firstname </user>
//     </div>
//   )

// }




import User from "./component/user.jsx"
import Counter from"./component/counter.jsx"
import Header from"./component/header.jsx"
// const User = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>User</h1>
//       <div>First Name: {props.firstName}</div>
//       <div>Last Name: {props.lastName}</div>
//     </div>
//   )
// }

const App = () => {
  const firstName = "Tony";
  const lastName = "stark";
  const age = 20; 
  
  return (
    //  <div>
    //    <User firstName={firstName} lastName={lastName} age={age}/>
    //     <User firstName={"mody"} lastName={"jii"} age={"30"}/>
    //     <div>Age: {age}</div>
    //   {/* </div>
    // <div> */}
    <>
    <Header/>
    <User/>
    <Counter/>
    </>
    //</div>
  )
}

export default App;
