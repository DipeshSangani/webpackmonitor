import React from 'react';
import Modules from './Modules';
import Assets from './Assets';
import Errors from './Errors';
import Cards from './../chartComponents/cards/Cards'


const Dashboard = (props) => {
  // need to pass default props
  // const id = props.match.params.buildid;
  return (
    <div className="container">
      {/* <h1 className="bg">Dashboard for </h1> */}
      <Cards build={props.build} activeBuild={props.activeBuild} />
      <Assets build={props.build}/>
      <Errors build={props.build}/>
      <Modules build={props.build}/>
    </div>
  );
};


export default Dashboard;