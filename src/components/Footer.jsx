import React, {Component} from 'react';
import logbt from './../img/logbt.png';

class Footer extends Component{
	state = {
		
	};

	render() {
		const {count} = this.state;
		return(
			<div className='footer-contain'>
				<div className='footer'>
					<div className='footer-top'>
						<div className="footer-top-networks">
						<p>SHOP24 в социальных сетях:</p>
							<div className="footer-top-networks-icons">
								<div className="fticon fticon-vk"></div>
								<div className="fticon fticon-fcb"></div>
								<div className="fticon fticon-odncl"></div>
								<div className="fticon fticon-pinter"></div>
								<div className="fticon fticon-pin"></div>
								<div className="fticon fticon-inst"></div>
								<div className="fticon fticon-yt"></div>
							</div>
						</div>
						</div>

						<div className="footer-middle">
							<div className="footer-content">
								<img src={logbt} alt="" className="footer-content-logo"/>
								<div className="footer-content-call">
									<p className="footer-content-call-phone">8 (800) 500-75-55*</p>
									<p className="footer-content-call-text">*Бесплатный звонок по всей России</p>
									<p className="footer-content-call-phone">8 (495) 733-96-03</p>
								</div>

								<ul className="footer-content-list">
									<li className="footer-content-list-name">Каталог товаров</li>
									<li><a href="#">Одежда и аксессуары</a></li>
									<li><a href="#">Обувь</a></li>
									<li><a href="#">Украшения</a></li>
									<li><a href="#">Красота и здоровье</a></li>
									<li><a href="#">Товары для дома, дачи и отдыха</a></li>
									<li><a href="#">Товары для кухни</a></li>
								</ul>

								<ul className="footer-content-list">
									<li className="footer-content-list-name">Shop24</li>
									<li><a href="#">Смотреть прямой эфир</a></li>
									<li><a href="#">Расписание передач</a></li>
									<li><a href="#">Акции</a></li>
									<li><a href="#">Личный кабинет</a></li>
									<li><a href="#">Поиск и карта сайта</a></li>
									<li><a href="#">Карта брендов</a></li>
									<li><a href="#">Обратная связь</a></li>
								</ul>

								<ul className="footer-content-list">
									<li className="footer-content-list-name">Заказ</li>
									<li><a href="#">Оплата и доставка</a></li>
									<li><a href="#">Возврат</a></li>
									<li><a href="#">Помощь</a></li>
									<li><a href="#">Благотворительный Фонд Константина Хабенского</a></li>
									<li><a href="#">Гарантия на дополнительное обслуживание товара</a></li>
									<li><a href="#">Пользовательское соглашение</a></li>
								</ul>

								<ul className="footer-content-list">
									<li className="footer-content-list-name">Информация</li>
									<li><a href="#">О канале</a></li>
									<li><a href="#">Возврат</a></li>
									<li><a href="#">Помощь</a></li>
									<li><a href="#">Сотрудничество</a></li>
									<li><a href="#">Покупайте с нами!</a></li>
									<li><a href="#">Контакты</a></li>
								</ul>
							</div>
						</div>

						<div className="footer-c">
							<div className="footer-c-info">
								<p>Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены.</p>
								<p>При использовании материалов сайта ссылка на www.shop24.com обязательна.</p>
								<p>115193, Москва, ул. Кожуховская 5-я, д. 9, помещение VII</p>
								<p>Телефон  8 800 500-75-55</p>
							</div>
						</div>
					
				</div>
			</div>
		);
	}
}



export default Footer;