import { Colour } from "openrct2-flexui"
import { objectConfig } from "../config/objConfig"
import { usedFor, usedForLabels } from "../const/objUsedForEnum"

export function onPickerChange(usedFor: usedFor, colourOrder: number, colour: Colour) {
    objectConfig[usedFor].colours[colourOrder] = colour
}