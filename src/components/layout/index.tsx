import { Menu } from './menu'

export const Layout: React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="row main-layout">
                <section className="col-2 menu_lateral">
                    <div className="perfil d-flex align-items-center justify-content-center flex-column mt-3">
                            <img src="assets/images/perfil.svg" width="88px"/>
                            <div className="box_perfil d-flex align-items-center justify-content-center flex-column">
                                <span>Vinícius Almeida</span>
                                <small>gvweb.solucoes@gmail.com</small>
                            </div>
                    </div>
                    {/* Menu ficará aqui*/}
                    <Menu/>
                </section>
                <section className="col-10">
                <div className="row d-flex flex-column">
                    <div className="menu_topo d-flex justify-content-end">
                        <div className="d-flex justify-content-center align-items-center" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="Clique para trocar de sala!">
                            <small style={{ color: 'black', fontWeight: 'bold', fontSize: '12px'}}>LOCALIZAÇÃO: SALA 01</small>
                            <img src="assets/images/change.svg" width="20px" style={{border: 'solid 1px', borderRadius: '4px', backgroundColor: '#2D4562'}} className="img-fluid mr-4 ml-1"/>
                        </div>
                    </div>
                    <div className="conteudo">
                        <div className="container-lg mt-5">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb p-0">
                                  <li className="breadcrumb-item active" aria-current="page">Home</li>
                                </ol>
                              </nav> <hr/>
                              <div className="card p-4 shadow">
                                <div className="alert alert-primary" role="alert">
                                    <h4 className="alert-heading text-start"><img src="assets/images/bell.svg"/> Painel de Chamados Odontologia <small style={{color: 'black'}}>versão: 1.0</small></h4>
                                    <hr/>
                                    <p className="mb-3">Gerencie salas, usuários, pacientes, acesso ao chamador e painel de TV.</p>  
                                    <p className="mb-0"><b>Dúvidas?</b></p>
                                    <p className="mb-0">Estamos à disposição no e-mail informatica@aapvr.com.br ou através do sistema <a href="https://solicitaweb.aapvr.com.br">solicita web.</a></p>
                                  </div>
                              </div> 
                        </div>   
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
}