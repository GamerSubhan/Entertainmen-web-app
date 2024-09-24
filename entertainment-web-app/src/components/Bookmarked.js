import { useNavigate } from 'react-router-dom';

export default function Bookmarked()
{
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }

    return(
        <h1 onClick={goBack}>Boookmarked movies/series</h1>
    );
}