import React from 'react';
import { Navbar} from 'react-bootstrap';

class Header extends React.Component {
	render() {
		return (
			<>
			  <Navbar bg="dark" variant="dark">
			  	<center>
			    <Navbar.Brand href="#home">Fill User Detail</Navbar.Brand>
			    </center>
			  </Navbar>
			</>
			)
	}
}

export default Header;