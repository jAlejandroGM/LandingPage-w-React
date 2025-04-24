import React from "react";

const Card = ({ title, text }) => {
    return (
        <div className="card text-center h-100">
            <img src="https://picsum.photos/500/325" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
            <div className="card-footer text-body-secondary">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
};

export default Card;