import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifsExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    // const  [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'jejejejej'])
    //     //setCategories(cats => [...cats, 'jejejej']);
    // }

    return (
        <>
            <h2>GifsExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}
