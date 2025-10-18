import { groupbox, LayoutDirection, vertical, graphics, Colour, horizontal, button, colourPicker, FlexiblePosition, Parsed, WidgetCreator, FlexibleLayoutContainer } from "openrct2-flexui"
import { padCentre, sceneryPreview, imgButtonSmall } from "../const/commonUiConsts"
import { objectSelectionWindow } from "../selectWin/objSelectionWind"
import { previewGraphics } from "../guiFx/previewGraphics"

function elementSelector() {
    return   groupbox({
            text: "Background",
            direction: LayoutDirection.Horizontal,
            content: [
                // 1st of 2 verticals
                // preview, open object selection and eyedropper tool
                vertical({
                    padding: padCentre,
                    content: [
                        previewGraphics(),
                        horizontal({
                            padding: padCentre,

                            content: [
                                // open object selection window
                                button({
                                    width: imgButtonSmall.width,
                                    height: imgButtonSmall.height,
                                    image: 29371,
                                    onClick: () => objectSelectionWindow.open()
                                }),
                                // eyedropper (select obj)
                                button({
                                    width: imgButtonSmall.width,
                                    height: imgButtonSmall.height,
                                    image: "eyedropper"
                                }),
                            ]
                        }),
                        
                    ]
                }),
                // 2st of 2 vertical
                // brush image, 3 times colour picker
                vertical({
                    content: [
                        graphics({
                            padding: padCentre,
                            width: imgButtonSmall.width,
                            height: imgButtonSmall.height,
                            onDraw(g) {
                                g.image(5173, 0, 0)
                            },
                        }),
                        colourPicker({
                            padding: padCentre
                        }),
                        colourPicker({
                            padding: {left: "1w", right: "1w", top:-4, bottom: -4}
                        }),
                        colourPicker({
                            padding: padCentre
                        })
                    ]
                })
                
            ]
        })
    
}

export function elementSelectors() {
    let e:FlexibleLayoutContainer = []
    e.push(elementSelector())
    e.push(elementSelector())
    e.push(elementSelector())
    return e
}