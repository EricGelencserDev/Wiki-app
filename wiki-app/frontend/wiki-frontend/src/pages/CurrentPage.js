import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {
  Grid,
  PageHeader,
  MenuItem,
  NavItem,
  Nav,
  NavDropdown
} from 'react-bootstrap'

const API = 'http://localhost:3000'

class CurrentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: []
        }
    }

    componentWillMount() {
        fetch(`${API}/pages/${this.props.match.params.id}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                this.setState({page: resp.page})
            })
    }


    render(){
    var id = this.props.match.params.id
    const { name, content, createdAt, updatedAt } = this.state.page
        return(
            <div>
            <h1>Title: {name}</h1>
            <h3>Content: <br />{content}</h3>
            <h3>Created at: {createdAt}</h3>
            <h3>Last updated: {updatedAt}</h3>
            </div>
        );
    }
}

export default CurrentPage
