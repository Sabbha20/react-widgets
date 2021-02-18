import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('');
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [sugg, setSugg] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		const timeoutID = setTimeout(() => {
			setDebouncedTerm(term);
		}, 1000);
		return () => {
			clearTimeout(timeoutID);
		};
	}, [term]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm,
				},
			});
			setResults(data.query.search);

			if (data.query.searchinfo.totalhits < 50 && debouncedTerm) {
				setSugg(data.query.searchinfo.suggestion);
			} else {
				setSugg('');
			}
		};
		if (debouncedTerm) {
			search();
		}
	}, [debouncedTerm, sugg]);

	const fetchResult = results.map((result) => {
		const toRemove = ['<span class="searchmatch">', '</span>'];

		// create regex like "a|b|c|..." according to what the array contains
		const regex = new RegExp(toRemove.join('|'), 'gi');

		const oldString = result.snippet;
		const newString = oldString.replaceAll(regex, '');
		const qoutString = newString.replaceAll('&quot;', "'");
		return (
			<div className='item' key={result.pageid}>
				<div className='right floated content'>
					<a
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						target='_blank'
						rel='noreferrer'
						className='ui button'>
						More..
					</a>
				</div>

				<div className='content'>
					<div className='header'>{result.title}</div>
					<div className='description'>{qoutString}</div>
				</div>
			</div>
		);
	});

	const suggestion = () => {
		if (sugg) {
			return (
				<div className='item'>
					<div className='ui red horizontal label'>Suggestion:</div>
					{sugg}
				</div>
			);
		}
	};

	return (
		<div className='container ui'>
			<form className='ui form'>
				<div className='field'>
					<label>Search and Enter:</label>
					<input
						type='text'
						name='search'
						placeholder='Wiki Search Here...'
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</form>
			<div class='ui divided selection list'>{suggestion()}</div>
			<div className='ui celled list'>{fetchResult}</div>
		</div>
	);
};

export default Search;
