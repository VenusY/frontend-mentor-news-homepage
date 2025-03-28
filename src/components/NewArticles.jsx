import '../styles/scss/NewArticles.scss';

export default function NewArticles() {
  return (
    <section className='new-articles'>
      <h2 className='new-articles__main-heading'>New</h2>

      <article className='new-articles__article'>
        <h3 className='new-articles__article-heading'>
          Hydrogen VS Electric Cars
        </h3>
        <p className='new-articles__description'>
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </article>

      <article className='new-articles__article'>
        <h3 className='new-articles__article-heading'>
          The Downsides of AI Artistry
        </h3>
        <p className='new-articles__description'>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </article>

      <article className='new-articles__article'>
        <h3 className='new-articles__article-heading'>
          Is VC Funding Drying Up?
        </h3>
        <p className='new-articles__description'>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </article>
    </section>
  );
}
