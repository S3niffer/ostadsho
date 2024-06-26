import { Link, useLocation } from "react-router-dom"
import SearchInput from "../../components/SearchInput/SearchInput"
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { getCategories } from "../../App/Slices/Courses"

const BreadCrumb = ({ mainCourse }: { mainCourse?: T_Course }) => {
    const [BreadCrumbs, setBreadCrumbs] = useState<T_BreadCrumb[]>([{ id: 0, title: "خانه", href: "/" }])
    const { pathname } = useLocation()
    const AllCategories = useSelector(getCategories)

    useEffect(() => {
        const pathNameParts = pathname.split("/")

        if (pathNameParts[1].toLocaleLowerCase().startsWith("categories")) {
            if (pathNameParts[2].toLocaleLowerCase() === "all") {
                setBreadCrumbs([
                    { id: 0, title: "خانه", href: "/" },
                    { id: 1, title: "همه دسته بندی ها", href: pathname },
                ])
            } else {
                const mainCategory = AllCategories.find(category => category.categoryName === pathNameParts[2])
                const mainCategoryTitle = mainCategory?.title
                setBreadCrumbs([
                    { id: 0, title: "خانه", href: "/" },
                    { id: 1, title: "دسته بندی " + mainCategoryTitle!, href: pathname },
                ])
            }
        } else {
            const mainCategory = AllCategories.find(({ categoryName }) => categoryName === pathNameParts[1])

            setBreadCrumbs([
                { id: 0, title: "خانه", href: "/" },
                { id: 1, title: "دسته بندی " + mainCategory?.title!, href: `/categories/${mainCategory?.categoryName!}` },
                { id: 2, title: mainCourse?.title!, href: `/${mainCategory?.categoryName!}/${mainCourse?.courseName!}` },
            ])
        }
    }, [pathname])

    return (
        <div className='BreadCrumb'>
            <div className='container flex flex-col justify-between px-4 py-10 text-lightWhite md:px-0 lg:flex-row lg:items-center'>
                <div>
                    <h3 className='font-danafaBold text-2xl'>با استادشو متخصص شوید!</h3>
                    <div className='mb-5 mt-3 flex flex-wrap gap-4 lg:text-lg'>
                        {BreadCrumbs.map(({ href, id, title }, index) => (
                            <React.Fragment key={id}>
                                <Link
                                    to={href}
                                    className={`font-RokhFaNumBold font-semibold  hover:text-[#333333] xs:pt-0 xs:text-sm md:text-lg ${
                                        BreadCrumbs.length === ++index ? "text-[#a2d6a8] hover:text-[#a2d6a8]" : undefined
                                    }`}
                                >
                                    {" " + title + " "}
                                </Link>
                                {BreadCrumbs.length === index ? null : (
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                        className='pt-0.5 2xs:pt-0 md:pt-0.5'
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className='flex-grow-[0.22] xl:text-lg'>
                    <SearchInput />
                </div>
            </div>
        </div>
    )
}
export default BreadCrumb
