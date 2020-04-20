import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'

export default class Modale extends Component {
    state ={
        show:false,
        title:'',
        year:'',
        rating:0,
        image:''
    }
    handleClose=()=>{
        this.setState({
            show:false
        })
    }
    handleShow=()=>{
        this.setState({
            show:true
        })
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }
    handleAdd=()=>{
        this.props.add({
            title: this.state.title,
            year: this.state.year,
            rating: this.state.rating,
            image: this.state.image
            
        })
        this.setState({
            show:false
        })
        
    }
    render() {
        return (
            <div>
                <>
      <Button variant="primary" onClick={this.handleShow}>
        Add a new movie
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input onChange={this.handleChange} value={this.state.title} type='text' name='title'/>
            <input onChange={this.handleChange} value={this.state.year} type='text' name='year' />
            <input onChange={this.handleChange} value={this.state.rating} type='text' name='rating' />
            <input onChange={this.handleChange} value={this.state.image} type='text' name='image'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.handleAdd}>
           Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
            </div>
        )
    }
}
