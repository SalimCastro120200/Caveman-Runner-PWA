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
                pageTitleSub={"Welcome Leaderboard Page"}
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
                                                    <th>ID del Jugador</th>
                                                    {/* <th>Nickname</th> */}
                                                    <th>Puntaje</th>
                                                    <th>Monedas</th>
                                                    {/* <th>Nic</th> */}
                                                </tr>
                                                {games.map((game) => (
                                                    <tr key={game.playerID}>
                                                        <td>{game.id}</td>
                                                        <td>{game.playerID}</td>
                                                        {/* <td>{game.tb_players[0].nickname}</td> */}
                                                        <td>{game.score}</td>
                                                        <td>{game.coins}</td>
                                                        {/* <td>{games.upd atedAt}</td> */}
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
      const res = await axios.get('http://localhost:5000/games');
      const games = res.data;
      return { games };
    } catch (error) {
      return { error };
    }
  };

export default Leaderboard;