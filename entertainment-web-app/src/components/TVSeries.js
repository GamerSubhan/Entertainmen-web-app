import { useNavigate } from 'react-router-dom';

export default function TVSeries()
{
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }
    return(
        <h1 onClick={goBack}>TV Series</h1>
    );
}