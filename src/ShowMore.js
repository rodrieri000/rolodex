import React from 'react';
import './App';
import './App.css';


class ShowMore extends React.Component {
  state = {
    isClicked: false
  }

  handleClick = index => {
    let array = !this.state.isClicked
    this.setState({
      isClicked: array
    })
  }

  render() {
    let isClickedState = this.state.isClicked ? 'More' : 'Less';
    let isClickedButton = this.state.isClicked ? 'Show Less' : 'Show More';
    return (
      <div className="Show-More-Wrapper">
        <div className="Show-More">
          { this.state.isClicked && (
            <div className="Details">
              <p>{this.props.user.email}</p>
              <p>{this.props.user.phone}</p>
              <p>{this.props.user.location.city} {this.props.user.location.state}</p>
              <p>{this.props.user.location.country} {this.props.user.location.postcode}</p>
           
              
            </div>
          )}          
        </div>
        <button class={isClickedState} onClick={ () => this.handleClick(this)}>{isClickedButton}</button>

      </div>
    )
  }
}


export default ShowMore;