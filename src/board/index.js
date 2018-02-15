import React from 'react';
import './style.scss';

export default class Board extends React.Component {

  render() {
    return (
    <div className="board">
    <div className="history" onClick={this.props.showhisto}>
      \/
      </div>
      <div className="LineBoard"> 
        <button onClick={() => { this.props.click('mc',false) }} className="operator">MC</button>
        <button onClick={() => { this.props.click('mr',false)}} className="operator">MR</button>      
        <button onClick={() => { this.props.click('ms',false)}} className="operator">MS</button>       
        <button onClick={() => { this.props.click('m+',false)}} className="operator">M+</button> 

      </div>
      <div className="LineBoard"> 
        <button onClick={() => { this.props.click('c',false) }} className="operator">C</button>
        <button onClick={() => { this.props.click('/',false)}} className="operator">/</button>      
        <button onClick={() => { this.props.click('X',false)}} className="operator">X</button>       
        <button onClick={() => { this.props.click('B',false)}} className="operator">?</button> 

      </div>
      <div className="LineBoard">
        <button onClick={() => { this.props.click('7',true)}}>7</button>        
        <button onClick={() => { this.props.click('8',true)}}>8</button>
        <button onClick={() => { this.props.click('9',true)}}>9</button>
        <button onClick={() => { this.props.click('-',false)}} className="operator">-</button>
      </div>

      <div className="LineBoard">
        <button onClick={() => { this.props.click('4',true)}}>4</button>        
        <button onClick={() => { this.props.click('5',true)}}>5</button>
        <button onClick={() => { this.props.click('6',true)}}>6</button>      
        <button onClick={() => { this.props.click('+',false)}} className="operator">+</button>
      </div>

      <div className="LineBoard">
        <button onClick={() => { this.props.click('1',true)}}>1</button>        
        <button onClick={() => { this.props.click('2',true)}}>2</button>
        <button onClick={() => { this.props.click('3',true)}}>3</button>
        <button onClick={() => { this.props.click('( )',false)}} className="operator"></button>
      </div>

      <div className="LineBoard">
        <button onClick={() => { this.props.click('0',true)}}>0</button>        
        <button onClick={() => { this.props.click('D',true)}}>.</button>
        <button onClick={() => { this.props.click('+/-',false)}}></button>
        <button onClick={() => { this.props.click('=',false)}} className="same">=</button>
      </div>
    </div>
    )
  }
} 
