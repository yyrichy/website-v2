function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-D0Dgqoh5.js","assets/index-CgAHdhFx.js","assets/index-B8hL3UqP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CgAHdhFx.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-D0Dgqoh5.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
