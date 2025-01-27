import React from 'react';

const ProductCard = (props) => {
  return (
    <div
      className="card shadow-lg rounded-lg overflow-hidden"
      style={{ width: '18rem', margin: '1rem', backgroundColor: '#f9f9f9' }}
    >
      <img
        className="card-img-top"
        src={props.productList.image}
        alt="Product"
        style={{ height: '15rem', objectFit: 'cover' }}
      />
      <div className="card-body" style={{ padding: '1rem' }}>
        <h5 className="card-title" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {props.productList.name}
        </h5>
        <p
          className="card-text text-muted"
          style={{ fontSize: '0.9rem', marginBottom: '1rem' }}
        >
          {props.productList.Description}
        </p>
        <p
          className="card-text"
          style={{ fontWeight: 'bold', color: '#4caf50', fontSize: '1.1rem' }}
        >
          {props.productList.price} บาท
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
