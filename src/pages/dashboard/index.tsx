import Head from 'next/head'
import { Layout } from 'components';
import { withAuth } from '@/hof/withAuth';
import { http } from '@/util/http';
import { NextPage } from 'next';


interface PrivatePageProps {
  name?: string;
  email?: string,
  types?: string,
  sala?: string,
  payload: any;
}

const Dashboard: NextPage<PrivatePageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Painel Odontologia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout titulo="Dashboard" email={props.email} perfil={props.types} sala={props.sala}>
        <div className="card p-4 shadow">
            <div className="alert alert-primary" role="alert">
              <h4 className="alert-heading text-start"><img src="/assets/images/bell.svg"/> Painel de Chamados Odontologia <small style={{color: 'black'}}>versão: 1.0</small></h4>
              <hr/>
              <p className="mb-3">Gerencie salas, usuários, pacientes, acesso ao chamador e painel de TV.</p>  
              <p className="mb-0"><b>Dúvidas?</b></p>
              <p className="mb-0">Estamos à disposição no e-mail informatica@aapvr.com.br ou através do sistema <a href="https://solicitaweb.aapvr.com.br">solicita web.</a></p>
            </div>
        </div>
      </Layout>
    </>
  )
}

export default Dashboard;

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
