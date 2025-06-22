import React, { useState } from "react";
import "./Navbar.css";
import DarkMode from "./DarkMode";

const menuItems = [
  {
    id: 1,
    name: "Home",
    link: "#",
    dropdown: ["Dashboard", "Class Updates", "Class Notices", "Holiday list","ROUTINE" ,""]
  },
  {
    id: 2,
    name: "FACULTY MEMBER",
    link: "#",
    dropdown: ["Add Teacher", "All Teachers", "Faculty Schedule"]
  },
  {
    id: 3,
    name: "Student Details",
    link: "#",
    dropdown: ["All Application id", "Attendance", "Reports","Social Address", "phone number","Mark details"]
  },
  {
    id: 4,
    name: "Subject Combination",
    link: "#",
    dropdown: ["Science", "bachelor of pharmasis", "Arts","B.tech","Bachelor of Computer APP",
      "Bachelor of Bussiness Admi","Bachelor of aviation manegment",
      "Hotel managment", "E-Commerce Accountent", "Cyber law" 
    ]
  },
  {
    id: 5,
    name: "Stream",
    link: "#",
    dropdown: [ "Arts","CYber sicurity","Nutration","B.pharm","B.voc","M(Pg)", "M.sc", "Master of commerse","MCA","Master of technology"]
  },
  {
    id: 6,
    name: "Fees Structure",
    link: "#",
    dropdown: ["Monthly Fees", "Admission Fees", "Scholarships","Toppers award","Internship oppurtunaty", "Swami vivekananda merit" ,"Yarly package"]
  },
  
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="navbar bg-yellow-500 text-white py-4 px-6 shadow-md">
      <div className="navbar-title">SAMANTA EDUCATION HUB</div>
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <a href={item.link}>{item.name}</a>
            {hovered === item.id && (
              <ul className="dropdown">
                {item.dropdown.map((subItem, i) => (
                  <li key={i}><a href="#">{subItem}</a></li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="navbar-right ">
        <input type="text" placeholder="search" className="search-bar" />
        <span className="cart-icon">🛒</span>
      </div>
      <DarkMode/>
    </nav>
  );
};

export default Navbar;







// import React from "react";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";

// const Menu = [

//   { id: 1, name: "Home", link: "/#" },
//   { id: 2, name: "FACULTY MEMBER", link: "/#" },
//   { id: 3, name: "Student Details", link: "/#" },
//   { id: 4, name: "Subject Combination", link: "/#" },
//   { id: 5, name: "Stream", link: "/#" },
//   { id: 6, name: "Fees Structure", link: "/#" },

// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/#" },
//   { id: 2, name: "Best Selling", link: "/#" },
//   { id: 3, name: "Top Rated", link: "/#" },
// ];

// const Navbar = ({ handleOrderPopup }) => {
//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <div>
//             <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               {/* <img src={Logo} alt="Logo" className="w-10" /> */}
//               SAMANTA COCHING CLASS BOOKING
//             </a>
//           </div>

//           {/* search bar */}
//           <div className="flex justify-between items-center gap-4">
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             {/* order button */}
//             <button
//               onClick={() => handleOrderPopup()}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
//             >
//               <span className="">
//                 BOOK SUBJECT
//               </span>
//               <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
//             </button>

//             {/* Darkmode Switch */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">

//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Simple Dropdown and Links */}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
