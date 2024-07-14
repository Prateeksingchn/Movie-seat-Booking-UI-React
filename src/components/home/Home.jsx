import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../Footer';

const Home = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [ticketPrice, setTicketPrice] = useState(12);
    const [showModal, setShowModal] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        generateSeats();
    }, [selectedDate, selectedTime]);

    const updateTotal = () => {
        const ticketCost = selectedSeats.length * ticketPrice;
        const fee = Math.round(ticketCost * 0.1 * 100) / 100; // 10% convenience fee
        const total = ticketCost + fee;
        return { ticketCost, fee, total };
    };

    const { ticketCost, fee, total } = updateTotal();

    const generateSeats = () => {
        const newSeats = [];
        for (let i = 0; i < 80; i++) {
            const isBooked = Math.random() < 0.3;
            newSeats.push({
                id: `seat${i}`,
                label: `${String.fromCharCode(65 + Math.floor(i / 10))}${i % 10 + 1}`,
                isBooked
            });
        }
        setSeats(newSeats);
        setSelectedSeats([]);
    };

    const generateDates = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const today = new Date();
        return Array.from({ length: 7 }, (_, i) => {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            return {
                id: `date${i}`,
                day: days[date.getDay()],
                date: date.getDate()
            };
        });
    };

    const times = ['11:00', '14:30', '18:00', '21:30'];

    const handleSeatClick = (seatId) => {
        setSelectedSeats(prev => {
            const index = prev.indexOf(seatId);
            if (index > -1) {
                return prev.filter(id => id !== seatId);
            } else {
                return [...prev, seatId];
            }
        });
    };

    const handleMovieChange = (e) => {
        setTicketPrice(parseInt(e.target.value));
    };

    const handleBooking = () => {
        if (selectedSeats.length > 0 && selectedDate && selectedTime) {
            const selectedMovie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
            setBookingDetails({
                movie: selectedMovie,
                date: `${selectedDate.day}, ${selectedDate.date}`,
                time: selectedTime,
                seats: selectedSeats.map(id => seats.find(seat => seat.id === id).label).join(', '),
                total: total.toFixed(2)
            });
            setShowModal(true);
        } else {
            alert('Please select seats, date, and time for your booking.');
        }
    };

    return (
        <div className="container">
            <header>
                <h1 className="title">Prateek's Cinema</h1>
                <nav>
                    <ul>
                        <li><Link to="/" className="active">Book Tickets</Link></li>
                        <li><Link to="/now-showing">Now Showing</Link></li>
                        <li><Link to="/coming-soon">Coming Soon</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="tickets">
                <section className="ticket-selector">
                    <div className="movie-select">
                        <label htmlFor="movieSelect">Select a Movie:</label>
                        <select id="movieSelect" onChange={handleMovieChange}>
                            <option value="12">Avengers: Endgame ($12)</option>
                            <option value="10">The Lion King ($10)</option>
                            <option value="8">Toy Story 4 ($8)</option>
                            <option value="15">Joker ($15)</option>
                            <option value="13">Inception ($13)</option>
                            <option value="11">The Dark Knight ($11)</option>
                            <option value="9">Pulp Fiction ($9)</option>
                            <option value="14">Interstellar ($14)</option>
                        </select>
                    </div>
                    <div className="seats">
                        <div className="screen">
                            <div className="screen-text">Screen</div>
                        </div>
                        <div className="all-seats" id="seatContainer">
                            {seats.map(seat => (
                                <React.Fragment key={seat.id}>
                                    <input
                                        type="checkbox"
                                        id={seat.id}
                                        style={{ display: 'none' }}
                                        disabled={seat.isBooked}
                                        checked={selectedSeats.includes(seat.id)}
                                        onChange={() => handleSeatClick(seat.id)}
                                    />
                                    <label
                                        htmlFor={seat.id}
                                        className={`seat${seat.isBooked ? ' booked' : ''}${selectedSeats.includes(seat.id) ? ' selected' : ''}`}
                                    >
                                        {seat.label}
                                    </label>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="seat-status">
                        <div className="status-item available"><i className="fas fa-square"></i> Available</div>
                        <div className="status-item booked"><i className="fas fa-square"></i> Booked</div>
                        <div className="status-item selected"><i className="fas fa-square"></i> Selected</div>
                    </div>
                    <div className="timings">
                        <h2>Select Date & Time</h2>
                        <div className="dates" id="dateContainer">
                            {generateDates().map(date => (
                                <React.Fragment key={date.id}>
                                    <input
                                        type="radio"
                                        name="date"
                                        id={date.id}
                                        style={{ display: 'none' }}
                                        onChange={() => setSelectedDate(date)}
                                    />
                                    <label htmlFor={date.id} className={`date-item${selectedDate && selectedDate.id === date.id ? ' selected' : ''}`}>
                                        <div>{date.day}</div>
                                        <div>{date.date}</div>
                                    </label>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="times" id="timeContainer">
                            {times.map((time, index) => (
                                <React.Fragment key={`time${index}`}>
                                    <input
                                        type="radio"
                                        name="time"
                                        id={`time${index}`}
                                        style={{ display: 'none' }}
                                        onChange={() => setSelectedTime(time)}
                                    />
                                    <label htmlFor={`time${index}`} className={`time-item${selectedTime === time ? ' selected' : ''}`}>
                                        {time}
                                    </label>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>
                <aside className="price">
                    <h2>Booking Summary</h2>
                    <div className="price-details">
                        <span>Tickets ({selectedSeats.length}):</span>
                        <span>${ticketCost.toFixed(2)}</span>
                    </div>
                    <div className="price-details">
                        <span>Convenience Fee:</span>
                        <span>${fee.toFixed(2)}</span>
                    </div>
                    <div className="total">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="book-btn" onClick={handleBooking}>Book Now</button>
                </aside>
            </main>
            
            {/* Its shows the book ticket data */}
            {showModal && (
                <div className="modal" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <div className="modal-content" style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '5px',
                        maxWidth: '500px',
                        width: '90%'
                    }}>
                        <span className="close" onClick={() => setShowModal(false)} style={{
                            float: 'right',
                            cursor: 'pointer',
                            fontSize: '1.5rem'
                        }}>&times;</span>
                        <h2>Booking Confirmation</h2>
                        <div>
                            <p><strong>Movie:</strong> {bookingDetails.movie}</p>
                            <p><strong>Date:</strong> {bookingDetails.date}</p>
                            <p><strong>Time:</strong> {bookingDetails.time}</p>
                            <p><strong>Seats:</strong> {bookingDetails.seats}</p>
                            <p><strong>Total Cost:</strong> ${bookingDetails.total}</p>
                            <p>Thank you for your booking!</p>
                        </div>
                    </div>
                </div>
            )}
            
            <Footer />
        </div>
    );
};

export default Home;