import Head from 'next/head'
import { Layout } from 'components';
import { withAuth } from '@/hof/withAuth';
import { http } from '@/util/http';
import { NextPage } from 'next';
import {IPrivatePageProps} from 'interfaces/IPrivatePageProps'

const Chamador: NextPage<IPrivatePageProps> = (props) => {
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
                <tr className="table-success" style={{textDecoration: 'line-through'}}>
                <th scope="row">10:00</th>
                <td>Vinicius de Oliveira Almeida</td>
                <td>Atendido</td>
                <td></td>
                </tr>
                <tr className="table-danger" >
                <th scope="row">11:00</th>
                <td>Jose Benedito de Assis</td>
                <td>Não Atendido</td>
                <td><button type="button" className="btn btn-primary">Chamar Paciente</button></td>
                </tr>
                <tr className="table-danger">
                <th scope="row">12:00</th>
                <td>Joao Ferreira Lopes</td>
                <td>Não Atendido</td>
                <td><button type="button" className="btn btn-primary">Chamar Paciente</button></td>
                </tr>
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
