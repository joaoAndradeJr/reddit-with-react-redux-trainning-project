import React from 'react';

class SelectSubReddits extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    this.setState({
      selectValue: target.value,
    });
  }

  render() {
    const { selectValue } = this.state;
    return (
      <main>
        <h2>Selected: { selectValue }</h2>
        <select value={ selectValue } onChange={ (event) => this.handleChange(event.target) }>
          <option value="">Select</option>
          <option value="frontend">frontend</option>
          <option value="reactjs">reactjs</option>
        </select>
      </main>
    );
  }
}

export default SelectSubReddits;
