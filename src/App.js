import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Accordion from './components/accordion';
import Search from './components/search';
import Dropdown from './components/dropdown';
import Translate from './components/translate';

const App = () => {
	const items = [
		{
			title: 'What is React?',
			des:
				'React is a front-end JavaScript library developed by Facebook in 2011.',
		},
		{
			title: 'What are the features of React? ',
			des:
				'It uses the virtual DOM instead of the real DOM, uses server-side rendering and follows uni-directional data flow or data binding.',
		},
		{
			title: 'What is JSX?',
			des:
				'JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax.',
		},
		{
			title: 'What are Higher Order Components?',
			des:
				'Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. ',
		},
	];

	const colorOptions = [
		{
			label: 'The color of Green',
			value: 'green',
		},
		{
			label: 'The color of Red',
			value: 'red',
		},
		{
			label: 'The shade of Blue',
			value: 'blue',
		},
		{
			label: 'The color of Violet',
			value: 'violet',
		},
		{
			label: 'The shade of Grey',
			value: 'grey',
		},
	];

	const [selected, setSelected] = useState(colorOptions[0]);
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<div className='ui container'>
			<Tabs>
				<TabList>
					<Tab>Accordion</Tab>
					<Tab>Dropdown</Tab>
					<Tab>Search</Tab>
					<Tab>Translate</Tab>
				</TabList>

				<TabPanel>
					<Accordion items={items} />
				</TabPanel>
				<TabPanel>
					<button
						className='ui button'
						onClick={() => setShowDropdown(!showDropdown)}>
						Toggle Dropdown
					</button>
					{showDropdown ? (
						<Dropdown
							heading='Choose any color'
							options={colorOptions}
							selected={selected}
							onSelectedChange={setSelected}
						/>
					) : null}
					<div style={{ color: `{colorOptions.value}` }}>
						Color {colorOptions.value} is selected
					</div>
				</TabPanel>
				<TabPanel>
					<Search />
				</TabPanel>
				<TabPanel>
					<Translate />
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default App;
