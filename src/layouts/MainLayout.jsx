import { Navbar } from "../components"

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-skin-bg dark group/design-root overflow-x-hidden"
    >
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <div className="pt-14">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
