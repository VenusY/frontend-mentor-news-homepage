import '../styles/scss/OtherArticles.scss';

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
          <h2 className='other-articles__number'>01</h2>
          <h3 className='other-articles__article-heading'>
            Reviving Retro PCs
          </h3>
          <p className='other-articles__description'>
            What happens when old PCs are given modern upgrades?
          </p>
        </section>
      </article>

      <article className='other-articles__article'>
        <img
          src={require('../assets/images/image-top-laptops.jpg')}
          alt='Laptop keyboard close up'
          className='other-articles__image'
        />

        <section className='other-articles__text-section'>
          <h2 className='other-articles__number'>02</h2>
          <h3 className='other-articles__article-heading'>
            Top 10 Laptops of 2022
          </h3>
          <p className='other-articles__description'>
            Our best picks for various needs and budgets.
          </p>
        </section>
      </article>

      <article className='other-articles__article'>
        <img
          src={require('../assets/images/image-gaming-growth.jpg')}
          alt='Game controller hovering above hand'
          className='other-articles__image'
        />

        <section className='other-articles__text-section'>
          <h2 className='other-articles__number'>03</h2>
          <h3 className='other-articles__article-heading'>
            The Growth of Gaming
          </h3>
          <p className='other-articles__description'>
            How the pandemic has sparked fresh opportunities.
          </p>
        </section>
      </article>
    </div>
  );
}
