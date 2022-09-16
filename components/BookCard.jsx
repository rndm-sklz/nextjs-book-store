import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/home.module.css';
import Context from './context/context';

export default function BookCard({ book }) {
	const [pcsBookCard, setPcsBookCard] = useState(0);
	const { countPcs, setCountPcs } = useContext(Context);
	function handlerInputPcs() {
		setCountPcs(countPcs);
	}
	return (
		<div className={styles.card}>
			<Image
				priority
				src={book.cover}
				width={300}
				height={450}
				alt={book.title}
			/>
			<div className={styles.cardDecription}>
				<h3>{book.title}</h3>
				<p className={styles.genre}>{book.genre}</p>
				<p>{book.author}</p>
				<p className={styles.price}>$ {book.price}</p>
				<div className={styles.buyBlock}>
					<button type="button" className={styles.buyBtn}>Buy</button>
					<label htmlFor="bookCount" className={styles.buyLabel}>Quantity:</label>
					<input
						type="number"
						id="bookCount"
						min={0}
						max={99}
						maxLength={2}
						className={styles.buyInput}
						// defaultValue={0}
						value={pcsBookCard}
						onChange={(e) => setPcsBookCard(e.target.value)}
					/>
					<span>pcs</span>
				</div>
			</div>
		</div>
	);
}

BookCard.propTypes = {
	book: PropTypes.shape({
		id: PropTypes.number,
		genre: PropTypes.string,
		author: PropTypes.string,
		cover: PropTypes.string,
		title: PropTypes.string,
		year: PropTypes.number,
		price: PropTypes.number,
	}).isRequired,
	// countPcs: PropTypes.number.isRequired,
	// setCountPcs: PropTypes.func.isRequired,
};
