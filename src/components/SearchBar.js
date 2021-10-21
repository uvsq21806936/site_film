import React from 'react';
import { useState } from 'react';
import FilmRecherche from './FilmRecherche';
import {Navbar,Stack,Nav} from 'react-bootstrap'

const NavBar=()=>{
    return(
    < Navbar bg="light" variant="dark">
       
        <h7 className="Couleur">
          FilmRecherche
        </h7>
        <br />
        <Nav.Link href="/movie/populair">Populaire</Nav.Link>
      </Navbar>
      
    );
}

const SearchBar = () => {
    const [input, setInput] = useState('')
    if (input == '') {
        return (
            <div>
                <NavBar/>
                 <Stack direction="horizontal" gap={3}>
                <input type="text" onChange={(e) => { setInput(e.target.value) }} />
                </Stack>
            </div>
        )
    }else {
        return (
            <div>
                <NavBar/>
                 <Stack direction="horizontal" gap={3}>
                <input type="text" onChange={(e) => { setInput(e.target.value) }} />
                </Stack>
                <FilmRecherche title={input} />
            </div>
        );
    }
};

export default SearchBar;