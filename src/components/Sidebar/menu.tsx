import { useGraph } from "@/Provider/GraphProvider/useGraph";
import { Field } from "../Field";
import { fields } from "./fields.json";
import { toast } from "react-hot-toast";
import capitalize from "lodash/capitalize";

export const RenderComponents = () => {
  const { setNodes, nodes, idGenerator } = useGraph();
  const onClick = (field: Field) => {
    const newNode = {
      type: field.nodeType,
      data: { ...field },
      id: idGenerator(),
      position: { x: -100, y: 20 },
    };
    setNodes([...nodes, newNode]);
    toast.success(`Added a new ${capitalize(field.name)} node`);
  };

  return (fields as Field[]).map((_field) => {
    return (
      <div key={_field.name} className="flex space-y-4 mb-2">
        <Field
          onClick={() => onClick(_field)}
          key={_field.name}
          field={_field}
        />
      </div>
    );
  });
};
