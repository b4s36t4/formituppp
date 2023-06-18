interface SessionUser {
  email: string;
  password: string;
}

type InputProperties = {
  type: {
    type: string;
    options: string[];
  };
  validation: {
    length: { min: { type: string }; max: { type: string } };
  };
  prefix: {
    icon: {
      type: string;
    };
    text: {
      type: string;
    };
  };
  placeholder: {
    type: string;
    required: boolean;
  };
  label: {
    type: string;
    required: boolean;
  };
};

type RadioProperties = {
  label: {
    type: string;
    required: boolean;
  };
  value: string;
};

type ButtonProperties = {
  click: string;
  action: {
    type: string;
    options: string[];
  };
};

type FieldTypeProperties =
  | {
      type: "input";
      properties: InputProperties;
    }
  | { type: "radio"; properties: RadioProperties }
  | { type: "button"; properties: ButtonProperties };

interface Field extends FieldTypeProperties {
  name: string;
  icon?: string;
  description: string;
  nodeType: string;
}
