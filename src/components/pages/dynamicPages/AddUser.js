import React, { Component} from 'react';
import uuid from 'react-uuid';
import RegisterFormInputMolecule from '../../molecules/RegisterFormInputMolecule';

class AddUser extends Component {
    state = {
        fullName:"",
        userName:"",
        password:"", 
        errors: {},
    };

  onHandleChange = (e)=>{
    this.setState({ [e.target.fullName]: e.target.value })
  };

  onHandleSubmit = (e) =>{
    e.preventDefault();
    const { fullName,userName,password } = this.state;

    if(fullName === ""){
        this.setState({errors:{fullName: "Full Name required"}})
        return;
    }

    if(userName === ""){
        this.setState({errors:{userName: "User Name required"}})
        return;
    }

    if(password === ""){
        this.setState({errors:{password: "Password required"}})
        return;
    }

    const newUser = { id: uuid(), fullName: { fullName }, userName: { userName }, password: { password } }
    console.log(newUser);

    this.setState({ fullName: "", userName: "", password: ""});

  }

  render() {
    const {fullName,userName,password, errors} = this.state;
    return (
        <div className="card">
        <div className="card-header text-center"><h1>User Registration</h1></div>
        <div className="card-body">
            <form onSubmit={this.onHandleSubmit}>
            <div className="mb-2">
                <RegisterFormInputMolecule 
                label="Full Name" 
                fullName="fullName" 
                placeholder="Please enter your full name."
                value={fullName}
                onChange={this.onHandleChange}
                error={errors.fullName}
                type="text"
                />
            </div>
            <div className="mb-2">
                <RegisterFormInputMolecule 
                label="User Name" 
                name="userName" 
                placeholder="Please enter your user name."
                value={userName}
                onChange={this.onHandleChange}
                error={errors.userName}
                type="userName"
                />
            </div>
            <div className="mb-2">
                <RegisterFormInputMolecule 
                label="Password" 
                name="password" 
                placeholder="Please enter your password."
                value={password}
                onChange={this.onHandleChange}
                error={errors.password}
                />
            </div>
            <input type="submit" value="register" className="btn btn-outline-primary float-end"/>
            </form>
        </div>
        </div>
    )
  }
}
export default AddUser;
