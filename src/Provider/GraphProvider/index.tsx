import { ReactNode, useCallback, useRef } from "react";
import { context } from "./context";
import {
  Edge,
  Position,
  useEdgesState,
  useNodesState,
  addEdge,
  ConnectionLineType,
  Connection,
  useReactFlow,
} from "reactflow";
import dagre from "@dagrejs/dagre";
import { toast } from "react-hot-toast";

interface Props {
  children: ReactNode;
  flowId?: string;
}

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const NODE_WIDTH = 140;
const NODE_HEIGHT = 60;

const initialNode = [
  {
    id: "1",
    type: "BASE_NODE",
    data: {
      name: "Start Node",
      isStart: true,
    },
    position: { x: 100, y: 100 },
  },
];

export const GraphProvider = ({ children, flowId }: Props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNode);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);

  const { getNode } = useReactFlow();

  const idRef = useRef<number>(1);

  const onConnect = useCallback(
    (params: Connection) => {
      const sourceNodeId = params.source;
      const node = getNode(sourceNodeId ?? "");
      if (!node) return;
      if (node.data.isStart) {
        const _connectedEdges = edges.find((_edge) => _edge.source === node.id);
        if (_connectedEdges) {
          toast.error("Start node should only contain on entry point");
          return;
        }
      }
      setEdges((eds) =>
        addEdge({ ...params, type: ConnectionLineType.SmoothStep }, eds)
      );
    },
    [edges, getNode, setEdges]
  );

  const updateLayout = () => {
    dagreGraph.setGraph({ rankdir: "TB" });

    nodes.forEach((_node) => {
      dagreGraph.setNode(_node.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
    });

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = Position.Top;
      node.sourcePosition = Position.Bottom;

      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - NODE_WIDTH / 2,
        y: nodeWithPosition.y - NODE_HEIGHT / 2,
      };
      idRef.current++;

      return node;
    });

    setNodes([...nodes]);
    setEdges([...edges]);
  };

  const idGenerator = () => {
    idRef.current++;
    return idRef.current.toString();
  };

  const value = {
    nodes,
    edges,
    updateLayout,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setNodes,
    idGenerator,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};
