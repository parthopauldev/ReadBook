import React from 'react';
import bookimg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div>
         <div className="card flex flex-row-reverse bg-white text-black card-side  shadow-sm">
  <figure>
    <img className='h-[300px] w-[300px] '
      src={bookimg}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;