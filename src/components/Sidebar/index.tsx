import { useGraph } from "@/Provider/GraphProvider/useGraph";
import { Button } from "../ui/button";
import { RenderComponents } from "./menu";

export const SideBar = () => {
  const { updateLayout } = useGraph();
  const onClick = () => {
    updateLayout();
  };

  return (
    <div className="hidden md:flex flex-col md:w-3/12 h-full shadow-md py-12 px-4">
      <h2 className="text-xl font-bold">Select a Field</h2>
      <Button onClick={onClick} size={"sm"}>
        Update Layout
      </Button>
      <div className="mt-4">
        <RenderComponents />
      </div>
    </div>
  );
};
