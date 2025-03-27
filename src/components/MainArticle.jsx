export default function MainArticle() {
  return (
    <article className='main-article'>
      <img
        src={require('../assets/images/image-web-3-desktop.jpg')}
        alt='Toy building blocks'
        className='main-article__hero-image'
      />
      <img
        src={require('../assets/images/image-web-3-mobile.jpg')}
        alt='Toy building blocks'
        className='main-article__hero-image'
      />

      <section className='main-article__bottom-section'>
        <h1 className='main-article__heading'>The Bright Future of Web 3.0?</h1>

        <div className='main-article__container'>
          <p className='main-article__description'>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className='main-article__button'>Read More</button>
        </div>
      </section>
    </article>
  );
}
