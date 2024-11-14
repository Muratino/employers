import {Component} from 'react';
import './employers-form.css';

class EmployersForm extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }


    onValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    onInput = () => {
        // const input = document.querySelectorAll('.new-post-label');
        // this.props.inputClick(input);
    }

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit} 
                    >
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValue} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValue} />

                    <button type="submit"
                        className="btn btn-outline-light"
                        // onClick={this.onSubmit}
                        >
                        Добавить
                    </button>
                </form>
            </div>
        )
    }

    // render() {

    //     const {name, salary} = this.state
    //     return (
    //         <div className="app-add-form">
    //             <h3>Добавьте нового сотрудника</h3>
    //             <form
    //                 className="add-form d-flex">
    //                 <input type="text"
    //                     className="form-control new-post-label"
    //                     placeholder="Как его зовут?"
    //                     onChange={this.onValue}
    //                     name='name'
    //                     value={name}/>
    //                 <input type="number"
    //                     className="form-control new-post-label"
    //                     placeholder="З/П в $?" 
    //                     onChange={this.onValue} 
    //                     name='salary'
    //                     value={salary}/>
    //                 <button type="submit"
    //                     className="btn btn-outline-light"
    //                     onClick={this.addUsers}>Добавить</button>
    //             </form>
    //         </div>
    //     );
    // }
};
export default EmployersForm;