import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function SavedList(props) {
  const nav = useNavigate();


  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick={() => nav('/')}>Home</div>
    </div>
  );
}
