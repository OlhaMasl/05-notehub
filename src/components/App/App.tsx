import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { fetchNotes } from '../../services/noteService';
import NoteList from '../NoteList/NoteList';
import css from './App.module.css'
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';
import NoteForm from '../NoteForm/NoteForm';
import SearchBox from '../SearchBox/SearchBox';

function App() {
  const [searchValue, setSerchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

 const { data } = useQuery({
    queryKey: ['notes',searchValue, currentPage,],
   queryFn: ()=>fetchNotes(searchValue, currentPage),
    placeholderData: keepPreviousData
 });
  
  console.log(data);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleSearch = useDebouncedCallback((search: string) => {
    setSerchValue(search)
  }, 1000);
 
  return (
    <>
  <div className={css.app}>
	<header className={css.toolbar}>
          <SearchBox onSearch={handleSearch} inputValue={searchValue } />
    {data && data?.totalPages>1 &&<Pagination page={currentPage} onChangeFn={(selectedPage)=>setCurrentPage(selectedPage)} total={data?.totalPages} />}
		<button className={css.button} onClick={openModal}>Create note +</button>
        </header>
        <main>
          {data && data?.notes.length > 0 && <NoteList noteSet={data?.notes} />}
        </main>
        {isModalOpen && <Modal>
          <NoteForm onClose={ closeModal} />
        </Modal>}
</div>
    </>
  )
};

export default App
