import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, heading }) => {
	const [visible, setVisible] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (e) => {
			if (ref.current && ref.current.contains(e.target)) {
				return;
			}

			setVisible(false);
		};
		document.body.addEventListener('click', onBodyClick);

		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	}, []);

	const fetchedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className='item'
				onClick={() => onSelectedChange(option)}>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className='ui form'>
			<div className='field'>
				<label>{heading}:</label>
				<div
					onClick={() => setVisible(!visible)}
					className={`ui selection dropdown ${
						visible ? 'visible active' : ''
					}`}>
					<i className='dropdown icon'></i>
					<div className='text'>{selected.label}</div>
					<div className={`menu  ${visible ? 'visible transition' : ''}`}>
						{fetchedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
