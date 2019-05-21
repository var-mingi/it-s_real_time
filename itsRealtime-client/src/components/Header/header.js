import React, { Component } from 'react';
import '../../styles/components/Header/header.css';

class Header extends Component {

  render () {
    return (

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:50}}>
        <a class="navbar-brand" href="/">It's Realtime</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/swipe">Swipe</a>
            </li>
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/">Action</a>
                <a class="dropdown-item" href="/">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/">Something else here</a>
              </div>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="/match">Match</a>
            </li>
          </ul>
          <div class="navbar-nav nav-item my-2 my-lg-0">
            <a class="nav-link" href="/login">logout</a>
          </div>
        </div>
      </nav>      
    );
  }
}

export default Header;