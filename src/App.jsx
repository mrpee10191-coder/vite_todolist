import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import { edit } from './utils/img'
import Modal from './components/Modal'
import { TodoContext } from './context/todoContext'

function App() {

  const setLS = () =>
    (localStorage.notes = notes.length ? JSON.stringify(notes) : "");

  const getLS = () => localStorage.notes ? JSON.parse(localStorage.notes) : [];


  const [notes, setNotes] = useState(getLS())
  const [searchVal, setSearchVal] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [editNote, setEditNote] = useState(null)

  const searchNotes = notes.filter((item) => item.title.toLowerCase().includes(searchVal.toLowerCase()))

  const openModalHandler = () => {
    setIsModalOpen(true)
    setIsEdit(false)
    setEditNote(null)
  }

  const changeHandler = (note) => {
    setIsModalOpen(true)
    setIsEdit(true)
    setEditNote(note)
  }

  const closeModalHandler = () => {
    setIsEdit(false)
    setEditNote(null)
    setIsModalOpen(false)
  }

  const addOrChangeNoteHandler = (note) => {
    if (editNote?.id) {
      const updNotes = notes.map(item => {
        if (note.id == item.id) {
          return note
        }
        return item
      })
      setNotes(updNotes)
    } else {
      setNotes([...notes, note])
    }
  }

  const delNoteHandler = (id) => {
    const changedNotes = notes.filter((item) => item.id != id)
    setNotes(changedNotes)
  }

  useEffect(() => {
    setLS()
  }, [notes])


  return (
    <>
      <TodoContext.Provider value={{
        closeModal: closeModalHandler,
        addOrChangeNote: addOrChangeNoteHandler,
        changeHandler,
        delNoteHandler,
        searchVal,
        setSearchVal,
      }} >
        <Navbar />
        <div className="container">
          <Notes notes={searchNotes} />
        </div>
        <button className='addBtn' onClick={() => openModalHandler()} >
          <img src={edit} alt="" />
        </button>
        {isModalOpen && <Modal edit={isEdit} editNote={editNote} />}

      </TodoContext.Provider>

    </>
  )
}

export default App
