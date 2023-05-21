import "../style/headerStyle.css";

function header() {
  return (
    <div class="header-root">
      <div class="logo"><img src="/cars/logo.png" alt="logo"/></div>
      <nav>
        <div class = "header-element">
          <a href="/">Home</a>
        </div>
        <div class = "header-element">
          <a href="/">About</a>
        </div>

        <div class = "header-element">
          <a href="products">Product</a>
        </div>

        <div class = "header-element">
          <a href="/">Contact Us</a>
        </div>
      </nav>
    </div>
  );
}

export default header;
