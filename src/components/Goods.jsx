import React, {Component} from 'react';
import shop from './../img/shop.png';

class Goods extends Component{
	state = {
		
	};

	
	render() {
		return(
			<div className='goods'>
				<div className="goods-left">
					<div className="goods-left-logo">
						<img src={shop} alt=""/>
						<p>New Look</p>
					</div>
					<div className="goods-left-search">
						<input type="text" placeholder='Поиск по сайту'/>
					</div>
				</div>
				<div className="goods-right">
					<div className="goods-right-user">
						<div className="goods-right-user-img"></div>
						<p className="goods-right-user-name">Анастасия</p>
					</div>
					<div className="goods-right-cart">
					<div className="goods-right-cart-img"></div>
						<div className="goods-right-cart-count">
							<p>В корзине:</p>
							<p id='allProducts'>{this.props.goods} товара</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}



export default Goods;