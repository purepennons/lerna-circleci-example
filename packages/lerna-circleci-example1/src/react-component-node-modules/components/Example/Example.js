import React from 'react';
import classnames from 'classnames/bind'
import styles from './Example.scss'

const cx = classnames.bind(styles)

const Example = props => <div className={cx('style')}><h1>Example - {props.name}</h1></div>;

export default Example;
