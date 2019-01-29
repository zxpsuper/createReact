import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="introduce flex y-center x-center">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546084694813&di=198098d59958a7ce5836ea5cfcc63797&imgtype=0&src=http%3A%2F%2Fc.fastcdn.co%2Fu%2F2efb9d47%2F17516396-0-eb967be0-d8bb-11e5-9.png"
          alt=""
          className="homeLogo"
        />
        <span className="title">小皮咖react从零搭建教程</span>
      </div>
    );
  }
}
export default App;
