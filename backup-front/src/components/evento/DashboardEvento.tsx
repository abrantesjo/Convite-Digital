import { Convidado, Evento } from "core";
import InformacoesEvento from "./InformacoesEvento";
import AcessarViaQrCode from "./AcessarViaQrCode";
import Estatistica from "../shared/Estatistica";
import ListaConvidados from "./ListaConvidados";

export interface DashboardEventoProps {
    evento: Evento;
    presentes: Convidado[];
    ausentes: Convidado[];
    totalGeral: number;
}

export default function DashboardEvento(props: DashboardEventoProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 self-stretch flex-wrap justify-center">
                <InformacoesEvento evento={props.evento} className="flex-1" />
                <AcessarViaQrCode evento={props.evento} />
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-4 text-white flex-wrap">
                <Estatistica texto="Expectativa de Convidados: " valor={props.evento.publicoEsperado} imagem="/icones/convidados.svg" />

                <Estatistica texto="Convidados Confirmados: " valor={props.presentes.length} imagem="/icones/confirmados.svg" />

                <Estatistica texto="Total Confirmado: " valor={props.totalGeral} imagem="/icones/acompanhantes.svg" />
            </div>

            <button className="botao azul self-end mt-12">
                <span>Atualizar Lista de Convidados</span>
            </button>

            <span className="flex py-2 text-xl font-bold text-white/80">
                Convidados que confirmaram presença
            </span>
            <ListaConvidados convidados={props.presentes} />

            <span className="flex py-2 text-xl font-bold text-white/80">
                Convidados que confirmaram ausência
            </span>
            <ListaConvidados convidados={props.ausentes} />
        </div>
    )
}