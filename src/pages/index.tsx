import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="d-flex align-items-center justify-content-center">
          <div className="container">
              <div className="d-flex justify-content-center">
                  <div className="d-flex flex-column align-items-center">
                      <img className="img-fluid mb-4" src="assets/images/logo.png" width="120px"/>
                      <form>
                          <div className="form-row d-flex flex-column">
                              <div className="form-group">
                                  <input className="input_personalizado col-12 form-control" type="email" id="email" aria-describedby="email" placeholder="E-mail" required/>
                              </div>
                              <div className="form-group">
                                  <input className="input_personalizado col-12" type="password" id="Senha" placeholder="Senha" required/>
                              </div>
                              <div className="form-group" style={{textAlign: 'end'}}>
                                  <a href="esqueceuSenha.html"><small className="form-group">Esqueceu a senha?</small></a>
                              </div>
                              
                          </div>
                          <button className="btn-personalizado" type="submit">Entrar</button>
                        </form>
                  </div>
              </div>
            </div>
        </main>
        <footer className="container-fluid">
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-start mt-3">
                    <img className="img-fluid" src="/assets/images/logo_rodape.png" width="250px"/>
                </div>
            </div>
        </footer>    
    </>
  )
}

export default Home;
