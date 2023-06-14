import React from 'react';

const businesses = {
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/0YVZcJY1cQwYcBQmGwY6Dg/o.jpg",
    name: "Pizza Hut",
    address: "123 Main St",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    category: "Pizza",
    rating: 4.5,
    reviews: 100
}

function Business() {
    return (
        <div className="Business">
            <img src={businesses.img} alt={businesses.name}/>
            <h2>{businesses.name}</h2>
            <p>{businesses.address}</p>
            <p>{businesses.city}, {businesses.state} {businesses.zip}</p>
            <p>{businesses.category}</p>
            <p>{businesses.rating} stars ({businesses.reviews} reviews)</p>
        </div>
    );
}

export default Business;
