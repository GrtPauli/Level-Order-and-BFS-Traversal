import { useEffect, useState } from "react";
import { MainLayout } from "../../layouts";
import { ConfigProvider, Modal } from "antd";
import { visualize } from "../../algorithms/visualize";
import { getBST } from "../../algorithms/convert";
import { levelOrderTraversal } from "../../algorithms/traverse";

const LevelOrderInBstPage = () => {
  const [sequence, setSequence] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <MainLayout>
      <div>
        <div className="px-8 flex flex-1 py-5 gap-10">
          <div className="layout-content-container flex flex-col py-5 w-[60%] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-skin-text text-[33px] font-black leading-tight tracking-[-0.033em] min-w-72">
                Level Order Traversal in Binary Search Tree
              </p>
            </div>
            <p className="text-skin-text text-base font-normal leading-normal pb-3 pt-1 px-4">
              Enter sequence to create binary search tree, to perform traversal.
            </p>
            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-skin-text text-base font-medium leading-normal pb-2">
                  Sequence
                </p>
                <input
                  placeholder="Enter each node seperated by comma, e.g 5,6,7,8."
                  className="shadow-lg form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-skin-text focus:outline-0 focus:ring-0 border border-skin-border bg-skin-bg focus:border-skin-primary focus:border-2 h-14 placeholder:text-[#60778a] p-4 text-base font-normal leading-normal"
                  value={sequence}
                  name="sequence"
                  onChange={(e) => setSequence(e.target.value)}
                />
              </label>
            </div>
            {/* <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Insert Node</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-skin-bg text-skin-text text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Delete Node</span>
                </button>
              </div>
            </div> */}

            <div className="p-4 @container mt-10">
              <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-skin-border bg-skin-bg p-5 @[480px]:flex-row @[480px]:items-center">
                <div className="flex flex-col gap-1">
                  <p className="text-skin-text text-base font-bold leading-tight">
                    Perform Level Order Traversal
                  </p>
                  <p className="text-[#60778a] text-base font-normal leading-normal">
                    Visit each node in the tree in level order (from top to
                    bottom, left to right).
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  disabled={sequence == "" ? true : false}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#008000] text-white text-sm font-medium leading-normal"
                >
                  <span className="truncate">Perform Traversal</span>
                </button>
              </div>
            </div>

            {/* <div>
              <h3 className="text-skin-text text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Traversal Result
              </h3>
              <p className="text-[#60778a] text-sm font-normal leading-normal pb-2 pt-1 px-4">
                No traversal has been performed.
              </p>
            </div> */}
          </div>

          <div className="border-l border-skin-border w-[40%] pl-5 pt-10">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-[22px] font-bold leading-none">Quick Recap</h2>
              <img src="idea.png" className="size-10 -mt-2"/>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-2">
                <div className="text-white flex items-center justify-center rounded-full bg-[#008000] shrink-0 size-8" data-icon="Question" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                    ></path>
                  </svg>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-base font-medium leading-normal line-clamp-1">What is BST?</p>
                </div>
              </div>

              <p className="text-sm font-normal leading-normal">
                A Binary search tree (BST) is a type of data structure used in computer science for organizing data in a hierarchical manner to allow for efficient searching, insertion, and deletion operations.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-2">
                <div className="text-white flex items-center justify-center rounded-full bg-[#008000] shrink-0 size-8" data-icon="Question" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                    ></path>
                  </svg>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-base font-medium leading-normal line-clamp-1">What are traversals in BST?</p>
                </div>
              </div>

              <p className="text-sm font-normal leading-normal">
                Traversal in a Binary search tree (BST) refers to the process of visiting each node in a specific order. 
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-2">
                <div className="text-white flex items-center justify-center rounded-full bg-[#008000] shrink-0 size-8" data-icon="Question" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                    ></path>
                  </svg>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-base font-medium leading-normal line-clamp-1">What is level order traversal in BST?</p>
                </div>
              </div>

              <p className="text-sm font-normal leading-normal">
                Level order traversal is a method of traversing a binary search tree (or any binary tree) where the nodes are visited level by level, from left to right. This means that all nodes at depth 0 (the root) are visited first, followed by all nodes at depth 1 (the children of the root), then all nodes at depth 2, and so on.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ConfigProvider
        theme={{
          token: {
            fontFamily: ''
          }
        }}
      >
        <Modal
          open={showModal}
          footer={null}
          closeIcon={<img src="close.png" className="w-[20px]"/>}
          onCancel={() => setShowModal(false)}
        >
          <p className="absolute top-5 font-semibold text-2xl">Tree Visualizer</p>
          <MainTraversal sequence={sequence} />
        </Modal>
      </ConfigProvider>
    </MainLayout>
  );
};

export default LevelOrderInBstPage;

// eslint-disable-next-line react/prop-types
const MainTraversal = ({ sequence }) => {
  const [treeArr, setTreeArr] = useState([]);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(false);
    let arr;
    arr = getBST(sequence);
    if (isNaN(arr[0]) || arr[0] === "") return;
    visualize(arr);
    setTreeArr(arr);
  }, [sequence]);

  const handleLevelOrder = () => {
    setStart(true);
    setTimeout(() => {
      levelOrderTraversal(treeArr);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center justify- w-full pt-5">
      <section id="container" className="!w-auto"></section>
      {!start && (
        <button
          onClick={handleLevelOrder}
          className="mt-5 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#008000] text-white text-sm font-medium leading-normal"
        >
          <span className="truncate">Level Order Traversal</span>
        </button>
      )}

      {start && (
        <section className="mt-5 flex flex-col items-center w-full">
          <p className="font-semibold text-lg mb-2">Traversal</p>
          <section id="array-container"></section>
        </section>
      )}
    </div>
  );
};
