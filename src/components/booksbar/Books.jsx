import React from 'react';
import {useState, useRef, useEffect} from 'react';
import c from './Books.module.css';
import {GrPrevious , GrNext} from 'react-icons/gr';
import { v4 as uuidv4 } from 'uuid';


const Books = () => {
    const[currentBooks,  setCurrentBooks] = useState(0)
    const bookWrapperEl = useRef();
    const booksLink =[
        'https://m.media-amazon.com/images/I/91vnzZO5yPL._AC_SY400_.jpg',
        'https://m.media-amazon.com/images/I/81EVdWdmOKL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_SY400_.jpg',
        'https://m.media-amazon.com/images/I/81t-IstQ+ZL._AC_SY400_.jpg',
        'https://m.media-amazon.com/images/I/811ftjOO5FL._AC_SY400_.jpg',
        'https://m.media-amazon.com/images/I/61CJaHZI6cL._AC_SY400_.jpg',
        'https://m.media-amazon.com/images/I/81v6X23UlML._AC_SY400_.jpg',
        'https://m.media-amazon.com/images/I/81nzxODnaJL._AC_SY400_.jpg',
        'https://m.media-amazon.com/images/I/71FVbHHW+AL._AC_SY400_.jpg',
        'https://m.media-amazon.com/images/I/91K20PnjefL._AC_SY400_.jpg',
        'https://m.media-amazon.com/images/I/81k1b6u4YvL._AC_SY400_.jpg'

    ];


    function swipeRight(){
        if(currentBooks < booksLink.length - 1){
            setCurrentBooks(item => item + 7)
        }else{
            setCurrentBooks(0);
        }
     }


     function swipeLeft(){
        if(currentBooks > 0){
            setCurrentBooks(item => item - 7)
        }else{
            setCurrentBooks(booksLink.length - 7)
        }

     }

     useEffect( () => {
        bookWrapperEl.current.scrollLeft = currentBooks * bookWrapperEl.current.offsetWidth; 
    }, [currentBooks])

  return (
       <div className={c.books__carousel}>
        <button onClick={swipeLeft} className={c.books__button}><GrPrevious className={c.button__icon}/></button>
        <div className={c.image__item} ref={bookWrapperEl} >
            {             
                    booksLink.map(photo => 
                    <div className={c.books_photo} key={uuidv4()}>
                        <img src={photo} alt="" />
                    </div>
                    )
            }
        </div>
            <button onClick={swipeRight} className={c.books__button}><GrNext className={c.button__icon}/></button>
        </div>
)
}

                
  

export default Books;