import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { Gifgrid } from './components/Gifgrid';

export const GifExpertApp = () => {

    //const categories = ["One Punch", "Samurai X", "Dragon Ball"]
    const [categories, setCategories] = useState(["Dragon Ball"]);

    /*const handleAdd=()=>{
        //setCategories([...categories,'Hunter']);
        setCategories(cats=>[...cats,'Hunter']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <Gifgrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}
