import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componet/home';
import Header from './componet/header';
import Singalproduct from './componet/product';
import Product from './componet/product';
import Categories from './componet/categories';
import Procategories from './componet/procategories';
import Contact from './componet/contact';
import VerticalLinearStepper from './componet/VerticalLinearStepper';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/header' element={<Header/>}/>
				<Route path='/product/:id' element={<Product/>}/>
				<Route path='/categories' element={<Categories/>}/>
				<Route path='/categories/:name' element={<Procategories/>}/>
				<Route path='/contact' element={<Contact/>}/>
				<Route path='/VerticalLinearStepper' element={<VerticalLinearStepper/>}/>

			</Routes>
		</>
	);
}

export default App;
