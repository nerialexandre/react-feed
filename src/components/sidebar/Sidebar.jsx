import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";
import { Avatar } from '../avatar/Avatar';
export function Sidebar()
{
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/58913156?v=4"/>
        <strong> Alexandre Neri</strong>
        <span>Desenvolvedor Backend</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  )

}