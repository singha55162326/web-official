"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const languageOptions = [
    { value: 'en', label: 'English', image: '/united-kingdom.png' },
    { value: 'la', label: 'Lao', image: '/laos.png' },
    // Add more language options as needed
  ];

  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3); // Example notification count


  const handleSearchClick = () => {
    // Open a search modal or perform other search-related actions
    setSearchOpen(true);
  };

  const handleNotificationsClick = () => {
    // Open a notifications modal or perform other notifications-related actions
    setNotificationsOpen(true);
    // Reset notification count when opening notifications
    setNotificationCount(0);
  };
  

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('la'); // Add your default language value

  const handleImageClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageSelect = (languageValue) => {
    setSelectedLanguage(languageValue);
    setShowDropdown(false);
  };
  const handleNotificationClose = () => {
    // Close the notifications modal
    setNotificationsOpen(false);
  };

  const handleLanguageChange = (language) => {
    // Add your logic for language change here
    // You may want to use a translation library or update the state accordingly
    setSelectedLanguage(language);
  };



  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header style={{backgroundColor:'#2A2B85FF'}}

className={`header  bg-gradient-to-r left-0 top-0 z-40 flex w-full items-center ${
    sticky
      ? "fixed z-[9999] !bg-opacity-80 shadow-sticky backdrop-blur-2xl dark:backdrop-blur-2xl transition dark:bg-gray-dark dark:shadow-sticky-dark   "
      : "absolute bg-transparent"
  }`}

      >
        <div className="container">
          <div className="relative mx-4 flex items-center  justify-center">
            <div className="w-94 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-4"
                } `}
              >
                <Image
                  src="/images/CC3.png"
                  alt="logo"
                  width={140}
                  height={80}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/edl.JPEg"
                  alt="logo"
                  width={140}
                  height={80}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-white focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-blue-900 px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-white  dark:text-white"
                                : "text-white hover:text-white dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-white group-hover:text-white dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 lg:invisible group-hover:opacity-100 dark:bg-dark lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-[#2A2B85FF] dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-start pr-16 lg:pr-0 relative">
     


      {/* Icon for Notifications */}
      <div className="relative cursor-pointer" onClick={handleNotificationsClick}>
        <FaBell size={24} color="#FFF" />
        {/* Show a badge for notifications */}
        {notificationCount > 0 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
            {notificationCount}
          </div>
        )}
        {/* You may want to add a tooltip for notifications */}
      </div>

      
       {/* Language Dropdown */}
       <div className="relative inline-block">
      {/* Image to trigger the dropdown */}
      <img
        src={languageOptions.find((option) => option.value === selectedLanguage)?.image}
        alt={languageOptions.find((option) => option.value === selectedLanguage)?.alt}
        className="ml-2 w-8 h-8 rounded-full cursor-pointer"
        onClick={handleImageClick}
      />

      {/* Dropdown menu */}
      {showDropdown && (
        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul>
            {languageOptions.map((option) => (
              <li
                key={option.value}
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLanguageSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
      {/* Search Modal */}
      {isSearchOpen && (
        // Your search modal component or code here
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          {/* Your search modal content */}
          <div className="bg-white p-4 rounded-md">
            {/* ... */}

            <input className="w-full" placeholder="search"/>
          </div>
          <button className="absolute top-2 right-2 text-red-600" onClick={() => setSearchOpen(false)}>
            Close
          </button>
        </div>
      )}

      {/* Notifications Modal */}
      {isNotificationsOpen && (
        // Your notifications modal component or code here
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          {/* Your notifications modal content */}
          <div className="bg-white p-4 rounded-md">
            <p> {notificationCount} new notifications.</p>
            {/* ... */}
          </div>
          <button className="absolute top-2 right-2  text-red-600" onClick={handleNotificationClose}>
            Close
          </button>
        </div>
      )}

      
    </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
