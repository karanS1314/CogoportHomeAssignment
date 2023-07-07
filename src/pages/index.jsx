import React, {useState} from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/Main/HeroSection";
import NumSection from '../components/Main/NumberSection';
import InfoSection from '../components/Main/InfoSection';
import InfoSection2 from '../components/Main/InfoSection2';
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
		<NumSection/>
		<InfoSection/>
		<InfoSection2/>
		</>
	);
};

export default Main;