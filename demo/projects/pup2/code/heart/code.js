var Haiku = require("@haiku/core");
module.exports = {
  metadata: {
    folder: "/Users/taylorpoe/.haiku/projects/taylor/pup2",
    uuid: "e7989ce9-8d98-4d2c-aba6-bd00edb9cdb2",
    core: "3.5.1",
    username: "taylor",
    organization: "taylor",
    project: "pup2",
    branch: "master",
    version: "0.0.0",
    title: "Heart",
    type: "haiku",
    relpath: "code/heart/code.js"
  },
  options: {},
  states: {
    hovered: { type: "boolean", value: false, edited: true },
    offset: { type: "number", value: 0, edited: true },
    dog: { type: "number", value: 2, edited: true },
    zProtection: { type: "number", value: 5, edited: true },
    name: { type: "string", value: "Danny", edited: true },
    weight: { type: "number", value: 30, edited: true },
    type: { type: "string", value: "spaniel", edited: true },
    faved: { type: "boolean", value: false, edited: true }
  },
  eventHandlers: {
    "haiku:Heart-85c46b96ba894ffc": {
      "timeline:Default:0": {
        handler: function(target, event) {
          this.pause();
        }
      },
      "timeline:Default:22": {
        handler: function(target, event) {
          this.getDefaultTimeline().pause();
        }
      },
      click: {
        handler: function(target, event) {
          this.getDefaultTimeline().gotoAndPlay(2);
          setTimeout(
            () => {
              this.setState({ faved: !this.state.faved });
            },
            100
          );
        }
      },
      "timeline:Default:1": {
        handler: function(target, event) {
          this.pause();
        }
      }
    }
  },
  timelines: {
    Default: {
      "haiku:Heart-85c46b96ba894ffc": {
        "style.WebkitTapHighlightColor": "rgba(0,0,0,0)",
        "style.position": "relative",
        "style.overflowX": "visible",
        "style.overflowY": "visible",
        "sizeAbsolute.x": 40,
        "sizeAbsolute.y": 40,
        "sizeMode.x": 1,
        "sizeMode.y": 1,
        "sizeMode.z": 1,
        "style.background": { "0": { value: "transparent", edited: true } },
        "style.cursor": { "0": { value: "pointer", edited: true } }
      },
      "haiku:e3fe5d8f5a8b": {
        "style.position": "absolute",
        "style.margin": "0",
        "style.padding": "0",
        "style.border": "0",
        "sizeAbsolute.x": 29,
        "sizeMode.x": 1,
        "sizeAbsolute.y": 26,
        "sizeMode.y": 1,
        "translation.x": 19.5,
        "translation.y": 21,
        "style.zIndex": 1,
        opacity: {
          "0": { value: 1, edited: true },
          "267": {
            value: Haiku.inject(
              function(faved) {
                return faved ? 0 : 1;
              },
              "faved"
            ),
            edited: true
          }
        }
      },
      "haiku:Heart-Filled-d8e4048ab9204856": {
        "style.position": "absolute",
        "style.margin": "0",
        "style.padding": "0",
        "style.border": "0",
        "sizeAbsolute.x": 29,
        "sizeMode.x": 1,
        "sizeAbsolute.y": 26,
        "sizeMode.y": 1,
        "translation.x": 19.27,
        "translation.y": 20.592,
        "style.zIndex": 2,
        "scale.x": {
          "0": { value: 0.1, edited: true },
          "33": { value: 0.1, edited: true, curve: "easeOutBack" },
          "367": { value: 1, edited: true }
        },
        "scale.y": {
          "0": { value: 0.1, edited: true },
          "33": { value: 0.1, edited: true, curve: "easeOutCirc" },
          "367": { value: 1, edited: true }
        },
        opacity: {
          "0": { value: 0, edited: true },
          "33": {
            value: Haiku.inject(
              function(faved) {
                return faved ? 1 : 0;
              },
              "faved"
            ),
            edited: true
          }
        }
      },
      "haiku:Symbols-7197253d752b006d": {
        stroke: "none",
        strokeWidth: 1,
        fill: "none",
        fillRule: "evenodd"
      },
      "haiku:hovered-3766371c662e87e2": {
        fill: "#F972F6",
        fillRule: "nonzero",
        stroke: "#F972F6",
        strokeWidth: 2,
        "translation.x": -271,
        "translation.y": -40
      },
      "haiku:heart-filled-c9a5682d4428e727": {
        d: "M285.5,65 C285.380632,65 285.262684,64.9703529 285.154684,64.9110588 C285.021105,64.8376471 281.849316,63.0743529 278.629211,60.1858824 C276.723579,58.4776471 275.203053,56.7298824 274.106,54.9905882 C272.707684,52.7727059 272,50.5590588 272,48.4117647 C272,44.3247059 275.346579,41 279.460526,41 C280.853158,41 282.332474,41.5181176 283.625632,42.4597647 C284.381632,43.0103529 285.025368,43.6738824 285.5,44.3783529 C285.974632,43.6738824 286.618368,43.0103529 287.374368,42.4597647 C288.667526,41.5181176 290.146842,41 291.539474,41 C295.653421,41 299,44.3247059 299,48.4117647 C299,50.5590588 298.290895,52.7727059 296.894,54.9905882 C295.798368,56.7298824 294.276421,58.4776471 292.372211,60.1858824 C289.152105,63.0743529 285.980316,64.8376471 285.846737,64.9110588 C285.738737,64.9703529 285.620789,65 285.501421,65 L285.5,65 Z"
      },
      "haiku:Symbols-15f20b827f0acedd": {
        stroke: "none",
        strokeWidth: 1,
        fill: "none",
        fillRule: "evenodd"
      },
      "haiku:hovered-d1101a2939e932c1": {
        fill: "#FFFFFF",
        fillRule: "nonzero",
        stroke: "#FFFFFF",
        strokeWidth: 2,
        "translation.x": -271,
        "translation.y": -40
      },
      "haiku:heart-a2256e27804ee4c7": {
        d: "M285.5,65 C285.380632,65 285.262684,64.9703529 285.154684,64.9110588 C285.021105,64.8376471 281.849316,63.0743529 278.629211,60.1858824 C276.723579,58.4776471 275.203053,56.7298824 274.106,54.9905882 C272.707684,52.7727059 272,50.5590588 272,48.4117647 C272,44.3247059 275.346579,41 279.460526,41 C280.853158,41 282.332474,41.5181176 283.625632,42.4597647 C284.381632,43.0103529 285.025368,43.6738824 285.5,44.3783529 C285.974632,43.6738824 286.618368,43.0103529 287.374368,42.4597647 C288.667526,41.5181176 290.146842,41 291.539474,41 C295.653421,41 299,44.3247059 299,48.4117647 C299,50.5590588 298.290895,52.7727059 296.894,54.9905882 C295.798368,56.7298824 294.276421,58.4776471 292.372211,60.1858824 C289.152105,63.0743529 285.980316,64.8376471 285.846737,64.9110588 C285.738737,64.9703529 285.620789,65 285.501421,65 L285.5,65 Z M279.460526,42.4117647 C276.131,42.4117647 273.421053,45.104 273.421053,48.4117647 C273.421053,52.7035294 276.760526,56.6028235 279.561421,59.12 C282.062474,61.3675294 284.597632,62.9430588 285.5,63.4781176 C286.402368,62.9430588 288.937526,61.3675294 291.438579,59.12 C294.239474,56.6042353 297.578947,52.7035294 297.578947,48.4117647 C297.578947,45.104 294.869,42.4117647 291.539474,42.4117647 C289.119421,42.4117647 286.769,44.3896471 286.173579,46.1642353 C286.076947,46.4522353 285.805526,46.6470588 285.5,46.6470588 C285.194474,46.6470588 284.923053,46.4522353 284.826421,46.1642353 C284.231,44.3896471 281.880579,42.4117647 279.460526,42.4117647 Z"
      }
    }
  },
  template: {
    elementName: "div",
    attributes: {
      "haiku-id": "Heart-85c46b96ba894ffc",
      "haiku-title": "Heart"
    },
    children: [
      {
        elementName: "svg",
        attributes: {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "haiku-id": "Heart-Filled-d8e4048ab9204856",
          "haiku-title": "heart-filled",
          "haiku-source": "designs/pup2.sketch.contents/slices/heart-filled.svg"
        },
        children: [
          {
            elementName: "g",
            attributes: {
              "haiku-id": "Symbols-7197253d752b006d",
              id: "Symbols"
            },
            children: [
              {
                elementName: "g",
                attributes: {
                  "haiku-id": "hovered-3766371c662e87e2",
                  id: "hovered"
                },
                children: [
                  {
                    elementName: "path",
                    attributes: {
                      "haiku-id": "heart-filled-c9a5682d4428e727",
                      id: "heart-filled"
                    },
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        elementName: "svg",
        attributes: {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "haiku-id": "e3fe5d8f5a8b",
          "haiku-title": "heart",
          "haiku-source": "designs/pup2.sketch.contents/slices/heart.svg"
        },
        children: [
          {
            elementName: "g",
            attributes: {
              "haiku-id": "Symbols-15f20b827f0acedd",
              id: "Symbols"
            },
            children: [
              {
                elementName: "g",
                attributes: {
                  "haiku-id": "hovered-d1101a2939e932c1",
                  id: "hovered"
                },
                children: [
                  {
                    elementName: "path",
                    attributes: {
                      "haiku-id": "heart-a2256e27804ee4c7",
                      id: "heart"
                    },
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
