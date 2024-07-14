import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      <header className="bg-indigo-500 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Prateek's Cinema</h1>
          <nav>
            <ul className="flex justify-center space-x-6">
              <li><a href="index.html" className="hover:text-indigo-200 transition-colors">Book Tickets</a></li>
              <li><a href="#" className="font-semibold">Now Showing</a></li>
              <li><a href="Coming-soon.html" className="hover:text-indigo-200 transition-colors">Coming Soon</a></li>
              <li><a href="about-us.html" className="hover:text-indigo-200 transition-colors">About Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-indigo-500 text-center mb-12">Now Showing</h2>
        <div className="space-y-8">
          {movies.map((movie, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="md:flex">
                <img src={movie.poster} alt={`${movie.title} Poster`} className="w-full md:w-64 object-cover" />
                <CardContent className="flex-grow p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{movie.title}</h3>
                  <p className="text-sm text-indigo-500 mb-2">{movie.info}</p>
                  <p className="text-sm mb-4">{movie.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Today's Showtimes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {movie.showtimes.map((time, timeIndex) => (
                        <Button key={timeIndex} variant="outline" className="bg-indigo-500 text-white hover:bg-indigo-600">
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-indigo-500 text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Prateek's Cinema. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" aria-label="Facebook" className="text-2xl hover:text-indigo-200 transition-colors">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-2xl hover:text-indigo-200 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-2xl hover:text-indigo-200 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NowShowing;