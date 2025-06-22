
import React, { useState } from "react";
import school3 from "../../assets/hero/school3.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import bony from "../../assets/hero/bony.jpg";
import Teacher from "../../assets/hero/Teacher.jpg";
import school2 from "../../assets/hero/school2.jpg";
import schoolte from "../../assets/hero/schoolte.jpg";
import software from "../../assets/hero/software.jpg";
import { FaStar } from "react-icons/fa6";

const chatProfileBox = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [senderType, setSenderType] = useState("student");

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;
    setChatMessages([...chatMessages, { sender: senderType, text: inputMessage }]);
    setInputMessage("");
  };

  const ProductsData = [
    {
      id: 1,
      img: software,
      title: "Senior Software Executive",
      aosDelay: "0",
      rating: "5.0",
    },
    {
      id: 2,
      img: bony,
      title: "Cloud DevOps",
      aosDelay: "200",
      rating: "4.8",
    },
    {
      id: 3,
      img: school2,
      title: "Employee In Charge",
      aosDelay: "400",
      rating: "4.5",
    },
    {
      id: 4,
      img: Teacher,
      title: "Human Resource Executive (HR)",
      aosDelay: "600",
      rating: "4.9",
    },
    {
      id: 5,
      img: school3,
      title: "Class Teacher",
      aosDelay: "800",
      rating: "4.7",
    },
  ];

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Choose Faculty member from this for your self guide
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            ALL FACULTY STAFF PROFILE
          </h1>
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt={data.title}
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Buttons */}
        <div className="flex justify-center mt-6 gap-4 flex-wrap">
          <input
            type="file"
            id="fileUpload"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                alert(`File Selected: ${file.name}`);
              }
            }}
          />

          {["Upload Profile File", "Degree Details", "Address Details"].map((label, idx) => (
            <button
              key={idx}
              onClick={() => document.getElementById("fileUpload").click()}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Live Chat Section */}
        <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center text-primary">Live Chat - Teacher & Student</h2>

          <div className="h-64 overflow-y-auto bg-white p-4 rounded-md border border-gray-300 mb-4" id="chat-box">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === "teacher" ? "text-right" : "text-left"}`}>
                <p
                  className={`inline-block px-4 py-2 rounded-lg ${
                    msg.sender === "teacher" ? "bg-primary text-white" : "bg-gray-200 text-black"
                  }`}
                >
                  <strong>
                    {msg.sender === "teacher" ? "👨‍🏫 Teacher" : "👩‍🎓 Student"}:
                  </strong>{" "}
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <select
              value={senderType}
              onChange={(e) => setSenderType(e.target.value)}
              className="px-2 py-2 border border-gray-300 rounded-md"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            <button
              onClick={handleSendMessage}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Send
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            View All Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default chatProfileBox;
