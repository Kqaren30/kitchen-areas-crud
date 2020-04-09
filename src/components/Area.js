import React,{useContext} from 'react';
import {AreaListContext} from '../context/AreaListContext';

const Area = ({area}) => {

    const  {removeArea, findItem}=useContext(AreaListContext);

    return (
        <li className="list-item">
            <span>{area.title}</span>
            <div>
                <button onClick={()=> removeArea(area.id)} 
                className="btn-delete task-btn">
                <i className="fas fa-trash-alt"></i>
                </button>
                <button onClick={()=>findItem(area.id)} className="btn-edit task-btn">
                <i className="fas fa-pencil-alt"></i>
                </button>
            </div>
        </li>
    )
}

export default Area
