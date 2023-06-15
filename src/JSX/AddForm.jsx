import { Placeholder } from 'react-bootstrap';
import watchTVVIKL from '../Icon-dom/icon-watchTV-VIKL.png';

function AddForm( {tools, setTools, setAdd} ) {
    const subHandler = (e) => {
        e.preventDefault();
        setAdd(false);

        const obj = {
            id: tools.length + 1,
            name: e.target[0].value,
            img: watchTVVIKL,
            state: false,
        }
        setTools([...tools, obj]);
    }

    return(
        <form onSubmit={subHandler}>
            <input type='text'className='addform-input' placeholder='Введите новый предмет'/>

            <button className='addform-btn'>Добавить</button>
        </form>
    )
}

export default AddForm
