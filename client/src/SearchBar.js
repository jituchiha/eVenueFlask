import React, {useState} from 'react'

const values=['Paris', 'Rome', 'Ottawa', 'New Delhi', 'Bagdad', 'Brasilia', 'Seoul', 'Cape Town']

const SearchBar = () => {
    // values = props
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    };

    // if (searchInput.length > 0) {
    //     values.filter((doc) => {
    //         return doc.name.match(searchInput);
    //     });
    // }

    return (
        <div style={{alignSelf: 'center', alignContent: 'center', alignItems: 'center'}}>
        <input
            style={{backgroundColor: 'white'}}
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
        </div>
    )
}

export default SearchBar;
