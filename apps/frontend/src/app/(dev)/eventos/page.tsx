import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PaginaEventos() {

    

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            {eventos.map((evento) => (
                <div key={evento.id} className="flex flex-col w-full  overflow-hidden bg-zinc-800 rounded-lg flex-wrap">
                    <div className="relative w-full h-44">
                        <Image src={evento.imagem} fill alt={evento.nome} className="object-cover"/>
                    </div>

                    <div className="flex flex-col items-center flex-1 p-7 gap-5 flex-wrap">
                        <span className="text-lg font-black text-white">{evento.nome}</span>
                        <p className="flex-1 text-sm text-zinc-400 text-center">{evento.descricao}</p>

                        <QRCode value={JSON.stringify({id: evento.id, senha: evento.senha})} className="h-40 max-w-full" />

                        <div className="flex flex-wrap gap-5">
                    
                        <Link href={`/evento/admin/${evento.id}/${evento.senha}`} className="flex-1 botao vermelho">Admin</Link>
                        <Link href={`/convite/${evento.alias}`} className="flex-1 botao verde">Convite</Link>
                    </div>
                    </div>

                    

                </div>
            ))}
        </div>
    )
}