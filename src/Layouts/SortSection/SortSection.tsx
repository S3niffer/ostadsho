import { faReorder } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMemo } from "react"

const SortSection = ({ Dispatch, paginate, sortOrder }: T_SortSectionProp) => {
    const _onClickHandler = (option: T_SortOption, element: HTMLDivElement) => {
        if (sortOrder === option) {
            Dispatch({ type: "SET_SortOption", payload: "noOrder" })
            element.blur()
        } else {
            Dispatch({ type: "SET_SortOption", payload: option })
        }
    }

    const _onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (paginate !== event.target.checked) {
            Dispatch({ type: "UPDATE_PaginateStatus", payload: event.target.checked })
        }
    }
    return (
        <div className='SortSection my-6 flex items-center gap-1 px-2 2xs:gap-2 md:mb-10 md:gap-6 md:px-0'>
            <div className='flex flex-col gap-2 sm:gap-3 md:gap-5'>
                <div>
                    {useMemo(
                        () => (
                            <FontAwesomeIcon
                                icon={faReorder}
                                className='ml-2 text-Gray dark:text-SecondaryGray md:text-xl'
                            />
                        ),
                        []
                    )}
                    <span className='text-xs dark:text-lightSecondaryWhite xs:text-base md:text-xl lg:text-2xl'>مرتب سازی</span>
                    <p className='font-RokhFaNumBold text-lg font-bold xs:text-[22px] md:text-2xl bml:text-3xl'>براساس:</p>
                </div>
                <div className='checkBoxContainer'>
                    <input
                        type='checkbox'
                        id='activePaginate'
                        className='activePaginate hidden'
                        checked={paginate}
                        onChange={_onCheckHandler}
                    />
                    <label
                        htmlFor='activePaginate'
                        className='cursor-pointer rounded-md px-2 py-1.5 text-xs shadow dark:bg-darkFourthBlack xs:text-sm md:text-sm'
                    >
                        نمایش سه تایی
                    </label>
                </div>
            </div>
            <div className='flex flex-1 justify-between gap-1 2xs:gap-4 xs:justify-normal md:gap-6'>
                <div
                    className={`flex cursor-pointer flex-col items-center gap-2.5 rounded-md p-4 px-5 shadow-md transition-all duration-300 2xs:px-8 xs:py-5 md:gap-3 md:px-10 bml:px-12 ${
                        sortOrder === "Cheap"
                            ? "bg-main text-lightSecondaryWhite dark:bg-main dark:text-lightSecondaryWhite"
                            : "bg-lightWhite text-darksixthGray hover:bg-main hover:text-lightWhite dark:bg-darkFourthBlack dark:text-lightSecondaryWhite/90 dark:hover:bg-main"
                    }`}
                    onClick={e => {
                        _onClickHandler("Cheap", e.currentTarget)
                    }}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='60'
                        height='60'
                        fill='none'
                        viewBox='0 0 102 102'
                    >
                        <circle
                            cx='52'
                            cy='50'
                            r='50'
                            fill='#52AC66'
                            opacity='0.2'
                        ></circle>
                        <g clipPath='url(#clip0_3545_2017)'>
                            <path
                                fill='#596C80'
                                d='M96.865 99.127l-6.35-8.893V29.531a1.64 1.64 0 00-1.64-1.64H16.688a1.64 1.64 0 00-1.641 1.64v60.703l-6.35 8.893a1.64 1.64 0 001.33 2.592h85.509a1.65 1.65 0 001.452-.892 1.644 1.644 0 00-.123-1.7z'
                            ></path>
                            <path
                                fill='#475666'
                                d='M21.61 49.219A24.61 24.61 0 0045.972 27.89H16.688a1.64 1.64 0 00-1.641 1.64V48.3c2.135.607 4.343.916 6.562.919z'
                            ></path>
                            <path
                                fill='#F2F2F2'
                                d='M18.328 31.172h68.906v59.062H18.328V31.172z'
                            ></path>
                            <path
                                fill='#D9D9D9'
                                d='M18.328 31.172v17.8a24.15 24.15 0 003.281.247A24.61 24.61 0 0045.3 31.172H18.328z'
                            ></path>
                            <g filter='url(#filter0_i_3545_2017)'>
                                <path
                                    fill='#fff'
                                    d='M21.61 45.938c11.779 0 21.328-9.55 21.328-21.329S33.388 3.281 21.608 3.281.281 12.831.281 24.61c0 11.78 9.55 21.328 21.328 21.328z'
                                ></path>
                            </g>
                            <path
                                fill='#52AC66'
                                d='M29.172 19.406H16.047a1.64 1.64 0 00-1.64 1.64v13.126c0 .906.734 1.64 1.64 1.64h13.125a1.64 1.64 0 001.64-1.64V21.047a1.64 1.64 0 00-1.64-1.64z'
                            ></path>
                            <path
                                fill='#52AC66'
                                d='M23.497 12.312L10.61 14.805a1.64 1.64 0 00-1.3 1.922l2.494 12.886a1.64 1.64 0 001.922 1.3l12.886-2.494a1.64 1.64 0 001.3-1.922L25.418 13.61a1.64 1.64 0 00-1.922-1.3z'
                                opacity='0.4'
                            ></path>
                            <path
                                fill='#B0EFBE'
                                d='M20.969 19.406h3.281v4.922h-3.281v-4.922z'
                            ></path>
                            <g clipPath='url(#clip1_3545_2017)'>
                                <path
                                    fill='#596C80'
                                    d='M80.151 75.556c.933 0 1.358 1.164.645 1.765l-10.207 8.6a1 1 0 01-1.288 0l-10.207-8.6c-.713-.6-.288-1.764.645-1.764h2.733a1 1 0 001-1v-7.7c0-.275.115-.537.31-.732a15.537 15.537 0 003.283-4.79A15.076 15.076 0 0068.33 55.3c0-2.072-.43-4.124-1.264-6.034a15.538 15.538 0 00-3.283-4.791 1.036 1.036 0 01-.31-.732V39.16a1 1 0 011-1h10.945a1 1 0 011 1v35.397a1 1 0 001 1h2.734z'
                                ></path>
                                <path
                                    fill='#FFAF04'
                                    d='M56.566 66.207c6.262 0 11.327-4.877 11.327-10.907s-5.065-10.907-11.327-10.907S45.239 49.27 45.239 55.3s5.065 10.907 11.327 10.907zm11.327-22.033a15.56 15.56 0 013.593 5.092 15.076 15.076 0 011.263 6.034c0 2.072-.43 4.124-1.263 6.034a15.56 15.56 0 01-3.593 5.091c-3.02 2.864-7.09 4.465-11.327 4.457-8.932 0-16.181-6.98-16.181-15.582 0-8.601 7.249-15.582 16.181-15.582 4.417 0 8.414 1.698 11.327 4.456z'
                                ></path>
                                <path
                                    fill='#FFAF04'
                                    d='M56.566 66.207c6.256 0 11.327-4.883 11.327-10.907s-5.071-10.907-11.327-10.907S45.24 49.276 45.24 55.3s5.072 10.907 11.327 10.907z'
                                ></path>
                                <path
                                    fill='#596C80'
                                    d='M58.184 63.09v-.286a4.835 4.835 0 002.341-1.7 4.55 4.55 0 00.896-2.688c0-2.577-2.178-4.674-4.855-4.674-.284 0-.563-.073-.809-.21a1.59 1.59 0 01-.592-.57 1.514 1.514 0 01.001-1.559 1.59 1.59 0 01.593-.57 1.667 1.667 0 011.618.002c.246.137.45.334.592.57.106.178.247.334.416.459a1.672 1.672 0 001.794.11c.185-.103.346-.24.475-.402a1.5 1.5 0 00.114-1.727 4.81 4.81 0 00-2.585-2.032v-.304c0-.413-.17-.81-.474-1.102a1.65 1.65 0 00-1.144-.456c-.43 0-.841.164-1.145.456a1.53 1.53 0 00-.474 1.102v.287c-.943.32-1.76.914-2.34 1.7a4.55 4.55 0 00-.894 2.687c0 2.578 2.178 4.675 4.854 4.675.284 0 .563.072.81.21.245.136.45.333.591.57a1.514 1.514 0 010 1.558 1.59 1.59 0 01-.593.57 1.666 1.666 0 01-1.619-.001 1.588 1.588 0 01-.592-.571 1.57 1.57 0 00-.415-.459 1.667 1.667 0 00-1.795-.108 1.597 1.597 0 00-.475.4c-.129.163-.224.348-.278.546a1.5 1.5 0 00.164 1.182c.583.97 1.518 1.663 2.586 2.032v.304c-.007.208.03.416.108.611s.196.372.347.522c.15.15.331.27.531.35a1.672 1.672 0 001.793-.35c.151-.15.27-.327.347-.522.078-.195.115-.403.108-.611z'
                                ></path>
                                <path
                                    fill='#596C80'
                                    d='M56.566 42.834c-2.25 0-4.466.564-6.41 1.633a1.6 1.6 0 00-.478.399 1.503 1.503 0 00-.128 1.727c.105.178.246.334.413.46a1.68 1.68 0 001.793.123 10.012 10.012 0 014.849-1.221c1.699.008 3.366.445 4.835 1.267 1.468.822 2.688 2 3.536 3.418a9.093 9.093 0 011.299 4.66c0 5.156-4.355 9.35-9.709 9.35a10.013 10.013 0 01-4.681-1.164 9.579 9.579 0 01-3.52-3.192 9.06 9.06 0 01-.574-9.002 1.511 1.511 0 00-.253-1.722 1.615 1.615 0 00-.51-.365 1.67 1.67 0 00-1.786.259 1.563 1.563 0 00-.375.493 11.979 11.979 0 00-1.246 5.343c0 6.873 5.808 12.466 12.945 12.466 7.138 0 12.945-5.593 12.945-12.466 0-6.873-5.807-12.465-12.945-12.465z'
                                ></path>
                            </g>
                        </g>
                        <defs>
                            <filter
                                id='filter0_i_3545_2017'
                                width='42.656'
                                height='46.656'
                                x='0.281'
                                y='3.281'
                                colorInterpolationFilters='sRGB'
                                filterUnits='userSpaceOnUse'
                            >
                                <feFlood
                                    floodOpacity='0'
                                    result='BackgroundImageFix'
                                ></feFlood>
                                <feBlend
                                    in='SourceGraphic'
                                    in2='BackgroundImageFix'
                                    result='shape'
                                ></feBlend>
                                <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                ></feColorMatrix>
                                <feOffset dy='4'></feOffset>
                                <feGaussianBlur stdDeviation='4.5'></feGaussianBlur>
                                <feComposite
                                    in2='hardAlpha'
                                    k2='-1'
                                    k3='1'
                                    operator='arithmetic'
                                ></feComposite>
                                <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'></feColorMatrix>
                                <feBlend
                                    in2='shape'
                                    result='effect1_innerShadow_3545_2017'
                                ></feBlend>
                            </filter>
                            <clipPath id='clip0_3545_2017'>
                                <path
                                    fill='#fff'
                                    d='M0 0H98V99H0z'
                                    transform='translate(0 3)'
                                ></path>
                            </clipPath>
                            <clipPath id='clip1_3545_2017'>
                                <path
                                    fill='#fff'
                                    d='M0 0H54V52H0z'
                                    transform='translate(30 34)'
                                ></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <span className='font-danafa text-xs font-bold md:text-sm lg:text-base'>ارزان ترین</span>
                </div>
                <div
                    className={`flex cursor-pointer flex-col items-center gap-2.5 rounded-md p-4 px-5 shadow-md transition-all duration-300 2xs:px-8 xs:py-5 md:gap-3 md:px-10 bml:px-12 ${
                        sortOrder === "Expensive"
                            ? "bg-main text-lightSecondaryWhite dark:bg-main dark:text-lightSecondaryWhite"
                            : "bg-lightWhite text-darksixthGray hover:bg-main hover:text-lightWhite dark:bg-darkFourthBlack dark:text-lightSecondaryWhite/90 dark:hover:bg-main"
                    }`}
                    onClick={e => {
                        _onClickHandler("Expensive", e.currentTarget)
                    }}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='60'
                        height='60'
                        fill='none'
                        viewBox='0 0 102 102'
                    >
                        <circle
                            cx='52'
                            cy='50'
                            r='50'
                            fill='#52AC66'
                            opacity='0.2'
                        ></circle>
                        <g clipPath='url(#clip0_3545_2076)'>
                            <path
                                fill='#596C80'
                                d='M96.865 99.127l-6.35-8.893V29.531a1.64 1.64 0 00-1.64-1.64H16.688a1.64 1.64 0 00-1.641 1.64v60.703l-6.35 8.893a1.64 1.64 0 001.33 2.592h85.509a1.65 1.65 0 001.452-.892 1.644 1.644 0 00-.123-1.7z'
                            ></path>
                            <path
                                fill='#475666'
                                d='M21.61 49.219A24.61 24.61 0 0045.972 27.89H16.688a1.64 1.64 0 00-1.641 1.64V48.3c2.135.607 4.343.916 6.562.919z'
                            ></path>
                            <path
                                fill='#F2F2F2'
                                d='M18.328 31.172h68.906v59.062H18.328V31.172z'
                            ></path>
                            <path
                                fill='#D9D9D9'
                                d='M18.328 31.172v17.8a24.15 24.15 0 003.281.247A24.61 24.61 0 0045.3 31.172H18.328z'
                            ></path>
                            <g filter='url(#filter0_i_3545_2076)'>
                                <path
                                    fill='#fff'
                                    d='M21.61 45.938c11.779 0 21.328-9.55 21.328-21.329S33.388 3.281 21.608 3.281.281 12.831.281 24.61c0 11.78 9.55 21.328 21.328 21.328z'
                                ></path>
                            </g>
                            <path
                                fill='#52AC66'
                                d='M29.172 19.406H16.047a1.64 1.64 0 00-1.64 1.64v13.126c0 .906.734 1.64 1.64 1.64h13.125a1.64 1.64 0 001.64-1.64V21.047a1.64 1.64 0 00-1.64-1.64z'
                            ></path>
                            <path
                                fill='#52AC66'
                                d='M23.497 12.312L10.61 14.805a1.64 1.64 0 00-1.3 1.922l2.494 12.886a1.64 1.64 0 001.922 1.3l12.886-2.494a1.64 1.64 0 001.3-1.922L25.418 13.61a1.64 1.64 0 00-1.922-1.3z'
                                opacity='0.4'
                            ></path>
                            <path
                                fill='#B0EFBE'
                                d='M20.969 19.406h3.281v4.922h-3.281v-4.922z'
                            ></path>
                            <g clipPath='url(#clip1_3545_2076)'>
                                <path
                                    fill='#596C80'
                                    d='M80.113 46.647c.932 0 1.357-1.163.645-1.764l-10.689-9.019a1 1 0 00-1.29 0l-10.688 9.019c-.712.6-.287 1.764.645 1.764h2.976a1 1 0 011 1v8.05c0 .276.115.538.31.732a16.138 16.138 0 013.416 4.987 15.673 15.673 0 011.31 6.266c0 2.152-.445 4.283-1.31 6.267a16.136 16.136 0 01-3.416 4.987c-.195.194-.31.456-.31.73v4.816a1 1 0 001 1h11.425a1 1 0 001-1V47.647a1 1 0 011-1h2.976z'
                                ></path>
                                <path
                                    fill='#FFAF04'
                                    d='M55.55 77.948c6.494 0 11.746-5.064 11.746-11.327 0-6.262-5.252-11.326-11.747-11.326-6.493 0-11.746 5.064-11.746 11.326 0 6.263 5.253 11.327 11.747 11.327zm11.746-22.88a16.158 16.158 0 013.726 5.287 15.672 15.672 0 011.31 6.266c0 2.152-.445 4.283-1.31 6.267a16.158 16.158 0 01-3.726 5.287c-3.131 2.973-7.352 4.636-11.747 4.628-9.262 0-16.78-7.25-16.78-16.182 0-8.932 7.518-16.18 16.78-16.18 4.582 0 8.726 1.763 11.747 4.627z'
                                ></path>
                                <path
                                    fill='#FFAF04'
                                    d='M55.55 77.948c6.487 0 11.746-5.071 11.746-11.327s-5.26-11.327-11.746-11.327c-6.488 0-11.747 5.071-11.747 11.327s5.26 11.327 11.747 11.327z'
                                ></path>
                                <path
                                    fill='#596C80'
                                    d='M57.228 74.712v-.298a5.013 5.013 0 002.427-1.765c.601-.816.926-1.791.929-2.792 0-2.676-2.259-4.854-5.034-4.854-.295 0-.584-.075-.84-.217a1.65 1.65 0 01-.613-.593 1.575 1.575 0 010-1.618c.148-.246.36-.45.616-.592a1.726 1.726 0 011.678.001c.255.143.467.347.614.593.11.185.256.346.43.476a1.731 1.731 0 001.861.114c.192-.107.359-.248.493-.417a1.559 1.559 0 00.119-1.794 4.989 4.989 0 00-2.682-2.11v-.315c0-.43-.177-.841-.491-1.145a1.71 1.71 0 00-1.187-.474c-.445 0-.872.17-1.187.474a1.59 1.59 0 00-.491 1.145v.297a5.014 5.014 0 00-2.426 1.766 4.73 4.73 0 00-.928 2.79c0 2.677 2.258 4.855 5.034 4.855.294 0 .584.075.839.217.255.142.467.347.614.593a1.573 1.573 0 01-.001 1.618 1.65 1.65 0 01-.615.592 1.725 1.725 0 01-1.678-.001 1.65 1.65 0 01-.614-.593 1.627 1.627 0 00-.43-.477 1.728 1.728 0 00-1.861-.113c-.192.107-.36.248-.494.417a1.559 1.559 0 00-.119 1.794c.605 1.008 1.575 1.727 2.682 2.11v.316c-.007.216.031.432.113.634.08.203.203.387.36.543.156.156.343.28.55.364a1.73 1.73 0 001.86-.364c.156-.156.279-.34.36-.543.08-.202.119-.418.112-.634z'
                                ></path>
                                <path
                                    fill='#596C80'
                                    d='M55.55 53.676c-2.333 0-4.632.586-6.649 1.696-.192.105-.36.246-.495.414a1.564 1.564 0 00-.133 1.794c.11.184.255.346.43.476.173.13.372.227.585.283a1.738 1.738 0 001.274-.155 10.37 10.37 0 015.028-1.267c1.761.008 3.49.462 5.013 1.316a9.905 9.905 0 013.668 3.549 9.453 9.453 0 011.347 4.84c0 5.354-4.516 9.708-10.069 9.708a10.372 10.372 0 01-4.854-1.208 9.936 9.936 0 01-3.65-3.315 9.419 9.419 0 01-.595-9.348 1.573 1.573 0 00-.264-1.788 1.676 1.676 0 00-.527-.38 1.73 1.73 0 00-1.853.27 1.624 1.624 0 00-.389.512 12.455 12.455 0 00-1.292 5.548c0 7.138 6.023 12.945 13.424 12.945 7.402 0 13.425-5.807 13.425-12.945 0-7.137-6.023-12.945-13.425-12.945z'
                                ></path>
                            </g>
                        </g>
                        <defs>
                            <filter
                                id='filter0_i_3545_2076'
                                width='42.656'
                                height='46.656'
                                x='0.281'
                                y='3.281'
                                colorInterpolationFilters='sRGB'
                                filterUnits='userSpaceOnUse'
                            >
                                <feFlood
                                    floodOpacity='0'
                                    result='BackgroundImageFix'
                                ></feFlood>
                                <feBlend
                                    in='SourceGraphic'
                                    in2='BackgroundImageFix'
                                    result='shape'
                                ></feBlend>
                                <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                ></feColorMatrix>
                                <feOffset dy='4'></feOffset>
                                <feGaussianBlur stdDeviation='4.5'></feGaussianBlur>
                                <feComposite
                                    in2='hardAlpha'
                                    k2='-1'
                                    k3='1'
                                    operator='arithmetic'
                                ></feComposite>
                                <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'></feColorMatrix>
                                <feBlend
                                    in2='shape'
                                    result='effect1_innerShadow_3545_2076'
                                ></feBlend>
                            </filter>
                            <clipPath id='clip0_3545_2076'>
                                <path
                                    fill='#fff'
                                    d='M0 0H98V99H0z'
                                    transform='translate(0 3)'
                                ></path>
                            </clipPath>
                            <clipPath id='clip1_3545_2076'>
                                <path
                                    fill='#fff'
                                    d='M0 0H56V54H0z'
                                    transform='translate(28 31)'
                                ></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <span className='font-danafa text-xs font-bold md:text-sm lg:text-base'>گران ترین</span>
                </div>
            </div>
        </div>
    )
}
export default SortSection
