declare module 'ol/renderer/webgl/VectorLayer' {

  import WebGLLayerRenderer from 'ol/renderer/webgl/Layer';
  import WebGLMapRenderer from 'ol/renderer/webgl/Map';
  import VectorLayer from 'ol/layer/Vector';
  import MapRenderer from 'ol/renderer/Map';
  import Layer from 'ol/layer/Layer';
  import Feature from 'ol/Feature';
  import Style from 'ol/style/Style';
  import WebGLReplayGroup from 'ol/render/webgl/ReplayGroup';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';

  export default class WebGLVectorLayerRenderer extends WebGLLayerRenderer {
    constructor(mapRenderer: WebGLMapRenderer, vectorLayer: VectorLayer);
    create(mapRenderer: MapRenderer, layer: Layer): WebGLVectorLayerRenderer;
    handles(layer: Layer): boolean;
    renderFeature(feature: Feature, resolution: number, pixelRatio: number, styles: Style | Style[], replayGroup: WebGLReplayGroup): boolean;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
  }

}
