import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const ComingSoon = () => {

    // Dummy data for upcoming movies
    const upcomingMovies = [
        {
          title: "The Galactic Odyssey",
          poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4mpg4RhBru6rlcoQQKB6dVvI4Nzmt22JQQ&s",
          details: "Sci-Fi | Adventure | 160 min",
          description: "A thrilling space adventure that takes viewers on a journey across the universe, exploring new worlds and facing unknown dangers.",
          releaseDate: "August 15, 2024"
        },
        {
          title: "Whispers in the Wind",
          poster: "https://m.media-amazon.com/images/M/MV5BMDJkNmM5YTUtYzZiYS00Nzk5LTgzYTYtZDFjYzc2ODZmYzg3XkEyXkFqcGdeQXVyNDI1Njg2NzI@._V1_.jpg",
          details: "Drama | Romance | 130 min",
          description: "A touching love story set against the backdrop of a small coastal town, where two unlikely souls find each other amidst life's challenges.",
          releaseDate: "September 1, 2024"
        },
        {
          title: "Cyber Heist",
          poster: "https://i.mydramalist.com/XdjQxn_4f.jpg",
          details: "Action | Thriller | 145 min",
          description: "A high-stakes technological thriller about a team of elite hackers trying to prevent a global cyber attack that threatens to destabilize the world economy.",
          releaseDate: "September 22, 2024"
        },
        {
          title: "The Last Laugh",
          poster: "https://m.media-amazon.com/images/M/MV5BMmJhMzc4MjAtY2MyNi00MjM3LTk2NTEtYzY4MjliZTRhNGVkXkEyXkFqcGdeQXVyMTM4Mjc4Nw@@._V1_.jpg",
          details: "Comedy | 110 min",
          description: "A hilarious comedy about a retiring stand-up comedian who embarks on one final tour, rediscovering his passion for laughter along the way.",
          releaseDate: "October 5, 2024"
        },
        {
          title: "Echoes of the Past",
          poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKb44WVvyg3hx0gLIh2bp0mkFf-NxmYAEgjQ&s",
          details: "Historical Drama | 150 min",
          description: "An epic historical drama that spans generations, exploring the impact of a family secret on multiple generations across different time periods.",
          releaseDate: "November 8, 2024"
        },
        {
          title: "Beyond the Horizon",
          poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
          details: "Adventure | Family | 120 min",
          description: "A heartwarming family adventure about a group of young explorers who embark on a journey to find a legendary lost city.",
          releaseDate: "July 12, 2024"
        },
        {
          title: "Quantum Paradox",
          poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
          details: "Sci-Fi | Thriller | 140 min",
          description: "A mind-bending sci-fi thriller that explores the consequences of time travel and parallel universes on a group of quantum physicists.",
          releaseDate: "October 18, 2024"
        },
        {
          title: "The Silent Revolution",
          poster: "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_.jpg",
          details: "Drama | Political | 125 min",
          description: "A powerful drama depicting a grassroots movement that challenges societal norms and sparks widespread change in a small community.",
          releaseDate: "November 22, 2024"
        },
        {
          title: "Legends of the Deep",
          poster: "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_.jpg",
          details: "Animation | Adventure | 105 min",
          description: "An animated underwater adventure that follows a group of sea creatures on a quest to save their coral reef home from environmental threats.",
          releaseDate: "December 25, 2024"
        },
        {
          title: "The Clockmaker's Daughter",
          poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
          details: "Fantasy | Mystery | 135 min",
          description: "A whimsical tale set in a steampunk world, where a young girl with clockwork parts searches for her missing father and uncovers a grand conspiracy.",
          releaseDate: "June 7, 2024"
        },
        {
          title: "Harmonic Dissonance",
          poster: "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
          details: "Musical | Drama | 140 min",
          description: "A gripping musical drama about a prodigy pianist who loses her hearing and must navigate the world of music in a new and challenging way.",
          releaseDate: "August 30, 2024"
        },
        {
          title: "The Carbon Conundrum",
          poster: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
          details: "Documentary | Environmental | 95 min",
          description: "An eye-opening documentary that explores innovative solutions to climate change from scientists and activists around the world.",
          releaseDate: "April 22, 2024"
        },
      ];

  return (
    <div className="bg-gray-100 min-h-screen">
    <Header />


      <main className="container mx-auto px-4 py-16 flex flex-col">
        <h2 className="text-4xl font-bold text-indigo-500 text-center mb-12">Coming Soon to Our Screens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {upcomingMovies.map((movie, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img src={movie.poster} alt={`${movie.title} Poster`} className="w-full h-96 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{movie.title}</h3>
                <p className="text-sm text-indigo-500 mb-2">{movie.details}</p>
                <p className="text-sm mb-4">{movie.description}</p>
                <p className="text-sm font-semibold text-indigo-500">Release Date: {movie.releaseDate}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;