import React, {useContext, useState,useEffect} from 'react';
import {AreaListContext} from '../context/AreaListContext';

const AreaForm = () => {

    const {addArea, editItem, editArea} = useContext(AreaListContext);

    const [title, setTitle] = useState('');

    //se va guardando el estado con el cambio en el input
    const handleChange= e => {
        setTitle(e.target.value);
    };

    //cuando se ingresa el area 
    const handleSubmit = e => {
        e.preventDefault();
        if(editItem===null){
            addArea(title);
            setTitle("");
        }else{
            editArea(title,editItem.id);
        }
    };

    useEffect(()=>{
        if(editItem !== null){
            setTitle(editItem.title);
        } else { setTitle("");}
    },[editItem]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              onChange={handleChange}
              value={title}
              className="task-input"
              placeholder="Añadir Áreas de cocina..."
              required/>
              <div className="buttons">
                  <button type="submit" className="btn add-task-btn">
                  {editItem !==null ? 'Editar' : 'Añadir'}
                  </button>
              </div>
        </form>
    )
}

export default AreaForm
