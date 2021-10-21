import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {ListGroup,Button} from 'react-bootstrap'

import '../App.css'

const FilmRecherche = (props) => {
  const titre = props.title
  const Location = useLocation()
  console.log(Location)
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/multi?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr&query=" + titre + "&page=1&include_adult=false"
    )
      .then(res => { return res.json() })
      .then((res) => {
        setData(res.results);
      });
  });
  return (
    <div>
      
      <ListGroup>
        {data.map(film => {
          return (
            <div>
              {console.log(film)}
              <ListGroup.Item>
                <ListGroup horizontal>
                  <ListGroup.Item className="Taille">
                    {film.title}
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <img src={"https://image.tmdb.org/t/p/w500/" + film.backdrop_path} alt={"Image de film " +film.title} ></img>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to={"/Movie/" + film.id}>
                      <Button variant="outline-success">Voir détail</Button>
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </div>
          )
        }
        )}
      </ListGroup>
    </div>
  );
};

export default FilmRecherche;