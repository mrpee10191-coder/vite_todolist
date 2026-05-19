import React, { useContext, useState } from 'react'
import { back, reset, search } from '../utils/img'
import { TodoContext } from '../context/todoContext';

const Navbar = () => {
    const [show, setShow] = useState(true);

    const { searchVal, setSearchVal } = useContext(TodoContext)

    return (
        <header className='header'>
            <div className='header__nav'>
                {show ? (<>
                    <button className='header__nav-lang'>RU</button>
                    <h1 className='header__nav-title'>Заметки</h1>
                    <button className='header__nav-search' onClick={() => setShow(false)}>
                        <img src={search} alt="" />
                    </button>
                </>
                ) : (
                    <>
                        <button className='header__nav-back' onClick={() => setShow(true)}>
                            <img src={back} alt="" />
                        </button>
                        <input type="text" className='header__nav-input' placeholder='Поиск...' value={searchVal} onClick={(e) => setSearchVal(e.target.value)} />
                        <button className='header__nav-clear' type='reset'>
                            <img src={reset} alt="" />
                        </button>
                    </>
                )}

            </div>
        </header >
    )
}

export default Navbar