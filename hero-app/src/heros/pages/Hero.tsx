import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Hero } from "../data/Heros";
import { fetchHeroById } from "../helpers";

export const HeroPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [hero, setHero] = useState<Hero | null>(null); // Estado para almacenar el héroe

    useEffect(() => {
        const getHero = async () => {
            try {
                const foundHero: Hero | null = await fetchHeroById(id!);
                if (foundHero) {
                    setHero(foundHero);
                } else {
                    navigate("/"); // Redirigir si no se encuentra el héroe
                }
            } catch (error) {
                console.error('Error fetching hero:', error);
            }
        };

        getHero(); // Llamado a la función para cargar el héroe al montar el componente
    }, [id, navigate]); // Dependencias para volver a cargar el héroe al cambiar el id

    const handlerReturn = () => {
        navigate(-1);
    };

    if (!hero) {
        return null; // Opcional: Mostrar un loader o un mensaje mientras se carga el héroe
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
                    <li className="list-group-item"><b>Compañía: </b>{hero.publisher}</li>
                    <li className="list-group-item"><b>Primera aparición: </b>{hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3"> Characters </h5>
                <p>{hero.characters}</p>

                <button className="btn-outline-primary btn" onClick={handlerReturn}>Regresar</button>
            </div>
        </div>
    );
};
