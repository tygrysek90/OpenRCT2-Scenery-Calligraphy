import { Colour } from "openrct2-flexui"
import { sceneryPreview } from "../const/commonUiConsts"
import { usedFor } from "../const/objUsedForEnum"
import { objectConfig } from "../config/objConfig"

export function onSPreviewDraw(g: GraphicsContext, usedFor: usedFor) {
    g.colour = Colour.DarkGreen
    g.well(0,0,sceneryPreview.width-1, sceneryPreview.height-1)

    let img = objectConfig[usedFor].image
   
    if (img) {
        g.colour = objectConfig[usedFor].colours[0]
        g.secondaryColour = objectConfig[usedFor].colours[1]
        g.tertiaryColour = objectConfig[usedFor].colours[2]
        g.image(img, sceneryPreview.width/2, sceneryPreview.height-24)
    }
    else {
        g.text("E! No img arg given", 0, 0)
    }
}