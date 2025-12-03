import * as pkg from "@syncfusion/ej2-base";
const { registerLicense } = pkg;

export function initSyncfusion() {
    registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);
}
