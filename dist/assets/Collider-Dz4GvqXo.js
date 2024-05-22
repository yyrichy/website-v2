import{L as R,Z as m,$ as l,H as h,K as x}from"./index-C_RGOhCd.js";import{P}from"./ParticlesInteractorBase-vfDeBun3.js";const M=.5,v=10,S=0;function u(e,i,n,t,o,s){const d=R(e.options.collisions.absorb.speed*o.factor/v,S,t);e.size.value+=d*M,n.size.value-=d,t<=s&&(n.size.value=0,n.destroy())}function k(e,i,n,t){const o=e.getRadius(),s=i.getRadius();o===void 0&&s!==void 0?e.destroy():o!==void 0&&s===void 0?i.destroy():o!==void 0&&s!==void 0&&(o>=s?u(e,o,i,s,n,t):u(i,s,e,o,n,t))}const f=e=>{e.collisionMaxSpeed===void 0&&(e.collisionMaxSpeed=h(e.options.collisions.maxSpeed)),e.velocity.length>e.collisionMaxSpeed&&(e.velocity.length=e.collisionMaxSpeed)};function b(e,i){m(l(e),l(i)),f(e),f(i)}function z(e,i){!e.unbreakable&&!i.unbreakable&&b(e,i),e.getRadius()===void 0&&i.getRadius()!==void 0?e.destroy():e.getRadius()!==void 0&&i.getRadius()===void 0?i.destroy():e.getRadius()!==void 0&&i.getRadius()!==void 0&&(e.getRadius()>=i.getRadius()?i:e).destroy()}function B(e,i,n,t){switch(e.options.collisions.mode){case"absorb":{k(e,i,n,t);break}case"bounce":{b(e,i);break}case"destroy":{z(e,i);break}}}const q=2;class F extends P{constructor(i){super(i)}clear(){}init(){}interact(i,n){if(i.destroyed||i.spawning)return;const t=this.container,o=i.getPosition(),s=i.getRadius(),d=t.particles.quadTree.queryCircle(o,s*q);for(const a of d){if(i===a||!a.options.collisions.enable||i.options.collisions.mode!==a.options.collisions.mode||a.destroyed||a.spawning)continue;const r=a.getPosition(),c=a.getRadius();if(Math.abs(Math.round(o.z)-Math.round(r.z))>s+c)continue;const g=x(o,r),y=s+c;g>y||B(i,a,n,t.retina.pixelRatio)}}isEnabled(i){return i.options.collisions.enable}reset(){}}export{F as Collider};