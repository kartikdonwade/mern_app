import React from "react";

export default function Card() {
  return (
    <div>
      <div
        className="card m-3  "
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img
          className="card-img-top "
          style={{ width: "100%", height: "15vw", "object-fit": "cover" }}
          src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyfGVufDB8fDB8fHww"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Here Update</p>
          <div className="container w-100">
            <select
              className="m-2 h-100  rounded"
              style={{ "background-color": "#9ED2BE" }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i} value={i}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100  rounded"
              style={{ "background-color": "#9ED2BE" }}
            >
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>
            <div className="fs- d-inline font-weight-bold">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
