

function App() {
  return (
    <div className="wrapper">
      <header className='header'>
        <div className="main">
          <h1 className="main_header">Everything You Love About Coffee</h1>
          <div className="main_logo">
            <div className="main_logo_divider"></div>
            <div className="main_logo_img"><img src={require('./img/bg/coffee-beans-white-sec.svg').default} alt='logo' /></div>
            <div className="main_logo_divider"></div>
          </div>
          <h2 className="main_subheader">We makes every day full of energy and taste</h2>
          <h2 className="main_subheader">Want to try our beans?</h2>
          <button className='main_button'>More</button>
        </div>

        <nav className='nav header__nav'>
          <ul>
            <li>
              <div className="logo_img">
                <img src={require('./img/bg/coffee-beans-white.svg').default} alt='logo' />
              </div>
              <a href="https://www.facebook.com/">Coffee house
              </a></li>
            <li><a href="https://www.facebook.com/">Our coffee
            </a></li>
            <li><a href="https://www.facebook.com/">For your pleasure
            </a></li>
          </ul>
        </nav>
      </header>

      <section className='about'>
        <h2 className="subheader about__subheader">About Us</h2>
        <div className="logo about__logo">
          <div className="logo_divider"></div>
          <div className="logo_img"><img src={require('./img/bg/coffee-beans-black-sec.svg').default} alt='logo' /></div>
          <div className="logo_divider"></div>
        </div>

        <p className='about__descr'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.
          <br />
          <br />
          Now residence dashwoods she excellent you. Shade being under his bed her, Much
          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
          horrible but confined day end marriage. Eagerness furniture set preserved far
          recommend. Did even but nor are most gave hope. Secure active living depend son
          repair day ladies now.</p>
      </section>

      <section className='best'>
        <h2 className="subheader best__subheader">Our best</h2>

        <div className="best__all-products">
          <div className="product best__product">
            <img src='./img/out-best/b-1.png' alt="product-1" />
            <p>Solimo Coffee Beans 2 kg</p>
            <b>10.73$</b>
            <button className='product__button' >+</button>
            
          </div>
          <div className="product best__product">
            <img src='./img/out-best/b-2.png' alt="product-1" />
            <p>Presto Coffee Beans 1 kg</p>
            <b>15.99$</b>
            <button className='product__button' >+</button>
          </div>
          <div className="product best__product">
            <img src='./img/out-best/b-3.png' alt="product-1" />
            <p>AROMISTICO Coffee 1 kg</p>
            <b>6.99$</b>
            <button className='product__button' >+</button>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className="nav-wrraper">
          <nav className='nav footer__nav'>
            <ul>
              <li>
                <div className="logo_img">
                  <img src={require('./img/bg/coffee-beans-black.svg').default} alt='logo' />
                </div>
                <a href="https://www.facebook.com/">Coffee house
                </a></li>
              <li><a href="https://www.facebook.com/">Our coffee
              </a></li>
              <li><a href="https://www.facebook.com/">For your pleasure
              </a></li>
            </ul>
          </nav>
        </div>

        <div className="logo footer__logo">
          <div className="logo_divider"></div>
          <div className="logo_img"><img src={require('./img/bg/coffee-beans-black-sec.svg').default} alt='logo' /></div>
          <div className="logo_divider"></div>
        </div>
      </footer>


    </div>
  );
}

export default App;
