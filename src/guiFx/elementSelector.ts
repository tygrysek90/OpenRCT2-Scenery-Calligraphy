import { groupbox, LayoutDirection, vertical, button, colourPicker, graphics } from "openrct2-flexui"
import { padCentre, sceneryPreview, imgButtonSmall } from "../const/commonUiConsts"
import { usedFor, usedForLabels } from "../const/objUsedForEnum"
import { objectConfig } from "../config/objConfig"
import { onSPreviewDraw } from "./onPreviewDraw"
import { onPickerChange } from "./onPickerChange"

export function elementSelector(usedFor: usedFor) {
    return   groupbox({
            width: 100,
            text: usedForLabels[usedFor],
            direction: LayoutDirection.Horizontal,
            content: [
                // 1st of 2 verticals
                // preview
                graphics({
                width: sceneryPreview.width,
                height: sceneryPreview.height,
                onDraw: (g) => onSPreviewDraw(g, usedFor)
                    
                }),
                // 2st of 2 vertical
                // brush image, 3 times colour picker
                vertical({
                    content: [
                        button({
                            padding: {left: -6, right: 0},
                            width: imgButtonSmall.width,
                            height: imgButtonSmall.height,
                            image: "eyedropper",
                            tooltip: "Select an object on the map to be used in this context"
                        }),
                        colourPicker({
                            padding: padCentre,
                            colour: objectConfig[usedFor].colours[0],
                            onChange: (colour) => onPickerChange(usedFor, 0, colour)
                        }),
                        colourPicker({
                            padding: {left: "1w", right: "1w", top:-4, bottom: -4},
                            colour: objectConfig[usedFor].colours[1],
                            onChange: (colour) => onPickerChange(usedFor, 1, colour)

                        }),
                        colourPicker({
                            padding: padCentre,
                            colour: objectConfig[usedFor].colours[2],
                            onChange: (colour) => onPickerChange(usedFor, 2, colour)
                        })
                    ]
                })
                
            ]
        })
    
}


