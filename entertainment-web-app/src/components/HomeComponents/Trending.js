import data from "../../data.json";
import React, {useEffect, useState} from "react";

export default function Trending() {
    const [films, setFilms] = useState([]);
    
    useEffect(() => {
        if (Array.isArray(data)) {
            setFilms(data);
        } else {
            console.error("Imported data is not an array: ", data);
        }
    }, []);

    return (
        <div>
            <ul className="trendingList">
                {films.map((film) => {
                    if (film.isTrending === true) {
                        console.log(film.thumbnail.trending.large);
                        return (
                            <li className="trending" key={film.title}>
                                <h1 style={{color: "white"}}>{film.title}</h1>
                                
                            </li>
                        );
                    } else {
                        return null;
                    }
                })}
            </ul>
        </div>
    );
}
