import React from 'react';
import { NavLink } from 'react-router-dom';
import { Clock } from './Clock';

export function NavBar(props) {
  // console.log('NavBar props.currentUser', props.currentUser);
  const { currentUser } = props;
  return (
    <nav className="NavBar">
      <Clock />
      <NavLink exact to="/">
        Welcome
      </NavLink>
      {/* To conditionally render in React, you can use a ternary operator */}
      {currentUser ? (
        <React.Fragment>
          {/* <-- this is a react fragment that allows you to write 
          multiple components beside each other without wrapping them in a div or some 
          other container. This is so that it doesn't mess up styling/formatting/layout
          And so you don't need to have an arbitrary html element in your NavBar
          The short form for <React.Fragment></React.Fragment> is <></>
        */}
          <span>{currentUser.full_name}</span>
          <NavLink exact to="/questions/new">
            Ask
          </NavLink>
          <NavLink exact to="/questions">
            Questions
          </NavLink>
        </React.Fragment>
      ) : (
        <NavLink exact to="/sign_in">
          Sign In
        </NavLink>
      )}
    </nav>
  );
}
