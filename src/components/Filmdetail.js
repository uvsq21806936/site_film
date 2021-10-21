import React from 'react';
import { useEffect, useState } from 'react';
import {ListGroup} from 'react-bootstrap'

const Filmdetail = (props) => {
  //const Location=useLocation()
  console.log(Location)
  const [data, setData] = useState();
  const id = props.match.params.ID
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr"
    )
      .then(res => { return res.json() })
      .then((res) => {
        console.log(res);
        setData(res);
      });
  });
  if (data !== undefined) {
    return (
      <div>
        <ListGroup.Item>
          <ListGroup horizontal>
            <ListGroup.Item className="Taille">
              {data.title}
            </ListGroup.Item>
            <ListGroup.Item >
              {data.release_date}
            </ListGroup.Item>
            <ListGroup.Item>
              <img width="400" src={"https://image.tmdb.org/t/p/w500/"+data.backdrop_path} alt={"Image de film " +data.title}></img>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </div>
    );
  } else {
    return (
      <div>
        Chargement de donnée
      </div>
    );
  }
};

export default Filmdetail;
