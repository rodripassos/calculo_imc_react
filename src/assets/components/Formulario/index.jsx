import { useState, useEffect } from "react"
import { IMaskInput } from "react-imask";

import styles from './Formulario.module.css';

const Formulario = () => {
    const [Peso, setPeso] = useState(0);
    const [Altura, setAltura] = useState(0);

    const renderizaResultado = () => {
        const calculaImc = (Peso / (Altura * Altura)).toFixed(2);
        if (calculaImc > 0 && Altura != 0) {
            return (
                calculaImc
            )
        } else {
            return (
                <p> Aguardando dados para cálculo...</p>
            )
        }
    }

    let resultado = parseFloat(renderizaResultado());

    if (!isNaN(resultado)) {
        if (resultado < 18.5) {
            resultado = 'Magreza'
        } else if (resultado >= 18.5 && resultado < 25) {
            resultado = 'Normal'
        }
        else if (resultado >= 25 && resultado < 30) {
            resultado = 'Sobrepeso'
        }
        else if (resultado >= 30 && resultado < 35) {
            resultado = 'Obesidade grau I'
        }
        else if (resultado >= 35 && resultado < 40) {
            resultado = 'Obesidade grau II'
        }
        else if (resultado > 40) {
            resultado = 'Obesidade grau III'
        }
    } else {
        resultado = 'Aguardando dados para cálculo...'
    }

    return (
        <div className="container">
            <h1>Calcule seu IMC</h1>
            <form className={styles.formulario}>
                <div className={styles.dados}>
                    <p>Insira seu peso : </p>
                    <input type="number" placeholder="Insira seu peso (KG)" onChange={({ target }) => setPeso(parseFloat(target.value))} />
                </div>
                <div className={styles.dados}>
                    <p>Insira sua altura: </p>
                    <IMaskInput mask="0.00" type="number" placeholder="Insira sua altura (m)" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                </div>
            </form>
            <div className={styles.resultado}>
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{renderizaResultado()}</td>
                            <td>{resultado}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Formulario