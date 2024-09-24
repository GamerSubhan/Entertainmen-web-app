import data from "../../data.json";
import React, {useState, useEffect} from "react";

export default function Recommmended()
{
    const [films, setFilms] = useState([]);

    useEffect(() => {
        if(Array.isArray(data))
        {
            setFilms(data);
        } else {
            console.error("Imported data is not an array: ", data);
        }
    }, []);

    return(
        <>
            <h1 id="recommendationTitle">Recommmended for you</h1>

            <ul className="recommendedList">
                {films.map((film) => {
                    if(film.isTrending === false)
                    {
                        return(
                            <li>
                                <h4 className="recommendedTitle">{film.title}</h4>
                            </li>
                        );
                    }
                })}
            </ul>
        </>
    )
}