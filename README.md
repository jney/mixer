# mixer
-----------

## init

    npm install -g webpack
    cd mixer
    npm install

## development

    webpack --watch

then, in chrome://extensions, load *mixer/chrome_extension* directory

## Datastore

#### example

{
  tracks : [],
  players: []
}

### track element

* id : unique id
* tabId : chrome tab identifier
* url : string
* image : string

### player element

* id
* play : boolean, default false
* trackId
* volume : float, in 0..1
* loop : boolean, default false
* play : boolean, default false
* playbackRate : float, in 0..+Infinite, default 1
* highPassFilter : :lipstick:
* bandPassFilter : :lipstick:
* lowPassFilter : :lipstick:
* quality : 0..1, default 1

### crossfader element

* playerLeft : player
* playerRight : player

## references

* https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia
* http://chimera.labs.oreilly.co
