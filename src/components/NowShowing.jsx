import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const NowShowing = () => {
  const movies = [
    {
      title: "The Quantum Paradox",
      poster: "https://m.media-amazon.com/images/I/51c4QW3+HfL.jpg",
      info: "Sci-Fi | Thriller | 140 min",
      description: "A mind-bending journey through time and space as a brilliant physicist attempts to unravel the mysteries of the universe, only to find herself caught in a paradox of her own making.",
      showtimes: ["10:00 AM", "1:30 PM", "4:45 PM", "8:00 PM"]
    },
    {
      title: "Echoes of the Heart",
      poster: "https://m.media-amazon.com/images/M/MV5BYjliNzNhYWMtYWRmNC00ZThmLThmMDUtNjRmNmFhZTMxOWM5XkEyXkFqcGdeQXVyMTMzNTE5MjE2._V1_QL75_UY281_CR5,0,190,281_.jpg",
      info: "Drama | Romance | 120 min",
      description: "A poignant tale of love, loss, and redemption as two estranged siblings reconnect through their shared passion for music, healing old wounds and forging a new path forward.",
      showtimes: ["11:15 AM", "2:30 PM", "5:45 PM", "9:00 PM"]
    },
    {
      title: "Guardians of the Realm",
      poster: "https://m.media-amazon.com/images/M/MV5BZDY2OTQ4MjktMTNlNC00ODcxLWFjYTQtNjRhNTYyOGY3NjI4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg",
      info: "Fantasy | Adventure | 150 min",
      description: "In a world where magic and technology collide, a group of unlikely heroes must band together to protect their realm from an ancient evil that threatens to destroy everything they hold dear.",
      showtimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:15 PM"]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
    <Header />

      <main className="container mx-auto px-4 py-16 flex flex-col">
        <h2 className="text-4xl font-bold text-indigo-500 text-center mb-12">Now Showing</h2>
        <div className="space-y-8">
          {movies.map((movie, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <img src={movie.poster} alt={`${movie.title} Poster`} className="w-full md:w-64 object-cover" />
                <div className="flex-grow p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{movie.title}</h3>
                  <p className="text-sm text-indigo-500 mb-2">{movie.info}</p>
                  <p className="text-sm mb-4">{movie.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Today's Showtimes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {movie.showtimes.map((time, timeIndex) => (
                        <button key={timeIndex} className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors">
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NowShowing;