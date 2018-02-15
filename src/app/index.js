import React from 'react';
import './style.scss';
import Board from '../board';
import Window from '../window';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number1: '',
      operator: '',
      number2: '',
      result: '',
      same: '',
      history: [],
      showhistory: 0,
      m:'',
    }
  }
  changeToNumber = (a) => {
    if (this.state.operator == 0) {
      if (this.state.number1 != '') {
        const number1 = this.state.number1 + a;
        this.setState({ number1 })
      } else {
        const number1 = a;
        this.setState({ number1 })
      }
    } else {
      if (this.state.number2 != '') {
        const number2 = this.state.number2 + a;
        this.setState({ number2 })
      } else {
        const number2 = a;
        this.setState({ number2 })
      }
    }
  }

  calculateOperation = () => {
    let op1 = parseFloat(this.state.number1);
    let op2 = parseFloat(this.state.number2);

    if (this.state.operator == '+') {
      this.state.result = op1 + op2;
    }
    if (this.state.operator == '-') {
      this.state.result = op1 - op2;
    }
    if (this.state.operator == 'X') {
      this.state.result = op1 * op2;
    }
    if (this.state.operator == '/') {
      this.state.result = op1 / op2;
    }
    let calculate= [];
    calculate=[this.state.number1,
      this.state.operator,
      this.state.number2,
      Intl.NumberFormat("de-DE").format(this.state.result),]
    this.state.history.push(calculate)
  }

  deleteall = () => {
    this.setState({ same: '', number1: '', number2: '', result: '', operator: '',showhistory:0 })
  }

  deleteone = () => {
    if (this.state.number2 != '') {
      let aux = [];
      const number2 = this.state.number2;
      for (let i = 0; i < number2.length; i++) {
        aux.push(number2[i]);
      }
      aux.pop();
      this.setState({ number2: aux })
    } else {
      if (this.state.operator != '') {
        const operator = '';
        this.setState({ operator })
      } else {
        if (this.state.number1 != '') {
          let aux = [];
          const number1 = this.state.number1;
          for (let i = 0; i < number1.length; i++) {
            aux.push(number1[i]);
          }
          aux.pop();
          this.setState({ number1: aux })
        }
      }
    }
  }
  decimal = () =>{
    if(this.state.number2!=''){
      this.state.number2=this.state.number2+'.';
    }else{
      this.state.number1=this.state.number1+'.';
      console.log(this.state.number1)
    }
  }
  memory = (a) =>{
    if(a=="mc"){
      this.setState({ m: ''})
    }
    if(a=="ms"){
      if(this.state.result==''){
        this.setState({ m: this.state.number1})  
      }else{
      this.setState({ m: this.state.result})
      }
    }

    if(a=="m+"){
      if(this.state.result==''){
        this.setState({ number2: this.state.m,operator:'+'})  
      }else{
      this.setState({ number1: this.state.result,number2: this.state.m,operator:'+'})
      }
      this.calculateOperation();
      this.setState({ same: '=' })
    }

    if(a=="mr"){
      if(this.state.number1==''){
        this.setState({ number1: this.state.m})
      }else{
      if((this.state.number2=='')&&(this.state.operator!='')){
        this.setState({ number2: this.state.m})
      }
      }
    }
    

  }
  click = (a, b) => {

    if(this.state.result!=''){
      this.deleteall();
    }
    if (b) {
      if (a == 'D') {
        this.decimal();
      }else{
      this.changeToNumber(a);
      }
    } else {
        this.state.decimal = false;
      if (a == '=') {
        this.calculateOperation();
        this.setState({ same: a })
      } else {
        if (a == 'c') {
          this.deleteall();
        } else {
          if (a == 'B') {
            this.deleteone();
          } else {
            if((a=='mc')||(a=='mr')||(a=='ms')||(a=='m+')){
              this.memory(a);  
            }
            if (!((a=='mc')||(a=='mr')||(a=='ms')||(a=='m+'))){
            this.setState({ operator: a })
            }
          }
        }
      }
    }
  }

  shownumber = (a) => {
    let element = [];
    let aux = [];
    let rest = [];
    let cont = 0;
    let intpart = [];
    let dec = [];
    let j = 0;
    let point = -1;
    if(a!=''){
    a=Intl.NumberFormat("de-DE").format(a);
    }
    console.log(a);
   
    return a;
  }
  
  showhisto = () => {
    const showhistory=1;
    this.setState({showhistory})
  }

  render() {
    return (
      <div className="app">
        {<Window deleteall={this.deleteall} state={this.state} shownumber={this.shownumber} />}
        {<Board click={this.click} showhisto={this.showhisto} className="board"/>}
      </div>
    )
  }
}