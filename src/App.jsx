import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { decrement, increment, reload, setCount, useSelectCount } from './store/slice/counterSlice'
import { useEffect, useState } from 'react';
import { fetchPosts, useSelectPosts, useSelectPostsStatus } from './store/slice/postsSlice';
import { addNote } from './store/slice/notesSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(useSelectCount)
  const [value, setValue] = useState('');
  const posts = useSelector(useSelectPosts)
  const status = useSelector(useSelectPostsStatus)
  const [task, setNoteText] = useState("");
  const notes = useSelector(state => state.notes.arr);

  useEffect(() => {
    if(status === 'idle') {
      dispatch(fetchPosts())
    }
  }, [status, dispatch])

  const handleAddNote = () => {
    dispatch(addNote(task))
    setNoteText("");
  }


  if(status === 'loading') return <p>loading...</p>

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Inc +</button>
      <button onClick={() => dispatch(decrement())}>Dec -</button>
      <button onClick={() => dispatch(reload())}>Reload</button>
      <br />
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={() => dispatch(setCount(Number(value)))}>Push</button>

      <ul>
        {posts.map(el => <li key={el.id}>{el.title}</li>)}
        {notes.map((note, index) => (
          <li key={index}>
            {note} 
          </li>
        ))}
      </ul>
      <input type="text" value={task} onChange={(e) => setNoteText(e.target.value)}/>
      <button onClick={handleAddNote}>Add</button>
    
    </>
  )
}

export default App
