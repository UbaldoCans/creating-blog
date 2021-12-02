import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import firebase from '../../lib/firebase'

const PostForm = () => {
    const [ postData, setPostData ] = useState({})
    const changeHandler = event => {
        const value = event.target.value
        const property = event.target.name

        setPostData( { ...postData, [property]: value } )
        console.log( property, value )
        console.log( postData )
    }

    const savePost = ( ) => {
        console.log( postData )
        fetch("https://blog-con-react-default-rtdb.firebaseio.com/",{
            method:"POST",
            body: JSON.stringify( postData )
        })
        .then( response => response.json())
        .then( json => console.log( json ))

    }

    return (
        <Form>
            <FormGroup>
                <Label for="title">Título</Label>
                <Input type="text" name="title" id="title" placeholder="Cómo se llama tu post?" onChange={changeHandler}/>
            </FormGroup>
            <FormGroup>
                <Label for="cover">Cover</Label>
                <Input type="text" name="cover" id="cover" placeholder="Ingresa una url como portada de tu post" onChange={changeHandler}/>
            </FormGroup>
            <FormGroup>
                <Label for="content">Contenido</Label>
                <Input type="textarea" name="content" id="content" onChange={changeHandler}/>
            </FormGroup>
            <Button className="mt-3" onClick={ savePost }>Submit</Button>
        </Form>
    )
}
export default PostForm