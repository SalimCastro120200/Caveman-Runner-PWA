import LayoutFront from "../components/layout/LayoutFront";
import axios from 'axios';
import { getRequestMeta } from "next/dist/server/request-meta";

const IgoRanking = ({players, error}) => {

    if (error) {
        return <div>Un error ha ocurrido: {error.message}</div>
    }

    const data = [
        {
            id: 1,
            title: "Avy"
        },
        {
            id: 2,
            title: "Mark"
        },
        {
            id: 2,
            title: "Mark"
        },
        {
            id: 2,
            title: "Mark"
        },
        {
            id: 2,
            title: "Mark"
        },
        {
            id: 2,
            title: "Mark"
        },
    ];



    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Ranking"}
                pageTitle={"Ranking"}
                pageTitleSub={"Bienvenido a los Rankings del Juego"}
                parent={"Home"}
                child={"Ranking"}
            >
                <div className="ranking section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="ranking-table">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th>ID del Jugador</th>
                                                    <th>Nickname</th>
                                                    <th>Nombre</th>
                                                    <th>Correo Electronico</th>
                                                </tr>
                                                {players.map((player) => (
                                                    <tr key={player.id}>
                                                        <td width='20%'>{ player.id }</td>
                                                        <td width='20%'>{ player.gamertag }</td>
                                                        <td width='40%'>{ player.nombres } { player.paterno } { player.materno }</td>
                                                        <td width='40%'>{ player.correo }</td>
                                                    </tr>
                                                ),
                                                )}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

IgoRanking.getInitialProps = async ctx => {
    try {
      const res = await axios.get('http://localhost:1987/players');
      const players = res.data;
      return { players};
    } catch (error) {
      return { error };
    }
  };


export default IgoRanking;