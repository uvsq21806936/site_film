import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'
import { ListGroup,Navbar,Nav,Button} from 'react-bootstrap'

const FilmOrdonee = () => {
  const Location = useLocation()
  console.log(Location)
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr&page=1"
    )
      .then(res => { return res.json() })
      .then((res) => {
        setData(res.results);
      });
  });
    return (
      <div >
        <Navbar bg="light" variant="dark">
          <h7 className="Couleur">
            SiteFilm
          </h7>
          <br />
          <Nav.Link href="/search/multi">Recherche</Nav.Link>
          </Navbar>
        <br />
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
                      <img width="400" src={"https://image.tmdb.org/t/p/w500/" + film.backdrop_path} alt={"Image de film " + film.title} ></img>
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
      </div >
    );
};

export default FilmOrdonee;