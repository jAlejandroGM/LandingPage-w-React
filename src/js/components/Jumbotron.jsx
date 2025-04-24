import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-12 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam expedita tempore reprehenderit, ab facilis officiis atque nulla natus ad ipsum aperiam cumque tempora esse iusto neque! Porro, ea, reiciendis quibusdam alias ex omnis eaque velit excepturi libero exercitationem laborum quas perferendis deleniti earum esse corporis ut? Corporis fugiat eos, assumenda labore magnam dolore, neque consequuntur asperiores quis itaque esse?</p>
                <button className="btn btn-primary btn-lg" type="button">Call to Action!</button>
            </div>
        </div>
    );
};

export default Jumbotron;