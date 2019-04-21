import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: "",
        password: "",
      },
      classList: ""
    };
  } 


  componentDidMount(){
    // this.classList=this.state.classList;
    console.log("testtest")
    console.log(this.state.user)
  }

  _onSubmit(event){
    console.log('Your email is : ',this.state.user.email);
    console.log('Your password is : ',this.state.user.password);
    event.preventDefault();

    //assume authentication succeeded with id: test@test.com pw: 1234
    this.props.history.push('/');
  }

  _handleInputs(event) {
    let { user } = this.state;
    const Name = event.target.name;
    const Value = event.target.value;
    user[Name] = Value;
  
    this.setState({ user: user });
    console.log(this.state.user)
  }

  _handleLayout(event) {
    const Name = event.target.name;
    console.log(Name);
    if (Name==="signIn"){
      this.setState({classList:""});
    } else {
      this.setState({classList:"right-panel-active"});
      this.classList=this.state.classList;
    }
  }

  _handleSignUp(){
    console.log(this.state.user)
  }
  render() {

    return (
      <div className="App">
        <h2>Welcome to "It's Realtime!!"</h2>
        <h2>Your Destiny Awaits</h2>
        <div className={`container ${this.state.classList}`} style={{marginTop:40}}>
          <div className="form-container sign-up-container">
            {/* it was form but changed to div because of rendering issues */}
            <div className="sign-up-validation">
              <h1>Create Account</h1>
              <span>use your email for registration</span>
              <input type="text" placeholder="Name" onChange={(e) => {this._handleInputs(e)}} name="name" />
              <input type="email" placeholder="Email" onChange={(e) => {this._handleInputs(e)}} name="email" />
              <input type="password" placeholder="Password" onChange={(e) => {this._handleInputs(e)}} name="password" />
              <button onClick={()=>this._handleSignUp()}>Sign Up</button>
            </div>
          </div>
          <div className="form-container sign-in-container">
            <form action="#" onSubmit={(event) => {this._onSubmit(event)}} >
              <h1>Sign in</h1>
              <div className="social-container">
                {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
              </div>
              <span>use your account</span>
              <input type="email" placeholder="Email" onChange={(e) => {this._handleInputs(e)}} name="email" />
              <input type="password" placeholder="Password" onChange={(e) => {this._handleInputs(e)}} name="password"/>
              {/* <a href="#">Forgot your password?</a> */}
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn" onClick={(e)=>{this._handleLayout(e)}} name="signIn">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" onClick={(e)=>{this._handleLayout(e)}} name="signUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
