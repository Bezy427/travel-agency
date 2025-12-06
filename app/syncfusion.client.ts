import * as pkg from "@syncfusion/ej2-base";

export function initSyncfusion() {
    // Only run in the browser
    if (typeof window !== "undefined") {
        const { registerLicense } = pkg;
        const key = import.meta.env.VITE_SYNCFUSION_LICENSE_KEY;

        if (key) {
            registerLicense(key);
            console.log("Syncfusion license registered ✅");
        } else {
            console.warn("Syncfusion license key not found ⚠️");
        }
    }
}
