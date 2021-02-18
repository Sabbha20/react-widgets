import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [activeItem, setactiveItem] = useState(null);

	const onTitleClicked = (index) => {
		setactiveItem(index);
	};

	const fetchedItems = items.map((item, index) => {
		const active = index === activeItem ? 'active' : '';
		return (
			<React.Fragment key={item.title}>
				<div
					className={`title ${active}`}
					onClick={() => onTitleClicked(index)}>
					<i className='dropdown icon'></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>{item.des}</div>
			</React.Fragment>
		);
	});

	return <div className='ui styled accordion '>{fetchedItems}</div>;
};

export default Accordion;
