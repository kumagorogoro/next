import Image from "next/image"
import Link from "next/link"

const Header = () =>{
    return(
        <header>
            <div>
                <Link href="/">
                <Image src="/header.svg" eidth={1330} height={148} alt="header-image" priority/>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link href="/user/register">登録</Link></li>
                    <li><link href="/user/login">ログイン</link></li>
                    <li><link href="/item/create">アイテム作成</link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header