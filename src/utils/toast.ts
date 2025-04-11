import { colorForIntegration } from "astro/runtime/client/dev-toolbar/apps/utils/icons.js";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
/**
 * @param text
 * @param type
 */

export function showToast(text: string, type: "success" | "error" = "success") {
  console.log(window.Toastify);
  const options = {
    text,
    duration: 3000,
    close: true,
    gravity: "top" as "top",
    position: "center" as "center",
    backgroundColor: type === "success" ? "#fff" : "#fff",
    style: {
      color: "#000",
      borderRadius: "12px",
    },
  };
  console.log(options);
  (window as any).Toastify(options).showToast();
}
