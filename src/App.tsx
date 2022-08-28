import { Header } from './components/header/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/sidebar/Sidebar'
import { Post, PostProps } from './components/post/Post'

interface Posts extends PostProps {
  id: number
}
const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/58913156?v=4',
      name: 'Alexandre Neri',
      role: 'Desenvolvedor Backend'
    },
    content: [
      { type: 'paragraph', content: 'Fla galera' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente odio officia laudantium? Rerum incidunt id similique neque dolorum et quidem accusamus blanditiis impedit, omnis eaque corporis, reprehenderit numquam. Repudiandae, atque.'
      },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-08-21 18:00:00').toISOString()
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/42701487?v=4',
      name: 'Gilmar Nome',
      role: 'Desenvolvedor FullStack'
    },
    content: [
      { type: 'paragraph', content: 'Oi Pessoal!' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente odio officia laudantium?'
      },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-10 16:00:00').toISOString()
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
