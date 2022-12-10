import LayoutFront from "../components/layout/LayoutFront";
import axios from 'axios';

const Leaderboard = ({ games, error }) => {

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
        {
            id: 2,
            title: "Mark"
        },
    ];



    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Leaderboard"}
                pageTitle={"Leaderboard"}
                pageTitleSub={"Bienvenido al Leaderboard del Juego"}
                parent={"Home"}
                child={"Leaderboard"}

            >
                <div className="leaderboard section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="leaderboard-table">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th>No. de la Partida</th>
                                                    <th>GamerTag</th>
                                                    <th>Puntaje</th>
                                                    <th>Duración</th>
                                                </tr>
                                                {games.highscores.map((game) => (
                                                    <tr key={ game.GAME }>
                                                        <td>{ game.GAME }</td>
                                                        <td>{ game.GAMERTAG }</td>
                                                        <td>{ game.PUNTAJE } metros</td>
                                                        <td>{ game.DURATION }</td>
                                                    </tr>
                                                ))}

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

Leaderboard.getInitialProps = async ctx => {
    try {
      const res = await axios.get('http://localhost:1987/stats/highscores');
      const games = res.data;
      return { games };
    } catch (error) {
      return { error };
    }
  };

export default Leaderboard;