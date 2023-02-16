(function(){
    var script = {
 "class": "Player",
 "vrPolyfillScale": 1,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.MapViewer",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
  "this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
  "this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "start": "this.playAudioList([this.audio_4AD5149D_567E_15EE_41C1_1A287DAC3E91]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "definitions": [{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "FUNCTION_2_2 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_4020EE3A_54D9_A848_41D2_8D756664A2FE",
  "this.overlay_40E83D59_54DF_E8C8_41CD_0DDADA9DE190",
  "this.overlay_400A9638_569E_1536_41CF_BE76CAB5FF95",
  "this.overlay_41A5A51F_569E_74EA_41C7_3C2F0DC728DE"
 ],
 "id": "panorama_5E48B6BC_541B_2024_41BC_D999FC96538F",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 23.92,
   "panorama": "this.panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104",
   "yaw": -80.89,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -69.21,
   "panorama": "this.panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420",
   "yaw": 19.72,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4E8BFF1D_592D_88FC_4198_613AB527A656",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "ELEVATOR_CORE_3.PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_5BBC71A4_5469_2024_41D0_EA3CC4D3F976",
  "this.overlay_44E27EE1_5476_E05C_41BB_768C41F96A0D",
  "this.overlay_45220375_5477_E024_41CE_392863C2B851",
  "this.overlay_46A728B1_569E_3D36_41BA_566C0859A93F",
  "this.overlay_46C4A3DA_569E_136A_41D1_065D3A6BA421",
  "this.overlay_46B120D9_56A2_0D77_41CB_D310DBBF4F86"
 ],
 "id": "panorama_5E54DF5F_5419_2064_4181_001C4457D09E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 38.51,
   "panorama": "this.panorama_5E568337_5419_2024_41D2_A30D47360735",
   "yaw": 88,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 0.64,
   "panorama": "this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA",
   "yaw": -10.63,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -88.33,
   "panorama": "this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3",
   "yaw": -98.99,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "ELEVATOR_CORE_2.PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_47F24588_5479_20EC_41A2_241E3413310F",
  "this.overlay_406F33B8_5479_602C_41C4_666876E935A8",
  "this.overlay_4F9C4BC0_54FB_A839_416B_BB4C58AB91E0",
  "this.overlay_15FC46CD_5546_B9C8_41D3_8333B33B3335",
  "this.overlay_1C6F92C3_55F9_B83F_4151_4710606F99F1",
  "this.overlay_47997AAE_56A6_7D2A_41C7_60C1A5A7F88F",
  "this.overlay_46B18605_56A1_F4DE_41CC_E595C2D6AE66"
 ],
 "id": "panorama_5E568337_5419_2024_41D2_A30D47360735",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 88,
   "panorama": "this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E",
   "yaw": 38.51,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 98.98,
   "panorama": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2",
   "yaw": -47.48,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -103.25,
   "panorama": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3",
   "yaw": -145.58,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -103.25,
   "panorama": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3",
   "yaw": 164.17,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "COWORKING_SPACE_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_72240DA3_54C6_A87F_41D2_D205722802B1",
  "this.overlay_7D1392BF_5539_D848_41C4_4E5D84036F39",
  "this.overlay_7D21481E_553A_A848_41C1_97EDA83E34B1",
  "this.overlay_4ECF49B0_56A6_1F35_41B4_F172A4555FB0",
  "this.overlay_41796BA8_56A6_13D6_41A7_D6150EE06A4D",
  "this.overlay_4F6EC3FA_5666_1335_41C7_6ACF7EC3BBF7",
  "this.overlay_4FA5AC9B_5666_F5EA_41B6_ABDD86AA5B51"
 ],
 "id": "panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.73,
   "panorama": "this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9",
   "yaw": -141.15,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 0.73,
   "panorama": "this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9",
   "yaw": 159.35,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 147.97,
   "panorama": "this.panorama_5E5595D8_5419_606C_41D0_D644098500B8",
   "yaw": 17.61,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 34.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DB600EB_592D_9944_41C3_D6678E988D9D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -162.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4E314E45_592D_894C_41B3_04E7124722E3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -64.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4F464D73_592D_8B44_41D4_FBBF99C3A0B3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 56.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41FC604C_592D_995C_41D3_605A824C07B8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "MALE_TOILET_2 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_67A9AF81_5549_A83B_41D2_496B53961503",
  "this.overlay_1FC478B9_55CA_A84B_41B9_033B8F46B747",
  "this.overlay_57F12804_591E_88CC_41D4_B6E317169222",
  "this.overlay_5621A3A2_591E_FFC4_41CC_134FD9D1248D"
 ],
 "id": "panorama_5E578F69_541B_602C_41C2_4A0F1F976829",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.75,
   "panorama": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
   "yaw": -105.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 44.34,
   "panorama": "this.panorama_5E4972F0_541B_603C_41D1_9087F06C38E5",
   "yaw": -1.88,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "D5_Panorama 4_20230214_175735",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_669A0EDB_555A_E9C8_41AD_F184C9EEEE4D",
  "this.overlay_66A2ACBB_555A_A848_41BB_0F0D8F7D8407",
  "this.overlay_14B1AECA_554B_69C9_41C8_4BDA504B6766",
  "this.overlay_192E667D_55FB_F8CB_4198_E7FA64BA57CB",
  "this.overlay_182C9F0A_55FB_6848_41D0_ED2DF790E516",
  "this.overlay_46698F75_56A2_F33E_41CE_21B674C9BB86"
 ],
 "id": "panorama_58FDA850_5419_207C_41C9_069E791B36A6",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -14.57,
   "panorama": "this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994",
   "yaw": -163.65,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 161.91,
   "panorama": "this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA",
   "yaw": -86.1,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -164.8,
   "panorama": "this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B",
   "yaw": -9.88,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 169.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C3501BF_592D_9B3C_41C7_BA1A029080AB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -136.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DA690C5_592D_994C_41A4_AE38536388A3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -18.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41727FCC_592D_875C_41B1_8E1AA5A5C0B7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -170.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C6C3C3F_592D_893C_41B2_4D6DC4FD9D37",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E54DF5F_5419_2064_4181_001C4457D09E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -135.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DF4416F_592D_9B5C_41D4_3D3042703F9E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 74.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D8FF126_592D_98CD_41BD_88B4F32F90CE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 93.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C79DC52_592D_8944_41C6_42FB04C85F45",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E543699_541B_20EC_41C0_1B21584E5F82_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -17.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C94F26C_592D_995C_41AE_1CD7101E7C0F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 115.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41CC605B_592D_9944_4173_50CF36EE4A9F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 156.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4E017E59_592D_8944_41BD_951B99976CBE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -45.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_419F1030_592D_98C4_4196_FEF8222D5DB8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -109.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41155FB0_592D_87C4_41B0_16F9C4BFCC76",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CEC3CD7_592D_894C_41C5_8649FBC21DBA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "FEMALE_CHANGEING_ROOM_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_68E5DCB1_554E_E85B_41B7_81B9E8A1B6AE",
  "this.overlay_4EF4BA72_56A2_3D3A_41B0_E4AC81F39AD3"
 ],
 "id": "panorama_5E56643F_5419_6024_41AB_F20D58121F15",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.26,
   "panorama": "this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B",
   "yaw": 43.99,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "RECEPTION_LOBBY_2 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_45EA15F1_5476_E03D_41CC_908CDE0031C6",
  "this.overlay_46DD3214_5469_23E4_41C7_22C86B4BC606",
  "this.overlay_475E7325_5469_2024_41C7_476010387DB4",
  "this.overlay_4F65F3AC_54FB_5849_41D4_59BF15BBFDFE",
  "this.overlay_15749879_5547_68CB_41AD_4B56C68A0807",
  "this.overlay_19F47A7E_55FA_A8C8_41D2_8A254FEBF3D2",
  "this.overlay_1FDDE67A_55FB_78C9_41B5_F17B15C72482",
  "this.overlay_44E28913_56A2_1CFA_41C4_B591FFEF745E",
  "this.overlay_41EE1C72_56E2_353A_41CB_9EBEB5FD86AA"
 ],
 "id": "panorama_5E557A0F_541B_E3E4_41C5_9385896782C2",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -47.48,
   "panorama": "this.panorama_5E568337_5419_2024_41D2_A30D47360735",
   "yaw": 98.98,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -47.48,
   "panorama": "this.panorama_5E568337_5419_2024_41D2_A30D47360735",
   "yaw": 103.25,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 48.74,
   "panorama": "this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3",
   "yaw": -84.03,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -90.57,
   "panorama": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82",
   "yaw": 0.38,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -160.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4ED6BF78_592D_8744_41D0_DFE855E33935",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E56643F_5419_6024_41AB_F20D58121F15_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4F2B9D17_592D_88CC_41CC_A7CB3AF0371E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 96.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C53CC74_592D_894C_41CB_B9F049FF85CF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_58875CB9_541A_E02C_41D3_73B63887517E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 48.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D9BC144_592D_9B4C_41C6_B128B6394FF0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4153FFE9_592D_8744_41CB_48169D227CB1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4E0F5E6E_592D_895C_4195_3F9343F90781",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -50.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D863116_592D_98CC_41D3_F39C20626706",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "D5_Panorama 5_20230214_175429",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_69BF9C6B_5546_A8CF_41CB_97D6B9DB0D26",
  "this.overlay_6E09B9FB_554A_ABCF_41CA_DC7DB868932B",
  "this.overlay_1E805AB1_55C6_A858_41C0_782A9DEE9FFB",
  "this.overlay_4EFCF3DD_56A2_336E_41C1_AF5812C40415"
 ],
 "id": "panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.88,
   "panorama": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6",
   "yaw": -164.8,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 131.89,
   "panorama": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
   "yaw": 15.8,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "FUNCTION_2_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_4753D893_54DB_A85F_41D2_3081185CAB5D",
  "this.overlay_4737DB44_54DB_6839_41C8_3C74B4AC10A6",
  "this.overlay_4E8FAC8D_569E_75EE_41C2_77B339CA0032",
  "this.overlay_4F86FEB5_569E_353E_41B7_CBDD7C47FAB9"
 ],
 "id": "panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -80.89,
   "panorama": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F",
   "yaw": 23.92,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 91.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DD21196_592D_9BCC_4199_F31613123359",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -61.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C532229_592D_98C4_41B9_94142CC7EB28",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 74.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DB060DF_592D_997C_41A2_E4F5679FC7C3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -37.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C0111CA_592D_9B44_41B0_32910EB4C98D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -141.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DFEA17B_592D_9B44_41D5_AE7E5CF83B4D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -150.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C6CD203_592D_98C4_41D1_776BD78F463B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4E6CEE9C_592D_89FC_41D0_E29282F703F3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E578F69_541B_602C_41C2_4A0F1F976829_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "camera": "this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_camera",
   "media": "this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E_camera",
   "media": "this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6_camera",
   "media": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E568337_5419_2024_41D2_A30D47360735_camera",
   "media": "this.panorama_5E568337_5419_2024_41D2_A30D47360735",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3_camera",
   "media": "this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_camera",
   "media": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_camera",
   "media": "this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_camera",
   "media": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82_camera",
   "media": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_camera",
   "media": "this.panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_camera",
   "media": "this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_camera",
   "media": "this.panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_camera",
   "media": "this.panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_camera",
   "media": "this.panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_camera",
   "media": "this.panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_camera",
   "media": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_camera",
   "media": "this.panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_camera",
   "media": "this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_camera",
   "media": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_camera",
   "media": "this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_camera",
   "media": "this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_camera",
   "media": "this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_camera",
   "media": "this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_camera",
   "media": "this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_camera",
   "media": "this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_camera",
   "media": "this.panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E5595D8_5419_606C_41D0_D644098500B8_camera",
   "media": "this.panorama_5E5595D8_5419_606C_41D0_D644098500B8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E4CC250_5419_207C_4135_0A9EBC679160_camera",
   "media": "this.panorama_5E4CC250_5419_207C_4135_0A9EBC679160",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_camera",
   "media": "this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_camera",
   "media": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_camera",
   "media": "this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_camera",
   "media": "this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E55FC6B_5419_202C_41B6_215937597045_camera",
   "media": "this.panorama_5E55FC6B_5419_202C_41B6_215937597045",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_camera",
   "media": "this.panorama_5E4972F0_541B_603C_41D1_9087F06C38E5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E578F69_541B_602C_41C2_4A0F1F976829_camera",
   "media": "this.panorama_5E578F69_541B_602C_41C2_4A0F1F976829",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_camera",
   "media": "this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_camera",
   "media": "this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_camera",
   "media": "this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_camera",
   "media": "this.panorama_58804E3F_541B_6024_41AE_5E1B04832DC1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_camera",
   "media": "this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_camera",
   "media": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_588580AA_541A_E02C_4144_D3F282922A1E_camera",
   "media": "this.panorama_588580AA_541A_E02C_4144_D3F282922A1E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_58875CB9_541A_E02C_41D3_73B63887517E_camera",
   "media": "this.panorama_58875CB9_541A_E02C_41D3_73B63887517E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5881B97C_541B_2024_4199_2DF060A6B33C_camera",
   "media": "this.panorama_5881B97C_541B_2024_4199_2DF060A6B33C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_camera",
   "media": "this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_5E56643F_5419_6024_41AB_F20D58121F15_camera",
   "media": "this.panorama_5E56643F_5419_6024_41AB_F20D58121F15",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -136.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C452C64_592D_894C_41D5_558BDD48B7ED",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DCBB18A_592D_9BC4_41B4_7EB8E08C5A77",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DEB4160_592D_9B44_419A_AC3B5DCBD92E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "RECEPTION_LOBBY_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_46DA38DD_5417_6064_41C6_3C0D1BE33B10",
  "this.overlay_46011B01_5417_61DC_41B3_3151F215B7C4",
  "this.overlay_590F525E_54CB_58C8_41AB_F52F945C95FE",
  "this.overlay_1F7FD2B1_55C7_585B_41AD_1EDC25EBC1E5",
  "this.overlay_4752D693_56AE_15FA_41D4_0EF7D7E8DD05",
  "this.overlay_4714EA05_56AE_3CDE_41D4_F98CC9BDC7C5"
 ],
 "id": "panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 142.82,
   "panorama": "this.panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389",
   "yaw": 104.88,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 16.82,
   "panorama": "this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3",
   "yaw": -147.72,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 102.62,
   "panorama": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82",
   "yaw": -39.72,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -32.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CBB0251_592D_9944_41D4_CE841D20358D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -163.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C0AE1DA_592D_9B44_41C9_4826A692FD2C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "COFFEE_LOUNGE .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_163FE96D_5539_68C8_41C6_001BB8EE3E0A",
  "this.overlay_16FC03BD_5539_B84B_41BF_BE08436FFDCB",
  "this.overlay_11C4F7DA_553A_A7C9_41CB_AB34A3BEC3C0",
  "this.overlay_415D3B57_56E2_737A_4190_051CED25F99E",
  "this.overlay_4EE5CFCB_56E6_736A_4195_42BF02D045E2"
 ],
 "id": "panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 104.88,
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
   "yaw": 142.82,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "CONFERENCE_ROOM_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_7293A1BA_5539_B849_416C_6562BAFD227C",
  "this.overlay_7CD6817F_553E_D8C7_41B8_2ADB3FC51E16",
  "this.overlay_118BF144_55CA_F839_41BD_56FB1CED2171",
  "this.overlay_1057182E_55C9_6848_41D4_2651DF687AE9",
  "this.overlay_1A8623B3_55CB_B85F_41D4_34052EFFB805",
  "this.overlay_4EEBC0CA_56A6_0D6A_41B9_C90235F6C8F3",
  "this.overlay_410C72FE_56A6_0D2D_41C9_4FEB6712979B"
 ],
 "id": "panorama_5E5595D8_5419_606C_41D0_D644098500B8",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 17.61,
   "panorama": "this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB",
   "yaw": 147.97,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 17.61,
   "panorama": "this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB",
   "yaw": -170.58,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -23.11,
   "panorama": "this.panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9",
   "yaw": -145.96,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 6.78,
   "panorama": "this.panorama_5E4CC250_5419_207C_4135_0A9EBC679160",
   "yaw": -5.02,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "FEMALE_TOILET_2 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_6746AAC9_554A_E9CB_41AB_1EA66EA1C0C7",
  "this.overlay_4E9EE93D_56A2_1F2E_41D1_D23D0F481EE7"
 ],
 "id": "panorama_5E55FC6B_5419_202C_41B6_215937597045",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.42,
   "panorama": "this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA",
   "yaw": 43.46,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "D5_Panorama 10_20230214_173943",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_681CE3FF_554F_7FC7_41C0_6B062EC1BABC",
  "this.overlay_6B101B13_5549_A85F_41D0_9668FF663E0F",
  "this.overlay_19CF3258_553F_B8C9_41D3_6415DF3CB07D",
  "this.overlay_412F9B4B_56A2_136A_41BB_734D508FD106"
 ],
 "id": "panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 43.99,
   "panorama": "this.panorama_5E56643F_5419_6024_41AB_F20D58121F15",
   "yaw": 2.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -2.14,
   "panorama": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
   "yaw": 162.92,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -164.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CBE5CA2_592D_89C4_41C5_C9A87CE8C9E6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4CC250_5419_207C_4135_0A9EBC679160_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4EC6FF69_592D_8744_41CE_88D4CAB0891C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "FEMALE_TOILET_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_665DA18E_554B_D849_41CE_EDB2A6325C0A",
  "this.overlay_66CB8C4D_554B_E8CB_41C2_0DF5463E80E7",
  "this.overlay_1ECE1E2F_55C9_6847_41CC_EA2CF593C0A9",
  "this.overlay_4015C70D_56A2_34EE_41D4_444633157ADE"
 ],
 "id": "panorama_5E55B06A_5419_202C_41A2_F5BA739671AA",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -86.04,
   "panorama": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
   "yaw": -131.77,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 43.46,
   "panorama": "this.panorama_5E55FC6B_5419_202C_41B6_215937597045",
   "yaw": -9.42,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 76.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CDA1D05_592D_88CC_41CF_7FD7132B2CF7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "ELEVATOR_CORE_4.PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_4F6D3A76_54CB_A8D9_41D3_96962A08E0B9",
  "this.overlay_48DAC0E7_54CB_D9C7_41C2_7C8B1C9BE026",
  "this.overlay_474C839F_56A2_F3EA_41D1_C2011180DD07",
  "this.overlay_47355580_56A2_77D6_41AA_E812641A8BB6"
 ],
 "id": "panorama_5E535B7C_5419_2024_4174_88508DC54FA3",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -147.72,
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
   "yaw": 16.82,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -98.99,
   "panorama": "this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E",
   "yaw": -88.33,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "FUNCTION_1_3 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_46215149_54D9_58C8_41BA_08FADF1C6B3C",
  "this.overlay_47FB4961_54D9_68FB_41CF_963BE8E9126C",
  "this.overlay_41420D79_56E2_1736_41B5_192616AA7448",
  "this.overlay_4EA24F9B_56E2_73EA_4142_94784F7B6529"
 ],
 "id": "panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 110.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CEED288_592D_99C4_418F_31B6F312A1A6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -65.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4EBBFF04_592D_88CC_41C0_AA2562620E17",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 99.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4F18FD46_592D_8B4C_41B0_419312147B00",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 38.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4F859DAE_592D_8BDC_41C9_AB9216850633",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 43.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4E4AAEC5_592D_894C_41D5_451A010D13FF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -131.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4FC2FE06_592D_88CC_41BA_E36019A11B16",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4EF73F58_592D_8744_41A4_34F540C92D98",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E5595D8_5419_606C_41D0_D644098500B8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CAD0243_592D_9944_418B_984CAB058A2D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -48.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4E998F31_592D_88C4_41CB_E762DA057E8B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 93.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DDF01A5_592D_9BCC_41D4_7E686B5FE769",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -18.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4137FF95_592D_87CC_41CB_2706107EC1E9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4F92EDBE_592D_8B3C_41CE_4F9A93F21F70",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -36.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C79020F_592D_98DC_41D3_E1571B6B4453",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -81.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CFA4CE7_592D_894C_41D0_B932895BFCCD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "PASSAGE-MANAGER_OFFICE_INTERSECTION .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_460E259C_546B_20E4_417B_BEB60A66A628",
  "this.overlay_5A90722A_54B6_E832_41CE_A94C466F7AD3",
  "this.overlay_145244D2_5539_B9D8_41B9_647C0DF2B027",
  "this.overlay_1F7E4B1C_553A_A848_41D3_91B5E874D6D9",
  "this.overlay_1CA857E9_55F9_E7CB_41C0_E1CA2C306557",
  "this.overlay_1F53EA21_55F9_A87B_41BC_79B00CB590FB",
  "this.overlay_193BD4B6_55C6_F859_41D4_BDF1F2CF31DC",
  "this.overlay_449654FA_56A1_F535_41BD_45E99860D685"
 ],
 "id": "panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -84.03,
   "panorama": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2",
   "yaw": 48.74,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -43.24,
   "panorama": "this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E",
   "yaw": 85.29,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 115.31,
   "panorama": "this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16",
   "yaw": 134.48,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "MALE_TOILET_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_6466A378_554E_D8C9_41D4_A355E112BEAB",
  "this.overlay_4FBBACBA_56AE_152A_41CB_02D62EBE82F9"
 ],
 "id": "panorama_5E4972F0_541B_603C_41D1_9087F06C38E5",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.88,
   "panorama": "this.panorama_5E578F69_541B_602C_41C2_4A0F1F976829",
   "yaw": 44.34,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "D5_Panorama 8_20230214_174529",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_68A859AE_554F_E849_41B2_83AC49094BC1",
  "this.overlay_4134B736_56A6_333A_41D2_B54394E25870"
 ],
 "id": "panorama_5881B97C_541B_2024_4199_2DF060A6B33C",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 10.05,
   "panorama": "this.panorama_58875CB9_541A_E02C_41D3_73B63887517E",
   "yaw": 70.22,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -103.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4EAA4EEF_592D_895C_41C6_B92AAD4466B6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 34.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C86B25D_592D_997C_41BE_CF2F52E8EA42",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "CHILD_CARE 1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_75A4A9A7_54CB_6878_4199_4B8B50B7C036",
  "this.overlay_4B64AA8C_54C9_A849_41C9_F5E2314F8F2E",
  "this.overlay_10A75D88_55D9_6849_41B2_3202E464A850",
  "this.overlay_19880BA5_55DF_687B_41C7_D99E445612D4",
  "this.overlay_1F65259F_55DF_5848_41C4_AD0ABB1620F3",
  "this.overlay_1F9709D9_55DE_ABCB_41CC_D894D02E235B"
 ],
 "id": "panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 11.81,
   "panorama": "this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA",
   "yaw": 158.27,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -131.39,
   "panorama": "this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3",
   "yaw": -123.85,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 129.25,
   "panorama": "this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E",
   "yaw": -71.22,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 140.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4E7D3EB1_592D_89C4_4164_E7AF12590633",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 95.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4F668D56_592D_8B4C_41A6_1C3E6BFB3661",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 93.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C2B81B0_592D_9BC5_41C8_023894CD25E6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 15.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41428FD8_592D_8744_41D0_E959055C636A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "CHILD_CARE_CLASS_3 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_767A61BF_54CB_7847_41BC_649418533AA7",
  "this.overlay_7643CB3F_54CB_A847_41D1_465B924A9189",
  "this.overlay_67BDBC2D_554A_A84B_41C8_E817CF20FFAE",
  "this.overlay_1F4378F8_55DB_69C9_418E_CF6BD8CD862F",
  "this.overlay_41A22766_56BE_735A_41D5_04385C8CB88A"
 ],
 "id": "panorama_5E413C6D_5419_2025_41B3_B17DB42524F3",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -15.2,
   "panorama": "this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE",
   "yaw": 138.8,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -123.85,
   "panorama": "this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626",
   "yaw": -131.39,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -64.69,
   "panorama": "this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB",
   "yaw": 12.92,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "MediaAudio",
 "audio": {
  "mp3Url": "media/audio_4AD5149D_567E_15EE_41C1_1A287DAC3E91.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_4AD5149D_567E_15EE_41C1_1A287DAC3E91.ogg"
 },
 "id": "audio_4AD5149D_567E_15EE_41C1_1A287DAC3E91",
 "autoplay": true,
 "data": {
  "label": "_Non_Copyrighted_Music_LAKEY_INSPIRED_Chill_Day_Hip_Hop_23IiqeIw38w_140"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "CONFERENCE_ROOM_2 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_7C007312_553F_B859_41D3_B88854B53FAD",
  "this.overlay_4122E5DB_56A6_176A_41BA_C86CFBC3F501"
 ],
 "id": "panorama_5E4CC250_5419_207C_4135_0A9EBC679160",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -5.02,
   "panorama": "this.panorama_5E5595D8_5419_606C_41D0_D644098500B8",
   "yaw": 6.78,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "ELEVATOR_LOBBY .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_45F06652_54CE_B8D9_41D5_31B2E29318E2",
  "this.overlay_5BB88345_54C9_7838_41CA_C0A9F967C596",
  "this.overlay_44EE0CE6_54C9_E9F9_418F_4F224C02ADEE",
  "this.overlay_47BF4BDA_56A2_336A_41D0_B13D80C69BA5",
  "this.overlay_47976DBD_56A2_172E_41BB_C5CD6835A639",
  "this.overlay_40653481_56E2_15D6_41CE_23B01324646F"
 ],
 "id": "panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 9.16,
   "panorama": "this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82",
   "yaw": -59.41,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "D5_Panorama 3_20230214_180038",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_6D3B05A1_555A_D87B_41C0_B589713A4BAD",
  "this.overlay_6DC50E8B_555A_A848_41D3_D47201A0E1A2",
  "this.overlay_1FDBE5E9_55CA_DBCB_41C2_7625E4125D70",
  "this.overlay_41484B89_56AE_33D7_41C3_961BA19ACC32"
 ],
 "id": "panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -163.65,
   "panorama": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6",
   "yaw": -14.57,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -3.14,
   "panorama": "this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF",
   "yaw": 114.1,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 76.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CCA2CF8_592D_8944_41AA_E7DF1DEEBDA0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 81.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41818013_592D_98C4_411F_C5A13E58CF70",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -61.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C45021D_592D_98FC_41B9_0AB84B8DC1EB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DAA30D0_592D_9944_41D2_B0B78A6A6D62",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -168.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DBD50FA_592D_9944_41D2_77806D7EFC24",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "D5_Panorama 9_20230214_174235",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_6C40399D_5549_684B_41B6_F5E704C8B67B",
  "this.overlay_6FFC66F0_5549_D9D9_41A1_E174845AE772",
  "this.overlay_1F3AFC65_55CA_A8FB_41B3_363934EE7DFF",
  "this.overlay_1F537CCE_5539_A9C9_41B5_89312B6A793D",
  "this.overlay_1F215C28_5539_E849_41CF_0DB6283B0E19",
  "this.overlay_19E582B2_553A_B859_41D0_C8A22B357B6B"
 ],
 "id": "panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 156.76,
   "panorama": "this.panorama_588580AA_541A_E02C_4144_D3F282922A1E",
   "yaw": 118.2,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 15.8,
   "panorama": "this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B",
   "yaw": 131.89,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 162.92,
   "panorama": "this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B",
   "yaw": -2.14,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C9C1CC8_592D_8944_41BD_4FC12DBC86BB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "D5_Panorama 6_20230214_175136",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_6E1CCB85_554B_E83B_41D1_1883752D4E7F",
  "this.overlay_4ED22146_56A6_0F5A_41D4_76156827518C",
  "this.overlay_4067A185_569E_0FDE_41D0_CF8D02D895D7",
  "this.overlay_401626FA_569E_152A_41CD_F1E851D560C1",
  "this.overlay_4161E494_569E_75FD_41C8_EDDD871A3980"
 ],
 "id": "panorama_588580AA_541A_E02C_4144_D3F282922A1E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 143.07,
   "panorama": "this.panorama_58875CB9_541A_E02C_41D3_73B63887517E",
   "yaw": 29.02,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 118.2,
   "panorama": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
   "yaw": 156.76,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 118.2,
   "panorama": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
   "yaw": -124.1,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -77.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C1711E7_592D_9B4C_41CA_641F432B437F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -162.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4E215E30_592D_88C4_41D2_FD41A67CA9EF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "FUNCTION_1_2 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_457D5F1B_54C9_A84F_41D0_CC70DEB20A1A",
  "this.overlay_453E03C5_54C9_F838_41C7_1644F591CCA4",
  "this.overlay_46F3CF35_54C9_A85B_41C7_26CF4ED55518",
  "this.overlay_4EFBAFEC_56E2_132E_4198_76638DAE65B7",
  "this.overlay_4ED7BB59_56E2_1376_41C7_704F5B762DC8",
  "this.overlay_4EADD036_5662_0D3A_41CC_0B20C5D43A7C"
 ],
 "id": "panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.09,
   "panorama": "this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A",
   "yaw": 161.66,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4EE97F43_592D_8744_4181_675EE32DB073",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "D5_Panorama 7_20230214_174831",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_6EBF3E0A_554A_E849_41BD_2E94DF748DB5",
  "this.overlay_6EEC8803_554A_A83F_41C8_9AF385572CD4",
  "this.overlay_68740CF7_5549_69C7_41CB_C42E54CE811C",
  "this.overlay_4EC194A0_56A6_15D6_41D4_C6CFD9302568",
  "this.overlay_4E5C006C_5662_0D2E_41AD_D067AFA4AB69"
 ],
 "id": "panorama_58875CB9_541A_E02C_41D3_73B63887517E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 29.02,
   "panorama": "this.panorama_588580AA_541A_E02C_4144_D3F282922A1E",
   "yaw": 143.07,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 70.22,
   "panorama": "this.panorama_5881B97C_541B_2024_4199_2DF060A6B33C",
   "yaw": 10.05,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -167.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4FA41D91_592D_8BC4_41AC_408D70BE5D7E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 108.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41A39FF7_592D_874C_41AE_54070A2697D6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C5EE237_592D_98CC_41A4_9CC4DF81DD2C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 45.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CA05C83_592D_89C4_41CA_8AF3FB81042F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4FB57DA1_592D_8BC4_41B7_0CE683FB27D4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 132.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4FF55DF4_592D_8B4C_41CD_9FB74CA94B80",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_58FDA850_5419_207C_41C9_069E791B36A6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "COWORKING_SPACE_2 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_77B693DC_54CA_FFC9_41D2_FE18B976347F",
  "this.overlay_725C74E8_54C7_59C9_41C7_DAF0417A40BF",
  "this.overlay_193D29C7_55D9_A838_4192_111551E7E5E4",
  "this.overlay_4E8F1FE2_56A6_135A_41C7_E2531731FF30"
 ],
 "id": "panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -14.32,
   "panorama": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3",
   "yaw": 162.92,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -141.15,
   "panorama": "this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB",
   "yaw": 0.73,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -156.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CE07278_592D_9944_41C0_FD70E41A5702",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 48.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D830108_592D_98C4_41A8_85CB078A0F49",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -29.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4D92D133_592D_98C4_41D3_9321512B1677",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -23.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4CB06C95_592D_89CC_4199_B36660500E5A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 120.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4E1F8E87_592D_89CC_4199_8C7F87495BFA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41240F86_592D_87CC_41D1_73A8542968EF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4FD33E1A_592D_88C4_41A7_DB5140D711E2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "RECEPTION_LOBBY_3 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_5AACF93F_54C9_6847_41C0_70A74B648382",
  "this.overlay_5A1519F7_54C9_ABC7_41CC_06E7541B3882",
  "this.overlay_5B860E01_54C9_E83B_41C6_27F3122816DD",
  "this.overlay_4758106A_56AE_0D2A_41D4_B63936C99C28",
  "this.overlay_47B0D81F_56AE_3CEA_419C_5A08294F9596",
  "this.overlay_47CC42A4_56AE_0DDE_41C4_4586BC2900BB"
 ],
 "id": "panorama_5E543699_541B_20EC_41C0_1B21584E5F82",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -59.41,
   "panorama": "this.panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1",
   "yaw": 9.16,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 0.38,
   "panorama": "this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2",
   "yaw": -90.57,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -39.72,
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
   "yaw": 102.62,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "D5_Panorama 2_20230214_180336",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_63D296FE_5559_B9C9_41CC_AD5040903674",
  "this.overlay_63EA539F_5559_7847_41C4_F526BFE8D247",
  "this.overlay_4E841DA6_56A2_17DA_41A6_9B7200B8BB0C",
  "this.overlay_41724ED6_56A1_F57A_41B6_E4FB2E3A98BD"
 ],
 "id": "panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 76.98,
   "panorama": "this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8",
   "yaw": -134.12,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 114.1,
   "panorama": "this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994",
   "yaw": -3.14,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -75.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4F3BCD28_592D_88C4_4188_33E963175D70",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5881B97C_541B_2024_4199_2DF060A6B33C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41629FBD_592D_873C_41C9_5CB0D5A06922",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 136.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4F76DD63_592D_8B44_41D3_13A13795E488",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E535B7C_5419_2024_4174_88508DC54FA3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 132.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4FE4BDD9_592D_8B44_41B1_01D6BDEF83A1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 164.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41EF103C_592D_993C_41C3_1860BC6792DE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "WEST_PATIO_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_48DF7066_54F9_B8F9_41C7_4B4AEB002B03",
  "this.overlay_480C2E79_54C6_A8C8_41C2_10296EEBAA63",
  "this.overlay_4AAECD1D_54C7_E84B_41C4_C1894A3966DA",
  "this.overlay_4179A031_56A2_0D36_418A_AAF1CEA1BD8A",
  "this.overlay_415DD90D_56A6_3CEF_41D1_D699B8A85C20",
  "this.overlay_57C258F7_5893_63D9_41AA_2788186A1135"
 ],
 "id": "panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 85.29,
   "panorama": "this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3",
   "yaw": -43.24,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -71.22,
   "panorama": "this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626",
   "yaw": 129.25,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 159.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4DE03152_592D_9B44_41A3_386D47E9BA18",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "PASSAGE_3 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_7C9F79CC_553F_ABC8_41C1_D0A22584B538",
  "this.overlay_7F2C82F6_553E_F9D9_41BB_AB137EF44F19",
  "this.overlay_7C98D047_553E_B8C7_41D3_1F27A396CC22",
  "this.overlay_194A1B8B_55C9_A848_41D0_6AC1ED01C5DA",
  "this.overlay_4EAC74C4_56A2_155E_41D1_0698C1C6F9CA",
  "this.overlay_41130E63_56A2_155A_41B5_F2B3AF7AD1FD"
 ],
 "id": "panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.19,
   "panorama": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
   "yaw": -20.73,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 134.48,
   "panorama": "this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3",
   "yaw": 115.31,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -17.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C8EBCB4_592D_89CC_41C8_578647D119F9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -88.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_418F0020_592D_98C4_41C6_16FFCE0FE9D8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "CHILD_CARE_CLASS_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_74E0E74A_54CF_F8C9_41B8_2EEFCD1307FC",
  "this.overlay_74B74DAC_54CF_A848_41B4_0946EFB25647",
  "this.overlay_412AC211_56A2_0CF6_41C5_8290359E6C3D",
  "this.overlay_414E4B40_56A2_1356_41D1_F264B4833D88"
 ],
 "id": "panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -145.58,
   "panorama": "this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA",
   "yaw": 29.38,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 12.92,
   "panorama": "this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3",
   "yaw": -64.69,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "PASSAGE_2 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_7FEDEB8B_553A_A84F_41C8_93858504AE00",
  "this.overlay_7E5E404C_553A_D8C9_4187_542156C4E048",
  "this.overlay_7E7FB4C5_553A_F83B_41BA_2CC7EBEF2904",
  "this.overlay_7E9C18BE_553A_A848_41B0_4C65860424C2",
  "this.overlay_1F445E41_55CE_A838_41C0_F4B1723225FF",
  "this.overlay_1BB80AAA_55CF_E849_41D4_D7CA65DFA269",
  "this.overlay_4ED1FD45_56A2_375E_41CA_151BCAE8B7F2",
  "this.overlay_415CE127_56A2_0CDB_41C6_ECCD9070E214"
 ],
 "id": "panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -105.26,
   "panorama": "this.panorama_5E578F69_541B_602C_41C2_4A0F1F976829",
   "yaw": -0.75,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 150.86,
   "panorama": "this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE",
   "yaw": -136.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -131.77,
   "panorama": "this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA",
   "yaw": -86.04,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -20.73,
   "panorama": "this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16",
   "yaw": 91.19,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4E5A5ED9_592D_8944_41D2_EF0FE53052FC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "WEST_PATIO_2 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_48187D70_54C6_A8D9_41C6_B566AB6B0F6E",
  "this.overlay_490D9F80_54C9_A839_41C2_7EF0B5298FED",
  "this.overlay_183FF1EB_55DB_7BCF_41B8_D1266A7560E6",
  "this.overlay_1BF3F0EC_55DA_F9C9_41C9_DF1AE9811BFD"
 ],
 "id": "panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -145.58,
   "panorama": "this.panorama_5E568337_5419_2024_41D2_A30D47360735",
   "yaw": -103.25,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 162.92,
   "panorama": "this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9",
   "yaw": -14.32,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -150.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41054FA2_592D_87C4_41C3_5984BFF12644",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E55FC6B_5419_202C_41B6_215937597045_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -21.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4C6311F5_592D_9B4C_41BB_6E7FE6265D25",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "CHILD_CARE_CLASS_2 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_75813AD7_54CE_A9D8_41BA_A35AA4837D8E",
  "this.overlay_7768E603_54C9_583F_4193_04F17263813D",
  "this.overlay_1F0ACE65_55D9_68FB_41D1_9E91EFAAAD5C",
  "this.overlay_4E94B549_56A2_1756_41CF_22896B713AC0"
 ],
 "id": "panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 158.27,
   "panorama": "this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626",
   "yaw": 11.81,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 29.38,
   "panorama": "this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB",
   "yaw": -145.58,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "D5_Panorama 1_20230214_180640",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_62AA3DA5_555F_E846_41C4_655ECFB7358B",
  "this.overlay_62BABD27_555E_A847_41C3_09AE9B54B2B3",
  "this.overlay_412FDCB4_56A2_353E_41D3_3BBD4843EFE8",
  "this.overlay_41B4F8E0_56A2_3D56_41D1_A56B91E551BC"
 ],
 "id": "panorama_5943C1D8_5419_606C_4171_C1C741B15DA8",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -83.94,
   "panorama": "this.panorama_58804E3F_541B_6024_41AE_5E1B04832DC1",
   "yaw": -105.42,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -134.12,
   "panorama": "this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF",
   "yaw": 76.98,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_588580AA_541A_E02C_4144_D3F282922A1E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 32.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_41B11003_592D_98C4_41D0_64691656EE55",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "COVERED_TERRACE .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_419F252F_54D9_F847_41D2_B26C4C975FC5",
  "this.overlay_41C80661_56A2_1556_41C3_7BEC791A56FC"
 ],
 "id": "panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 19.72,
   "panorama": "this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F",
   "yaw": -69.21,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "D5_Panorama_20230214_180942",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_62849D9A_5559_6849_41C7_3A910DEBAD67",
  "this.overlay_412FC393_56A2_13FA_41C3_30967E18AFC8"
 ],
 "id": "panorama_58804E3F_541B_6024_41AE_5E1B04832DC1",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -105.42,
   "panorama": "this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8",
   "yaw": -83.94,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "FUNCTION_1_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_440B2075_54CB_B8DB_41C8_9010DF9867A3",
  "this.overlay_45E9523E_54CB_F848_41D1_2F5C7D81A3EB",
  "this.overlay_4533FF21_54CA_E87B_41B9_DF971C003C2D",
  "this.overlay_4EABA458_56E2_3576_41CF_EE51CD9D68F9",
  "this.overlay_418219FD_56E2_1F2F_41C5_D200DD5B0A0D"
 ],
 "id": "panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 161.66,
   "panorama": "this.panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B",
   "yaw": 2.09,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "CALL_ROOM_.PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_727EA40C_553B_D849_41C3_D62497F54276",
  "this.overlay_1F0D3BFA_55C9_AFC8_41AF_05823D544BD3"
 ],
 "id": "panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -145.96,
   "panorama": "this.panorama_5E5595D8_5419_606C_41D0_D644098500B8",
   "yaw": -23.11,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "PASSAGE_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_7E56268E_5539_5848_41D5_06408BAA8628",
  "this.overlay_7E85FFAE_5539_6849_41CC_DB363C38910C",
  "this.overlay_1FE381DF_55CE_BBC7_41C6_3017759F5448",
  "this.overlay_4E81D405_56A2_34DE_41D3_41AD6B2929CB"
 ],
 "id": "panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -136.54,
   "panorama": "this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689",
   "yaw": 150.86,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 138.8,
   "panorama": "this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3",
   "yaw": -15.2,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -169.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4F093D35_592D_88CC_41C0_954C1307F8ED",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E568337_5419_2024_41D2_A30D47360735_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "height": 3072
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "label": "ELEVATOR_CORE_1 .PNG",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_5A5B9C4D_5417_2064_41C5_2019A5418612",
  "this.overlay_44EB76DA_5469_E06C_41BF_1B2BE3A02627",
  "this.overlay_5A868FC4_546F_2064_41D1_89F073A03BEC",
  "this.overlay_463C7007_5662_0CDA_41B8_D944FEA38A24",
  "this.overlay_47A36C76_56A3_F53A_41D1_088E1600475C"
 ],
 "id": "panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -86.1,
   "panorama": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6",
   "yaw": 161.91,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -86.1,
   "panorama": "this.panorama_58FDA850_5419_207C_41C9_069E791B36A6",
   "yaw": -164.3,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -10.63,
   "panorama": "this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E",
   "yaw": 0.64,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 34.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4F57ED80_592D_8BC4_41BA_C41AEC3565F8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "class": "ViewerArea",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "class": "Container",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "minWidth": 1,
 "height": 641,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false
},
{
 "class": "Container",
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288"
 ],
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 0.64,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "layout": "absolute",
 "bottom": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 118,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--MENU"
 },
 "shadow": false
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "24.125%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "37.622%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "class": "ViewerArea",
 "playbackBarBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "bottom": "7.14%",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "visible": false,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "class": "HTMLText",
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "left": "2.23%",
 "backgroundOpacity": 0,
 "width": 110,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 3,
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "top": "4.76%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 47,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Montserrat';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Entrance"
 },
 "shadow": false
},
{
 "class": "HTMLText",
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "width": "7.901%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 3,
 "minHeight": 1,
 "propagateClick": false,
 "top": "5.19%",
 "borderColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "5.081%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'Montserrat';\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Living Room"
 },
 "shadow": false
},
{
 "class": "HTMLText",
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "width": "4.946%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 3,
 "minHeight": 1,
 "propagateClick": false,
 "top": "5.19%",
 "borderColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "4.973%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Kitchen"
 },
 "shadow": false
},
{
 "class": "HTMLText",
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "width": "6.996%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 3,
 "minHeight": 1,
 "propagateClick": false,
 "top": "5.19%",
 "borderColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "4.432%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Bedroom 1"
 },
 "shadow": false
},
{
 "class": "HTMLText",
 "id": "HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "width": "6.996%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 3,
 "minHeight": 1,
 "propagateClick": false,
 "top": "5.19%",
 "borderColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "4.432%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Bedroom 2"
 },
 "shadow": false
},
{
 "class": "HTMLText",
 "id": "HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "width": "6.996%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 3,
 "minHeight": 1,
 "propagateClick": false,
 "top": "5.19%",
 "borderColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "4.432%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 3</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Bedroom 3"
 },
 "shadow": false
},
{
 "class": "HTMLText",
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "width": "12.364%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 3,
 "minHeight": 1,
 "propagateClick": false,
 "top": "5.19%",
 "borderColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "6.811%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Bathroom"
 },
 "shadow": false
},
{
 "class": "HTMLText",
 "id": "HTMLText_6D10649B_7332_5218_41D2_21101FE2809C",
 "left": "2.11%",
 "backgroundOpacity": 0,
 "width": "12.364%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 3,
 "minHeight": 1,
 "propagateClick": false,
 "top": "5.19%",
 "borderColor": "#000000",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "6.811%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Hallway</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "visible": false,
 "data": {
  "name": "Hallway"
 },
 "shadow": false
},
{
 "class": "IconButton",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand"
},
{
 "class": "IconButton",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104, this.camera_4CE07278_592D_9944_41C0_FD70E41A5702); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 102.97,
   "yaw": -80.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_4020EE3A_54D9_A848_41D2_8D756664A2FE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420, this.camera_4CEED288_592D_99C4_418F_31B6F312A1A6); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_1_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_40E83D59_54DF_E8C8_41CD_0DDADA9DE190",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.32,
   "yaw": 25.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402D6B61_56A2_3357_41B4_3CE3DEE8778F",
   "yaw": 25.17,
   "pitch": -10.57,
   "distance": 100,
   "hfov": 4.32
  }
 ],
 "id": "overlay_400A9638_569E_1536_41CF_BE76CAB5FF95",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.47,
   "yaw": -87.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402D3B61_56A2_3357_41D3_ED5D1D1BB513",
   "yaw": -87.65,
   "pitch": -0.86,
   "distance": 100,
   "hfov": 3.47
  }
 ],
 "id": "overlay_41A5A51F_569E_74EA_41C7_3C2F0DC728DE",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA, this.camera_4DCBB18A_592D_9BC4_41B4_7EB8E08C5A77); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 66.6,
   "yaw": -10.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0_HS_0_1_0_map.gif",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_5BBC71A4_5469_2024_41D0_EA3CC4D3F976",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3, this.camera_4DD21196_592D_9BCC_4199_F31613123359); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 59.39,
   "yaw": -98.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_1_1_0_map.gif",
      "width": 126,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_44E27EE1_5476_E05C_41BB_768C41F96A0D",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E568337_5419_2024_41D2_A30D47360735, this.camera_4DFEA17B_592D_9B44_41D5_AE7E5CF83B4D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 54.13,
   "yaw": 88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_2_1_0_map.gif",
      "width": 140,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_45220375_5477_E024_41CE_392863C2B851",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.32,
   "yaw": -98.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EB7FDF3_56A2_773A_41C3_8D07A7927BDF",
   "yaw": -98.64,
   "pitch": -10.5,
   "distance": 100,
   "hfov": 4.32
  }
 ],
 "id": "overlay_46A728B1_569E_3D36_41BA_566C0859A93F",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 2.19,
   "yaw": -6.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_414B661B_56A6_34EA_41D1_EB6387247872",
   "yaw": -6.79,
   "pitch": -3.15,
   "distance": 100,
   "hfov": 2.19
  }
 ],
 "id": "overlay_46C4A3DA_569E_136A_41D1_065D3A6BA421",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.49,
   "yaw": 87.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EB46DF4_56A2_773E_41CD_854C37CC17D6",
   "yaw": 87.46,
   "pitch": -6.63,
   "distance": 100,
   "hfov": 3.49
  }
 ],
 "id": "overlay_46B120D9_56A2_0D77_41CB_D310DBBF4F86",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2, this.camera_4CFA4CE7_592D_894C_41D0_B932895BFCCD); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_47F24588_5479_20EC_41A2_241E3413310F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E, this.camera_4CEC3CD7_592D_894C_41C5_8649FBC21DBA); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 61.37,
   "yaw": 38.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_1_1_6_map.gif",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_406F33B8_5479_602C_41C4_666876E935A8",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3, this.camera_4CCA2CF8_592D_8944_41AA_E7DF1DEEBDA0); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 73.34,
   "yaw": -145.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0_HS_2_1_0_map.gif",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_4F9C4BC0_54FB_A839_416B_BB4C58AB91E0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3, this.camera_4CDA1D05_592D_88CC_41CF_7FD7132B2CF7); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 30.66,
   "yaw": 164.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_3_1_6_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_15FC46CD_5546_B9C8_41D3_8333B33B3335",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.76,
   "yaw": -160.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4DE48BBE_592D_8F3C_41CA_2908125FBAEB",
   "yaw": -160.23,
   "pitch": 4.55,
   "distance": 100,
   "hfov": 8.76
  }
 ],
 "id": "overlay_1C6F92C3_55F9_B83F_4151_4710606F99F1",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.06,
   "yaw": 27.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EB38DF6_56A2_773A_41D1_CECACBCDF30C",
   "yaw": 27.04,
   "pitch": -5.55,
   "distance": 100,
   "hfov": 3.06
  }
 ],
 "id": "overlay_47997AAE_56A6_7D2A_41C7_60C1A5A7F88F",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3,
   "yaw": -54.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EB3CDF6_56A2_773A_41B9_E59C6248EBC9",
   "yaw": -54.77,
   "pitch": -12.76,
   "distance": 100,
   "hfov": 3
  }
 ],
 "id": "overlay_46B18605_56A1_F4DE_41CC_E595C2D6AE66",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9, this.camera_4C5EE237_592D_98CC_41A4_9CC4DF81DD2C); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 82.15,
   "yaw": -141.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_1_HS_0_1_0_map.gif",
      "width": 142,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_72240DA3_54C6_A87F_41D2_D205722802B1",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9, this.camera_4CAD0243_592D_9944_418B_984CAB058A2D); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 40.89,
   "yaw": 159.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_1_1_0_map.gif",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7D1392BF_5539_D848_41C4_4E5D84036F39",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5595D8_5419_606C_41D0_D644098500B8, this.camera_4CBB0251_592D_9944_41D4_CE841D20358D); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 46.9,
   "yaw": 17.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_2_1_0_map.gif",
      "width": 149,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7D21481E_553A_A848_41C1_97EDA83E34B1",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 2.62,
   "yaw": 2.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F9DB62D_5662_352E_41B0_2161DC703E36",
   "yaw": 2.63,
   "pitch": -7.22,
   "distance": 100,
   "hfov": 2.62
  }
 ],
 "id": "overlay_4ECF49B0_56A6_1F35_41B4_F172A4555FB0",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.37,
   "yaw": 169.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40216B69_56A2_3357_41C4_925F00F12C49",
   "yaw": 169.53,
   "pitch": -6.63,
   "distance": 100,
   "hfov": 4.37
  }
 ],
 "id": "overlay_41796BA8_56A6_13D6_41A7_D6150EE06A4D",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 13.76,
   "yaw": -14.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_7_1_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_4F6EC3FA_5666_1335_41C7_6ACF7EC3BBF7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.07,
   "yaw": -13.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F9DE62D_5662_352E_41D1_8B970972ED91",
   "yaw": -13.82,
   "pitch": -2.68,
   "distance": 100,
   "hfov": 3.07
  }
 ],
 "id": "overlay_4FA5AC9B_5666_F5EA_41B6_ABDD86AA5B51",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689, this.camera_4DEB4160_592D_9B44_419A_AC3B5DCBD92E); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_67A9AF81_5549_A83B_41D2_496B53961503",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.53,
   "yaw": -103.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.53,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_1_HS_1_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "yaw": -103.63
  }
 ],
 "id": "overlay_1FC478B9_55CA_A84B_41B9_033B8F46B747",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4972F0_541B_603C_41D1_9087F06C38E5, this.camera_4DF4416F_592D_9B5C_41D4_3D3042703F9E); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0_HS_2_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0_HS_2_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_57F12804_591E_88CC_41D4_B6E317169222",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.55,
   "yaw": -7.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4DCA5BDA_592D_8F45_41D2_943F49D678D7",
   "yaw": -7.63,
   "pitch": -6.25,
   "distance": 100,
   "hfov": 6.55
  }
 ],
 "id": "overlay_5621A3A2_591E_FFC4_41CC_134FD9D1248D",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994, this.camera_41629FBD_592D_873C_41C9_5CB0D5A06922); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 31.98,
   "yaw": -163.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_0_1_0_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_669A0EDB_555A_E9C8_41AD_F184C9EEEE4D",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B, this.camera_41428FD8_592D_8744_41D0_E959055C636A); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 60.98,
   "yaw": -9.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_1_1_0_map.gif",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_66A2ACBB_555A_A848_41BB_0F0D8F7D8407",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA, this.camera_41727FCC_592D_875C_41B1_8E1AA5A5C0B7); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 79.86,
   "yaw": -86.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_2_1_0_map.gif",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_14B1AECA_554B_69C9_41C8_4BDA504B6766",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.59,
   "yaw": -8.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4DE25BBD_592D_8F3C_41B5_D0105D820D5D",
   "yaw": -8.69,
   "pitch": 0.1,
   "distance": 100,
   "hfov": 6.59
  }
 ],
 "id": "overlay_192E667D_55FB_F8CB_4198_E7FA64BA57CB",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -165.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EB5EDF5_56A2_773E_41C0_0FD018A64E70",
   "yaw": -165.91,
   "pitch": 0.38,
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_182C9F0A_55FB_6848_41D0_ED2DF790E516",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.07,
   "yaw": -87.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EB23DF5_56A2_773E_41BB_D2F731DF7D27",
   "yaw": -87.22,
   "pitch": -4.88,
   "distance": 100,
   "hfov": 3.07
  }
 ],
 "id": "overlay_46698F75_56A2_F33E_41CE_21B674C9BB86",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B, this.camera_4EC6FF69_592D_8744_41CE_88D4CAB0891C); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_68E5DCB1_554E_E85B_41B7_81B9E8A1B6AE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.47,
   "yaw": 52.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_41DA8B78_56A2_3335_41BA_A3F065F84C23",
   "yaw": 52.37,
   "pitch": -10.81,
   "distance": 100,
   "hfov": 6.47
  }
 ],
 "id": "overlay_4EF4BA72_56A2_3D3A_41B0_E4AC81F39AD3",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E568337_5419_2024_41D2_A30D47360735, this.camera_4FE4BDD9_592D_8B44_41B1_01D6BDEF83A1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 96.17,
   "yaw": 98.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_0_1_0_map.gif",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_45EA15F1_5476_E03D_41CC_908CDE0031C6",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82, this.camera_4FD33E1A_592D_88C4_41A7_DB5140D711E2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 91.89,
   "yaw": 0.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_1_1_0_map.gif",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_46DD3214_5469_23E4_41C7_22C86B4BC606",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3, this.camera_4FC2FE06_592D_88CC_41BA_E36019A11B16); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 81.36,
   "yaw": -84.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_2_1_0_map.gif",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_475E7325_5469_2024_41C7_476010387DB4",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 56.13,
   "yaw": -149.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_3_1_0_map.gif",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_4F65F3AC_54FB_5849_41D4_59BF15BBFDFE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E568337_5419_2024_41D2_A30D47360735, this.camera_4FF55DF4_592D_8B4C_41CD_9FB74CA94B80); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_4_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_4_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_4_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_4_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_15749879_5547_68CB_41AD_4B56C68A0807",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.52,
   "yaw": 98.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_5_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EAE6DF7_56A2_773A_41BF_0A532FFE5C84",
   "yaw": 98.12,
   "pitch": -8.35,
   "distance": 100,
   "hfov": 6.52
  }
 ],
 "id": "overlay_19F47A7E_55FA_A8C8_41D2_8A254FEBF3D2",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.79,
   "yaw": -160.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4DE9DBC0_592D_8F44_41B0_76424E08BD8E",
   "yaw": -160.54,
   "pitch": 0.55,
   "distance": 100,
   "hfov": 8.79
  }
 ],
 "id": "overlay_1FDDE67A_55FB_78C9_41B5_F17B15C72482",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.28,
   "yaw": -0.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_9_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4DE97BC0_592D_8F44_41D1_AD59C66C4A13",
   "yaw": -0.19,
   "pitch": -12.94,
   "distance": 100,
   "hfov": 4.28
  }
 ],
 "id": "overlay_44E28913_56A2_1CFA_41C4_B591FFEF745E",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.37,
   "yaw": -72.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_10_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4DE90BC0_592D_8F44_41AF_52A1EB5A5326",
   "yaw": -72.04,
   "pitch": -5.9,
   "distance": 100,
   "hfov": 4.37
  }
 ],
 "id": "overlay_41EE1C72_56E2_353A_41CB_9EBEB5FD86AA",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8, this.camera_4E998F31_592D_88C4_41CB_E762DA057E8B); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_69BF9C6B_5546_A8CF_41CB_97D6B9DB0D26",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58FDA850_5419_207C_41C9_069E791B36A6, this.camera_4E8BFF1D_592D_88FC_4198_613AB527A656); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 29.24,
   "yaw": -164.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_1_HS_1_1_6_map.gif",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_6E09B9FB_554A_ABCF_41CA_DC7DB868932B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -164.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4376AE5E_56A2_756A_41D2_A4FC6B0FB64A",
   "yaw": -164.74,
   "pitch": -1.88,
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_1E805AB1_55C6_A858_41C0_782A9DEE9FFB",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.51,
   "yaw": 15.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4024FB74_56A2_333D_41CF_1F6B6C3886CD",
   "yaw": 15.27,
   "pitch": -2.21,
   "distance": 100,
   "hfov": 3.51
  }
 ],
 "id": "overlay_4EFCF3DD_56A2_336E_41C1_AF5812C40415",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 81.25,
   "yaw": -59.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_4753D893_54DB_A85F_41D2_3081185CAB5D",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F, this.camera_4F18FD46_592D_8B4C_41B0_419312147B00); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 72.36,
   "yaw": 23.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 172
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_4737DB44_54DB_6839_41C8_3C74B4AC10A6",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.06,
   "yaw": -71.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402D9B61_56A2_3357_41C1_F1D4F6F164CC",
   "yaw": -71.48,
   "pitch": -5.32,
   "distance": 100,
   "hfov": 3.06
  }
 ],
 "id": "overlay_4E8FAC8D_569E_75EE_41C2_77B339CA0032",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.36,
   "yaw": 6.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402DAB61_56A2_3357_41A8_41C41191F51B",
   "yaw": 6.22,
   "pitch": -7.04,
   "distance": 100,
   "hfov": 4.36
  }
 ],
 "id": "overlay_4F86FEB5_569E_353E_41B7_CBDD7C47FAB9",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E535B7C_5419_2024_4174_88508DC54FA3, this.camera_4C0AE1DA_592D_9B44_41C9_4826A692FD2C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 72.13,
   "yaw": -147.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_0_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_46DA38DD_5417_6064_41C6_3C0D1BE33B10",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82, this.camera_4C1711E7_592D_9B4C_41CA_641F432B437F); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 86.29,
   "yaw": -39.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0_HS_1_1_0_map.gif",
      "width": 136,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_46011B01_5417_61DC_41B3_3151F215B7C4",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389, this.camera_4C0111CA_592D_9B44_41B0_32910EB4C98D); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 124.93,
   "yaw": 104.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_2_1_0_map.gif",
      "width": 184,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_590F525E_54CB_58C8_41AB_F52F945C95FE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 10.77,
   "yaw": -156.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EAC9DF9_56A2_7736_41D5_1C38644CDFB6",
   "yaw": -156.58,
   "pitch": -15.26,
   "distance": 100,
   "hfov": 10.77
  }
 ],
 "id": "overlay_1F7FD2B1_55C7_585B_41AD_1EDC25EBC1E5",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.2,
   "yaw": 92.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EACCDFA_56A2_772A_41D4_FCD9AA0A50D5",
   "yaw": 92.95,
   "pitch": -9.36,
   "distance": 100,
   "hfov": 5.2
  }
 ],
 "id": "overlay_4752D693_56AE_15FA_41D4_0EF7D7E8DD05",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.26,
   "yaw": -66.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40288B5B_56A2_336B_41D0_3CBF118029AE",
   "yaw": -66.66,
   "pitch": -14.07,
   "distance": 100,
   "hfov": 4.26
  }
 ],
 "id": "overlay_4714EA05_56AE_3CDE_41D4_F98CC9BDC7C5",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B, this.camera_4F3BCD28_592D_88C4_4188_33E963175D70); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_163FE96D_5539_68C8_41C6_001BB8EE3E0A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 70.88,
   "yaw": 13.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_1_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_16FC03BD_5539_B84B_41BF_BE08436FFDCB",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_1_HS_2_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_1_HS_2_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_1_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_1_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_11C4F7DA_553A_A7C9_41CB_AB34A3BEC3C0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.07,
   "yaw": 3.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402F1B5E_56A2_336D_41C7_3C58917A07F8",
   "yaw": 3.92,
   "pitch": -4.11,
   "distance": 100,
   "hfov": 3.07
  }
 ],
 "id": "overlay_415D3B57_56E2_737A_4190_051CED25F99E",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.48,
   "yaw": 133.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402F2B5E_56A2_336D_41C5_431BF75DD6D0",
   "yaw": 133.02,
   "pitch": -8.69,
   "distance": 100,
   "hfov": 3.48
  }
 ],
 "id": "overlay_4EE5CFCB_56E6_736A_4195_42BF02D045E2",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4CC250_5419_207C_4135_0A9EBC679160, this.camera_4E0F5E6E_592D_895C_4195_3F9343F90781); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7293A1BA_5539_B849_416C_6562BAFD227C",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9, this.camera_4E017E59_592D_8944_41BD_951B99976CBE); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 29.79,
   "yaw": -145.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_1_HS_1_1_6_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7CD6817F_553E_D8C7_41B8_2ADB3FC51E16",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB, this.camera_4E215E30_592D_88C4_41D2_FD41A67CA9EF); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 75.03,
   "yaw": 147.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_2_1_0_map.gif",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_118BF144_55CA_F839_41BD_56FB1CED2171",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB, this.camera_4E314E45_592D_894C_41B3_04E7124722E3); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 19.72,
   "yaw": -170.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_1_HS_3_1_6_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_1057182E_55C9_6848_41D4_2651DF687AE9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -153.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_437A4E56_56A2_757A_41D5_56E9DFB5FDB6",
   "yaw": -153.94,
   "pitch": -3.39,
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_1A8623B3_55CB_B85F_41D4_34052EFFB805",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.16,
   "yaw": 5.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40205B6B_56A2_332B_41D0_0B4BFB3B9030",
   "yaw": 5.78,
   "pitch": -35.48,
   "distance": 100,
   "hfov": 7.16
  }
 ],
 "id": "overlay_4EEBC0CA_56A6_0D6A_41B9_C90235F6C8F3",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.93,
   "yaw": 176.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4BC0AE3B_5662_152A_41B5_137C171EDDD1",
   "yaw": 176.2,
   "pitch": -6.94,
   "distance": 100,
   "hfov": 3.93
  }
 ],
 "id": "overlay_410C72FE_56A6_0D2D_41C9_4FEB6712979B",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA, this.camera_41240F86_592D_87CC_41D1_73A8542968EF); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 55.11,
   "yaw": 43.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_1_HS_0_1_0_map.gif",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_6746AAC9_554A_E9CB_41AB_1EA66EA1C0C7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.22,
   "yaw": 44.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40273B70_56A2_3335_41B0_C4AA6E1D9B50",
   "yaw": 44.21,
   "pitch": -8.1,
   "distance": 100,
   "hfov": 5.22
  }
 ],
 "id": "overlay_4E9EE93D_56A2_1F2E_41D1_D23D0F481EE7",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E56643F_5419_6024_41AB_F20D58121F15, this.camera_4DA690C5_592D_994C_41A4_AE38536388A3); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_681CE3FF_554F_7FC7_41C0_6B062EC1BABC",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8, this.camera_4DAA30D0_592D_9944_41D2_B0B78A6A6D62); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 35.83,
   "yaw": 162.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_1_1_6_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_6B101B13_5549_A85F_41D0_9668FF663E0F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.53,
   "yaw": 172.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.53,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_3_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.95,
   "yaw": 172.97
  }
 ],
 "id": "overlay_19CF3258_553F_B8C9_41D3_6415DF3CB07D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.4,
   "yaw": 1.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_41DACB78_56A2_3335_41CE_7CBF3F30DF14",
   "yaw": 1.16,
   "pitch": -13.78,
   "distance": 100,
   "hfov": 6.4
  }
 ],
 "id": "overlay_412F9B4B_56A2_136A_41BB_734D508FD106",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689, this.camera_4C79DC52_592D_8944_41C6_42FB04C85F45); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 46.48,
   "yaw": -131.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_1_HS_0_1_0_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_665DA18E_554B_D849_41CE_EDB2A6325C0A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E55FC6B_5419_202C_41B6_215937597045, this.camera_4C452C64_592D_894C_41D5_558BDD48B7ED); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_66CB8C4D_554B_E8CB_41C2_0DF5463E80E7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.54,
   "yaw": -132.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_1_HS_3_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.06,
   "yaw": -132.77
  }
 ],
 "id": "overlay_1ECE1E2F_55C9_6847_41CC_EA2CF593C0A9",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.25,
   "yaw": 4.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40277B6F_56A2_332B_41D2_8DDE4772AE3A",
   "yaw": 4.02,
   "pitch": -5.84,
   "distance": 100,
   "hfov": 5.25
  }
 ],
 "id": "overlay_4015C70D_56A2_34EE_41D4_444633157ADE",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E, this.camera_41818013_592D_98C4_411F_C5A13E58CF70); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 103.06,
   "yaw": -88.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_0_1_0_map.gif",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_4F6D3A76_54CB_A8D9_41D3_96962A08E0B9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B, this.camera_41B11003_592D_98C4_41D0_64691656EE55); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 83.87,
   "yaw": 16.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_1_1_0_map.gif",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_48DAC0E7_54CB_D9C7_41C2_7C8B1C9BE026",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.37,
   "yaw": -89.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EB09DF6_56A2_773A_41CF_EEFFEABCEB40",
   "yaw": -89.94,
   "pitch": -5.51,
   "distance": 100,
   "hfov": 4.37
  }
 ],
 "id": "overlay_474C839F_56A2_F3EA_41D1_C2011180DD07",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.02,
   "yaw": 14.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EB0DDF6_56A2_773A_41C2_A7C1DCEE2D0F",
   "yaw": 14.09,
   "pitch": -10.77,
   "distance": 100,
   "hfov": 3.02
  }
 ],
 "id": "overlay_47355580_56A2_77D6_41AA_E812641A8BB6",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 75.24,
   "yaw": 8.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_0_1_0_map.gif",
      "width": 161,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_46215149_54D9_58C8_41BA_08FADF1C6B3C",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 80.22,
   "yaw": 124.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_47FB4961_54D9_68FB_41CF_963BE8E9126C",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.05,
   "yaw": -2.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402E0B60_56A2_3355_41A3_64D7B520316A",
   "yaw": -2.83,
   "pitch": -6.97,
   "distance": 100,
   "hfov": 3.05
  }
 ],
 "id": "overlay_41420D79_56E2_1736_41B5_192616AA7448",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.04,
   "yaw": 128.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402E2B60_56A2_3355_41C6_3FE3D9E394FE",
   "yaw": 128.2,
   "pitch": -8.92,
   "distance": 100,
   "hfov": 3.04
  }
 ],
 "id": "overlay_4EA24F9B_56E2_73EA_4142_94784F7B6529",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "class": "IconButton",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand"
},
{
 "class": "IconButton",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand"
},
{
 "class": "IconButton",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 131.38,
   "yaw": -29.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_0_1_0_map.gif",
      "width": 162,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_460E259C_546B_20E4_417B_BEB60A66A628",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2, this.camera_4F668D56_592D_8B4C_41A6_1C3E6BFB3661); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 38.58,
   "yaw": 48.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_1_1_0_map.gif",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_5A90722A_54B6_E832_41CE_A94C466F7AD3",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16, this.camera_4F464D73_592D_8B44_41D4_FBBF99C3A0B3); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 58.33,
   "yaw": 134.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_2_1_0_map.gif",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_145244D2_5539_B9D8_41B9_647C0DF2B027",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E, this.camera_4F76DD63_592D_8B44_41D3_13A13795E488); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 23.73,
   "yaw": 85.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_3_1_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_1F7E4B1C_553A_A848_41D3_91B5E874D6D9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.27,
   "yaw": 90.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EAEEDF8_56A2_7736_41CF_FA4CF964B6E4",
   "yaw": 90.43,
   "pitch": 0.44,
   "distance": 100,
   "hfov": 5.27
  }
 ],
 "id": "overlay_1CA857E9_55F9_E7CB_41C0_E1CA2C306557",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.25,
   "yaw": 134.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EAF3DF8_56A2_7736_41B5_A7EAA00D82E5",
   "yaw": 134.65,
   "pitch": -5.58,
   "distance": 100,
   "hfov": 5.25
  }
 ],
 "id": "overlay_1F53EA21_55F9_A87B_41BC_79B00CB590FB",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.04,
   "yaw": 48.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EAF5DF9_56A2_7736_41C5_D8D5F5EAFF2B",
   "yaw": 48.41,
   "pitch": -10.11,
   "distance": 100,
   "hfov": 6.04
  }
 ],
 "id": "overlay_193BD4B6_55C6_F859_41D4_BDF1F2CF31DC",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.38,
   "yaw": -50.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EAF9DF9_56A2_7736_4199_6826440989A9",
   "yaw": -50.92,
   "pitch": -4.64,
   "distance": 100,
   "hfov": 4.38
  }
 ],
 "id": "overlay_449654FA_56A1_F535_41BD_45E99860D685",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E578F69_541B_602C_41C2_4A0F1F976829, this.camera_4F92EDBE_592D_8B3C_41CE_4F9A93F21F70); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_6466A378_554E_D8C9_41D4_A355E112BEAB",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.25,
   "yaw": 45.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4026CB70_56A2_3335_41C4_67E48F952A26",
   "yaw": 45.97,
   "pitch": -5.84,
   "distance": 100,
   "hfov": 5.25
  }
 ],
 "id": "overlay_4FBBACBA_56AE_152A_41CB_02D62EBE82F9",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58875CB9_541A_E02C_41D3_73B63887517E, this.camera_4F093D35_592D_88CC_41C0_954C1307F8ED); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90.21,
   "yaw": 70.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0_HS_0_1_0_map.gif",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_68A859AE_554F_E849_41B2_83AC49094BC1",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.34,
   "yaw": 76.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_41A17D78_5661_F736_41D1_83FDACE34BC5",
   "yaw": 76.94,
   "pitch": -9.42,
   "distance": 100,
   "hfov": 4.34
  }
 ],
 "id": "overlay_4134B736_56A6_333A_41D2_B54394E25870",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3, this.camera_4D830108_592D_98C4_41A8_85CB078A0F49); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 48.53,
   "yaw": -123.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_0_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_75A4A9A7_54CB_6878_4199_4B8B50B7C036",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA, this.camera_4DBD50FA_592D_9944_41D2_77806D7EFC24); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 45.26,
   "yaw": 158.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_1_1_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_4B64AA8C_54C9_A849_41C9_F5E2314F8F2E",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E, this.camera_4D863116_592D_98CC_41D3_F39C20626706); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 57.4,
   "yaw": -71.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 178
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_10A75D88_55D9_6849_41B2_3202E464A850",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.34,
   "yaw": -81.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EDEEE02_56A2_74DA_419A_510DDB0F4A6E",
   "yaw": -81.59,
   "pitch": -9.42,
   "distance": 100,
   "hfov": 4.34
  }
 ],
 "id": "overlay_19880BA5_55DF_687B_41C7_D99E445612D4",
 "data": {
  "label": "Circle Generic 01"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -117.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EDF2E02_56A2_74DA_41D2_57D5D6120A8C",
   "yaw": -117.51,
   "pitch": -2.64,
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_1F65259F_55DF_5848_41C4_AD0ABB1620F3",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.39,
   "yaw": 155.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EDF7E02_56A2_74DA_41B9_E8FC012F55D2",
   "yaw": 155.32,
   "pitch": -2.39,
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_1F9709D9_55DE_ABCB_41CC_D894D02E235B",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB, this.camera_41CC605B_592D_9944_4173_50CF36EE4A9F); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_767A61BF_54CB_7847_41BC_649418533AA7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626, this.camera_41FC604C_592D_995C_41D3_605A824C07B8); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7643CB3F_54CB_A847_41D1_465B924A9189",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE, this.camera_41EF103C_592D_993C_41C3_1860BC6792DE); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 63.3,
   "yaw": 138.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_2_1_6_map.gif",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 63.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_2_0.png",
      "width": 680,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.27,
   "roll": 0,
   "yaw": 138.8
  }
 ],
 "id": "overlay_67BDBC2D_554A_A84B_41C8_E817CF20FFAE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.55,
   "yaw": -127.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EDB7E04_56A2_74DE_41C8_86BD608599EB",
   "yaw": -127.46,
   "pitch": -6.59,
   "distance": 100,
   "hfov": 6.55
  }
 ],
 "id": "overlay_1F4378F8_55DB_69C9_418E_CF6BD8CD862F",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.25,
   "yaw": -6.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40220B67_56A2_335B_4189_A92D5D316FA9",
   "yaw": -6.16,
   "pitch": -14.62,
   "distance": 100,
   "hfov": 4.25
  }
 ],
 "id": "overlay_41A22766_56BE_735A_41D5_04385C8CB88A",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5595D8_5419_606C_41D0_D644098500B8, this.camera_4F2B9D17_592D_88CC_41CC_A7CB3AF0371E); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7C007312_553F_B859_41D3_B88854B53FAD",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.15,
   "yaw": 17.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40219B6B_56A2_332B_41CA_8D2562BB0B4F",
   "yaw": 17.58,
   "pitch": -12.37,
   "distance": 100,
   "hfov": 5.15
  }
 ],
 "id": "overlay_4122E5DB_56A6_176A_41BA_C86CFBC3F501",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 64.01,
   "yaw": -121.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_0_1_0_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_45F06652_54CE_B8D9_41D5_31B2E29318E2",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E543699_541B_20EC_41C0_1B21584E5F82, this.camera_4C6C3C3F_592D_893C_41B2_4D6DC4FD9D37); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 82.16,
   "yaw": -59.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_1_1_0_map.gif",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_5BB88345_54C9_7838_41CA_C0A9F967C596",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 53.5,
   "yaw": -14.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_2_1_0_map.gif",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_44EE0CE6_54C9_E9F9_418F_4F224C02ADEE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.35,
   "yaw": -66.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402FEB5C_56A2_336E_41B2_D08EBCF9BD44",
   "yaw": -66.39,
   "pitch": -8.57,
   "distance": 100,
   "hfov": 4.35
  }
 ],
 "id": "overlay_47BF4BDA_56A2_336A_41D0_B13D80C69BA5",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.38,
   "yaw": -4.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EA80DFB_56A2_772A_419C_1C8B01A34E7B",
   "yaw": -4.94,
   "pitch": -5.2,
   "distance": 100,
   "hfov": 4.38
  }
 ],
 "id": "overlay_47976DBD_56A2_172E_41BB_C5CD6835A639",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.34,
   "yaw": -137.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402FAB5D_56A2_336F_41C8_8259105AF231",
   "yaw": -137.39,
   "pitch": -9.38,
   "distance": 100,
   "hfov": 4.34
  }
 ],
 "id": "overlay_40653481_56E2_15D6_41CE_23B01324646F",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF, this.camera_4EF73F58_592D_8744_41A4_34F540C92D98); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_6D3B05A1_555A_D87B_41C0_B589713A4BAD",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58FDA850_5419_207C_41C9_069E791B36A6, this.camera_4EE97F43_592D_8744_4181_675EE32DB073); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_6DC50E8B_555A_A848_41D3_D47201A0E1A2",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 10.96,
   "yaw": -13.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4DCD3BDD_592D_8F7C_41CD_BBB10457EF89",
   "yaw": -13.98,
   "pitch": 4.12,
   "distance": 100,
   "hfov": 10.96
  }
 ],
 "id": "overlay_1FDBE5E9_55CA_DBCB_41C2_7625E4125D70",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.32,
   "yaw": 135.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40267B71_56A2_3337_41A1_8D1141B8EDD4",
   "yaw": 135.98,
   "pitch": -10.76,
   "distance": 100,
   "hfov": 4.32
  }
 ],
 "id": "overlay_41484B89_56AE_33D7_41C3_961BA19ACC32",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B, this.camera_4CBE5CA2_592D_89C4_41C5_C9A87CE8C9E6); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 14.38,
   "yaw": 131.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_0_1_0_map.gif",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_6C40399D_5549_684B_41B6_F5E704C8B67B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B, this.camera_4C8EBCB4_592D_89CC_41C8_578647D119F9); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_6FFC66F0_5549_D9D9_41A1_E174845AE772",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_588580AA_541A_E02C_4144_D3F282922A1E, this.camera_4CB06C95_592D_89CC_4199_B36660500E5A); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 10.9,
   "yaw": 118.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_2_1_6_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_1F3AFC65_55CA_A8FB_41B3_363934EE7DFF",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.53,
   "yaw": 2.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.53,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_3_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.44,
   "yaw": 2.64
  }
 ],
 "id": "overlay_1F537CCE_5539_A9C9_41B5_89312B6A793D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.52,
   "yaw": 120.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.52,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_0_HS_4_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.25,
   "yaw": 120.13
  }
 ],
 "id": "overlay_1F215C28_5539_E849_41CF_0DB6283B0E19",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.35,
   "yaw": 130.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_5_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_43770E5F_56A2_756A_41D2_00A24A80254F",
   "yaw": 130.45,
   "pitch": -8.6,
   "distance": 100,
   "hfov": 4.35
  }
 ],
 "id": "overlay_19E582B2_553A_B859_41D0_C8A22B357B6B",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58875CB9_541A_E02C_41D3_73B63887517E, this.camera_4C79020F_592D_98DC_41D3_E1571B6B4453); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 57.96,
   "yaw": 29.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_0_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_6E1CCB85_554B_E83B_41D1_1883752D4E7F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.35,
   "yaw": 32.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40240B75_56A2_333F_41C4_F6180B99F996",
   "yaw": 32.47,
   "pitch": -7.91,
   "distance": 100,
   "hfov": 4.35
  }
 ],
 "id": "overlay_4ED22146_56A6_0F5A_41D4_76156827518C",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.7,
   "yaw": 168.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.7,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_3_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.98,
   "yaw": 168.82
  }
 ],
 "id": "overlay_4067A185_569E_0FDE_41D0_CF8D02D895D7",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8, this.camera_4C45021D_592D_98FC_41B9_0AB84B8DC1EB); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_4_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_4_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_4_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_401626FA_569E_152A_41CD_F1E851D560C1",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8, this.camera_4C532229_592D_98C4_41B9_94142CC7EB28); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_5_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_5_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_5_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_5_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_4161E494_569E_75FD_41C8_EDDD871A3980",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 62.88,
   "yaw": 109.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 193
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_457D5F1B_54C9_A84F_41D0_CC70DEB20A1A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A, this.camera_4C9C1CC8_592D_8944_41BD_4FC12DBC86BB); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 35.19,
   "yaw": 161.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_1_HS_1_1_0_map.gif",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_453E03C5_54C9_F838_41C7_1644F591CCA4",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 92.18,
   "yaw": 17.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 157
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_46F3CF35_54C9_A85B_41C7_26CF4ED55518",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.31,
   "yaw": 2.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402EBB5F_56A2_336B_41D1_742E0D95CC9D",
   "yaw": 2.07,
   "pitch": -11.52,
   "distance": 100,
   "hfov": 4.31
  }
 ],
 "id": "overlay_4EFBAFEC_56E2_132E_4198_76638DAE65B7",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.5,
   "yaw": 170.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4BF09E25_5662_14DE_41BF_4EE5C185CD28",
   "yaw": 170.34,
   "pitch": -6,
   "distance": 100,
   "hfov": 3.5
  }
 ],
 "id": "overlay_4ED7BB59_56E2_1376_41C7_704F5B762DC8",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.51,
   "yaw": 120.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4BF72E25_5662_14DE_41C0_E85EC0DF47BC",
   "yaw": 120.46,
   "pitch": -2.16,
   "distance": 100,
   "hfov": 3.51
  }
 ],
 "id": "overlay_4EADD036_5662_0D3A_41CC_0B20C5D43A7C",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_588580AA_541A_E02C_4144_D3F282922A1E, this.camera_41054FA2_592D_87C4_41C3_5984BFF12644); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_6EBF3E0A_554A_E849_41BD_2E94DF748DB5",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_6EEC8803_554A_A83F_41C8_9AF385572CD4",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5881B97C_541B_2024_4199_2DF060A6B33C, this.camera_41155FB0_592D_87C4_41B0_16F9C4BFCC76); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 73.48,
   "yaw": 10.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_2_1_6_map.gif",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_68740CF7_5549_69C7_41CB_C42E54CE811C",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.38,
   "yaw": 6.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_41DB9B76_56A2_333D_41D0_F0E4B1DC7363",
   "yaw": 6.69,
   "pitch": -14.54,
   "distance": 100,
   "hfov": 6.38
  }
 ],
 "id": "overlay_4EC194A0_56A6_15D6_41D4_C6CFD9302568",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.56,
   "yaw": -173.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.56,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_7_0.png",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.24,
   "yaw": -173.44
  }
 ],
 "id": "overlay_4E5C006C_5662_0D2E_41AD_D067AFA4AB69",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3, this.camera_4FB57DA1_592D_8BC4_41B7_0CE683FB27D4); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 32.7,
   "yaw": 162.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_1_HS_0_1_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_77B693DC_54CA_FFC9_41D2_FE18B976347F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB, this.camera_4F859DAE_592D_8BDC_41C9_AB9216850633); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 111.19,
   "yaw": 0.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 148
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_725C74E8_54C7_59C9_41C7_DAF0417A40BF",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.39,
   "yaw": 164.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_437D2E53_56A2_757A_41CB_23C499010CD8",
   "yaw": 164.61,
   "pitch": -2.39,
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_193D29C7_55D9_A838_4192_111551E7E5E4",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.49,
   "yaw": 4.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4021EB68_56A2_3355_41D3_8F015A13EEC2",
   "yaw": 4.68,
   "pitch": -6.32,
   "distance": 100,
   "hfov": 3.49
  }
 ],
 "id": "overlay_4E8F1FE2_56A6_135A_41C7_E2531731FF30",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1, this.camera_4E1F8E87_592D_89CC_4199_8C7F87495BFA); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 71.67,
   "yaw": 9.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_0_1_0_map.gif",
      "width": 198,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_5AACF93F_54C9_6847_41C0_70A74B648382",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E557A0F_541B_E3E4_41C5_9385896782C2, this.camera_4E6CEE9C_592D_89FC_41D0_E29282F703F3); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 105.71,
   "yaw": -90.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_5A1519F7_54C9_ABC7_41CC_06E7541B3882",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B, this.camera_4E7D3EB1_592D_89C4_4164_E7AF12590633); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 91.92,
   "yaw": 102.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_5B860E01_54C9_E83B_41C6_27F3122816DD",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.33,
   "yaw": 102.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EAA0DFA_56A2_772A_41C3_A8F2633BDB5B",
   "yaw": 102.67,
   "pitch": -10.2,
   "distance": 100,
   "hfov": 4.33
  }
 ],
 "id": "overlay_4758106A_56AE_0D2A_41D4_B63936C99C28",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.38,
   "yaw": 15.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EAA6DFA_56A2_772A_41D5_60BF71D66E6B",
   "yaw": 15.89,
   "pitch": -4.35,
   "distance": 100,
   "hfov": 4.38
  }
 ],
 "id": "overlay_47B0D81F_56AE_3CEA_419C_5A08294F9596",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.38,
   "yaw": -81.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EAA9DFB_56A2_772A_41D3_9E1CF1BA5B6B",
   "yaw": -81.73,
   "pitch": -4.82,
   "distance": 100,
   "hfov": 4.38
  }
 ],
 "id": "overlay_47CC42A4_56AE_0DDE_41C4_4586BC2900BB",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994, this.camera_4EBBFF04_592D_88CC_41C0_AA2562620E17); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 75.19,
   "yaw": -3.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 174
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_63D296FE_5559_B9C9_41CC_AD5040903674",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8, this.camera_4EAA4EEF_592D_895C_41C6_B92AAD4466B6); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 96.47,
   "yaw": -134.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 146
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_63EA539F_5559_7847_41C4_F526BFE8D247",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.34,
   "yaw": -10.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40262B72_56A2_3335_41C0_535B5BD1E893",
   "yaw": -10.69,
   "pitch": -9.21,
   "distance": 100,
   "hfov": 4.34
  }
 ],
 "id": "overlay_4E841DA6_56A2_17DA_41A6_9B7200B8BB0C",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.31,
   "yaw": -135.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4025CB72_56A2_3335_41C5_3F6024627A4B",
   "yaw": -135.45,
   "pitch": -11.01,
   "distance": 100,
   "hfov": 4.31
  }
 ],
 "id": "overlay_41724ED6_56A1_F57A_41B6_E4FB2E3A98BD",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3, this.camera_4153FFE9_592D_8744_41CB_48169D227CB1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_48DF7066_54F9_B8F9_41C7_4B4AEB002B03",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 58,
   "yaw": 41.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_1_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 179
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_480C2E79_54C6_A8C8_41C2_10296EEBAA63",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626, this.camera_41A39FF7_592D_874C_41AE_54070A2697D6); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_2_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_4AAECD1D_54C7_E84B_41C4_C1894A3966DA",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.35,
   "yaw": -33.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402C4B63_56A2_335B_41D0_3EA193B28844",
   "yaw": -33.41,
   "pitch": -7.81,
   "distance": 100,
   "hfov": 4.35
  }
 ],
 "id": "overlay_4179A031_56A2_0D36_418A_AAF1CEA1BD8A",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.51,
   "yaw": 59.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_8_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402C6B63_56A2_335B_41C7_80D5044E6302",
   "yaw": 59.41,
   "pitch": -3.16,
   "distance": 100,
   "hfov": 3.51
  }
 ],
 "id": "overlay_415DD90D_56A6_3CEF_41D1_D699B8A85C20",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.34,
   "yaw": 131.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_9_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4DF72BCD_592D_8F5C_41CD_DB3A4BD2DCF6",
   "yaw": 131.74,
   "pitch": -9.18,
   "distance": 100,
   "hfov": 4.34
  }
 ],
 "id": "overlay_57C258F7_5893_63D9_41AA_2788186A1135",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3, this.camera_419F1030_592D_98C4_4196_FEF8222D5DB8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7C9F79CC_553F_ABC8_41C1_D0A22584B538",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689, this.camera_418F0020_592D_98C4_41C6_16FFCE0FE9D8); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7F2C82F6_553E_F9D9_41BB_AB137EF44F19",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 27.49,
   "yaw": -67.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_2_1_6_map.gif",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7C98D047_553E_B8C7_41D3_1F27A396CC22",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.35,
   "yaw": 116.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_437A6E57_56A2_757A_41CB_AB88932773F5",
   "yaw": 116.72,
   "pitch": -15.54,
   "distance": 100,
   "hfov": 6.35
  }
 ],
 "id": "overlay_194A1B8B_55C9_A848_41D0_6AC1ED01C5DA",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.49,
   "yaw": -69.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4BC69E3C_5662_152E_4162_F95A4925993D",
   "yaw": -69.21,
   "pitch": -6.22,
   "distance": 100,
   "hfov": 3.49
  }
 ],
 "id": "overlay_4EAC74C4_56A2_155E_41D1_0698C1C6F9CA",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.93,
   "yaw": -8.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_8_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4BC55E3D_5662_152E_41AD_8D71F6813B0B",
   "yaw": -8.46,
   "pitch": -6.19,
   "distance": 100,
   "hfov": 3.93
  }
 ],
 "id": "overlay_41130E63_56A2_155A_41B5_F2B3AF7AD1FD",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA, this.camera_4F57ED80_592D_8BC4_41BA_C41AEC3565F8); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 59.65,
   "yaw": 29.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0_HS_0_1_0_map.gif",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_74E0E74A_54CF_F8C9_41B8_2EEFCD1307FC",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3, this.camera_4FA41D91_592D_8BC4_41AC_408D70BE5D7E); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 51.98,
   "yaw": -64.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_1_HS_1_1_0_map.gif",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_74B74DAC_54CF_A848_41B4_0946EFB25647",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.38,
   "yaw": -50.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40230B66_56A2_335D_41C7_9BB9D878D68C",
   "yaw": -50.28,
   "pitch": -4.72,
   "distance": 100,
   "hfov": 4.38
  }
 ],
 "id": "overlay_412AC211_56A2_0CF6_41C5_8290359E6C3D",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.63,
   "yaw": 13.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40232B66_56A2_335D_41CB_E033DF572C45",
   "yaw": 13.43,
   "pitch": -5.31,
   "distance": 100,
   "hfov": 4.63
  }
 ],
 "id": "overlay_414E4B40_56A2_1356_41D1_F264B4833D88",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16, this.camera_4DE03152_592D_9B44_41A3_386D47E9BA18); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7FEDEB8B_553A_A84F_41C8_93858504AE00",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E578F69_541B_602C_41C2_4A0F1F976829, this.camera_4D8FF126_592D_98CD_41BD_88B4F32F90CE); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7E5E404C_553A_D8C9_4187_542156C4E048",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E55B06A_5419_202C_41A2_F5BA739671AA, this.camera_4D9BC144_592D_9B4C_41C6_B128B6394FF0); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 44.55,
   "yaw": -86.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_2_1_6_map.gif",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7E7FB4C5_553A_F83B_41BA_2CC7EBEF2904",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE, this.camera_4D92D133_592D_98C4_41D3_9321512B1677); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 42.91,
   "yaw": -136.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_3_1_6_map.gif",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7E9C18BE_553A_A848_41B0_4C65860424C2",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.44,
   "yaw": 2.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_4_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.23,
   "yaw": 2.14
  }
 ],
 "id": "overlay_1F445E41_55CE_A838_41C0_F4B1723225FF",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.51,
   "yaw": -83.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.51,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_1_HS_5_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21,
   "yaw": -83.53
  }
 ],
 "id": "overlay_1BB80AAA_55CF_E849_41D4_D7CA65DFA269",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.37,
   "yaw": -135.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_8_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40204B6E_56A2_332D_418F_DBEC55D6DADF",
   "yaw": -135.6,
   "pitch": -6.15,
   "distance": 100,
   "hfov": 4.37
  }
 ],
 "id": "overlay_4ED1FD45_56A2_375E_41CA_151BCAE8B7F2",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.36,
   "yaw": 83.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_9_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40201B6E_56A2_332D_41A4_7454EAE57A07",
   "yaw": 83.22,
   "pitch": -6.66,
   "distance": 100,
   "hfov": 4.36
  }
 ],
 "id": "overlay_415CE127_56A2_0CDB_41C6_ECCD9070E214",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E568337_5419_2024_41D2_A30D47360735, this.camera_4C86B25D_592D_997C_41BE_CF2F52E8EA42); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_48187D70_54C6_A8D9_41C6_B566AB6B0F6E",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9, this.camera_4C94F26C_592D_995C_41AE_1CD7101E7C0F); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 36.82,
   "yaw": -14.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_1_1_6_map.gif",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_490D9F80_54C9_A839_41C2_7EF0B5298FED",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.38,
   "yaw": -15.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EA16E01_56A2_74D6_41D0_00029264B181",
   "yaw": -15.51,
   "pitch": -5.4,
   "distance": 100,
   "hfov": 4.38
  }
 ],
 "id": "overlay_183FF1EB_55DB_7BCF_41B8_D1266A7560E6",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.38,
   "yaw": -75.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EA19E01_56A2_74D6_41D3_A403CA6E0832",
   "yaw": -75.3,
   "pitch": -4.9,
   "distance": 100,
   "hfov": 4.38
  }
 ],
 "id": "overlay_1BF3F0EC_55DA_F9C9_41C9_DF1AE9811BFD",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626, this.camera_4C6311F5_592D_9B4C_41BB_6E7FE6265D25); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_75813AD7_54CE_A9D8_41BA_A35AA4837D8E",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB, this.camera_4C6CD203_592D_98C4_41D1_776BD78F463B); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 69.26,
   "yaw": -145.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_1_1_6_map.gif",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7768E603_54C9_583F_4193_04F17263813D",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.78,
   "yaw": -12.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EDD6E03_56A2_74DA_41CF_ACB4718DA4DC",
   "yaw": -12.81,
   "pitch": -3.08,
   "distance": 100,
   "hfov": 8.78
  }
 ],
 "id": "overlay_1F0ACE65_55D9_68FB_41D1_9E91EFAAAD5C",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.11,
   "yaw": -120.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40228B67_56A2_335B_41AC_1C2E5E4778F7",
   "yaw": -120.84,
   "pitch": -14.13,
   "distance": 100,
   "hfov": 5.11
  }
 ],
 "id": "overlay_4E94B549_56A2_1756_41CF_22896B713AC0",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF, this.camera_4CA05C83_592D_89C4_41CA_8AF3FB81042F); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_62AA3DA5_555F_E846_41C4_655ECFB7358B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58804E3F_541B_6024_41AE_5E1B04832DC1, this.camera_4C53CC74_592D_894C_41CB_B9F049FF85CF); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 108.23,
   "yaw": -105.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_1_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_62BABD27_555E_A847_41C3_09AE9B54B2B3",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.27,
   "yaw": -106.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4025BB72_56A2_3335_419C_473DC6861949",
   "yaw": -106.51,
   "pitch": -13.78,
   "distance": 100,
   "hfov": 4.27
  }
 ],
 "id": "overlay_412FDCB4_56A2_353E_41D3_3BBD4843EFE8",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.36,
   "yaw": 76.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40255B73_56A2_333B_41BE_D83262664659",
   "yaw": 76.38,
   "pitch": -6.77,
   "distance": 100,
   "hfov": 4.36
  }
 ],
 "id": "overlay_41B4F8E0_56A2_3D56_41D1_A56B91E551BC",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E48B6BC_541B_2024_41BC_D999FC96538F, this.camera_4ED6BF78_592D_8744_41D0_DFE855E33935); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_419F252F_54D9_F847_41D2_B26C4C975FC5",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.26,
   "yaw": -55.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402CCB62_56A2_3355_41D0_B02CE75AAFB9",
   "yaw": -55.71,
   "pitch": -14.33,
   "distance": 100,
   "hfov": 4.26
  }
 ],
 "id": "overlay_41C80661_56A2_1556_41C3_7BEC791A56FC",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5943C1D8_5419_606C_4171_C1C741B15DA8, this.camera_4DB060DF_592D_997C_41A2_E4F5679FC7C3); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_62849D9A_5559_6849_41C7_3A910DEBAD67",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.51,
   "yaw": -83.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40251B73_56A2_333B_41C0_1E0567724BD4",
   "yaw": -83.14,
   "pitch": -3.47,
   "distance": 100,
   "hfov": 3.51
  }
 ],
 "id": "overlay_412FC393_56A2_13FA_41C3_30967E18AFC8",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_440B2075_54CB_B8DB_41C8_9010DF9867A3",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 55.89,
   "yaw": -152.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_1_HS_1_1_6_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_45E9523E_54CB_F848_41D1_2F5C7D81A3EB",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B, this.camera_4137FF95_592D_87CC_41CB_2706107EC1E9); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_2_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_2_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_2_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_2_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_4533FF21_54CA_E87B_41B9_DF971C003C2D",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.37,
   "yaw": -0.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402F9B5E_56A2_336D_41D3_03611045CC56",
   "yaw": -0.58,
   "pitch": -6.33,
   "distance": 100,
   "hfov": 4.37
  }
 ],
 "id": "overlay_4EABA458_56E2_3576_41CF_EE51CD9D68F9",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.49,
   "yaw": 159.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_402FBB5E_56A2_336D_41D1_F7AC317DC6D9",
   "yaw": 159.72,
   "pitch": -6.51,
   "distance": 100,
   "hfov": 3.49
  }
 ],
 "id": "overlay_418219FD_56E2_1F2F_41C5_D200DD5B0A0D",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E5595D8_5419_606C_41D0_D644098500B8, this.camera_4DB600EB_592D_9944_41C3_D6678E988D9D); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_727EA40C_553B_D849_41C3_D62497F54276",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.76,
   "yaw": -19.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40212B69_56A2_3357_419E_178FD4FE8319",
   "yaw": -19.09,
   "pitch": -4.33,
   "distance": 100,
   "hfov": 8.76
  }
 ],
 "id": "overlay_1F0D3BFA_55C9_AFC8_41AF_05823D544BD3",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E413C6D_5419_2025_41B3_B17DB42524F3, this.camera_4E5A5ED9_592D_8944_41D2_EF0FE53052FC); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7E56268E_5539_5848_41D5_06408BAA8628",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E57E7E3_541B_205C_41C5_1522D4C28689, this.camera_4E4AAEC5_592D_894C_41D5_451A010D13FF); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_1_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_1_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_7E85FFAE_5539_6849_41CC_DB363C38910C",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.58,
   "yaw": -19.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_437B5E59_56A2_7576_41AE_CE856BABAD12",
   "yaw": -19.09,
   "pitch": -12.62,
   "distance": 100,
   "hfov": 8.58
  }
 ],
 "id": "overlay_1FE381DF_55CE_BBC7_41C6_3017759F5448",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.38,
   "yaw": 160.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_40279B6E_56A2_332D_41CC_6D2F91DD86E5",
   "yaw": 160.84,
   "pitch": -4.14,
   "distance": 100,
   "hfov": 4.38
  }
 ],
 "id": "overlay_4E81D405_56A2_34DE_41D3_41AD6B2929CB",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5E54DF5F_5419_2064_4181_001C4457D09E, this.camera_4C3501BF_592D_9B3C_41C7_BA1A029080AB); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 83.98,
   "yaw": 0.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0_HS_0_1_0_map.gif",
      "width": 165,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_5A5B9C4D_5417_2064_41C5_2019A5418612",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58FDA850_5419_207C_41C9_069E791B36A6, this.camera_4DDF01A5_592D_9BCC_41D4_7E686B5FE769); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 35.4,
   "yaw": 161.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0_HS_1_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_44EB76DA_5469_E06C_41BF_1B2BE3A02627",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_58FDA850_5419_207C_41C9_069E791B36A6, this.camera_4C2B81B0_592D_9BC5_41C8_023894CD25E6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 31.12,
   "yaw": -164.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_1_HS_2_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_5A868FC4_546F_2064_41D1_89F073A03BEC",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.46,
   "yaw": -3.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4EB6ADF2_56A2_773A_41D1_4C18C0915556",
   "yaw": -3.02,
   "pitch": -10.12,
   "distance": 100,
   "hfov": 3.46
  }
 ],
 "id": "overlay_463C7007_5662_0CDA_41B8_D944FEA38A24",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.07,
   "yaw": 176.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4148561A_56A6_34EA_41D2_A46C01127C88",
   "yaw": 176.63,
   "pitch": -4.78,
   "distance": 100,
   "hfov": 3.07
  }
 ],
 "id": "overlay_47A36C76_56A3_F53A_41D1_088E1600475C",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "class": "Container",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "height": 110,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "class": "Container",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "layout": "vertical",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "height": "85.959%",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "shadow": false
},
{
 "class": "Container",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 1199,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 30,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "layout": "horizontal",
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": 51,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "shadow": false
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402D6B61_56A2_3357_41B4_3CE3DEE8778F",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E48B6BC_541B_2024_41BC_D999FC96538F_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402D3B61_56A2_3357_41D3_ED5D1D1BB513",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB7FDF3_56A2_773A_41C3_8D07A7927BDF",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_414B661B_56A6_34EA_41D1_EB6387247872",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E54DF5F_5419_2064_4181_001C4457D09E_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB46DF4_56A2_773E_41CD_854C37CC17D6",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4DE48BBE_592D_8F3C_41CA_2908125FBAEB",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB38DF6_56A2_773A_41D1_CECACBCDF30C",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E568337_5419_2024_41D2_A30D47360735_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB3CDF6_56A2_773A_41B9_E59C6248EBC9",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4F9DB62D_5662_352E_41B0_2161DC703E36",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40216B69_56A2_3357_41C4_925F00F12C49",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E498CC4_5419_2064_41D4_BFA9AC6975EB_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4F9DE62D_5662_352E_41D1_8B970972ED91",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E578F69_541B_602C_41C2_4A0F1F976829_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4DCA5BDA_592D_8F45_41D2_943F49D678D7",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4DE25BBD_592D_8F3C_41B5_D0105D820D5D",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EB5EDF5_56A2_773E_41C0_0FD018A64E70",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58FDA850_5419_207C_41C9_069E791B36A6_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB23DF5_56A2_773E_41BB_D2F731DF7D27",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E56643F_5419_6024_41AB_F20D58121F15_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_41DA8B78_56A2_3335_41BA_A3F065F84C23",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_4EAE6DF7_56A2_773A_41BF_0A532FFE5C84",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4DE9DBC0_592D_8F44_41B0_76424E08BD8E",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4DE97BC0_592D_8F44_41D1_AD59C66C4A13",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E557A0F_541B_E3E4_41C5_9385896782C2_0_HS_10_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4DE90BC0_592D_8F44_41AF_52A1EB5A5326",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4376AE5E_56A2_756A_41D2_A4FC6B0FB64A",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_588744C6_541A_E064_41AD_B2B7DBB75F6B_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4024FB74_56A2_333D_41CF_1F6B6C3886CD",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402D9B61_56A2_3357_41C1_F1D4F6F164CC",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E481A15_541B_23E4_41B4_1C4ACBE34104_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402DAB61_56A2_3357_41A8_41C41191F51B",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_4EAC9DF9_56A2_7736_41D5_1C38644CDFB6",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EACCDFA_56A2_772A_41D4_FCD9AA0A50D5",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E54BD37_541B_E024_41D2_F3FC09DBE73B_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40288B5B_56A2_336B_41D0_3CBF118029AE",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402F1B5E_56A2_336D_41C7_3C58917A07F8",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4EE9CA_5419_606C_41CA_AE3C373E9389_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402F2B5E_56A2_336D_41C5_431BF75DD6D0",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_437A4E56_56A2_757A_41D5_56E9DFB5FDB6",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40205B6B_56A2_332B_41D0_0B4BFB3B9030",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E5595D8_5419_606C_41D0_D644098500B8_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4BC0AE3B_5662_152A_41B5_137C171EDDD1",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E55FC6B_5419_202C_41B6_215937597045_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40273B70_56A2_3335_41B0_C4AA6E1D9B50",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5884F209_541B_63EC_41C6_38FBBDAB1D5B_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_41DACB78_56A2_3335_41CE_7CBF3F30DF14",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E55B06A_5419_202C_41A2_F5BA739671AA_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40277B6F_56A2_332B_41D2_8DDE4772AE3A",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB09DF6_56A2_773A_41CF_EEFFEABCEB40",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E535B7C_5419_2024_4174_88508DC54FA3_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB0DDF6_56A2_773A_41C2_A7C1DCEE2D0F",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402E0B60_56A2_3355_41A3_64D7B520316A",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4881AF_541A_E024_41D4_1B6CB9F2FE35_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402E2B60_56A2_3355_41C6_3FE3D9E394FE",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EAEEDF8_56A2_7736_41CF_FA4CF964B6E4",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EAF3DF8_56A2_7736_41B5_A7EAA00D82E5",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_4EAF5DF9_56A2_7736_41C5_D8D5F5EAFF2B",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E5640E7_541B_E024_41D3_41F046ABA2C3_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EAF9DF9_56A2_7736_4199_6826440989A9",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4972F0_541B_603C_41D1_9087F06C38E5_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4026CB70_56A2_3335_41C4_67E48F952A26",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5881B97C_541B_2024_4199_2DF060A6B33C_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_41A17D78_5661_F736_41D1_83FDACE34BC5",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 20,
 "id": "AnimatedImageResource_4EDEEE02_56A2_74DA_419A_510DDB0F4A6E",
 "rowCount": 5
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EDF2E02_56A2_74DA_41D2_57D5D6120A8C",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4F25C8_5416_E06C_41D1_AE50E10A2626_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EDF7E02_56A2_74DA_41B9_E8FC012F55D2",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EDB7E04_56A2_74DE_41C8_86BD608599EB",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E413C6D_5419_2025_41B3_B17DB42524F3_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40220B67_56A2_335B_4189_A92D5D316FA9",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4CC250_5419_207C_4135_0A9EBC679160_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40219B6B_56A2_332B_41CA_8D2562BB0B4F",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402FEB5C_56A2_336E_41B2_D08EBCF9BD44",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EA80DFB_56A2_772A_419C_1C8B01A34E7B",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E51376B_5419_602C_41D4_9EFAF89E0CD1_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402FAB5D_56A2_336F_41C8_8259105AF231",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4DCD3BDD_592D_8F7C_41CD_BBB10457EF89",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58FF7BB3_5419_203C_41D1_F4B743BBC994_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40267B71_56A2_3337_41A1_8D1141B8EDD4",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5880A610_541B_23FC_41D1_39AA3F9AD5A8_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_43770E5F_56A2_756A_41D2_00A24A80254F",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_588580AA_541A_E02C_4144_D3F282922A1E_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40240B75_56A2_333F_41C4_F6180B99F996",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402EBB5F_56A2_336B_41D1_742E0D95CC9D",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4BF09E25_5662_14DE_41BF_4EE5C185CD28",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E577491_541A_E0FC_41C3_D60AAD5A9B3B_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4BF72E25_5662_14DE_41C0_E85EC0DF47BC",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58875CB9_541A_E02C_41D3_73B63887517E_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_41DB9B76_56A2_333D_41D0_F0E4B1DC7363",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_437D2E53_56A2_757A_41CB_23C499010CD8",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4C1999_5419_E0EC_41D2_CFB5AC7698E9_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4021EB68_56A2_3355_41D3_8F015A13EEC2",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EAA0DFA_56A2_772A_41C3_A8F2633BDB5B",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EAA6DFA_56A2_772A_41D5_60BF71D66E6B",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E543699_541B_20EC_41C0_1B21584E5F82_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EAA9DFB_56A2_772A_41D3_9E1CF1BA5B6B",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40262B72_56A2_3335_41C0_535B5BD1E893",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58F9BE4F_5419_6064_41BC_CE838216DEFF_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4025CB72_56A2_3335_41C5_3F6024627A4B",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402C4B63_56A2_335B_41D0_3EA193B28844",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402C6B63_56A2_335B_41C7_80D5044E6302",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E54F279_541B_202C_41AF_42A4A56A6D4E_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4DF72BCD_592D_8F5C_41CD_DB3A4BD2DCF6",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_437A6E57_56A2_757A_41CB_AB88932773F5",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4BC69E3C_5662_152E_4162_F95A4925993D",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E5794A9_541B_202C_41D4_BB712A8EFC16_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4BC55E3D_5662_152E_41AD_8D71F6813B0B",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40230B66_56A2_335D_41C7_9BB9D878D68C",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4E6262_5419_205C_41CD_87CD4C4365EB_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40232B66_56A2_335D_41CB_E033DF572C45",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40204B6E_56A2_332D_418F_DBEC55D6DADF",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E57E7E3_541B_205C_41C5_1522D4C28689_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40201B6E_56A2_332D_41A4_7454EAE57A07",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EA16E01_56A2_74D6_41D0_00029264B181",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E482F5D_541B_2064_41C2_6FC079EC4FC3_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EA19E01_56A2_74D6_41D3_A403CA6E0832",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4EDD6E03_56A2_74DA_41CF_ACB4718DA4DC",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4FBFC3_5419_205C_41D0_3346D1BB87CA_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40228B67_56A2_335B_41AC_1C2E5E4778F7",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4025BB72_56A2_3335_419C_473DC6861949",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5943C1D8_5419_606C_4171_C1C741B15DA8_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40255B73_56A2_333B_41BE_D83262664659",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4B0F94_5419_20E4_41D4_FB7B8A13F420_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402CCB62_56A2_3355_41D0_B02CE75AAFB9",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58804E3F_541B_6024_41AE_5E1B04832DC1_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40251B73_56A2_333B_41C0_1E0567724BD4",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402F9B5E_56A2_336D_41D3_03611045CC56",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E54F86B_5419_202C_41A9_2AEE03BFCA4A_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_402FBB5E_56A2_336D_41D1_F7AC317DC6D9",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5F64B6BE_5417_2024_41A9_C3DB722C9BC9_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_40212B69_56A2_3357_419E_178FD4FE8319",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_437B5E59_56A2_7576_41AE_CE856BABAD12",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E563BD1_541B_607C_41D2_4CFB3F4EB8AE_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_40279B6E_56A2_332D_41CC_6D2F91DD86E5",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4EB6ADF2_56A2_773A_41D1_4C18C0915556",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5E4BE602_5419_E3DC_414F_05C50C137DFA_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_4148561A_56A6_34EA_41D2_A46C01127C88",
 "rowCount": 6
},
{
 "class": "IconButton",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand"
},
{
 "class": "IconButton",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.openLink('https://www.instagram.com/kefitaaddis/', '_blank')",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "cursor": "hand"
}],
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "layout": "absolute",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "existsKey": function(key){  return key in window; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
