import { AiOutlineSearch, AiOutlinePlus, AiOutlineArrowLeft} from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io'; // Close icon
import { words } from '../data';
import { useState } from 'react';
import All from '../assets/compass.png';
import education from '../assets/education.png';
import entertainment from '../assets/entertainment.png';
import science from '../assets/science.png';
import Tech from '../assets/data-management.png';
import ReactLogo from '../assets/reactLogo.png';
import {Footer} from './Footer';

function Discover() {
    const [activeSearch, setActiveSearch] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (query === '') {
            setActiveSearch([]);
            return;
        }
        // Filter words based on search query and limit results to 10
        setActiveSearch(words.filter(w => w.includes(query)).slice(0, 10));
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setActiveSearch([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add any functionality for the submit here if needed
    };

    return (
        <div>
            <form className="w-full max-w-[1200px] mx-auto px-4 relative" onSubmit={handleSubmit}>
                <div className="relative">
                    {/* Changed type from 'search' to 'text' to prevent default clear button */}
                    <input
                        type="text"
                        value={searchQuery}
                        placeholder="Search here"
                        className="w-full p-4 pl-4 pr-12 rounded-full bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-slate-500"
                        onChange={handleSearch}
                    />
                    {/* Search or Close icon depending on search query */}
                    <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-transparent text-gray-500 hover:text-gray-700"
                        onClick={searchQuery ? handleClearSearch : null}
                    >
                        {searchQuery ? (
                            <IoMdClose className="w-6 h-6" /> // Close icon
                        ) : (
                            <AiOutlineSearch className="w-6 h-6" /> // Search icon
                        )}
                    </button>
                </div>
                {activeSearch.length > 0 && (
   <div className="absolute top-20 p-4 bg-gray-200/10 backdrop-blur-lg text-black w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 z-10">
        {activeSearch.map((s, index) => (
            <span key={index}>{s}</span>
        ))}
    </div>
)}

            </form>

            {/* Card Section */}
            <div className="flex flex-wrap gap-4 p-10">
                {/* First Card - Sticky and Scrollable Content */}
                <article className="w-full md:w-[30%] max-h-[600px] sticky top-20 overflow-y-auto hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                    <div className="rounded-[10px] h-full bg-white p-4 !pt-6 sm:p-6">
                        <p>
                            <h3 className="text-lg font-medium text-gray-900">
                              Top Categories
                            </h3>
                        </p>

                        {/* Row with shadow */}
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex gap-2">
                            <img alt="All_Logo" src={All} className="w-6 h-6" />
                            <p>All</p>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex gap-2">
                            <img alt="All_Logo" src={science} className="w-6 h-6" />
                            <p>Science</p>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex gap-2">
                            <img alt="All_Logo" src={education} className="w-6 h-6" />
                            <p>Education</p>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex gap-2">
                            <img alt="All_Logo" src={entertainment} className="w-6 h-6" />
                            <p>Entertainment</p>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex gap-2">
                            <img alt="All_Logo" src={Tech} className="w-6 h-6" />
                            <p>Technology</p>
                        </div>
                    </div>
                </article>

                {/* Second Card - 67% Width with all React Communities */}
                <article className="w-full md:w-[67%] hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                    <div className="rounded-[10px] h-full bg-white p-4 !pt-6 sm:p-6">
                        
                    <div className="flex justify-between items-center">
                    <h1 className="mt-0.5 text-2xl font-medium text-gray-900">Communities</h1>

    <button className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
        <AiOutlinePlus className="w-5 h-5" />
        Create
    </button>
</div>

                        {/* First Community Row */}
                        <div className="mt-2 p-2 flex items-center gap-2">
                        <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition">
            <AiOutlineArrowLeft className="w-5 h-5 text-black" />
        </button>
                           
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">All</h3>
                            </div>
                        </div>

                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg flex items-center gap-4">
                            <img alt="React_Logo" src={ReactLogo} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                                <p className="text-sm font-light text-gray-700">
                                    100+ Contributors <span className="mx-1">&bull;</span> 30k+ Followers
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <Footer/>
        </div>

    );
}

export default Discover;
