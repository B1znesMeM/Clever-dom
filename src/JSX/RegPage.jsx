import {useNavigate} from 'react-router-dom';
import '../Styles/reset.css';
import '../Styles/RegPage-style.scss';



function RegPage({ setUser }){

    const navigate = useNavigate();

    const regHandler = (e) => {
        e.preventDefault()
        setUser({name: e.target[0].value})
        navigate('/')
    }

    return(
        <>
        
        <form onSubmit={regHandler} className='reg'>

            <h1 className='reg-h1'>Регистрация</h1>
            <input type='text' className='reg-input' placeholder='Введите логин'/>

            <div className='button'>

            <button className='reg-btn'>Регистрация</button>

            </div>


        </form>

        </>
    )
}

export default RegPage;