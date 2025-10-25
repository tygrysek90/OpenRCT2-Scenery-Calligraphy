import { vertical, label, button, groupbox } from "openrct2-flexui";
import { imgButtonSmall, padCentre, sceneryPreview } from "../const/commonUiConsts";

export function chosenPreview() {
    return  groupbox({
                width: sceneryPreview.width+12,
                text: "O type",
                content: [
                    //previewGraphics(12345),
                    label({
                        padding: padCentre,
                        height: 16,
                        text: "object descr{NEWLINE}{GREY}obj.identifier.xxx"
                    }),
                    button({
                        padding: padCentre,
                        width: imgButtonSmall.width,
                        height: imgButtonSmall.height,
                        text: "[|]",
                    })
                ]
            })
}