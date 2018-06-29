import React, {Component} from 'react';
import Order from './Order';
import pf1 from './../img/pf1.png';
import pf2 from './../img/pf2.png';
import pf3 from './../img/pf3.png';

const array = [
	{img: pf1, name: 'Платье миди с расклешенной юбкой', code: '82039-11', size: 44, color: 'синий', price: 2450, count: 1, priceall: 2450 },
	{img: pf2, name: 'Туфли женские украшенные кружевными вставками', code: '13524-01', size: 38, color: 'чёрный', price: 2450, count: 1, priceall: 2450 },
	{img: pf3, name: 'Платье-миди', code: '75039', size: 44, color: 'белый', price: 2450, count: 1, priceall: 2450 },
	{img: pf3, name: 'Платье-миди', code: '75039', size: 44, color: 'белый', price: 2450, count: 1, priceall: 2450 },
];
class Products extends Component{
	state = {
		arrayProducts: array,
	};

	countBag = () =>{
		let goods = this.state.arrayProducts.length;
		this.props.handleBag(goods);
	};

	handleDelete = index => event=>{
		this.state.arrayProducts.splice(index, 1);
		this.setState({arrayProducts: this.state.arrayProducts});
		this.countBag();
	};
	handleMinus = index => event=>{
		let newarr = this.state.arrayProducts.slice();
		newarr[index].count > 1 ? newarr[index].count = newarr[index].count - 1 : '';
		this.setState({arrayProducts: newarr});

		let newarr2 = this.state.arrayProducts.slice();
		newarr2[index].priceall > newarr2[index].price ? newarr2[index].priceall = newarr2[index].priceall - newarr2[index].price :'' ;
		this.setState({arrayProducts: newarr2});
	};
	handlePlus = (index) => event=>{
		let newarr = this.state.arrayProducts.slice();
		newarr[index].count = newarr[index].count + 1;
		this.setState({arrayProducts: newarr});

		let newarr2 = this.state.arrayProducts.slice();
		const oldpr = newarr2[index].price;
		newarr2[index].priceall = newarr2[index].priceall + oldpr;
		this.setState({arrayProducts: newarr2});
	};
	render() {
		const {arrayProducts} = this.state;
		const list =  this.state.arrayProducts.map((item, index) => {
			return <div className="bag-info prod" key={index}>
				<div className="bag-info-product bag-product"><img src={item.img} alt=""/></div>
				<div className="bag-info-description bag-description">
					<p className='bag-description-name'>{item.name}</p>
					<p className='bag-description-code'>Код: {item.code}</p>
					<p className='bag-description-size'>Размер: {item.size}</p>
					<p className='bag-description-color'>Цвет: {item.color}</p>
				</div>
				<div className="bag-info-count bag-count">
					<span className='bag-count-minus' onClick={this.handleMinus(index)}>-</span>
					<span className='bag-count-number'>{item.count}</span>
					<span className='bag-count-plus' onClick={this.handlePlus(index, item.count)}>+</span>
				</div>
				<div className="bag-info-price bag-price">
					<p><span className="bag-price-text">{item.priceall} руб.</span></p>
				</div>
				<div className="bag-info-delete bag-delete">
					<span className="bag-delete-click" onClick={this.handleDelete(index)}>&#10006;</span>
				</div>
			</div>
		
		});
		return(
			<div className='products'>
				{list}
				<Order arrayProducts={this.state.arrayProducts}></Order>
			</div>
		)
	}
}



export default Products;