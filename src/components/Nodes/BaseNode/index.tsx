import { CustomNode } from "@/flow";
import { getIcon } from "@/lib/utils";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ data }: CustomNode) => {
  return (
    <div className="border px-2 w-[140px] py-1 rounded-sm border-slate-600">
      <span>{getIcon(data.type)}</span>
      <p>{data.name}</p>
      <Handle position={Position.Bottom} id="connection" type="source" />
      {!data.isStart && (
        <Handle position={Position.Top} id="connection-top" type="target" />
      )}
    </div>
  );
};
