function Card() {
  <div className="container text-center mt-5">
    <h1>Gallery</h1>
    <div className="row">
      {Array.apply(null, { length: 9 }).map(() => {
        return (
          <div className="col mb-5">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://via.placeholder.com/200"
                class="card-img-top"
                alt="idk"
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>;
}

export default Card;
