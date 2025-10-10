import css from './NoteList.module.css'
import type { Note } from '../../types/note';

interface NoteListProps {
    noteSet: Note[],
}

const NoteList = ({ noteSet }: NoteListProps) => {

    return (
        <ul className={css.list}>
            {noteSet.map((note) => (<li className={css.listItem}  key={note.id}>
                <h2 className={css.title}>{ note.title}</h2>
                <p className={css.content}>{note.content }</p>
                <div className={css.footer}>
                    <span className={css.tag}>{note.tag }</span>
                    <button className={css.button}>Delete</button>
                </div>
            </li>))}
            
        </ul>
    )
};

export default NoteList