import "bootstrap/dist/css/bootstrap.css"; 
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Button from "react-bootstrap/Button"; 
import { Component } from "react"; 
import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";
import { propTypes } from "react-bootstrap/esm/Image";

class Form extends Component {
    


    constructor(props){

        super(props);
         // Setting up state 
        this.state ={
        UserInput:"",
        list:[],

    };
}

//change the value of the set with the new value

UpdateInput(Value){
    this.setState({
        UserInput:Value,
        
    });
}
addItem() { 
    if (this.state.UserInput !== "") { 
        const UserInput = { 
            // Add a random id which is used to delete 
            id: Math.random(), 
  
            // Add a user value to list 
            value: this.state.UserInput, 
        }; 
  
        // Update list 
        const list = [...this.state.list]; 
        list.push(UserInput); 
  
        // reset state 
        this.setState({ 
            list, 
            UserInput: "", 
        }); 
    } 
  }

  deleteItem(key){

   const list=[...this.state.list];

    const updatelist= list.filter((item)=>item.id !== key);

    this.setState({
        list:updatelist,
    });

  }
 
  EditItem = (index) => {
    const todo=[...this.state.list];

    const EditToDo=prompt('Edit Your Task');

    if(EditToDo !== null && EditToDo.trim() !==''){

        let updateToDo=[...todo]
        updateToDo[index].value=EditToDo

        this.setState({
            list : updateToDo,

        });

        

    }
  }


  

render(){
    return(<>
        <Container>
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                <input   type="text" value={this.state.UserInput} onChange={(item)=>this.UpdateInput(item.target.value)} placeholder="Add Your Task"/>
                    <Row>
                    
                        
                        <Col>
                            <Button onClick={() => this.addItem()} type="button" className="btn btn-info add-new">< i class="bi bi-plus"></i> Add New</Button>
                            </Col>
                   </Row>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((item, index) => {
                        return ( 
                              
                            <tr key = {index}>
                            <td>{item.value}</td>
                            
                            <td>
                              
                                
                                <a className="edit" title="Edit" data-toggle="tooltip" onClick={()=>this.EditItem(index)}><i class="bi bi-pen"></i></a>
                                <a className="delete" title="Delete" data-toggle="tooltip" onClick={()=>this.deleteItem(item.id)}><i class="bi bi-trash"></i></a>
                                
                            </td>
                        </tr>
                        
                        );

                        })}
                        
                        
                             
                    </tbody>
                </table>
            </div>
        </div>
    </Container> 
         </>)
}
}


export default Form