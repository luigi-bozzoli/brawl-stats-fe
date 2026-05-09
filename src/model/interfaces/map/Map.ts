import type { BaseEntity } from "../BaseEntity";
import type { Mode } from "./Mode";

export interface Map extends BaseEntity {
    mode: Mode;
}