import { useState } from "react"
import { grid, list } from "../utils/img"
import clsx from "clsx";
import NotesItem from "./NotesItem";


const Notes = ({ notes }) => {
  const [view, setView] = useState(true);
  const classList = clsx("notes__list", { active: !view })
  const viewIcon = view ? list : grid
  const viewSpan = view ? "Список" : "Таблица"

  return (
    <div className="notes">
      <div className="notes__top">
        <h2 className="notes__top-title">Все заметки</h2>
        <button className="notes__top-btn" onClick={() => setView(!view)}>
          <img src={viewIcon} alt="" />
          <span className="notes__top-btn_span">{viewSpan}</span>
        </button>
      </div>
      <div className={classList}>
        
        {notes.map((note)=>(
        <NotesItem key={note.id} note={note} view={view} />
          
        ))}
      </div>
    </div>
  )
}

export default Notes