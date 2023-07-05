import React, {useState} from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/Main/HeroSection";

const Main = () => {
	const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
	return (
		<>
		<Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
		<HeroSection />
		</>
	);
};

export default Main;