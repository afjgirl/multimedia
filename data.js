var APP_DATA = {
  "scenes": [
    {
      "id": "0-attachment-1-1",
      "name": "Harbourside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6074367946052615,
          "pitch": -0.007680677412235326,
          "rotation": 0,
          "target": "2-attachment-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-attachment-1-2",
      "name": "Houses",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.9703311076717895,
        "pitch": 0.023723341404931375,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18058323012495414,
          "pitch": 0.07658833710533841,
          "rotation": 0,
          "target": "2-attachment-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-attachment-1",
      "name": "Paths",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.9443501579681186,
        "pitch": -0.04004198718984853,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0745137909365425,
          "pitch": -0.13096294183684343,
          "rotation": 0,
          "target": "0-attachment-1-1"
        },
        {
          "yaw": 2.8418490016574935,
          "pitch": 0.06413007074369403,
          "rotation": 0,
          "target": "1-attachment-1-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
