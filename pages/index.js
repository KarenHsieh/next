import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

// import { getSortedPostsData } from '../lib/posts'


export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            {data.name.first}
            <br />
            {data.name.last}
            <br />
            {data.phone}
          </li>
        </ul>
      </section>
    </Layout>
  )
}

// 靜態資料部分
/* export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
} */

// 參考資料 https://www.nextjs.cn/docs/basic-features/data-fetching


// 動態資料
export async function getServerSideProps(context) {
  // const allPlayerData = getPlayerData();

  const res = await fetch('https://randomuser.me/api/');
  let data = await res.json(); // 這裡的await很重要! 沒加的話一直報 cannot be serialized as JSON 錯誤
  data = JSON.parse(JSON.stringify(data)).results[0]
  
  return { props: { data } }
} 
