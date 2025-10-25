import { Colour } from "openrct2-flexui"
import { usedFor } from "../const/objUsedForEnum"
import { findIndex } from "../fx/arrayUtils"
import { objectLoader } from "../fx/objDataLoader"
import { debug } from "../logger/logger"


export interface objectConfigInterface {
    /** OpenRCT2 Object Type */
    type: ObjectType,
    /** alike LoadedObject.identifier, eg. "rct2.burgb" | "09F55405|DirtGras|B9B19A7F" */
    identifier: string,
    /** alike LoadedObject.index */
    id: number | undefined,
    /** Real image (sprite) number */
    image: number | undefined,
    /** Pri, Sec and Ter colours */
    colours: [Colour, Colour, Colour],
    /** Custom-formatted name from read-able name in user's language and object name to be shown to user */
    shownName: string | undefined
}

const defColours: [Colour, Colour, Colour] = [Colour.BordeauxRed, Colour.Yellow, Colour.DarkBrown]

export var objectConfig: [objectConfigInterface, objectConfigInterface, objectConfigInterface] = [
        {
            type: "small_scenery",
            identifier: "rct2.scenery_small.tg21",
            id: undefined,
            image: undefined,
            colours: defColours,
            shownName: undefined
        },
        {
            type: "small_scenery",
            identifier: "rct2.scenery_small.tg21",
            id: undefined,
            image: undefined,
            colours: defColours,
            shownName: undefined
        },
        {
            type: "small_scenery",
            identifier: "rct2.scenery_small.tg21",
            id: undefined,
            image: undefined,
            colours: defColours,
            shownName: undefined
        },
    ]

function getDefaultConfig():objectConfigInterface[] {
    return [
        {
            type: "small_scenery",
            identifier: "rct2.scenery_small.tg21",
            id: undefined,
            image: undefined,
            colours: defColours,
            shownName: undefined
        },
        {
            type: "small_scenery",
            identifier: "rct2.scenery_small.tg21",
            id: undefined,
            image: undefined,
            colours: defColours,
            shownName: undefined
        },
        {
            type: "small_scenery",
            identifier: "rct2.scenery_small.tg21",
            id: undefined,
            image: undefined,
            colours: defColours,
            shownName: undefined
        },
    ]
}



function populateObjectConfig(reallyPopulate: boolean): boolean {
    debug("Populating object config")
    for (let i=0; i<objectConfig.length; i++) {
        objectConfig[i] = getDefaultConfig()[i]
        
        let index = objectLoader._identifiers.indexOf(objectConfig[i].identifier)
        debug("a: "+index)
        if (index != null) {
            objectConfig[i].id = objectLoader.ids[index]
            objectConfig[i].image = objectLoader.images[index]
            debug(`setting config ${i} image number ${objectConfig[i].image}`)
        }
        else {
            return false
        }
    }
    return true
}

export function initConfig(){
    debug("config init")
    populateObjectConfig(true)
}