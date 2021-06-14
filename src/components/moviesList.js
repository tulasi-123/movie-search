import React from 'react';
// import images from '../images';

function MoviesList(props) {
  // console.log(images);
  return (
    <div className="main-container">
      {props.data.length > 0 ? props.data.map((item, index) => {
        return (<div key={index} className="container">
          <img className="images-list" src={`images/${item.posterimage}`} alt={item.posterimage} />
          {/* <img src={`${images[item.posterimage.split('.')[0]]}`} alt={item.posterimage} width="200px" /> */}
          <p className="movie-title">{item.name}</p>
        </div>)
      }) : <div className="no-movies">No Movies Found</div>}
    </div>
  )
}

export default MoviesList;
