import { useContext } from 'react'
import { edit, remove } from '../utils/img'
import clsx from 'clsx'
import { TodoContext } from '../context/todoContext'
import { useTranslation } from 'react-i18next'


const NotesItem = ({ note, view }) => {
    const { t } = useTranslation();

    const itemTop = clsx('notes__list-item_top', { active: !view })

    const { changeHandler, delNoteHandler } = useContext(TodoContext)

    return (
        <div className='notes__list-item'>
            <div className={itemTop}>
                <h4 className="notes__list-item_top-title">{note.title}</h4>
                <p className="notes__list-item_top-date">{note.date}</p>
            </div>
            <p className="notes__list-item_desc">
                {note.desc}
            </p>
            <div className="notes__list-item_bottom">
                <button
                    className="notes__list-item_bottom-btn purple"
                    onClick={() => changeHandler(note)}>
                    <img src={edit} alt="" />
                    <span>{t("edit")}</span>
                </button>
                <button className="notes__list-item_bottom-btn red" onClick={() => delNoteHandler(note.id)}>
                    <img src={remove} alt="" />
                    <span>{t("remove")}</span>
                </button>
            </div>

        </div>
    )
}

export default NotesItem