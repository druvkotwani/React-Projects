const hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          officiis ipsa facere consequatur laudantium aliquam optio adipisci.
          Delectus,
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available on</p>
        </div>

        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon logo" />
          <img src="/images/flipkart.png" alt="flipkart logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="nike logo" />
      </div>
    </main>
  );
};

export default hero;
