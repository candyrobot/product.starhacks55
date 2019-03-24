import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from '../node_modules/jquery/dist/jquery.js';

document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});

// スクロールを無効にする
$(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
});

// スクロール無効を解除する
$(window).off('.noScroll');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
