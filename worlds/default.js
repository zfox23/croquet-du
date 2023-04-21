// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "csmLights.js",
        "video.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                translation: [0, 1.6785808116078789, -6],
                rotation: [0, 0, 0, 1],
                layers: ["pointer", "walk"],
                name: "/Ducks.glb",
                dataLocation: "3oidu3yIeWHCw9Ikd2yhTvrVpwfeS8LOZWYSixvk_qfEBxsbHxxVQEAJBgMKHEEaHEEMHQAeGgobQQYAQBpAKAs5DRYDJhwuBD4MLTcLXCgXDhkWGDokODY2XUAGAEEMHQAeGgobQQIGDB0AGQodHApAG1oOIzcoDl4gJRwsIi4uJhgAKVYjGilWOQYgOzYhWFc3JjwWCwAqX1sgGEALDhsOQCg9V1xdDjxXLRxWF1YEXS4CCQwcI1haCxsqIiYIDjslO0IpXg5XDAgsASo",
                dataScale: [3, 3, 3],
                fileName: "/Ducks.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [-4.240664664755853, 4.518150900671051, 1.805644174351258],
                scale: [3.946698516468886, 3.657358813175109, 1],
                rotation: [0, 0.7069724915210387, 0, 0.7072410453533752],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                fullBright: true,
                height: 2,
                step: 1.5,
                textureHeight: 2048,
                textureLocation: "3KW1iz-FiuRwIrgNgUM3cAiyUFx9Vmva6c927v9st8jkIz8_OzhxZGQtIicuOGU-OGUoOSQ6Pi4_ZSIkZD5kD3o6GAkaeT4Pch8jByMkCSQOcnwOIQwBJB0beWQiJGUoOSQ6Pi4_ZTskOT8qJ2U-OyckKi9kIiopMQAzDh4fOz56DAARBgofMx18ICgGGiAuPAQsEx4NMhhmBQN5CSQxAmQvKj8qZAhmZjIyBjh8KD94MzExexR4FCMIJAE8EQV4Zip9Py0eJjk9DCoKI3oRJ3s",
                textureType: "video",
                textureWidth: 4096,
                type: "2d",
                width: 4,
            }
        },
        {
            card: {
                translation: [-4.180487156969409, 4.518150900671051, -13.808549854447355],
                scale: [3.946698516468886, 3.657358813175109, 1],
                rotation: [0, 0.7069724915210387, 0, 0.7072410453533752],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                fullBright: true,
                height: 2,
                step: 1.5,
                textureHeight: 2048,
                textureLocation: "3D8dbjLn2ElIse_kTS3N9jPuWZqgDOBd65WkK9vzPKDELDAwNDd-a2siLSghN2oxN2onNis1MSEwai0razFrAHU1FwYVdjEAfRAsCCwrBisBfXMBLgMOKxIUdmstK2onNis1MSEwajQrNjAlKGoxNCgrJSBrLSUmPg88AREQNDF1Aw8eCQUQPBJzLycJFS8hMwsjHBECPRdpCgx2Bis-DWsgJTAla3QsDzQ3MzQNCgMXNH0bMAUhJ3UrDRcNCyovfAhyCyYNIwkRfQYycQc3Kwk",
                textureType: "video",
                textureWidth: 4096,
                type: "2d",
                width: 4,
            }
        },
        {
            card: {
                translation: [4.21868102101482, 4.5105326515205855, -13.792512310613501],
                scale: [3.946698516468886, 3.657358813175109, 1],
                rotation: [0.006733015993011617, -0.707111944930475, 0.0063061755794964645, 0.7070414386596019],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                fullBright: true,
                height: 2,
                step: 1.5,
                textureHeight: 2048,
                textureLocation: "36wytlMsJSRDlpzD33C2qNLRIXwP4ErM50DTNf0ILTqIXkJCRkUMGRlQX1pTRRhDRRhVRFlHQ1NCGF9ZGUMZcgdHZXRnBENyD2Jeel5ZdFlzDwFzXHF8WWBmBBlfWRhVRFlHQ1NCGEZZREJXWhhDRlpZV1IZX1dUTH1Oc2NiRkMHcX1se3diTmABXVV7Z11TQXlRbmNwT2UbeH4EdFlMfxlSV0JXGVEPVXBMX1UbWVVTBkYAY1pPYkF_XXsPX25xA0d_QXdlB35Xemx-TmBxbwI",
                textureType: "video",
                textureWidth: 4096,
                type: "2d",
                width: 4,
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                fileName: "realistic_marshy_wetlands.exr",
                dataLocation: "3csS6Jm2JfaaqKmCA9fvCFJUi8sK6ZeUNd41ApqdP6M4CxcXExBZTEwFCg8GEE0WEE0AEQwSFgYXTQoMTBZMNCYAAjQXJg4rJAdbNDUtOyEaNwIALgATMy0HUUwKDE0AEQwSFgYXTRMMERcCD00WEw8MAgdMUhtWDi9RJBQMJ1NSUjUUFwsSNTBVTgUmATNOMxcyMxEyGjk5VhYEGgsKW0wHAhcCTCEGGjlQGicAKzMXGQ8xVzkoJAYxVyZVVE4pJFEJBTxUNQgwPBAkCQ8EBhA",
                dataType: "exr",
            }
        },
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [0, 3.6, 0],
                spawn: "default"
            },
        }
    ];
}
