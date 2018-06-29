import React, {Component} from 'react';

class Order extends Component{
	state = {
		prom: 0,
		promChange: '',
		numberState: '',
	};

	handleCheckCode = () =>{
		if(this.state.promChange == 123456) this.setState({prom: 1800});
	};
	handleEnterCode = (event) =>{
		this.setState({promChange: event.target.value});
	};
	handleBuy = (event) =>{
		alert('Поздравляем вас в покупкой на сумму ' + (this.state.numberState - this.state.prom));
	};
	render() {
		const {prom, promChange} = this.state;
		let number = 0;
		for (let i = 0; i < this.props.arrayProducts.length; i++) {
			number += this.props.arrayProducts[i].priceall;
		};
		this.state.numberState = number;
		return(
			<div className='order'>
				<div className="order-hr"></div>
				<div className="order-contain">
					<div className="order-contain-promo">
						<p className="order-contain-promo-text">Есть промокод?</p>
						<div className="order-contain-promo-block">
							<input type="text" placeholder='Введите промокод' onChange={this.handleEnterCode} 
							value={promChange}/>
							<button onClick={this.handleCheckCode}>Применить</button>
						</div>
					</div>
					

					<div className="order-contain-buy">
						<div className="order-contain-buy-sum">
							<p>Сумма заказа:</p>
							<div>
								<p id='ordersum'>{number}</p><span> руб.</span>
							</div>
						</div>
						<div className="order-contain-buy-prcode">
							<p>Промокод:</p>
							<div>
								<p id='promocode'>- {prom}</p><span> руб.</span>
							</div>
						</div>
						<div className="order-contain-buy-all">
							<p>Всего:</p>
							<div>
								<p id='allsum'>{number - prom}</p><span> руб.</span>
							</div>
						</div>
						<div className="order-contain-buy-btn">
							<button onClick={this.handleBuy}>Оформить заказ</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}



export default Order;