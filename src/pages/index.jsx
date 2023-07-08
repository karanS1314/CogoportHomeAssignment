import React, {useState} from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/Main/HeroSection";
import NumSection from '../components/Main/NumberSection';
import InfoSection from '../components/Main/InfoSection';
import InfoSection2 from '../components/Main/InfoSection2';
import MarqueeSection from '../components/Main/MarqueeSection';
import KnowSection from '../components/Main/KnowSection';
import KnowSection2 from '../components/Main/KnowSection/index2';
import CardSection from '../components/Main/CardSection';
import IndSection from '../components/Main/IndSection';
import VideoSection from '../components/Main/VideoSection';
import ProductsSection1 from '../components/Main/ProductsSection';
import WorkSection from '../components/Main/WorkSection';
import Footer from '../components/Footer';
import NewsSection from '../components/Main/NewsSection';
import LaptopSection from '../components/Main/LaptopSection';
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
		<ProductsSection1/>
		<MarqueeSection/>
		<KnowSection/>
		<WorkSection/>
		<LaptopSection/>
		<IndSection/>
		<InfoSection2/>
		<VideoSection/>
		<KnowSection2/>
		<CardSection/>
		<NewsSection/>
		<Footer/>
		</>
	);
};

export default Main;