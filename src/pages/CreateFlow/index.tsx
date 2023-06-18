import { SideBar } from "@/components/Sidebar";

import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { NodeTypes } from "./nodes";
import { useGraph } from "@/Provider/GraphProvider/useGraph";

export const CreateFlow = () => {
  const { nodes, edges, onEdgesChange, onNodesChange, onConnect } = useGraph();

  return (
    <div className="flex w-full h-full">
      <SideBar />
      <div className="w-full h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={NodeTypes}
          // defaultViewport={{ x: -100, y: -100, zoom: 1 }}
          fitView={true}
        >
          <Controls />
          <MiniMap position="bottom-right" pannable={true} zoomable={true} />
          <Background variant="cross" size={4} />
        </ReactFlow>
      </div>
    </div>
  );
};
