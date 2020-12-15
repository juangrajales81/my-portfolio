import Layout from '../components/Layout';
import fetchFromCMS from '../lib/service';
import Image from 'next/image'


export default function Home({ portfolioItems }) {
  return (
    <Layout>
      <div className="entries">
        <div className="row justify-content-start ">
          {portfolioItems.map((portfolio) => (
            <div className="col-md-6" key={'1'+portfolio.Image.id}>
              <div className="entry mb-3" key={'2'+portfolio.Image.id}>
                <div className="main-image" key={'3'+portfolio.Image.id}>
                <Image key={'i'+portfolio.Image.id} src={portfolio.Image.name} width={1024} height={692} alt={portfolio.Headline} />
                  <h1 key={'h'+portfolio.Image.id}>{portfolio.Headline}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const portfolioItems = await fetchFromCMS('portfolios');  
  return {
    props: { portfolioItems },
    revalidate: 1,
  };
}