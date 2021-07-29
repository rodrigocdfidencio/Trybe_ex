import React from 'react';

class Forms extends React.Component{
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            name: '',
            email: '',
            cpf: 0,
        }
    }

    handleChange(event) {
        this.setState({name: event.target.value})
    }

    render() {
       return(
           <fieldset>
               <h1>Formulário</h1>
               <div className="container"> 
               Nome: <input type="name"  name="name" value={this.state.name} maxLength='40' required onChange={this.changeHandler} />
               Email: <input type="email"  name="email" maxLength='50' required onChange={this.changeHandler} />
               CPF: <input type="number"  name="cpf" maxLength='11' required onChange={this.changeHandler} />
            </div>
           </fieldset>
               
        
         
        
    ) 
    }
    
}

export default Forms