import Image from "next/image"
import Link from "next/link"
import { Calendars, Users, BookOpenText, Newspaper, ShieldUser, LogOut, User, } from "lucide-react"
import { Button } from "./Button"

function AsideToolBar() {
    return (
        <aside>
            <div className=" border border-red-400 flex flex-col justify-between max-w-75 h-screen p-6 shadow-m shadow-insi shadow-amber-500">
                <span>
                    <div className=" flex items-center gap-3 m-auto p-2">
                        <div className="bg-lime-500 p-5.5 flex justify-center items-center rounded-2xl text-amber-50 font-bold">icon</div>
                        {/*<Image src="../../../prescription.svg" width={55} height={50} alt="Logo da liga" />*/}
                        <Link href="#" className="text-2xl font-bold">LIGA ACADÊMICA</Link>
                    </div>

                </span>

                <section className="space-y-3 mt-1 ">
                    <Button title="Dashboard" href="#" style="pl-14" />
                    <Button title="Atividades" href="#" style="pl-14" />
                    <Button title="Eventos" href="#" icon={Calendars} />
                    <Button title="Membros" href="#" icon={Users} />
                    <Button title="Projetos" href="#" icon={Newspaper} />
                    <Button title="Grupos de Estudo" href="#" icon={BookOpenText} />
                    <Button title="Processo Seletivo" href="#" icon={ShieldUser} />
                </section>

                <footer className="space-y-3 mt-3">
                    <div className="flex items-center px-7 py-2 w-full rounded-xl bg-zinc-200 gap-3" >
                        <div className="bg-slate-800 size-9 flex justify-center items-center rounded-full text-zinc-200"><User /></div>
                        <h3>Administrador</h3>
                    </div>

                    <Link href="#" className="border flex items-center gap-2 justify-center px-4 py-2 w-full rounded-lg transition-all duration-300 ease-in-out hover:bg-stone-100 hover:scale-105 hover:ring-4 hover:ring-zinc-200">
                        <LogOut />
                    </Link>
                </footer>
            </div>
        </aside>
    )
}

export { AsideToolBar }