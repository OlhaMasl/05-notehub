import { fetchNotes } from '../../services/noteService';
import NoteList from '../NoteList/NoteList';
import css from './App.module.css'
import { useQuery } from '@tanstack/react-query';

function App() {

 const { data } = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
 });
  
  console.log(data);
 
  return (
    <>
  <div className={css.app}>
	<header className={css.toolbar}>
		{/* Компонент SearchBox */}
		{/* Пагінація */}
		{/* Кнопка створення нотатки */}
        </header>
        <main>
          {data?.notes > 0 && <NoteList noteSet={data?.notes} />}
        </main>
        
</div>

    </>
  )
};

export default App
