import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
class App extends Component {
    constructor(props){
        super(props);
      this.state={  query: '' }
    }
    search(){
        console.log('this state', this.state);
    }
    render(){
        return(
              <div>
               <div className="App container">
                   <h3>Music Artist</h3>
                   <FormGroup>
                       <InputGroup>
                       <FormControl type="text"  placeholder="Search" value={this.state.query}
                       onChange={event =>{this.setState({query:event.target.value})}} 
                       onKeyPress={event =>{
                           if(event.key === 'Enter'){
                             this.search() 
                           }
                       }} /> 
                       <InputGroup.Addon onClick={() => this.search()}>
                       <Glyphicon glyph="search"></Glyphicon>
                       </InputGroup.Addon>
                       </InputGroup>
                   </FormGroup>
                   <div className="profile">
                       <div>Pic</div>
                       <div>A.Name</div>
                       </div>
                       <div className="Gallery">
                           Gallery
                           </div>
                   </div>
                  </div>  
        )
    }
}

module.exports = App;