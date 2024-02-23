'use client'
import { useState } from "react";
export default () => {
    const [showDropDown, SetDropdown] = useState(false);

    return (
        <div className="lg:w-full lg:flex lg:justify-between hidden px-3 py-3 h-12 align-middle
        text-white bg-[#005b7f]">
            <div className="text-xl">
                Caribbean MT
            </div>
            <div className="flex flex-row">
                <label htmlFor="search">Search:</label>
                <input type="text" name="search" className="mr-2" />
                <div onClick={() => { SetDropdown(!showDropDown) }} className="cursor-pointer">
                    More options
                    {showDropDown && <div className="absolute">

                        <div>a</div>
                        <div>b</div>
                        <div>c</div>
                    </div>}
                </div>

            </div>
        </div>
    )
}