import { useEffect, useState } from "react";
import { Button } from '../components/Button';

import { api } from '../services/api';
interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenreList {
  genreList: Genre[]
  clickFunction: (genreId: number) => void;
  selectedGenre: number;
}
export function SideBar(props: GenreList) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genreList.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.clickFunction(genre.id)}
            selected={props.selectedGenre === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}