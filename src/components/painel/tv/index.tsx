export const PainelTV: React.FC = () => {
    return ( 
        <>
            <nav id="header" className="container-fluid px-5 py-2 bg-blue">
                <div className="row">
                    <div className="col-sm">
                        <img src="/assets/images/logo.png" alt="logo-aapvr"/>
                    </div>
                    <div className="col-sm d-flex align-items-center">
                        <h1>UNIDADE DE ODONTOLOGIA</h1>
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
            </nav>
            
            <div className="mx-5 my-3 border-1 card">
                <div className="container-fluid panel">
                    <h5>PACIENTE CHMADO</h5>
                    <h3>Nome do Paciente</h3>
                </div>
                <div className="container-fluid panel">
                    <h5>PROFISSIONAL</h5>
                    <h3>Nome do Profissional</h3>
                </div>
                <div className="container-fluid panel">
                    <h5>SALA</h5>
                    <h3>01-B</h3>
                </div>
                
                
            </div>
            <div className="mx-5 my-3 border-1 card">
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col-lg">Últimas Chamadas</th>
                        <th scope="col-sm">Sala</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nome do Paciente</td>
                        <td>01-B</td>
                      </tr>
                      <tr>
                        <td>Nome do Paciente</td>
                        <td>01-B</td>
                      </tr>
                      <tr>
                        <td>Nome do Paciente</td>
                        <td>01-B</td>
                      </tr>
                    </tbody>
                </table>
            </div>
        </>
    ) 
}