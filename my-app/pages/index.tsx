import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import StudyTimer from '../components/StudyTimer'
import Graph from '../components/Graph'
import DynamicTable from '../components/DynamicTable'

const Home: React.FC = ({ allPostsData }) => {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <StudyTimer/>
      <Graph />
      <DynamicTable />

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const allPostsData: any = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
