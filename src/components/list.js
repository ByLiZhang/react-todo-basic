import React from 'react';

// console.log('ListData:', listData);

export default props => {
	const listElements = props.list.map((item, index) => {
		return(
				<li key={index} className='collection-item row'>
					<div className='col s8'>
						{item.title}
					</div>
					<div className='col s4 align-right'>
						<button onClick={() => {props.delete(index)}} className='btn red darken-3 '>Delete</button>
					</div>
				</li>
		);
	})

	return(
		<ul className='collection'>
			{listElements}
		</ul>
	);
}