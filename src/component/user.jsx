const User = (props) => {
    console.log(props);
    const{firstName,lastName,age}= props;
    return (
      <div>
        <h1>User</h1>
        <div>First Name: {props.firstName}</div>
        <div>Last Name: {props.lastName}</div>
      </div>
    )
  }
  export default User;
