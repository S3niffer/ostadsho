import FooterUlIcon from "../FooterUlIcon/FooterUlIcon"
import { TnavbarItem } from "../NavbarItem/NavbarItem"

const FooterUl = ({ title, submenu, ulColsThree }: TnavbarItem & { ulColsThree?: true }) => {
    return (
        <div>
            <p className="flex font-yekaBakhBold items-center gap-2 select-none text-darkThirdBlack dark:text-lightSecondaryWhite lg:text-lg">
                <FooterUlIcon />
                {title}
            </p>
            <ul className={`mt-3 ${ulColsThree ? 'columns-2' : ''}`}>
                {
                    submenu
                        ? submenu.map(menu => (
                            <li key={menu.id} className="text-xs md:text-sm lg:text-base xl:text-lg hover:text-main before:border-[0.7px] text-darksixthGray dark:text-FourthGray dark:hover:text-secnodryMain before:block before:w-2 before:h-2 items-center gap-2 before:-translate-y-[1px] hover:before:w-3 hover:before:h-3 before:rounded-full hover:before:bg-main dark:hover:before:bg-secnodryMain  hover:before:border-none before:border-FourthGray cursor-pointer before:transition-all before:duration-300 flex ">
                                {menu.title}
                            </li>
                        ))
                        : null
                }
            </ul>
        </div>
    )
}
export default FooterUl