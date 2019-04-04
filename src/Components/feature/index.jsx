import React from 'react';
// import axios from 'axios';

export default class Feature extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userId: '',
			pwd: '',
			error: {userId: '', pwd: ''},
			errorUserID:'',
			errorPwd:''
		};
		this.handleClick = this.handleClick.bind(this);
	}

	isEmptyNull(val, str, id){
		const msg = str + " " + "is mandatory";
		if(val === ''){
			if(str === "User Id"){
				this.setState({
					errorUserID: msg
				});
			}
			this.setState({
				errorPwd: msg
			});
			return false;
		}
		return true;
	}

	submitForm(obj){
		console.log("Form can be submitted!!!!!");
		// Below commented code can be used in future to submit logged in data
		// axios.post('/login', {
		//     userId: obj.userId,
		//     password: obj.password
		//   })
		//   .then(function (response) {
		//     console.log("Success callback ", response);
		//   })
		//   .catch(function (error) {
		//     console.log(" error condition ", error);
		//   });
	}

	checkPassword(str){
		const len = str.length;
		let i;
		let isSpecialChar = false;
		let isNumber = false;
		let isUpperCase = false;
		let isLowerCase = false;
		// Check if password is less than 8 character
		if(len < 8){
			const msg = "Password should have minimum of 8 characters";
			this.setState({
				errorPwd: msg
			});
			return false;
		}
		// Check if password is in required format
		for(i = 0 ; i < len ; i++){
			if(str.charCodeAt(i) >= 33 && str.charCodeAt(i) <= 47){
				isSpecialChar = true;
			}
			if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
				isNumber = true;
			}
			if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
				isUpperCase = true;
			}
			if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 121){
				isLowerCase = true;
			}
		}
		if(isSpecialChar && isNumber && isUpperCase && isLowerCase){			
			return true;
		}else{
			const msg = "Password should have at least 1 uppercase, 1 lowercase, 1 number, 1 special character";
			this.setState({
				errorPwd: msg
			});
			return false;
		}
		return false;
	}

	handleClick(ev){
		ev.preventDefault();
		const userIdVal = document.getElementById('userId').value;
		const pwd = document.getElementById('pwd').value;
		let pp = this.isEmptyNull(userIdVal, "User Id");
		let pp1 = this.isEmptyNull(pwd, "Password");		
		if(pp && pp1){
			this.setState({
				errorUserID: '',
				errorPwd: ''
			});
			if(this.checkPassword(pwd)){
				const Obj = {
					userId : userIdVal,
					password : pwd 
				};
				this.submitForm(Obj);
			}
		}
	}

	render(){
		return(
			<div>
				<h2>Login Form</h2>
				<div className="container">
					<div className="form-wrapper">
					  <div className="form-group">
					    <label htmlFor="userId">User Id:</label>
					    <input type="text" className="form-control" id="userId"/>
					    { this.state && this.state.errorUserID ? <span className="error">{this.state.errorUserID}</span> : null }
					  </div>
					  <div className="form-group">
					    <label htmlFor="pwd">Password:</label>
					    <input type="password" maxLength="16" className="form-control" id="pwd" />
					    { this.state && this.state.errorPwd ? <span className="error">{this.state.errorPwd}</span> : null }
					  </div>
					   <button onClick={this.handleClick} className="btn btn-default">Submit</button>
					</div>
				</div>
			</div>
		) 
	}
}