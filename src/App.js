import React from 'react';

//App.js就是定义了一个react组件
class App extends React.Component {
  handleclick() {
    alert('aaaaaaaaa')
  }
  render() {
    return (
      // jsx语法
      <div>
        <div>
          <div>
            <input type="text" />
            <button onClick={this.handleclick}>add</button>
          </div>
          <ul>
            <li>chinese</li>
            <li>english</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;