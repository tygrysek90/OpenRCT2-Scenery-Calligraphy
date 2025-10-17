import { groupbox, LayoutDirection, vertical, graphics, Colour, horizontal, button, colourPicker, FlexiblePosition, Parsed, WidgetCreator, FlexibleLayoutContainer } from "openrct2-flexui"
import { padCentre, sceneryPreview, imgButtonSmall } from "../const/commonUiConsts"

function elementSelector() {
    return   groupbox({
            text: "Background",
            direction: LayoutDirection.Horizontal,
            content: [
                vertical({
                    padding: padCentre,
                    content: [
                        graphics({
                            padding: padCentre,
                            width: sceneryPreview.width,
                            height: sceneryPreview.height,
                            onDraw(g) {
                                g.colour = Colour.DarkGreen
                                g.well(0,0,sceneryPreview.width-1, sceneryPreview.height-1)
                        },
                        }),
                        horizontal({
                            padding: padCentre,

                            content: [
                                button({
                                    width: imgButtonSmall.width,
                                    height: imgButtonSmall.height,
                                    image: 29371
                                }),
                                button({
                                    width: imgButtonSmall.width,
                                    height: imgButtonSmall.height,
                                    image: "eyedropper"
                                }),
                            ]
                        }),
                        
                    ]
                }),
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