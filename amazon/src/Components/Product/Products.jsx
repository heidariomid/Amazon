import React from 'react';
import amazonPrime from '../../images/amazon-prime-video-catalogo.jpg';
import book from '../../images/book1.jpg';
import chair from '../../images/chair.png';
import iphone from '../../images/iphone.png';
import tablet from '../../images/tablet.png';
import bicycle from '../../images/bicycle.png';
import tshirt from '../../images/tshirt.png';
import {products, products_containner, products_row} from './Products.module.css';
import Product from './Product';
const Body = () => {
	return (
		<div className={products}>
			<div className={products_containner}>
				<img src={amazonPrime} alt="amazon-prime" />
				<div className={products_row}>
					<Product id="PI-312465" title="Book of Henry" price={9.99} star={2} image={book} />
					<Product id="PI-312466" title="Mountain biyce" price={2200} star={4} image={bicycle} />
				</div>
				<div className={products_row}>
					<Product id="PI-312467" title="iPhone 11 pro" price={1100} star={4} image={iphone} />
					<Product id="PI-312468" title=" Nike+" price={29.99} star={3} image={tshirt} />
					<Product id="PI-312469" title="iTouch Pro" price={710} star={5} image={tablet} />
				</div>
				<div className={products_row}>
					<Product id="PI-312470" title="Chair-99" price={450} star={5} image={chair} />
				</div>
			</div>
		</div>
	);
};

export default Body;
