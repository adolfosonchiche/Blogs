import React, { useState } from 'react'
import firebase from '../../lib/firebase'
import {
    Col, 
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const Create = () => {

    const [ entryData, setEntryData ] = useState({})
    const [ file, setFile ] = useState(null)
    const database = firebase.database()
    const entradaRef = database.ref('/entrada')
    const storageRef = firebase.storage().ref()

    const changeHandler = event => {
        const property = event.target.name
        const value = event.target.value
        setEntryData({...entryData, [property]: value})
    }

    const fileHandler = event => {
        console.log( event.target)
        const file = event.target.files[0]
        setFile(file)
    }

    const saveEntry = () => {
        console.log(entryData)

        let uploadTask = storageRef.child(`/pictures/${file.name}`).put(file)
        uploadTask.on('state_changed', function(snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('upload is ' + progress + '% done')

            // eslint-disable-next-line default-case
            switch(snapshot.state) {
                case firebase.storage.TaskState.PAUSED: //en pausa
                    console.log('en pausa');
                    break;
                case firebase.storage.TaskState.RUNNING: //corriendo
                    console.log('upload is runnning');
                    break;
            }
        }, function(error) {
            
        }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('file available at ', downloadURL);
                entradaRef.push({...entryData, picture:downloadURL})
            });
        });
    }

    return (
        <Col xs="12">
            <h1>Crear</h1>
            <Form className="bg-dark text-white border rounder my-3 p-3">
                <FormGroup>
                    <Label>Titulo</Label>
                    <Input type="text" name="title" onChange={changeHandler} />
                </FormGroup>
                <FormGroup>
                    <Label>Contenido</Label>
                    <Input type="textarea"
                        name="content" 
                        onChange={changeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Imagen</Label>
                    <Input 
                        type="file"
                        name="picture"
                        onChange={ fileHandler } 
                    />
                </FormGroup>
                <Button type="button" color="light" className="mt-3" onClick={saveEntry}>Guardar</Button>
            </Form>
        </Col>
    )

}

export default Create
