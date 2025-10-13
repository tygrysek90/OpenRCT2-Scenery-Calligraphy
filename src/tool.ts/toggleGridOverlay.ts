/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Scenery-Calligraphy
 * 
 * OpenRCT2-Scenery-Calligraphy
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

//**
// Based on OpenRCT2-ProxyPather by Basssiiie, 
// https://github.com/Basssiiie/OpenRCT2-ProxyPather
// 
// originally licensed under MIT License
// see licenses/mit_license_Basssiiie_ProxyPather}` */

// The flag for gridlines on the map.
const viewportFlagGridlines = (1 << 7);


/**
 * Toggles the map grid overlay on or off.
 * @param value True for on, false for off.
 */
export function toggleGridOverlay(value: boolean): void
{
	if (value)
	{
		ui.mainViewport.visibilityFlags |= viewportFlagGridlines;
	}
	else
	{
		ui.mainViewport.visibilityFlags &= ~(viewportFlagGridlines);
	}
}