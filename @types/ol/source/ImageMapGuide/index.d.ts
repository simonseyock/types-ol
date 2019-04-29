declare module 'ol/source/ImageMapGuide' {

  import { Extent } from 'ol/extent';
  import { Size } from 'ol/size';
  import ImageSource from 'ol/source/Image';
  import { LoadFunction } from 'ol/Image';
  import Projection from 'ol/proj/Projection';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { ImageSourceEvent } from 'ol/source/Image';
  import { ObjectEvent } from 'ol/Object';
  import { ProjectionLike } from 'ol/proj';

  export default class ImageMapGuide extends ImageSource {
    constructor(options: Options);
    getImageLoadFunction(): LoadFunction;
    getParams(): any;
    getUrl(baseUrl: string, params: { [key: string]: any }, extent: Extent, size: Size, projection: Projection): string;
    setImageLoadFunction(imageLoadFunction: LoadFunction): void;
    updateParams(params: any): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
  }

  export interface Options {
    url?: string;
    crossOrigin?: string;
    displayDpi?: number;
    metersPerUnit?: number;
    hidpi?: boolean;
    useOverlay?: boolean;
    projection?: ProjectionLike;
    ratio?: number;
    resolutions?: number[];
    imageLoadFunction?: LoadFunction;
    params?: any;
  }

}
