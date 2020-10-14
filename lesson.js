class InputTest extends React.Component {
    constructor() {
    super();
    this.state = {
      testText: "",
      checked:false
    }
  }
  handleChange = event =>{
    let value = event.target.value
    this.setState({testText: value})
  }
  handelCheck = event =>{
    let bool = event.target.checked
    this.setState({checked: bool })
  }
  chengeVal = () =>{
    this.setState({testText: "Something else"})
  }
  alertText = () =>{
    alert(this.state.testText)
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.testText} onChange={this.handleChange} />
        <input type="checkbox" checked={this.state.checked} onChange={this.handelCheck}/>
        <button onClick={this.alertText}>Alert</button>
        <button onClick={this.chengeVal}>Change</button>
      </div>
    )
  }
}

ReactDOM.render(<InputTest />, document.getElementById("container"))
