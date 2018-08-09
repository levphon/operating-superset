import React from 'react';
import ReactDOM from 'react-dom';
import Pie from "./pie";
import Bar from "./bar";

const data = [
  {value: 2, name: "JavaScript"},
  {value: 1, name: "Java"},
  {value: 1, name: "HTML/CSS"}
]

const container = document.getElementById('pid');
class PieBody extends React.Component{
  render(){
    return(
      <div className="bodyindex">
        <Pie data={data}/>
      </div>
    )
  }
}
ReactDOM.render(<PieBody/>, container);


const container1 = document.getElementById('bar');
class BarBody extends React.Component{
  render(){


    return(
      <div className="bodyindex">
        <Bar data={data}/>
      </div>
    )
  }
}


ReactDOM.render(<BarBody/>, container1);
