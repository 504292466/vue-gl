import VglGeometry from "./vgl-geometry.js";
import {SphereGeometry} from "./three.js";
import {parseNumber} from "./utils.js";

export default {
    mixins: [VglGeometry],
    props: [
        "radius",
        "widthSegments",
        "heightSegments",
        "phiStart",
        "phiLength",
        "thetaStart",
        "thetaLength"
    ],
    computed: {
        inst() {
            return new SphereGeometry(
                parseNumber(this.radius),
                parseNumber(this.widthSegments),
                parseNumber(this.heightSegments),
                parseNumber(this.phiStart),
                parseNumber(this.phiLength),
                parseNumber(this.thetaStart),
                parseNumber(this.thetaLength)
            );
        }
    }
};
