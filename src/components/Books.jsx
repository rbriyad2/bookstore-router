import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {
    const navigation = useNavigation()
if(navigation.state ==='loading'){
  return <LoadingSpinner></LoadingSpinner>
}
    // const [books, setBooks]= useState()
    // useEffect(()=>{
    //     fetch('https://api.itbook.store/1.0/new')
    //     .then(res => res.json())
    //     .then(data => setBooks(data))
    // },[])

    const {books} = useLoaderData()
    console.log(books)
    return (
        <div className='my-container'>
            <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                {books.map(book=> <Book key={book.isbn13} book={book}></Book>)}
            </div>
        </div>
    );
};

export default Books;