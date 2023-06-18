import React from "react";
import {
  Connection,
  Edge,
  Node,
  OnEdgesChange,
  OnNodesChange,
} from "reactflow";

interface Context {
  nodes: Node[];
  edges: Edge[];
  updateLayout: () => void;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: (connection: Connection) => void;
  setNodes: (nodes: Node[]) => void;
}

export const context = React.createContext<Context | null>(null);
