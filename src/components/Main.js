require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';

let imageDatas=require("../data/imageDatas.json");

imageDatas=(function(imageDataArray){
  for(let i=0,j=imageDataArray.length;i<j;i++){
    imageDataArray[i].imgUrl=require('../images/'+imageDataArray[i].fileName);
  }
  return imageDataArray;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
        <section className="stage">
            <section className="img-sec"></section>
            <nav className="controller-nav"></nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
