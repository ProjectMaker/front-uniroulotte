import React, {Component} from 'react'

export default (styles) => {
  return (WrappedComponent) => {
    return class extends Component {
       render() {
         return <WrappedComponent {...this.props} classes={styles} />
       }
    }
  }
}
