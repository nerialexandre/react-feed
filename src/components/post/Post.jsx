import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { useState } from 'react';

export function Post({ author, content, publishedAt })
{
  const [comments, setComments] = useState([
    'Muito Legal'
  ])
  const [commentText, setCommentText] = useState('')
  const publishedAtFormatted = format(new Date(publishedAt), "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(new Date(publishedAt), {
    locale: ptBR,
    addSuffix: true
  })

  const handleSubmit = (event) =>
  {
    event.preventDefault()
    setComments([...comments, commentText])
    setCommentText('')
  }

  const handleCommentText = (event) =>
  {
    setCommentText(event.target.value)
  }

  const deleteComment = (comment) =>
  {
    const commentIndex = comments.findIndex((element) =>
    {
      return comment === element
    })

    setComments(comments.splice(commentIndex, 1))
  }

  const newCommentIsEmpty = commentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorinfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedAtFormatted}
          dateTime={publishedAt}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map((item) =>
          {
            if (item.type === 'paragraph') {
              return (<p key={item.content}>{item.content}</p>)
            } else if (item.type === 'link') {
              return (<a key={item.content} href="">{item.content}</a>)
            }
          })
        }
      </div>

      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleCommentText}
          value={commentText}
          placeholder='Deixe seu comentário'
          required
        />
        <button type='submit' disabled={newCommentIsEmpty}>
          Publicar
        </button>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment) =>
          {
            return (<Comment key={comment} content={comment} onDeleteComment={deleteComment} />)
          })
        }
      </div>


    </article>
  )
}