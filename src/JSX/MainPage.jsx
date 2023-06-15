import React ,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/MainPage-style.scss';

function MainPage( { user } ) {
const navigate = useNavigate();

useEffect(() => {
    if (!user.name)
    navigate('/reg')
} , [])

return (
    <>
    <div className='main'>

        <div className='container'>

        <h1 className='main-h1'>Главная страница</h1>

        <div className='main-p'>Здравствуйте, {user.name}</div>
        
        <button className="main-btn" onClick={() => {
            toast('✔ Cheers!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }}>Magic</button>

        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />

        </div>

    </div>


    </>
)
}

export default MainPage;