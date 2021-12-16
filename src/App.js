// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'; 
import React, { Component } from 'react';
import  createAction from './redux/actions/action';
import { rotatingSelector } from './rotateSelector';

export class App extends Component {
  state = {
    course:''
  }

  
   handleChange = (e) => {
    this.setState((state) => ({...state.course,course:e.target.value}));
  }
   handleSubmit = (e) => {
     e.preventDefault();
    //  console.log(this.state.course);
    //  console.log(this.props);
     this.props.dispatch(createAction(this.state.course));
  }

  
  
  render() {
  

    return (
      <div>
        <div className='App'>
          <h1>OUR COURSES</h1>            
        </div>
        <div className='App-form'>
          <form action="" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} placeholder='enter your course' />
            <button>Submit</button>
          </form>
          {/* {
          this.props.course &&
          this.props.course.map ((val,index) => <div key = {index}>{val.course}</div> )} */}
        </div>
        <div className="App">
          <ul>
        {
          this.props.course &&
          this.props.course.map ((val,index) => <li key = {index}>{val.course}</li> )}
          </ul>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    course:rotatingSelector(state)
  };
}
export default connect(mapStateToProps) (App);
