import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
	const [translateText, setTranslateText] = useState('');
	const [debouncedTerm, setDebouncedTerm] = useState(text);

	useEffect(() => {
		const timerID = setTimeout(() => {
			setDebouncedTerm(text);
		}, 1000);

		return () => {
			clearTimeout(timerID);
		};
	}, [text]);

	useEffect(() => {
		const doTranslation = async () => {
			const { data } = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: debouncedTerm,
						target: language.value,
						key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
					},
				},
			);
			setTranslateText(data.data.translations[0].translatedText);
		};
		if (debouncedTerm) {
			doTranslation();
		}
	}, [language, debouncedTerm]);

	return (
		<div>
			<p>{translateText}</p>
		</div>
	);
};

export default Convert;
