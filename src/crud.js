import React, {Component} from 'react'
import Header from './header.js'
import ModalForm from './modalform.js'

class Crud extends Component {
    render(){
        return (
        		<>
        			<Header />        	
        			<ModalForm />
        		</>
        	)
    }
}

export default Crud;