import React, {useState} from 'react';
import Link from "next/link";
import { Search } from 'react-feather';
import './search.module.scss';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const updateSearchTerm = (event)=>{
        setSearchTerm(event.target.value);
    };
    //Search function
    const searchHandler = (event) =>{
        event.preventDefault();
        // Get the search term
        // Make API call with the search term
        // Navigate to the page with the result s
    };

    return (
        <form className="rounded shadow mb-4" onSubmit={searchHandler}>
            <div className="input-group input-group-lg">
                <span className="input-group-text border-0 pe-1"
                      style={{
                          borderTopRightRadius: '0px',
                          borderBottomRightRadius: '0px'
                      }}
                >
                    <Search />
                 </span>
                <input className="form-control border-0 px-1 custom_padding"
                       type="text"
                       value={searchTerm}
                       onChange={updateSearchTerm}
                       style={{
                           borderTopLeftRadius: '0px',
                           borderBottomLeftRadius: '0px',
                           borderTopRightRadius: '0px',
                           borderBottomRightRadius: '0px'
                       }}
                       aria-label="Search our blog..."
                       placeholder="Search our blog..."/>
                <span className="input-group-text border-0 py-0 ps-1 pe-3"
                    style={{
                        marginLeft:'-1px',
                    }}
                >
                <Link href={`/blog/search/${searchTerm}`}>
                    <a className={'btn btn-sm btn-primary'}>Search</a>
                </Link>
            </span>
            </div>
        </form>
    );
}

export default SearchBar;
