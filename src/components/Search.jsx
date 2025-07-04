function Search({search_query}){
    return(
        <div className="flex justify-left items-center border-2 border-white/80 rounded-full gap-1 px-4 md:text-[1.2rem] text-[1rem] md:w-120 backdrop-blur-[9.05px] bg-white/50 w-80">
            <svg className="md:scale-80 scale-75"  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 20 20"  fill="none"  stroke="black"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            <input 
                type="text" 
                onKeyDown={(e)=> {
                if (e.key === 'Enter') search_query(e.target.value)}}
                placeholder="dark academia"
                className="border w-full border-gray-300 rounded-lg p-2 w-64 focus:outline-none text-[#404040]"
                style={{border: 'none'}}
            />
        </div>
    );
}

export default Search;
