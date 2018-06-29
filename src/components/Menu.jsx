import React, {Component} from 'react';

class Menu extends Component{
	state = {
		
	};
	handleMenu = () =>{
		let menu = document.querySelector('.Menu-contain');
		menu.style.display == 'none' ? menu.style.display= 'block' :  menu.style.display = 'none';
	}
	
	render() {
		const {count} = this.state;
		return(
			<div className='Menu-wrap'>
			<div className="burger" onClick={this.handleMenu}><span>Меню</span></div>
			<div className='Menu-contain'>
				<ul className='Menu'>
					<li className='Menu-active'><a href="#">Одежда и аксессуары</a></li>
					<li><a href="#">Украшения</a></li>
					<li><a href="#">Красота и здоровье</a></li>
					<li><a href="#">Товары для дома</a></li>
					<li><a href="#">Товары для кухни</a></li>
				</ul>
			</div>	
			<div className='catalog-contain'>
				<ul className='catalog'>
						<li><a href="#">Женская одежда</a></li>
						<li><a href="#">Мужская одежда</a></li>
						<li><a href="#">Аксессуары</a></li>
				</ul>
			</div>	
		</div>	
		);
	}
}



export default Menu;