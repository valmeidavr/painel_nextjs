import Head from 'next/head'
import { Layout } from 'components';
import { withAuth } from '@/hof/withAuth';
import { http } from '@/util/http';
import { NextPage } from 'next';
import {IPrivatePageProps} from 'interfaces/IPrivatePageProps'
import Link from 'next/link';

const ListaUsuarios: NextPage<IPrivatePageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Painel Odontologia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout titulo="Cadastro de Usuários" email={props.email} perfil={props.types} sala={props.sala}>
      <div className="container-fluid p-0">
                <div className="d-flex justify-content-end">
                    <Link href='/usuarios/cadastro'>
                        <button className="btn_cadastrar d-flex justify-content-center align-items-center px-3 py-1">
                            <img src="/assets/images/plus.svg" width="20px"/>
                            Cadastrar
                        </button>
                    </Link>
                </div>

                <div className="container card_search p-3 d-flex align-items-center">
                    <div className="col-6 d-flex">
                        <input type="text" placeholder="Nome" className="form-control"/>
                        <button className="d-flex justify-content-center align-items-center">
                            <img src="/assets/images/search.svg" width="20px"/>
                            Pesquisar
                        </button>
                    </div>
                </div>
            </div>
            <p>100 Registros encontrados</p>
            <div className="container-fluid p-0 d-flex flex-wrap list-card">
                <ItemCard profile="Administrador" usuario="Vinicius de Oliveira Almeida" email="gvweb.solucoes@gmail.com"/>
                <ItemCard profile="Administrador" usuario="Vinicius de Oliveira Almeida" email="gvweb.solucoes@gmail.com"/>
                <ItemCard profile="Administrador" usuario="Vinicius de Oliveira Almeida" email="gvweb.solucoes@gmail.com"/>
                <ItemCard profile="Administrador" usuario="Vinicius de Oliveira Almeida" email="gvweb.solucoes@gmail.com"/>
                <ItemCard profile="Administrador" usuario="Vinicius de Oliveira Almeida" email="gvweb.solucoes@gmail.com"/>
                <ItemCard profile="Administrador" usuario="Vinicius de Oliveira Almeida" email="gvweb.solucoes@gmail.com"/>
            </div>

      </Layout>
    </>
  )
}
interface ItemCardProps {
    usuario: string,
    profile: string,
    email: string
 }

const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) => {
    return(
        
            <div className="card usuario-card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    {props.usuario}
                    <a href="#"> <img src="/assets/images/trashCan.svg" width="15px" data-toggle="tooltip" title="Excluir registro"/> </a>
                </div>
                <div className="card-body d-flex flex-column">
                    <div className="container d-flex">
                        <img src="/assets/images/security.svg" width="15px"/>
                        <span>{props.profile}</span>
                    </div>
                    <div className="container d-flex">
                        <img src="/assets/images/mail.svg" width="15px"/>
                        <span>{props.email}</span>
                    </div>
                </div>
            </div>
       
    )
}

export default ListaUsuarios;

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
