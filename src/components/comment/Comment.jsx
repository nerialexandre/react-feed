import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../avatar/Avatar'
import styles from './Comment.module.css'
export function Comment({ content, onDeleteComment })
{
  const handleDeleteComment = () =>
  {
    onDeleteComment(content)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} className={styles.avatar} src="https://github.com/nerialexandre.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authotAndTime}>
              <span><strong>Alexandre Neri </strong>(Você)</span>
              <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </div>
            <button onClick={handleDeleteComment}><Trash size={24} /></button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span>33</span>
          </button>
        </footer>

      </div>
    </div>
  )
}