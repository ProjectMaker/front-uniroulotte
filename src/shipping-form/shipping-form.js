import React, { Component } from 'react'
import withStyle from './with-style'

class FileUploader extends Component {
  state = {
    name: 'toot'
  }

  render() {
    return (<p>{this.state.name}</p>)
  }
}
const ShippingForm = ({onChange, fields, onValid, sendingInProgress}) => {
  return (
    <div>
      <div>
        <input name="lastname" onChange={onChange}/>
        {fields.lastname.error ?
          <span className="error" id="lastnameError">Not blanck</span>
        : null}
      </div>
      <div>
        <input name="firstname" />
      </div>
      <div>
        <button disabled={sendingInProgress} onClick={onValid}/>
      </div>
    </div>
  )
}

// export default withStyle({root: { border: '1px' } })(ShippingForm)
export default ShippingForm
export { FileUploader }
