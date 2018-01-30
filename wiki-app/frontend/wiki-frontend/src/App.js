import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import {
  Grid,
  PageHeader,
  MenuItem,
  NavItem,
  Nav,
  NavDropdown
} from 'react-bootstrap'
import NewPage from './pages/NewPage';
import Pages from './pages/Pages';
import Navigation from './pages/Navigation';
import CurrentPage from './pages/CurrentPage';

const API = 'http://localhost:3000'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: null,
            pages: [],
            newPageSuccess: false
        }
    }

    componentWillMount() {
        this.handleGetPages()
    }

    handleGetPages() {
        fetch(`${API}/pages`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                this.setState({pages: resp.pages})
            })
    }

handleNewPage(params){
    fetch(`${API}/pages`,
      {
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then((resp) => {
      return resp.json()
    })
    .then((resp) => {
      if(resp.errors){
        this.setState({errors: resp.errors})
      } else {
        const { pages } = this.state
        pages.push(resp.page)
        this.setState({
          pages: pages,
          errors: null,
          newPageSuccess: true
        })
      }
    })
  }

  render() {
    return (
        <div>
      <Navigation />
      <Router>
       <div>
         <Route exact path="/" render={props => (
           <Grid>
             <PageHeader>
                Wiki
               <small className='subtitle'>Add a Page</small>
             </PageHeader>
           </Grid>
         )} />

         <Route exact path="/newpage" render={props => (
           <Grid>
             <PageHeader>
                Wiki
               <small className='subtitle'>Add a Page</small>
             </PageHeader>
             <NewPage onSubmit={this.handleNewPage.bind(this)}/>
             {this.state.newPageSuccess &&
                 <Redirect to="/pages" />
             }
           </Grid>

       )} />

       <Route exact path="/pages" render={props => (
         <Grid>
           <PageHeader>
              List of pages
             <small className='subtitle'>Add a Page</small>
           </PageHeader>
           <Pages pages={this.state.pages}/>
         </Grid>
       )} />

       <Route exact path="/pages/:id" component={CurrentPage} render={props => (
         <Grid>
           <PageHeader>
              List of pages
             <small className='subtitle'>Add a Page</small>
           </PageHeader>
           <Pages pages={this.state.pages}/>
         </Grid>
       )} />
       </div>
     </Router>
     </div>
    )
  }
}

export default App;
