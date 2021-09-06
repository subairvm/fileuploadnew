import React from 'react'
import { connect } from 'react-redux'

import { setUploadFile } from './redux/uploadFile/uploadFile.actions'

import UploadProgress from './components/UploadProgress/UploadProgress'
import logo from './logo.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Alert, Button, Container, Row } from 'react-bootstrap'


function App(props) {
  const handleAttachFIle = e => {
    // could do some validation for the attached file here
    console.log('files upload', e.target.files)
    props.setUploadFile(e.target.files)
    e.target.value = '' // to clear the current file
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">
              <img src={logo} width="30" height="30" alt=""/>
            </a>
          </nav>
        </Row>
        <Row/>
        <Row>
          <div>
          <h1>Envio de arquivos</h1>
          </div>
        </Row>

      <main className="bd-masthead" id="content" role="main">
        <div className="container">
          <div className="row align-items-center">

            <Row>
            <Alert variant="success">
              <Alert.Heading>Envio de documentos</Alert.Heading>
              <p>
                Para enviar documentos, por favor, clique no botão abaixo,
                escolha o documento ou documentos que voce quer enviar e tudo será enviado
                automaticamente.
              </p>
              <hr />
              <p className="mb-0">
                Qualquer duvida basta ligar para 333-222-33322.
              </p>
            </Alert>
        </Row>
            <Row className='align-content-center'>
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <input type="file" className="form-control form-control-lg" id="formFileLg" multiple onChange={handleAttachFIle} />
            </Row>

            <UploadProgress />
          </div>
        </div>
      </main>
      </Container>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setUploadFile: files => dispatch(setUploadFile(files)),
})

export default connect(null, mapDispatchToProps)(App)
