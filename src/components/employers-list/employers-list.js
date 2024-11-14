import Employerslistitem from "../employers-list-item/employers-list-item";
import './employers-lest.css';


const Employerslist = ({data, onDelete, onToggleProp}) => {

    const elem = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Employerslistitem 
            key={id}
            {...itemProps}
            onDelete={()=> onDelete(id)}
            onToggleProp={(e)=> onToggleProp(id, e.currentTarget.dataset.toggle)}/> // e.currentTarget.getAttribute('data-toggle')
            // name={item.name} salary={item.salary}  
        );
        
    });

    return (
        <ul className="app-list list-group">
            {elem}
        </ul>
    );
};

export default Employerslist;