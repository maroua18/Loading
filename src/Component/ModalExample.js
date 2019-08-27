import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      rating:'',
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handlechange=(event)=>{
    this.setState({[event.target.name]:event.target.value})

  }

  render() {
    return (
      <div className="modal-container">
      
        <Button className="plus" color="danger" onClick={this.toggle} value="+"><strong>+</strong>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add new movie</ModalHeader>
          <ModalBody>
            title:  <input name="title" type="text" placeholder="new movie name...." className="input-add-movie" onChange={this.handlechange}/>
            rating: <input name="rating" type="text" placeholder="new movierating...." className="input-add-movie" onChange={this.handlechange}/> 
               
          </ModalBody><br/>
          <ModalFooter>
            <Button color="primary" className="add-btn" onClick={()=> this.props.add(this.state.title,this.state.rating)} >validate</Button>{' '} 
            <Button color="secondary" className="add-btn" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
     
    );
  }
}

export default ModalExample;
 