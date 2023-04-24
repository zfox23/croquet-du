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
        "video.js",
        "urlLink.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [0, 3.6, 0],
                spawn: "default"
            },
        },
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

                placeholder: true,
                placeholderSize: [25, 0.1, 25],
                placeholderColor: 0x303030,
                placeholderOffset: [0, 1.4, 0],
            }
        },
        {
            card: {
                translation: [18.896780654109225, 5.946236671338315, -23.998003978611333],
                scale: [1.7423383490435291, 1.7423383490435291, 1.7423383490435291],
                rotation: [0, -0.7124679587820721, 0, 0.7017046442121554],
                layers: ["pointer"],
                name: "/Get_Involved.png",
                cornerRadius: 0.02,
                fileName: "/Get_Involved.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3sp3E_uDyOZeRNoTd0QsZoydQNDmcZwyx1COtXbuqOCoGwcHAwBJXFwVGh8WAF0GAF0QARwCBhYHXRocXAZcJDYQEiQHNh47NBdLJCU9KzEKJxIQPhADIz0XQVwQHB5dFwYQGAAGHR8aHhoHFhddHhoQARwFFgEAFlwJFENKMhIDHCoCGT4cO0QkBwNeFj4kNTsfFQo1HR86IAIBKSkDNzIQNwsiXBcSBxJcF0EKBQdGBT8gHhYgByE-FwYAGEo5OiA3ECw-QyAwCxVERDsFIjYQLEIsNg",
                textureType: "image",
                type: "2d",
                cardURL: "https://www.ducks.org/get-involved",
                behaviorModules: ["URLLink"],
            }
        },
        {
            card: {
                translation: [18.962497519165446, 3.320988416317891, 15.295469836276261],
                scale: [2.1168240397143956, 2.1168240397143956, 2.1168240397143956],
                rotation: [0, -0.6991765924538637, 0, 0.7149490139615581],
                layers: ["pointer"],
                name: "/Get_Involved.png",
                cornerRadius: 0.02,
                fileName: "/Get_Involved.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3LileRN9-pR8FlAR1WcB6SOC8lcPuaCb4jMHG62ohWgAJDg4PD92Y2MqJSApP2I5P2IvPiM9OSk4YiUjYzljNhk4OxwDNgo5Ax99ByUrARYleX91NAoIC3R8fmMlI2IvPiM9OSk4YiElLz4jOik-PyliICMvLSAoKTooKSotOSA4Y3woYXwWOik8Lwd5AyYUYSQefngnKAgEFX0mLgANDjQkPB0HNDQfH3UCDydjKC04LWMFCTQTdTQEFjkOASk9ei0DJhMneHg7OgU6Lhp6IBk-Ay0UHzgeGQZ7f2EF",
                textureType: "image",
                type: "2d",            
                cardURL: "https://www.ducks.org/get-involved",
                behaviorModules: ["URLLink"],
            }
        },
        {
            card: {
                translation: [4.231411586115633, 4.23322178202064, 1.7975868836197033],
                scale: [2.0892454323579557, 2.0892454323579557, 2.0892454323579557],
                rotation: [0, -0.7161486536791454, 0, 0.6979477815951186],
                layers: ["pointer"],
                name: "/385x430_LatestGiftAD-year-end.png",
                cornerRadius: 0.02,
                fileName: "/385x430_LatestGiftAD-year-end.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3SzVk9gqZoUrFTbuLPBkSqCQBQgngVVfjXRFT6FgVZFsOycnIyBpfHw1Oj82IH0mIH0wITwiJjYnfTo8fCZ8KQYnJAMcKRUmHABiGDo0Hgk6ZmBqKxUXFGtjYXw6PH0wITwiJjYnfT46MCE8JTYhIDZ9PzwwMj83NiU3NjUyJj8nfGM3fmMJJTYjMBhmHDkLfjsBYWc4NxcbCmI5MR8SESs7IwIYKysAAGodEDh8NzInMnw5MRQ7JWYAYSUdNxg_PwAqG2EGAGIaZWcgChQ9Z34FEDArGDdmKmoQHCVr",
                textureType: "image",
                type: "2d",            
                cardURL: "https://donate.ducks.org/yearend/ye2022/donateOnlineSecure.aspx?promoKey=YearEnd22&ID=13457&_gl=1*1tmerfh*_ga*MTM4OTQ2MzI1Mi4xNjgyMDkyNTk1*_ga_2X0ECQZQ09*MTY4MjA5MjU5NS4xLjEuMTY4MjA5MzA2OS4wLjAuMA..&_ga=2.176813029.1555540810.1682092598-1389463252.1682092595&_gac=1.242492726.1682092636.EAIaIQobChMIpf_aqau7_gIVeAKzAB1I7QDdEAAYASAAEgINZ_D_BwE",
                behaviorModules: ["URLLink"],
            }
        },
        {
            card: {
                translation: [-19.120208916338342, 4.630185098913505, 12.003874765575032],
                scale: [4.260928928226135, 4.260928928226135, 4.260928928226135],
                rotation: [0, 0.7098027774863562, 0, 0.7044004664057615],
                layers: ["pointer"],
                name: "/large_2013101595132372.jpg",
                cornerRadius: 0.02,
                fileName: "/large_2013101595132372.jpg",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3tztx_Nim4JumKFF8_dcMzhjMtCzpPc79RpsIHRtrmSUHAAABAdOW1sSHRgRB1oBB1oXBhsFAREAWh0bWwFbDiEAAyQ7DjIBOydFPx0TOS4dQUdNDDIwM0xERlsdG1oXBhsFAREAWhkdFwYbAhEGBxFaGBsXFRgQEQIQERIVARgAW0QQWUQuAhEEFz9BOx4sWRwmRkAfEDA8LUUeFjg1NgwcBCU_DAwnJ006Nx9bEBUAFVsSFTciGxIkHiUBRhofHj81PT8mEBg_Jgc5HDoQOBJFQgM4AzgEQEAhNRk9",
                textureType: "image",
                type: "2d",            
                cardURL: "https://www.ducks.org/merchandise",
                behaviorModules: ["URLLink"],
            }
        },
        {
            card: {
                translation: [-18.994990711359495, 4.442716753345672, -23.937588620702478],
                scale: [4.473267825562478, 4.473267825562478, 4.473267825562478],
                rotation: [0, 0.7218516436159614, 0, 0.692047834046849],
                layers: ["pointer"],
                name: "/promo-wc-collage copy.jpg",
                cornerRadius: 0.02,
                fileName: "/promo-wc-collage copy.jpg",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3X0F_CaK-tUXJcw5D531mt-SIidHfVT7yTu-XLEZ50tQMCwsKCtid3c-MTQ9K3YtK3Y7KjcpLT0sdjE3dy13Ig0sLwgXIh4tFwtpEzE_FQIxbWthIB4cH2BoancxN3Y7KjcpLT0sdjUxOyo3Lj0qKz12NDc7OTQ8PS48PT45LTQsd2g8dWgCLj0oOxNtFzIAdTAKamwzPBwQAWkyOhQZGiAwKAkTICALC2EWGzN3PDksOXcRbAAxFz45bXVtMg8MIDctKQwhBxUCbA4uMywcHwoxLy8SIQw5By5rLzBg",
                textureType: "image",
                type: "2d",             
                cardURL: "https://www.ducks.org/merchandise",
                behaviorModules: ["URLLink"],
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
                fileName: "realistic_marshy_wetlands_edit.jpg",
                dataLocation: "3yjxdeopuAhjdIP4hlIJWDaZsI72e63apRA8D1PJJc4MEQ0NCQpDVlYfEBUcClcMClcaCxYIDBwNVxAWVgxWLjwaGC4NPBQxPh1BLi83ITsALRgaNBoJKTcdS1YQFlcaCxYIDBwNVwkWCw0YFVcMCRUWGB1WTCsPFDVUIREsAQ8KPiZBPT8WCBNILBQ8PykXSU4pER8BND4BTh4mKzs1GlYdGA0YVjUTSUE2OxMyEA4ACCweNzMNLRUyG0gADU4xHEEaNSg7I09PMTI6LC4bFkE",
                dataType: "jpg",
            }
        }
    ];
}
