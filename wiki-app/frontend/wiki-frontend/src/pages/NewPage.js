import React, { Component } from 'react';
import {
  Button,
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Row
} from 'react-bootstrap'

class NewPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        content: '',
      }
    }
  }

  handleChange(event){
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  handleSubmit(){
    this.props.onSubmit(this.state.form)
  }

  render() {
    const { name, content } = this.state.form

    return (
      <form>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="name">Name</ControlLabel>
              <FormControl
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="content">Content</ControlLabel>
              <FormControl
                type="text"
                name="content"
                value={content}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>


        <Row>
          <Col xs={6}>
            <Button
              onClick={this.handleSubmit.bind(this)}
            id="submit">Create New Page</Button>
          </Col>
        </Row>

      </form>
    )
  }
}

export default NewPage
