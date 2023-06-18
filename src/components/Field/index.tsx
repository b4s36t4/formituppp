import { getIcon } from "@/lib/utils";
import clsx from "clsx";

export const Field = ({
  field,
  onClick,
}: {
  field: Field;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="border w-full p-2 flex min-h-[80px] border-zinc-500 rounded-md cursor-pointer items-center"
    >
      <span className="mr-2">{field.icon && getIcon(field.icon)}</span>
      <div
        className={clsx("flex flex-col items-start", {
          "border-l pl-2": !!field.icon,
        })}
      >
        <h3 className="text-lg font-semibold">{field.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {field.description}
        </p>
      </div>
    </div>
  );
};
