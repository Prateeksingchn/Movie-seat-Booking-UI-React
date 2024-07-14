import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Prateek",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1719239311459-e27b3b6a7ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyNzZ8fHxlbnwwfHx8fHw%3D",
    },
    {
      name: "Sarah",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1718964313564-a79ff1a60ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mike",
      role: "Head Projectionist",
      image:
        "https://images.unsplash.com/photo-1719709950312-6167fa7d0696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const features = [
    {
      icon: "fas fa-film",
      text: "State-of-the-art projection and sound systems",
    },
    { icon: "fas fa-couch", text: "Comfortable, reclining seats" },
    { icon: "fas fa-utensils", text: "Gourmet concession stand" },
    {
      icon: "fas fa-wheelchair",
      text: "Accessibility features for all patrons",
    },
    { icon: "fas fa-ticket-alt", text: "Convenient online booking system" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-16 flex flex-col">
        <h2 className="text-4xl font-bold text-indigo-500 text-center mb-12">
          About Prateek's Cinema
        </h2>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h3>
          <p className="text-gray-600">
            Founded in 2010, Prateek's Cinema has been bringing the magic of
            movies to our community for over a decade. What started as a small,
            single-screen theater has grown into a state-of-the-art multiplex,
            offering the latest in cinema technology and comfort.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600">
            At Prateek's Cinema, our mission is to provide an unparalleled
            movie-going experience. We strive to offer a diverse selection of
            films, from blockbusters to indie gems, in a comfortable and
            welcoming environment.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <i
                  className={`${feature.icon} text-2xl text-indigo-500 mr-4`}
                ></i>
                <span className="text-gray-600">{feature.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="p-6">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-indigo-500"
                  />
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-indigo-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-2">
                Have questions or feedback? We'd love to hear from you!
              </p>
              <p className="text-gray-600 mb-2">
                Email: info@prateekscinema.com
              </p>
              <p className="text-gray-600 mb-2">Phone: (555) 123-4567</p>
              <p className="text-gray-600">
                Address: 123 Movie Lane, Cinemaville, CV 12345
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
