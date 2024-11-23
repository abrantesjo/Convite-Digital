import { Evento } from "core";
import Informacao from "../shared/Informacao";

export interface InformacoesEventoProps {
    evento: Evento;
    className?: string;
}

export default function InformacoesEvento(props: InformacoesEventoProps) {
    const { evento } = props;
    return (
        <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
            <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
                <span className="text-2xl font-black text-white">{evento.alias}:</span>
                <span className="text-xl font-zinc-300 text-white">{evento.nome}</span>
            </div>
            <div className="flex gap-2">
                <Informacao label="Data: " >
                    <span className="text-white">
                        {new Date(evento.data!).toLocaleDateString()}
                        {" às "}
                        {new Date(evento.data!).toLocaleTimeString()}
                    </span>
                </Informacao>
                <Informacao label="Local: "><span className="text-white">{evento.local}</span></Informacao>
            </div>
            <Informacao label="Descrição:"><span className="text-white">{evento.descricao}</span></Informacao>
        </div>
    )
}