import React, { useState } from 'react';
import Dropdown from './dropdown';
import Convert from './convert';

const Translate = () => {
	const languageOptions = [
		{
			label: 'Afrikaans',
			value: 'af',
		},
		{
			label: 'French',
			value: 'fr',
		},
		{
			label: 'Arabic',
			value: 'ar',
		},
		{
			label: 'Bengali',
			value: 'bn',
		},
		{
			label: 'English',
			value: 'en',
		},
		{
			label: 'Spanish',
			value: 'es',
		},
		{
			label: 'Hindi',
			value: 'hi',
		},
		{
			label: 'Russian',
			value: 'ru',
		},
		{
			label: 'Japanese',
			value: 'ja',
		},
		{
			label: 'Irish',
			value: 'ga',
		},
		{
			label: 'Italian',
			value: 'it',
		},
		{
			label: 'Gujarati',
			value: 'gu',
		},
		{
			label: 'Punjabi',
			value: 'pa',
		},
		{
			label: 'Pushto',
			value: 'ps',
		},
		{
			label: 'Portuguese',
			value: 'pt',
		},
		{
			label: 'Sindhi',
			value: 'sd',
		},
		{
			label: 'Oriya',
			value: 'or',
		},
		{
			label: 'Nepali',
			value: 'ne',
		},
		{
			label: 'Latin',
			value: 'la',
		},
		{
			label: 'Mongolian',
			value: 'mn',
		},
		{
			label: 'German',
			value: 'de',
		},
		{
			label: 'Greek',
			value: 'el',
		},
		{
			label: 'Tamil',
			value: 'ta',
		},
	];

	const [language, setLanguage] = useState(languageOptions[0]);
	const [text, setText] = useState('');

	return (
		<div>
			<form className='ui form'>
				<div className='field'>
					<label>Input:</label>
					<input
						type='text'
						placeholder='Enter Text...'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
			</form>
			<Dropdown
				heading='Choose a language'
				options={languageOptions}
				selected={language}
				onSelectedChange={setLanguage}
			/>
			<div className='ui message'>
				<div className='header'>Output:</div>
				<br />
				<Convert text={text} language={language} />
			</div>
		</div>
	);
};

export default Translate;
