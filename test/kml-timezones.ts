import { FeatureLike } from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import KML from 'ol/format/KML';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import Stamen from 'ol/source/Stamen';
import VectorSource from 'ol/source/Vector';
import { Fill, Stroke, Style } from 'ol/style';

declare let $: any;

const styleFunction = (feature: FeatureLike) => {
    let offset = 0;
    const name = feature.get('name'); // e.g. GMT -08:30
    const match = name.match(/([-+]\d{2}):(\d{2})$/);
    if (match) {
        const hours = parseInt(match[1], 10);
        const minutes = parseInt(match[2], 10);
        offset = 60 * hours + minutes;
    }
    const date = new Date();
    const local = new Date(date.getTime() + (date.getTimezoneOffset() + offset) * 60000);
    // offset from local noon (in hours)
    let delta = Math.abs(12 - local.getHours() + local.getMinutes() / 60);
    if (delta > 12) delta = 24 - delta;

    const opacity = 0.75 * (1 - delta / 12);
    return new Style({
        fill: new Fill({
            color: [0xff, 0xff, 0x33, opacity],
        }),
        stroke: new Stroke({
            color: '#ffffff',
        }),
    });
};

const vector = new VectorLayer({
    source: new VectorSource({
        url: 'data/kml/timezones.kml',
        format: new KML({
            extractStyles: false,
        }),
    }),
    style: styleFunction,
});

const raster = new TileLayer({
    source: new Stamen({
        layer: 'toner',
    }),
});

const map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
        center: [0, 0],
        zoom: 2,
    }),
});

const info = $('#info');
info.tooltip({
    animation: false,
    trigger: 'manual',
});

const displayFeatureInfo = (pixel: number[]) => {
    info.css({
        left: pixel[0] + 'px',
        top: pixel[1] - 15 + 'px',
    });
    const feature = map.forEachFeatureAtPixel(pixel, (f: FeatureLike) => {
        return f;
    });
    if (feature)
        info.tooltip('hide').attr('data-original-title', feature.get('name')).tooltip('fixTitle').tooltip('show');
    else info.tooltip('hide');
};

map.on('pointermove', evt => {
    if (evt.dragging) {
        info.tooltip('hide');
        return;
    }
    displayFeatureInfo(map.getEventPixel(evt.originalEvent));
});

map.on('click', evt => {
    displayFeatureInfo(evt.pixel);
});
