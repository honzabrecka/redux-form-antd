import Input from "antd/lib/input";
import createComponent from "./BaseComponent";
import lazyTextFieldMap from "../maps/textFieldMap";
import { getValidateStatus } from "../maps/mapError";

export default createComponent(
  Input,
  lazyTextFieldMap
);
