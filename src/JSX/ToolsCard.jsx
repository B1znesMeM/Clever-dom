import watchTVVKL from '../Icon-dom/icon-watchTV-VKL.png';
import watchTVVIKL from '../Icon-dom/icon-watchTV-VIKL.png';
import electricKettleVKL from '../Icon-dom/icon-Electric-kettle-VKL.png';
import electricKettleVIKL from '../Icon-dom/icon-Electric-kettle-VIKL.png';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../Styles/Projects-style.scss';

const ToolsCard = ({el , tools, setTools}) => {

    const clickHandler = () => {
    const temp = tools.filter((i) => el.id !== i.id);

    const obj = {
        id: el.id,
        name: el.name,
        img: el.name === 'Телевизор' ?  (el.state ? watchTVVIKL : watchTVVKL) : (el.state ? electricKettleVIKL : electricKettleVKL) ,
        state: !el.state,
    }
    temp.push(obj);
    temp.sort((a,b) => a.id - b.id);
    setTools(temp);


    }

    return(
        <>
        
            <Card style={{widht: '18rem', display: 'flex' , padding: '20px', marginBottom: '20px', backgroundColor: 'whitesmoke'}}>

               <Card.Img src={el.img}/>

                    <Card.Body>

                        <Card.Title className='card-title'>{el.name}</Card.Title>

                        <Card.Text className='card-text'>
                            Нажмите чтобы изменить состояние
                        </Card.Text>

                        <Button className="card-btn" onClick={clickHandler}>{el.state ? 'Выкл' : 'Вкл'}</Button>

                    </Card.Body>

            </Card>

        </>
    )
} 

export default ToolsCard;
