import React, { useState } from "react";
import bookData from "../../Bookdata";
import "./Book.css";

const BookCollection = () => {
  const [booking, setBooking] = useState({
    bookId: null,
    date: "",
    time: ""
  });

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = (bookId) => {
    if (booking.date && booking.time) {
      alert(`Booking Confirmed!\nBook ID: ${bookId}\nDate: ${booking.date}\nTime: ${booking.time}`);
      setBooking({ bookId: null, date: "", time: "" });
    } else {
      alert("Please select date and time.");
    }
  };
  
  return (
    <div className="book-collection-container">
      <h1> Book Collection</h1>
      <div className="book-grid">
        {bookData.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> ₹{book.price}</p>

            <div className="booking-form">
              <input
                type="date"
                name="date"
                value={booking.bookId === book.id ? booking.date : ""}
                onChange={(e) => {
                  setBooking({ ...booking, bookId: book.id });
                  handleBookingChange(e);
                }}
              />
              <input
                type="time"
                name="time"
                value={booking.bookId === book.id ? booking.time : ""}
                onChange={(e) => {
                  setBooking({ ...booking, bookId: book.id });
                  handleBookingChange(e);
                }}
              />
              <button onClick={() => handleBooking(book.id)}>Book Now</button>
              <button onClick={()=>handleBookingChange(book.id)}></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCollection;
