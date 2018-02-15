import React from 'react';
import './style.scss';

export default class Window extends React.Component {
  history = () => {
    let print=[];
    if(this.props.state.showhistory==1){
      for(let i=0;i<this.props.state.history.length;i++){
        print.push(`   ${this.props.state.history[i][0]}
                    ${this.props.state.history[i][1]}
                    ${this.props.state.history[i][2]}
                    =
                    ${this.props.state.history[i][3]}
                    ~~~~`)
      }
      console.log(print);
      return print;
    }
  }

  render() {
    return (
      <div className="screen">
        {this.history()}
      <div className="numero">
        {this.props.shownumber(this.props.state.number1)}
        <span className="operator">
        {this.props.state.operator}
        </span>
        {this.props.shownumber(this.props.state.number2)}
      </div>
      <div className="result"> 
        {this.props.shownumber(this.props.state.result.toString())}
      </div>
      </div>

    )
  }
}