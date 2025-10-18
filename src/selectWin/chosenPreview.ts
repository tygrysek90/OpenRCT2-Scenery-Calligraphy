import { vertical, label, button, groupbox } from "openrct2-flexui";
import { previewGraphics } from "../guiFx/previewGraphics";
import { imgButtonSmall, padCentre } from "../const/commonUiConsts";

export function chosenPreview() {
    return  groupbox({
                text: "O type",
                content: [
                    previewGraphics(),
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