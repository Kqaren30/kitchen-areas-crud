import React, {useContext} from 'react'
import {AreaListContext} from '../context/AreaListContext';
import Area from './Area';

const AreaList = () => {
    
    const {areas} = useContext(AreaListContext);
    
    return (

        <div>
            {areas.length ? (
                <ul className="list">
                {areas.map((area)=>{
                    return <Area area={area} key={area.id}/>
                })}
                </ul>
            ):(
                <div className="no-tasks">Por ahora no hay ningún área de cocina agregada</div>
            )}
           
        </div>
    )
}

export default AreaList
