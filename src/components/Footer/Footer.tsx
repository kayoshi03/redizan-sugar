import Logotype from "@/ui/Logotype/Logotype.tsx";
import NavBar from "@/ui/NavBar/NavBar.tsx";
import style from "./style.module.scss"
import LinkUI from "@/ui/Link/LinkUI.tsx";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.nav}>
                        <Logotype/>
                        <NavBar/>
                    </div>
                    <div className={style.social}>
                        <a href={`https://chelyabinsk.mir-kvestov.ru/companies/saharnaya-vata-cheljabinsk`} target="_blank">
                            <img src="https://chelyabinsk.mir-kvestov.ru/widgets/8085/img" width="210"
                                 alt="Отзывы на Квест в реальности"
                                 title="Отзывы на Квест в реальности"/>
                        </a>
                        <div className={style.links}>
                            <LinkUI title={"+ 7 (351) 216 - 05 - 21"} path="tel:+73512160521" nav="link"/>
                            <LinkUI
                                title=""
                                path="https://vk.com/sugar_candy74"
                                nav="link"
                                icon={
                                    <svg fill="#000000" width="24px" height="24px" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.692 10.831s.849.838 1.058 1.227c.006.008.009.016.011.02.085.143.105.254.063.337-.07.138-.31.206-.392.212h-1.5c-.104 0-.322-.027-.586-.209-.203-.142-.403-.375-.598-.602-.291-.338-.543-.63-.797-.63a.305.305 0 0 0-.095.015c-.192.062-.438.336-.438 1.066 0 .228-.18.359-.307.359h-.687c-.234 0-1.453-.082-2.533-1.221-1.322-1.395-2.512-4.193-2.522-4.219-.075-.181.08-.278.249-.278h1.515c.202 0 .268.123.314.232.054.127.252.632.577 1.2.527.926.85 1.302 1.109 1.302a.3.3 0 0 0 .139-.036c.338-.188.275-1.393.26-1.643 0-.047-.001-.539-.174-.775-.124-.171-.335-.236-.463-.26a.55.55 0 0 1 .199-.169c.232-.116.65-.133 1.065-.133h.231c.45.006.566.035.729.076.33.079.337.292.308 1.021-.009.207-.018.441-.018.717 0 .06-.003.124-.003.192-.01.371-.022.792.24.965a.216.216 0 0 0 .114.033c.091 0 .365 0 1.107-1.273a9.718 9.718 0 0 0 .595-1.274c.015-.026.059-.106.111-.137a.266.266 0 0 1 .124-.029h1.781c.194 0 .327.029.352.104.044.119-.008.482-.821 1.583l-.363.479c-.737.966-.737 1.015.046 1.748z"/>
                                    </svg>
                                }
                                target="_blank"
                            />
                            <LinkUI
                                title=""
                                path="https://youtube.com/channel/UCWDJnAgOpf3C7UhfxD2ujug?si=MkbYAVDgwD4-N5gL"
                                nav="link"
                                icon={
                                    <svg fill="#000000" width="24px" height="24px" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9 5 .443 5 3.9-.086 3.9-5 3.9z"/>
                                    </svg>
                                }
                                target="_blank"
                            />
                            <LinkUI
                                title=""
                                path="https://www.tiktok.com/@sahar_vata74?lang=en"
                                nav="link"
                                icon={
                                    <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Zm-3.281,8.725h0c-.109.011-.219.016-.328.017A3.571,3.571,0,0,1,14.4,9.129v5.493a4.061,4.061,0,1,1-4.06-4.06c.085,0,.167.008.251.013v2a2.067,2.067,0,1,0-.251,4.119A2.123,2.123,0,0,0,12.5,14.649l.02-9.331h1.914A3.564,3.564,0,0,0,17.719,8.5Z"/>
                                    </svg>
                                }
                                target="_blank"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer