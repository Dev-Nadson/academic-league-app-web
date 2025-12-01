import Image from "next/image"
import Link from "next/link"

function AsideToolBar() {
    return (
        <aside>
            <div>
                <span>
                    <Image src="../../../prescription.svg" width={100} height={100} alt="Logo da liga" />
                    <Link href="#">LAFAC GERENCIAMENTO</Link>
                </span>
            </div>
        </aside>
    )
}

export { AsideToolBar }