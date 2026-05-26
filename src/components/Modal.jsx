import { useContext, useState } from 'react'
import { v4 } from 'uuid'
import { TodoContext } from '../context/todoContext'
import { useTranslation } from 'react-i18next'

const Modal = ({ edit, editNote }) => {
    const { t } = useTranslation();

    const [title, setTitle] = useState(editNote?.title ?? '')
    const [desc, setDesc] = useState(editNote?.desc ?? '')

    const { closeModal, addOrChangeNote } = useContext(TodoContext)

    const addOrChange = () => {
        if (title.length > 2 && desc.length > 2) {
            const note = {
                id: editNote?.id ?? v4(), title, desc, date: new Date().toLocaleDateString(),
            };
            addOrChangeNote(note)
            closeModal()
            setTitle('')
            setDesc('')
        }
    }


    return (
        <div className='modal'>
            <div className="modal__block">
                <h3 className='modal__block-title'>{edit ? t("editNote") : t("addNote")}</h3>
                <div className="modal__block-form">
                    <label >
                        <input type="text"
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                        <span>Title</span>
                    </label>
                    <label >
                        <input type="text"
                            placeholder='Content'
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)} />
                        <span>Content</span>
                    </label>
                </div>
                <div className="modal__block-bottom">
                    <button className='modal__block-bottom_btn red' onClick={() => closeModal()} >{t("cancel")}</button>
                    <button className='modal__block-bottom_btn purple' onClick={() => addOrChange()} >{edit ? t("changeNote") : t("add")}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal