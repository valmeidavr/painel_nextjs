import { Layout  } from "components"

export const CadastroUsuarios: React.FC = () => {
    return (
        <Layout titulo="Cadastro de Usuários">
            <div className="card p-4 shadow">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-10 col-lg-10">
                        <label htmlFor="Nome">Nome Completo</label>
                        <input type="text" name="name" className="form-control" id="name" required/>
                        </div>
                    </div>  

                    <div className="form-row">
                        <div className="form-group col-md-12 col-lg-6">
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="email" className="form-control" id="email" required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12 col-lg-6">
                        <label htmlFor="Senha">Senha</label>
                        <input type="password" name="password" className="form-control" id="password" required/>
                        </div>
                    </div>

                        
                    <div className="form-row">                     
                        <div className="form-group col-md-12 col-lg-4">
                            <label htmlFor="inputState">Perfil</label>
                            <select id="inputState" className="form-control" name="perfil" required>
                            <option selected disabled  style={{ display: 'none'}}>Selecione...</option>
                                <option value="Profissional"> Profissional </option>
                                <option value="Secretaria"> Secretaria </option>
                                <option value="Administrador"> Administrador </option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <button type="reset" className="btn-personalizado-sec mr-3">Limpar</button>
                        <button type="submit" className="btn-personalizado">Salvar</button>
                    </div>
            </form>
        </div> 
        </Layout>
    )
}