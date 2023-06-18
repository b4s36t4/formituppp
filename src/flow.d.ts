import { NodeProps } from "reactflow";

type NodeType = "input" | "radio";

type CustomNode = NodeProps<{ name: string; type: NodeType; isStart: boolean }>;
