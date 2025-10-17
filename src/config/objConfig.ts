import { usedFor } from "../const/objUsedForEnum"
import { findIndex } from "../fx/arrayUtils"
import { objectLoader } from "../fx/objDataLoader"

export interface objectConfigInterface {
    /** OpenRCT2 Object Type */
    type: ObjectType,
    /** alike LoadedObject.identifier, eg. "rct2.burgb" | "09F55405|DirtGras|B9B19A7F" */
    identifier: string,
    /** alike LoadedObject.index */
    id: number | undefined,
    /** Real image (sprite) number */
    image: number | undefined
    /** Custom-formatted name from read-able name in user's language and object name to be shown to user */
    shownName: string | undefined
}

export var objectConfig: [objectConfigInterface, objectConfigInterface, objectConfigInterface]

function getDefaultConfig():objectConfigInterface[] {
    return [
        {
            type: "small_scenery",
            identifier: "rct2.scenery_small.tg21.json",
            id: undefined,
            image: undefined,
            shownName: undefined
        },
        {
            type: "small_scenery",
            identifier: "rct2.scenery_small.tg21.json",
            id: undefined,
            image: undefined,
            shownName: undefined
        },
        {
            type: "small_scenery",
            identifier: "rct2.scenery_small.tg21.json",
            id: undefined,
            image: undefined,
            shownName: undefined
        },
    ]
}



function populateObjectConfig(reallyPopulate: boolean): boolean {
    for (let i=0; i<objectConfig.length; i++) {
        objectConfig[i] = getDefaultConfig()[i]
        let index = findIndex(objectLoader.identifiers, n => n === objectConfig[i].identifier)
        if (index != null) {
            objectConfig[i].id = objectLoader.ids[index]
            objectConfig[i].image = objectLoader.images[index]
        }
        else {
            return false
        }
    }
    return true
}