import React from "react";

export const Search = ({ handleSubmit, handleChange }) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s6 offset-s3">
          <form action="" onSubmit={handleSubmit}>
            <div className="input-field">
              <input type="text" placeholder="Search" onChange={handleChange} />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
