import CompleteList from './../components/elements/CompleteList';
import ExploreList from './../components/elements/ExploreList';
import IntroSlider from "./../components/slider/IntroSlider";
import LayoutFront from "../components/layout/LayoutFront";
import Link from "next/link";
import TeamMember from "../components/elements/TeamMember";

const Index = () => {
	return (
		<>
			<LayoutFront pageClass={"front"}>
				<div className="intro1 section-padding">
					<div className="container">
						<div className="row align-items-center justify-content-between">
							<div className="col-xl-5">
								<div className="intro-content">
									<p>LFS INDUSTRIES</p>
									<h1>Caveman Runner</h1>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="intro-slider">
									<IntroSlider />
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="what-we-do section-padding">
					<div className="container">
						<div className="row align-items-center justify-content-between">
							<div className="col-lg-5">
								<div className="what-we-do-img">
									<img
										src="/images/items/v2.jpg"
										alt=""
										className="img-fluid rounded"
									/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="what-we-do-content">
									<span>Bienvenidos a CAVEMAN RUNNER</span>
									<h3>¿Quienes somos y Qué hacemos?</h3>
									<p>
										Somos LFS Industries una empresa dedicada al 
										Desarrollo de Software a medida. Surgimos de 
										la necesidad de proveer una alternativa totalmente 
										personalizada, que se pudiera adquirir a través 
										de un modelo de comisión o a través del pago de 
										desarrollo que fuera potente, de gran capacidad 
										transaccional y analítica, con manejo de POS e inventario.
									</p>
									<p>
									Caveman Runner es un juego de tipo Endless Runner 
									lo cual significa que es un juego sin fin y en este tipo de juegos 
									los jugadores corren con nuestro protagonista sin detenerse nunca. 
									Para ser el mejor corredor, deben tener buenos reflejos para sobrevivir 
									el mayor tiempo posible y obtener el máximo de puntos. Para seguir 
									en el juego es de suma importancia tener habilidad para saltar o 
									deslizarse por el suelo en el momento adecuado para esquivar los 
									obstáculos que se interponen en el camino. 
									</p>
									<p></p>
									<p>
										Rostros detras de LFS Industries	 
									</p>
									<p>
										Diseñador de Videojuego: Felipe Paredes Perez 
									</p>
									<p>
										Desarollador Backend: Luis Alejandro Gomez Santillan
									</p>
									<p>
										Desarollador Frontend: Salim Rafael Castro Ortiz  
									</p>
									
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mission-vission section-padding bg-light">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="mission-vission-content">
									<span>
									<i class="ri-send-plane-fill"></i>
									</span>
									<h6>Misión</h6>
									<h3>
										Crear Un Ecosistema Gamer
									</h3>
									<p>
									Para ayudar a crear un mundo mejor adoptando tecnologías 
									emergentes impulsadas por LFS Industries. Creemos que estamos 
									en un momento crucial en la historia donde la humanidad 
									se está preparando para la Nueva Normalidad Los mundos virtuales 
									nos acelerarán hacia esta nueva realidad, revolucionando la forma 
									en que vivimos, trabajamos y jugamos.
									</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="mission-vission-content">
									<span>
									<i class="ri-eye-fill"></i>
									</span>
									<h6>Visión</h6>
									<h3>Construir Una Comunidad</h3>
									<p>
									Construir un ecosistema próspero para
									juegos blockchain e introducir nuevas formas
									para que los jugadores ganen criptomonedas de forma divertida,
									manera atractiva. La comunidad es el núcleo de
									nuestra organización, y estamos construyendo un
									tribu de visión de futuro
									primeros usuarios, creadores y seguidores.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="team section-padding">
					<div className="container">
						<div className="row">
							<div className="col-xl-6">
								<div className="section-title">
									<h2>Conoce a Nuestro Equipo	</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<TeamMember/>
						</div>
					</div>
				</div>

				
			</LayoutFront>
		</>
	);
};

export default Index;
