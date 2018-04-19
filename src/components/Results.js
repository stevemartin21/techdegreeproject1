import React from 'react';

import Result from './Result';

//  this is a reference tot he result compennt which will receive the url prop and then pass it into the individual li, also I added a pic id key 

//  I have set the data received by the props and mapped over it to separate each item in the object to create a url to reference in the result item

//the return is to use the and insert the pics variable with has incorporated the result component 

const Results = props =>{

	const listOfPics = props.data;
	let pics = listOfPics.map(pic =>
	
		<Result key={pic.id}  url={'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg'} />
		);
	return (
		<div className='photo-container'>
				<ul>
					{pics}
				</ul>
		</div>
		)
}
export default Results;