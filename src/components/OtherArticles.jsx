export default function OtherArticles() {
  return (
    <div className='other-articles'>
      <article className='other-articles__article'>
        <img
          src={require('../assets/images/image-retro-pcs.jpg')}
          alt='Retro PC'
          className='other-articles__image'
        />

        <section className='other-articles__text-section'>
          <h2 className='other-articles__number'></h2>
          <h3 className='other-articles__article-heading'></h3>
          <p className='other-articles__description'></p>
        </section>
      </article>

      <article className='other-articles__article'>
        <img
          src={require('../assets/images/image-top-laptops.jpg')}
          alt='Laptop keyboard close up'
          className='other-articles__image'
        />

        <section className='other-articles__text-section'>
          <h2 className='other-articles__number'></h2>
          <h3 className='other-articles__article-heading'></h3>
          <p className='other-articles__description'></p>
        </section>
      </article>

      <article className='other-articles__article'>
        <img
          src={require('../assets/images/image-gaming-growth.jpg')}
          alt='Game controller hovering above hand'
          className='other-articles__image'
        />

        <section className='other-articles__text-section'>
          <h2 className='other-articles__number'></h2>
          <h3 className='other-articles__article-heading'></h3>
          <p className='other-articles__description'></p>
        </section>
      </article>
    </div>
  );
}
