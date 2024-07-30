import { Link } from "react-router-dom"
import { MainLayout } from "../../layouts"

const HomePage = () => {
  return (
    <MainLayout>
        <section className="px-40 flex flex-1 justify-center">
          <section className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <section className="@container">
              <section className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                <section
                  className="w-full relative bg-center bg-no-repeat aspect-video bg-cover rounded-xl h-[450px] @[480px]:min-w-[400px] @[864px]:w-full"
                  style={{backgroundImage: "url('bg-tree.png')"}}
                >
                  <div className="absolute top-0 w-full flex flex-col items-center justify-center h-full bg-black/40 text-white">
                    <h1 className="font-semibold text-4xl mb-5">Level Order Traversal and BFS Traversal</h1>
                    <p className="text-center max-w-[700px]">Perform level order traversals in binary search tree and breadth first search traversals in graph using our efficient algorithm</p>
                  </div>
                </section>
              </section>
            </section>

            <section className="flex flex-col gap-8 px-4 py-5 @container">
              <section className="flex flex-col gap-6">
                <section className="flex flex-col gap-4">
                  <h1
                    className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    Featured Traversals 
                  </h1>
                  <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">Visualize data structure and peform traversal algorithm</p>
                </section>
              </section>
              <section className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-5">
                <Link to="/level-order-traversal-in-bst" className="flex flex-col gap-3 pb-3">
                  <section
                    className="w-full bg-center h-[280px] bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/f5d94479-b0a0-47fd-82ef-644d02e55ddc.png')"}}
                  ></section>
                  <section>
                    <p className="text-[#111418] text-base font-semibold leading-normal">Level Order Traversal</p>
                    <p className="text-sm leading-relaxed">Perform Level Order Traversal on Tree Data Structure.</p>
                  </section>
                </Link>

                <Link to="/breadth-first-search-traversal-in-graph" className="flex flex-col gap-3 pb-3">
                  <section
                    className="w-full h-[280px] bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/4c92ed15-e85b-4624-9c23-00acee373e68.png')"}}
                  ></section>
                  <section>
                    <p className="text-[#111418] text-base font-semibold leading-normal ">Breadth First Search</p>
                    <p className="text-sm leading-relaxed">Peform BFS Traversal on Graph Data Structure.</p>
                  </section>
                </Link>
              </section>
            </section>
          </section>
        </section>
    </MainLayout>
  )
}

export default HomePage