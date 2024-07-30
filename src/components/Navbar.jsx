import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between whitespace-nowrap border-b border-solid border-b-skin-border px-10 py-3">
      <Link to="/" className="flex items-center gap-4 text-skin-text">
        <div className="size-7">
          <img src="logo.png"/>
        </div>
        <h2 className="text-skin-text text-lg font-bold leading-tight tracking-[-0.015em]">
          Group 3
        </h2>
      </Link>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link to="/" className={`${location.pathname == '/' ? 'text-[#008000]' : 'text-skin-text'} text-sm font-medium leading-normal hover:text-skin-primary duration-150 ease-in`}>
            Home
          </Link>
          <Link to='/level-order-traversal-in-bst' className={`${location.pathname == '/level-order-traversal-in-bst' ? 'text-[#008000]' : 'text-skin-text'} text-sm font-medium leading-normal hover:text-skin-primary duration-150 ease-in`}>
            Level Order Traversal in BST
          </Link>
          <Link to='/breadth-first-search-traversal-in-graph' className={`${location.pathname == '/breadth-first-search-traversal-in-graph' ? 'text-[#008000]' : 'text-skin-text'} text-sm font-medium leading-normal hover:text-skin-primary duration-150 ease-in`}>
            Breadth First Search Traversal in Graph
          </Link>
        </div>
        {/* <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#d9e0e6] text-skin-text gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
          <div
            className="text-skin-text flex items-center gap-2"
            data-icon="Question"
            data-size="20px"
            data-weight="regular"
          >
            <p>FAQs</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
            </svg>
          </div>
        </button> */}
      </div>
    </header>
  );
};

export default Navbar;
