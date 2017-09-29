import React from 'react';
import Panel from './../chartComponents/common/Panel';
import PanelHeader from './../chartComponents/common/PanelHeader';

const Assets = (props) => {
  const assets = props.build[3].assets;
  const property = [];
  for (let i = 0; i < assets.length; i += 1) {
    const name = assets[i].name;
    const size = assets[i].size;
    const key = i;
    property.push({ name, size, key });
  }
  const nameSize = property.map(properties => {
    return (
      <li>
        <div key={properties.key} className="col-sm-4"> 
          {properties.name}
          </div>
          <div key={properties.key + 1000} className="col-sm-4"> 
            {properties.size}
            </div>
            </li>
            )
          })
  // const sizes = property.map(size => <li key={size.key}>{size.size}</li>);

  return (
    <div>
      <Panel>
        <PanelHeader title="Assets" />
          <ul>
            {nameSize}
          </ul>
      </Panel>
    </div>
  );
};


export default Assets;