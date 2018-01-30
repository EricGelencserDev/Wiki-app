import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class Pages extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <ListGroup>
            {this.props.pages.map((page, i) => {
              return (
                <ListGroupItem
                  key={i}
                  header={
                    <a href={`http://localhost:3001/pages/${i + 1}`}>
                    <h4>
                      <span className='page'>
                        Title: {page.name}
                      </span> <br />
                       <small className='page'> Content: {page.content}</small>
                    </h4>
                    </a>
                  }>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default Pages
