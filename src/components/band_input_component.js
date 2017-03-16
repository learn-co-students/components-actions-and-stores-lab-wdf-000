// import React, { Component } from 'react'
// class BandInputComponent extends Component {
//   render(
//     return(
//       <div>hello</div>
//     )
//   )
// }

import React from 'react';
import BandIndex  from './band_index_component';

export default class BandInput extends React.Component {

  handleBandShow(){
    if (this.props.store) {
      return this.props.store.getState().map((band, i) => <BandIndex key={i} band={band} />)
    }
  }

  onSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({type: 'ADD_BAND', payload: {title: event.target.children[1].value}})
    event.target.children[1].value = ''
  }

  render(){
    return(
      <div>
        <br/>

        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Enter Band: </label>
          <input />
          <button type="submit">Submit</button>
        </form>

        <h1>Bands</h1>
        <ul>
          {this.handleBandShow()}
        </ul>


      </div>
    )
  }
}
