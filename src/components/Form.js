import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        form
      </div>
    );
  }
}

Form.propsType = {
  formId: React.PropTypes.number
};

export default Form;

