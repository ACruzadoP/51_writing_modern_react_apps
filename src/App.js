import React, {Component} from "react"

class App extends Component {
    // Actually, there is no longer need to use the constructor at all
    state = {
        firstName: ""
    }
    
    // Change to use arrow functions so that there is no need to bind methods in the constructor
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        type="text"
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.handleChange} 
                        placeholder="First Name"
                    />
                </form>
                <h1>{this.state.firstName}</h1>
            </main>
        )
    }
}

export default App


