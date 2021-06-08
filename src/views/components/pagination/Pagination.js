import React from 'react';

const Pagination = ({ totalItems }) => {
    
    const pages = Math.ceil(totalItems / 20); 
    console.log(pages);

    return (
        <div>
            <div class="flex flex-col items-center my-2 py-2">
                <div class="flex text-white">
                    <div class="h-8 w-8 mr-1 flex justify-center items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-4 h-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                    
                    <div class="flex h-8 font-medium ">
                        <div class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in border-b-2 border-transparent">1</div>
                        <div class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in border-b-2 border-red-600">2</div>
                        <div class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in border-b-2 border-transparent">3</div>
                        <div class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in border-b-2 border-transparent">4</div>
                        <div class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in border-b-2 border-transparent">5</div>
                        <div class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in border-b-2 border-transparent">...</div>
                        <div class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in border-b-2 border-transparent">15</div>
                        <div class="w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in border-t-2 border-orange-600">2</div>
                    </div>

                    <div class="h-8 w-8 ml-1 flex justify-center items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-4 h-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Pagination;