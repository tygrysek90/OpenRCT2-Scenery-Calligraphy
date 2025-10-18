import { graphics, Colour } from "openrct2-flexui"
import { padCentre, sceneryPreview } from "../const/commonUiConsts"

export function previewGraphics() {
    return  graphics({
                padding: padCentre,
                width: sceneryPreview.width,
                height: sceneryPreview.height,
                onDraw(g) {
                    g.colour = Colour.DarkGreen
                    g.well(0,0,sceneryPreview.width-1, sceneryPreview.height-1)
            },
            })

}

