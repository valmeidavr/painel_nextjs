import Head from 'next/head'
import { Layout } from 'components';
import { withAuth } from '@/hof/withAuth';
import { http } from '@/util/http';
import { NextPage } from 'next';
import {IPrivatePageProps} from 'interfaces/IPrivatePageProps'
import {IChamador} from 'interfaces/IChamador';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const Chamador: NextPage<IPrivatePageProps> = (props) => {
    const [usuarios, setUsuarios] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const router = useRouter();
  
    useEffect(() => {
      async function list(): Promise<void> {
        try{
          const dados = await http.get("/painel");
          await setUsuarios(dados.data);
          await setLoading(false);
        }catch(err){
          if(err.response.status === 403) {
            router.push('/negado')
          } 
        }
      }
      list()
    }, [])

    function renderUsers() {
        return usuarios.map((usuario: IChamador) => {
          return <TableItem id={usuario.id} paciente={usuario.paciente} atendido={usuario.atendido} data={usuario.data.toLocaleString('pt-BR',) } />
        })
      } 

  return (
    <>
      <Head>
        <title>Painel Odontologia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout titulo="Chamador" email={props.email} perfil={props.types} sala={props.sala}>
        <div className="card p-4 shadow">
        <table className="table">
            <thead className="thead-dark" style={{textAlign: 'start'}}> 
                <tr>
                <th scope="col" style={{width: '100px'}}>Hora</th>
                <th scope="col">Paciente</th>
                <th scope="col" style={{width: '150px'}}>Status</th>
                <th scope="col" style={{width: '180px'}}>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderUsers()}
            </tbody>
            </table>
        </div>

        <div>
          
        </div>
      </Layout>
    </>
  )
}

export default Chamador;

const TableItem: React.FC<IChamador> = (props: IChamador) => {
    return (
        <tr className={props.atendido ? 'table-success' : 'table-danger'}>
            <th scope="row">{props.data}</th>
            <td>{props.paciente}</td>
            <td>{props.atendido ? 'Atendido' : 'Não atendido'}</td>
            <td>{props.atendido ? '' : (<button type="button" className="btn btn-primary">Chamar Paciente</button>)}</td>
        </tr>
    )
}

export const getServerSideProps = withAuth(
  async (ctx: any, cookies: any, payload: any) => {
    const { data } = await http.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    });
    return {
      props: data,
    };
  }
);
