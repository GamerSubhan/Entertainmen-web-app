import { useNavigate } from 'react-router-dom';

export default function Movies()
{
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    }
    
    return(
        <h1 onClick={goBack}>Movies</h1>
    );
}