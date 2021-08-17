import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl";
import locale_en from './language/en/ticketing.json';
import locale_da from './language/da/ticketing.json';

const data = {
    'da': locale_da,
    'en': locale_en
};

const language = navigator.language.split(/[-_]/)[0];

export const flattenMessages = ((nestedMessages, prefix = '') => {
    if (nestedMessages === null) {
        return {}
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value       = nestedMessages[key]
        const prefixedKey = prefix ? `${prefix}.${key}` : key

        if (typeof value === 'string') {
            Object.assign(messages, { [prefixedKey]: value })
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey))
        }

        return messages
    }, {})
})

ReactDOM.render(
    <React.StrictMode>
        <IntlProvider locale={language} messages={flattenMessages(data[language])} defaultLocale="en">
            <App/>
        </IntlProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
