import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employerslist from '../employers-list/employers-list';
import EmployersForm from '../employers-form/employers-form';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John C.", salary: 1000, rise: true, id: 1 },
                { name: "Alex M.", salary: 3000, rise: false, id: 2 },
                { name: "Rudy W.", salary: 15000, rise: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        }

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // Первый способ перепеси state
            // const index = data.findIndex(elem => elem.id == id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            // Второй способ перепеси state
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    } 

    addItem = (name, salary) => {
        // input.forEach(item => {
        //     // console.log(item);
        //     if(item.value === ''){
        //         return
        //     } else {
        //     }
        // });
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    // onToggleIncrease = (id) => {
    //     // this.setState(({data}) => {
    //     //     const index = data.findIndex(elem => elem.id === id);

    //     //     const old = data[index];
    //     //     const newItem = {...old, increase: !old.increase};
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //     //     return {
    //     //         data: newArr
    //     //     } 

            
    //     // });
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, increase: !item.increase }
    //             }
    //             return item;
    //         })
    //     }));
    // }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, rise: !item.rise }
    //             }
    //             return item;
    //         })
    //     }));
    // }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }));
    } 


    searchEmp = (items, term) => {
        if (term.length === 0){
            return items
        } 

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });

    }

    onUpdataSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise': 
                return items.filter(item => item.rise);
            case 'more':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }


    onFilterSelect = (filter) => {
        this.setState({filter});
    }   

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                employees={employees}
                increased={increased} ></AppInfo>
                <div className="search-panel">
                    <SearchPanel
                    onUpdataSearch={this.onUpdataSearch}>
                        
                    </SearchPanel>
                    <AppFilter 
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    ></AppFilter>
                </div>
                <Employerslist
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployersForm  
                onAdd={this.addItem}
                // inputClick={this.inputChek} 
                />
            </div>
        );
    }
}



// function App() {

//     const data = [
//         {name: "John C.", salary: 1000, id: 1},
//         {name: "Alex M.", salary: 3000,  id: 2},
//         {name: "Rudy W.", salary: 15000, id: 3}
//     ];

//     return (
//         <div className="app">
//             <AppInfo></AppInfo>
//             <div className="search-panel">
//                 <SearchPanel></SearchPanel>
//                 <AppFilter></AppFilter>
//             </div>
//                 <Employerslist 
//                     data={data}
//                     onDelete={id => console.log(id)}/>
//                 <EmployersForm/>
//         </div>
//     );
// }

export default App;

