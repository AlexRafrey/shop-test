import React, {Component} from 'react';
import btmprd1 from './../img/btmprd1.png';
import btmprd2 from './../img/btmprd2.png';
import btmprd3 from './../img/btmprd3.png';
import btmprd4 from './../img/btmprd4.png';

class BottomProducts extends Component{
	state = {
		
	};

	render() {
		return(
			<div className='btmprod'>
				<div className="btmprod-hr">Добавьте к вашему заказу</div>
				<div className="btmprod-items">
					<a href="#" className="btmprod-items-item">
						<img src={btmprd1} alt=""/>
						<p>Солнечные очки Зелёного цвета в стиле ретро</p>
						<p>2450 руб.</p>
					</a>
					<a href="#" className="btmprod-items-item">
						<img src={btmprd2} alt=""/>
						<p>Шляпа</p>
						<p>800 руб.</p>
					</a>
					<a href="#" className="btmprod-items-item">
						<img src={btmprd3} alt=""/>
						<p>Платье-миди с расклешенной юбкой</p>
						<p>2450 руб.</p>
					</a>
					<a href="#" className="btmprod-items-item">
						<img src={btmprd4} alt=""/>
						<p>Платье-миди с расклешенной юбкой</p>
						<p>2450 руб.</p>
					</a>
				</div>
			</div>
		);
	}
}



export default BottomProducts;