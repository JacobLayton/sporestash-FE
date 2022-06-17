import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/shop.css';
import sporeStashLogo from '../img/Final_deer_flat.png';
import sporeStashLogo2 from '../img/Mustacheflatfinal1.png';

function Shop(props) {
	const [displayedItems, setDisplayedItems] = useState([]);
	const [cubensis, setCubensis] = useState([]);
	const [exotic, setExotic] = useState([]);
	const [merch, setMerch] = useState([]);
	const [activeTab, setActiveTab] = useState('cubensis');

	useEffect(() => {
		if (props.hocItems && props.hocItems.length > 0) {
			const cubensisItems = [];
			const exoticItems = [];
			const merchItems = [];
			props.hocItems.forEach((item) => {
				if (item.item_category === 'cubensis') {
					cubensisItems.push(item);
				} else if (item.item_category === 'exotic') {
					exoticItems.push(item);
				} else {
					merchItems.push(item);
				}
			});
			setDisplayedItems(cubensisItems);
			setCubensis(cubensisItems);
			setExotic(exoticItems);
			setMerch(merchItems);
		}
	}, [props.hocItems]);

	function handleCubensisClick(e) {
		setDisplayedItems(cubensis);
		if (activeTab !== 'cubensis') {
			setActiveTab('cubensis');
		}
	}
	function handleExoticClick(e) {
		setDisplayedItems(exotic);
		if (activeTab !== 'exotic') {
			setActiveTab('exotic');
		}
	}

	function handleMerchClick(e) {
		setDisplayedItems(merch);
		if (activeTab !== 'merch') {
			setActiveTab('merch');
		}
	}

	return (
		<div className='shop-container'>
			<img src={sporeStashLogo2} alt='Spore Stash Logo' className='main-logo' />
			<div className='shop-buttons'>
				<button
					onClick={handleCubensisClick}
					className={
						activeTab === 'cubensis' ? 'cubensis-button active' : 'cubensis-button'
					}
				>
					Cubensis
				</button>
				<button
					onClick={handleExoticClick}
					className={activeTab === 'exotic' ? 'exotic-button active' : 'exotic-button'}
				>
					Exotic
				</button>
				<button
					onClick={handleMerchClick}
					className={activeTab === 'merch' ? 'merch-button active' : 'merch-button'}
				>
					Merch
				</button>
			</div>
			<div className='shop-cards'>
				{props.isMounting ? (
					<LoadingSpinner />
				) : displayedItems.length > 0 ? (
					displayedItems.map((item) => {
						return (
							<ItemCard
								item={item}
								key={item.item_id}
								cart={props.cart}
								setCart={props.setCart}
							/>
						);
					})
				) : (
					<h3 className='coming-soon'>Coming Soon!</h3>
				)}
			</div>
		</div>
	);
}

export default Shop;
