import React, {Component} from 'react';
import Products from './Products';

class Bag extends Component{
	state = {
		
	};

	render() {
		return(
			<div className='bag'>
				<div className="bag-inside">
					<p>Ваша корзина</p>
				</div>
				<div className="bag-info bag-display">
					<div className="bag-info-product">Товар</div>
					<div className="bag-info-description">Описание</div>
					<div className="bag-info-count">Количество</div>
					<div className="bag-info-price">Цена</div>
					<div className="bag-info-delete">Удалить</div>
				</div>
				<Products handleBag={this.props.handleBag}></Products>
			</div>
		);
	}
}



export default Bag;