
import watchTVVIKL from '../Icon-dom/icon-watchTV-VIKL.png';
import electricKettleVIKL from '../Icon-dom/icon-watchTV-VIKL.png';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddForm from './AddForm';
import ToolsCard from './ToolsCard';
import '../Styles/Projects-style.scss';

function Projects() {

    const [tools, setTools] = useState([
        {id: 1 , name: 'Телевизор' , img: watchTVVIKL, state: false},
        {id: 2 , name: 'Электрический чайник' , img: electricKettleVIKL, state: false},
    ])

    const [add, setAdd] = useState(false);
    const regHandler = () => {
        setAdd(true);
    }
    return(
        <>

        <h1 className='projects-h1'>Проекты</h1>

        {add ? null : <Button onClick={regHandler} style={{ backgroundColor: 'black' ,color: 'white', padding: '12px 20px' , border: 'none', marginBottom: '5vh'}}>Добавить</Button>}

        {add ? <AddForm tools={tools} setTools={setTools} setAdd={setAdd} /> : <div>
            {tools.map((el) => {
         return <ToolsCard key={el.id} el={el} setTools={setTools} tools={tools} />
    })}
</div>}
        
        </>
    )
}

export default Projects;