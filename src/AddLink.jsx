import React, {useState} from 'react';
// import {useHistory} from 'react-router-dom';

function AddLink({ onSaveLink }) {
    const [url, setUrl] = useState('');
    // const history = useHistory;

    const handleSubmit = (event) => {
        event.preventDefault();
        const link = {url};
        onSaveLink(link);
        setUrl('');
        // history.push('/');
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                URL:
                <input 
                    type="text"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)} />
            </label>
            <button type='submit'>Add Link</button>
        </form>
    )
};

export default AddLink;