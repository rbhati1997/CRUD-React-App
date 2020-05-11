import React from 'react'
import {Form, Button, Table} from 'react-bootstrap';

let getId;

class ModalForm extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      name: "",
      email : "",
      contact_number : "",
      dataArr: []
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.AddDataHandler = this.AddDataHandler.bind(this);
    this.DeleteRow = this.DeleteRow.bind(this);
    this.Edit = this.Edit.bind(this);
    this.UpdateDataHandler = this.UpdateDataHandler.bind(this);

  }

  onChangeHandler(event){
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  AddDataHandler = (event) => {
    let name = this.state.name
    let email = this.state.email
    let contact_number = this.state.contact_number
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!Number(contact_number) && contact_number !== "") {
      alert("Your contact_number must be a number");
    }
    else if(name === ""){
      alert("name field cannot be empty.")
    }
    else if(!pattern.test(email) || email ==="") {
      alert("email format is not coorect.")
    }
    else { 
      var user_dict = {"name":name, "email":email, "contact_number":contact_number}
      var arrInstance = this.state.dataArr;
      arrInstance.push(user_dict)
      this.setState({
        dataArr: arrInstance,
        name: "",
        email: "",
        contact_number: ""
      })
    }
  }

  DeleteRow(event){
    var id = event.target.id;
    var arrInstance = this.state.dataArr;
    arrInstance.splice(id,1)
    this.setState({
      dataArr: arrInstance,
      name: "",
      email:"",
      contact_number:""
    })
  }

  Edit(event){
    getId = event.target.id
    this.setState({
      name: this.state.dataArr[event.target.id].name,
      email: this.state.dataArr[event.target.id].email,
      contact_number: this.state.dataArr[event.target.id].contact_number,
    })
    document.getElementById(getId).style.display = "none";
    document.getElementById("add").style.display = "none";
    document.getElementById("update").style.display = "block";
  }


  UpdateDataHandler(event) {
    var arryInstance = this.state.dataArr;
    arryInstance[getId].name = this.state.name;
    arryInstance[getId].email = this.state.email;
    arryInstance[getId].contact_number = this.state.contact_number;
    this.setState({
      dataArr: arryInstance,
      name: "",
      email:"",
      contact_number:""
    })
    document.getElementById("add").style.display = "block";
    document.getElementById("update").style.display = "none";
    document.getElementById(getId).style.display = "block";


  }


  render() {

    var mapDataArr = this.state.dataArr.map((e, i)=> {
      return (
        <tr>
          <td>{i+1}</td>
          <td>{e.name}</td>
          <td>{e.email}</td>
          <td>{e.contact_number}</td>
          <td>
            <Button variant="success" id={i} onClick={this.Edit}>Edit</Button>
            <Button variant="danger" id={i} onClick={this.DeleteRow}>Delete</Button>
          </td>
        </tr>
        );
    })

    return(
      <>
        <center>
          <form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Name</Form.Label>
              <input type="text" name='name' placeholder="Enter Name" value={this.state.name}  onChange={this.onChangeHandler} />
              <Form.Label>Email address</Form.Label>
              <input type="email" name='email' placeholder="Enter Email" value={this.state.email}  onChange={this.onChangeHandler} />
              <Form.Label>Contact number</Form.Label>
              <input type="text" name='contact_number' placeholder="Enter Contact Number" value={this.state.contact_number}  onChange={this.onChangeHandler} />
            </Form.Group>
            <Button variant="primary" id="add" onClick={this.AddDataHandler} >Add Data</Button>
            <Button variant="primary" id="update" onClick={this.UpdateDataHandler} >Update Data</Button>

          </form>
        </center>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mapDataArr}
          </tbody>
        </Table>

      </>
    )
  }
}




// 
// function ModalForm() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const mySubmitHandler = (event) => {
//     event.preventDefault();
//     alert("You are submitting ");
//   }

//   const myChangeHandler = (event) => {
//     // let nam = event.target.name;
//     // let val = event.target.value;
//     // this.setState({[nam]: val});
//   }

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Add User
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Fill User Detail</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>        
//           <form onSubmit={mySubmitHandler}>
//             <input type="text"  id='name' placeholder="name" />
//             <input type="text"  id='email_id' placeholder="email_id" />
//             <input type="text"  id='contact_number' placeholder="contact number" />
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <input type='submit' value='Add data'/>
//           </Modal.Footer>  
//           </form>
//         </Modal.Body>


//       </Modal>
//     </>
//   );
// }

export default ModalForm