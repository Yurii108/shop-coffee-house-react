import Cards from './components/Cards';
import Footer from './components/Footer';
import HeaderMain from './components/Header-main';

function App() {
  return (
    <div className="wrapper">
      <header className='header'>
       <HeaderMain />
      </header>

      <section className='about'>
        <h2 className="subheader about__subheader">About Us</h2>
        <div className="logo about__logo">
          <div className="logo_divider"></div>
          <div className="logo_img"><img src='/img/bg/coffee-beans-black-sec.svg' alt='logo' /></div>
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
          <Cards />
          <div className="product best__product">
            <img src='/img/out-best/b-2.png' alt="product-1" />
            <p>Presto Coffee Beans 1 kg</p>
            <b>15.99$</b>
            <button className='product__button' >+</button>
          </div>
          <div className="product best__product">
            <img src='/img/out-best/b-3.png' alt="product-1" />
            <p>AROMISTICO Coffee 1 kg</p>
            <b>6.99$</b>
            <button className='product__button' >+</button>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <Footer />
      </footer>


    </div>
  );
}

export default App;
