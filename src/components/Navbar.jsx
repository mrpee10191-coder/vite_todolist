import { useContext, useState } from 'react'
import { back, reset, search } from '../utils/img'
import { TodoContext } from '../context/todoContext';
import { useTranslation } from 'react-i18next';


const Navbar = () => {


    const { t, i18n } = useTranslation();

    const [show, setShow] = useState(true);
    const [language, setLanguage] = useState("ru")
    const { searchVal, setSearchVal } = useContext(TodoContext)

    const bac = () => {
        setShow(true);
        setSearchVal("");
    }

    const clearSearchVal = () => setSearchVal("")

    const changeLangHandler = () => {
        const currentLang = language == "ru" ? "en" : "ru";
        setLanguage(currentLang);
        i18n.changeLanguage(language);
    }

    return (
        <header className='header'>
            <div className='header__nav'>
                {show ? (<>
                    <button className='header__nav-lang' onClick={() => changeLangHandler()}>{language}</button>
                    <h1 className='header__nav-title'>{t("title")}</h1>
                    <button className='header__nav-search' onClick={() => setShow(false)}>
                        <img src={search} alt="" />
                    </button>
                </>
                ) : (
                    <>
                        <button className='header__nav-back' onClick={() => bac()}>
                            <img src={back} alt="" />
                        </button>
                        <input type="text" className='header__nav-input' placeholder={`${t("search")}`} value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
                        <button className='header__nav-clear' type='reset' onClick={() => clearSearchVal()}>
                            <img src={reset} alt="" />
                        </button>
                    </>
                )}

            </div>
        </header >
    )
}

export default Navbar