import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from './actions'

class App extends Component {
  render() {
    return (
      <div>
        // this.props.propsValue本质就是一个从store中拿来的值(state)
        <input type='text' value={this.props.propsValue} onChange={this.changeHandle.bind(this)} ref="input"/>
        
        <div>
          <br/>这是输入框绑定的：{this.props.propsValue}
        </div>
      </div>
    );
  }
  changeHandle(){
    const node = ReactDOM.findDOMNode(this.refs.input);
    const value = node.value.trim();

    this.props.change(value);   // 调用了action方法、
  }
}

function mapStateToProps(state) {
  return {
    propsValue: state.value    // 从store中拿出的数据/值
  }
}

//将state(进)的指定值映射在props上，将action的方法(出)映射在props上
export default connect(
  mapStateToProps,  //将state绑定到组件属性
  action  //将action方法绑定到了组件属性
)(App);