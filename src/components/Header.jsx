import React, {Component} from 'react';

class Header extends Component{
	state = {
		
	};

	// handleCheck = index => event=>{
	// 	let array = this.state.test.slice();
	// 	array.forEach(element => {
	// 		element.right == element.user ? element.correct = 1 : '';
	// 	});
	// 	this.setState({test: array});
	// 	console.log(this.state.test);
	// };
	render() {
		const {count} = this.state;
		return(
			<div className='Header'>
				<div className="Header-info">
					<p className='Header-info_phone'>8 (800) 500-75-55 <span className='Header-info_phone_call'>Бесплатный звонок по России</span></p>
					<div className="Header-info_youtube">
						<a className="Header-info_youtube_item " href='#' ><span className='inf_itm1'></span><p>Звёздный блог</p></a>
						<a className="Header-info_youtube_item" href='#'><span className='inf_itm2'></span><p>Смотрите нас на YouTube</p></a>
						<a className="Header-info_youtube_item" href='#'><span className='inf_itm3'></span><p>Cмотрите наш прямой эфир</p></a>
					</div>
				</div>
			</div>
		);
	}
}



export default Header;