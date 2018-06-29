import React, {Component} from 'react';
import Header from "./components/Header";
import Goods from "./components/Goods";
import Menu from "./components/Menu";
import Bag from "./components/Bag";
import BottomProducts from "./components/BottomProducts";
import Footer from "./components/Footer";
// import styled from 'styled-components';


const About = () => (
	<div>
	  <h2>About</h2>
	</div>
  );
class App extends Component{
	constructor(props){
		super();
		this.state = {
			goods: 4,
		}
	
	}

	handleBag = (goods) =>{
		this.setState({goods: goods});
	}

	render(){	
		return(
			<div className="app" >
				<header>
					<Header></Header>
					<Goods goods={this.state.goods}></Goods>
					<Menu></Menu>
				</header>
				<main>
					<Bag handleBag={this.handleBag}></Bag>
					<BottomProducts></BottomProducts>
					<Footer></Footer>
				</main>
			</div>
		);
	}
}

export default App;