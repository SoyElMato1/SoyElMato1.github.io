"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5421],{5421:(X,f,u)=>{u.r(f),u.d(f,{PanelProveedorPageModule:()=>N});var g=u(177),s=u(4341),a=u(4742),p=u(6766),d=u(467),P=u(1626),v=u(5964),e=u(3953),h=u(459),b=u(3114);function F(n,c){1&n&&(e.j41(0,"div")(1,"div",17)(2,"ion-grid")(3,"ion-row")(4,"ion-col",18)(5,"div",19),e.EFF(6," Dashboard "),e.k0s()()(),e.j41(7,"p"),e.EFF(8,"Aqu\xed puedes mostrar estad\xedsticas, gr\xe1ficos, y otros res\xfamenes."),e.k0s()()()())}function k(n,c){if(1&n&&e.nrm(0,"img",35),2&n){const r=e.XpG(2).$implicit;e.Y8G("src","http://54.146.243.32:8000"+r.imagen_producto,e.B4B)}}function j(n,c){1&n&&e.nrm(0,"img",36)}function E(n,c){if(1&n){const r=e.RV6();e.j41(0,"ion-card",26)(1,"div",27),e.DNE(2,k,1,1,"img",28)(3,j,1,0,"img",29),e.k0s(),e.j41(4,"ion-card-content",30)(5,"div",31),e.EFF(6),e.k0s(),e.j41(7,"div",32),e.EFF(8),e.nI1(9,"currency"),e.k0s(),e.j41(10,"div")(11,"ion-button",33),e.bIt("click",function(){e.eBV(r);const o=e.XpG().$implicit,i=e.XpG(3);return e.Njj(i.editar(o.codigo_producto))}),e.EFF(12,"Editar"),e.k0s(),e.j41(13,"ion-button",34),e.bIt("click",function(){e.eBV(r);const o=e.XpG().$implicit,i=e.XpG(3);return e.Njj(i.eliminar(o.codigo_producto))}),e.EFF(14,"Eliminar"),e.k0s()()()()}if(2&n){const r=e.XpG().$implicit;e.R7$(2),e.Y8G("ngIf",r.imagen_producto),e.R7$(),e.Y8G("ngIf",!r.imagen_producto),e.R7$(3),e.SpI(" ",r.nombre_producto," "),e.R7$(2),e.SpI(" Precio: ",e.bMT(9,4,r.precio)," ")}}function x(n,c){if(1&n&&(e.j41(0,"ion-col",24),e.DNE(1,E,15,6,"ion-card",25),e.k0s()),2&n){const r=e.XpG(3);e.R7$(),e.Y8G("ngIf",0==r.isEditMode)}}function M(n,c){if(1&n&&(e.j41(0,"ion-row",22),e.DNE(1,x,2,1,"ion-col",23),e.k0s()),2&n){const r=e.XpG(2);e.R7$(),e.Y8G("ngForOf",r.products)}}function C(n,c){1&n&&(e.j41(0,"p"),e.EFF(1,"No hay productos para mostrar."),e.k0s())}function I(n,c){if(1&n&&(e.j41(0,"ion-select-option",46),e.EFF(1),e.k0s()),2&n){const r=c.$implicit;e.Y8G("value",r.id),e.R7$(),e.JRh(r.nombre_categoria)}}function S(n,c){if(1&n){const r=e.RV6();e.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e.EFF(3),e.k0s()(),e.j41(4,"ion-card-content")(5,"form",37),e.bIt("ngSubmit",function(){e.eBV(r);const o=e.XpG(2);return e.Njj(o.putProducto(o.productoSeleccionado))}),e.j41(6,"ion-item")(7,"ion-label",38),e.EFF(8,"Nombre del Producto"),e.k0s(),e.nrm(9,"ion-input",39),e.k0s(),e.j41(10,"ion-item")(11,"ion-label",38),e.EFF(12,"Precio"),e.k0s(),e.nrm(13,"ion-input",40),e.k0s(),e.j41(14,"ion-item")(15,"ion-label",38),e.EFF(16,"Imagen del Producto"),e.k0s(),e.j41(17,"input",41),e.bIt("change",function(o){e.eBV(r);const i=e.XpG(2);return e.Njj(i.onFileSelected(o))}),e.k0s()(),e.j41(18,"ion-item")(19,"ion-label",38),e.EFF(20,"Categor\xeda"),e.k0s(),e.j41(21,"ion-select",42),e.DNE(22,I,2,2,"ion-select-option",43),e.k0s()(),e.j41(23,"ion-button",44),e.EFF(24,"Editar producto"),e.k0s(),e.j41(25,"ion-button",45),e.bIt("click",function(){e.eBV(r);const o=e.XpG(2);return e.Njj(o.desEditar())}),e.EFF(26,"Dejar de editar"),e.k0s()()()()}if(2&n){const r=e.XpG(2);e.R7$(3),e.SpI(" Editar producto ",r.productoSeleccionado," "),e.R7$(2),e.Y8G("formGroup",r.editarForm),e.R7$(17),e.Y8G("ngForOf",r.categorias)}}function y(n,c){if(1&n&&(e.j41(0,"ion-select-option",46),e.EFF(1),e.k0s()),2&n){const r=c.$implicit;e.Y8G("value",r.id_categoria),e.R7$(),e.JRh(r.nombre_categoria)}}function G(n,c){if(1&n){const r=e.RV6();e.j41(0,"ion-card",47)(1,"ion-card-header")(2,"ion-card-title",48),e.EFF(3,"Agregar Producto"),e.k0s()(),e.j41(4,"ion-card-content",47)(5,"form",37),e.bIt("ngSubmit",function(){e.eBV(r);const o=e.XpG(2);return e.Njj(o.postProducto())}),e.j41(6,"ion-item",49)(7,"ion-label",38),e.EFF(8,"Nombre del Producto"),e.k0s(),e.nrm(9,"ion-input",50),e.k0s(),e.j41(10,"ion-item",49)(11,"ion-label",38),e.EFF(12,"Precio"),e.k0s(),e.nrm(13,"ion-input",40),e.k0s(),e.j41(14,"ion-item",49)(15,"ion-label",38),e.EFF(16,"Descripci\xf3n"),e.k0s(),e.j41(17,"ion-textarea",51),e.bIt("ionInput",function(){e.eBV(r);const o=e.XpG(2);return e.Njj(o.contarCaracteres())}),e.k0s()(),e.j41(18,"ion-text",52),e.EFF(19),e.k0s(),e.j41(20,"ion-item",49),e.nrm(21,"ion-label",38),e.j41(22,"input",41),e.bIt("change",function(o){e.eBV(r);const i=e.XpG(2);return e.Njj(i.onFileSelected(o))}),e.k0s()(),e.j41(23,"ion-item",49)(24,"ion-label",38),e.EFF(25,"Categor\xeda"),e.k0s(),e.j41(26,"ion-select",42),e.DNE(27,y,2,2,"ion-select-option",43),e.k0s()(),e.j41(28,"button",53),e.EFF(29,"Agregar producto"),e.k0s()()()()}if(2&n){const r=e.XpG(2);e.R7$(5),e.Y8G("formGroup",r.productoForm),e.R7$(14),e.SpI(" ",r.descripcion.length," / 300 caracteres "),e.R7$(8),e.Y8G("ngForOf",r.categorias)}}function T(n,c){if(1&n&&(e.j41(0,"div")(1,"div",17)(2,"ion-grid")(3,"ion-row")(4,"ion-col",18)(5,"div",19),e.EFF(6," Gesti\xf3n de Productos "),e.k0s()()(),e.DNE(7,M,2,1,"ion-row",20)(8,C,2,0,"ng-template",null,0,e.C5r),e.j41(10,"ion-row"),e.DNE(11,S,27,3,"ion-card",16),e.k0s(),e.DNE(12,G,30,3,"ion-card",21),e.k0s()()()),2&n){const r=e.sdS(9),t=e.XpG();e.R7$(7),e.Y8G("ngIf",t.products.length>0)("ngIfElse",r),e.R7$(4),e.Y8G("ngIf",1==t.isEditMode&&t.productoSeleccionado),e.R7$(),e.Y8G("ngIf",0==t.isEditMode)}}function R(n,c){if(1&n){const r=e.RV6();e.j41(0,"div")(1,"div",17)(2,"ion-grid")(3,"ion-row")(4,"ion-col",18)(5,"div",19),e.EFF(6," Mi Cuenta "),e.k0s()()()(),e.j41(7,"ion-card")(8,"ion-card-content")(9,"ion-list")(10,"ion-item")(11,"ion-label",38),e.EFF(12,"Nombre"),e.k0s(),e.j41(13,"ion-input",54),e.mxI("ngModelChange",function(o){e.eBV(r);const i=e.XpG();return e.DH7(i.proveedor.nombre,o)||(i.proveedor.nombre=o),e.Njj(o)}),e.k0s()(),e.j41(14,"ion-item")(15,"ion-label",38),e.EFF(16,"Apellido"),e.k0s(),e.j41(17,"ion-input",54),e.mxI("ngModelChange",function(o){e.eBV(r);const i=e.XpG();return e.DH7(i.proveedor.apellido,o)||(i.proveedor.apellido=o),e.Njj(o)}),e.k0s()(),e.j41(18,"ion-item")(19,"ion-label",38),e.EFF(20,"Correo Electr\xf3nico"),e.k0s(),e.j41(21,"ion-input",54),e.mxI("ngModelChange",function(o){e.eBV(r);const i=e.XpG();return e.DH7(i.proveedor.correo_electronico,o)||(i.proveedor.correo_electronico=o),e.Njj(o)}),e.k0s()(),e.j41(22,"ion-item")(23,"ion-label",38),e.EFF(24,"Direccion"),e.k0s(),e.j41(25,"ion-input",54),e.mxI("ngModelChange",function(o){e.eBV(r);const i=e.XpG();return e.DH7(i.proveedor.direccion,o)||(i.proveedor.direccion=o),e.Njj(o)}),e.k0s()(),e.j41(26,"ion-item")(27,"ion-label",38),e.EFF(28,"Foto"),e.k0s(),e.j41(29,"input",55),e.bIt("change",function(o){e.eBV(r);const i=e.XpG();return e.Njj(i.actualizarFoto(o))}),e.k0s()()(),e.j41(30,"ion-button",45),e.bIt("click",function(){e.eBV(r);const o=e.XpG();return e.Njj(o.actualizarPerfil())}),e.EFF(31,"Guardar Cambios"),e.k0s()()()()()}if(2&n){const r=e.XpG();e.R7$(13),e.R50("ngModel",r.proveedor.nombre),e.R7$(4),e.R50("ngModel",r.proveedor.apellido),e.R7$(4),e.R50("ngModel",r.proveedor.correo_electronico),e.R7$(4),e.R50("ngModel",r.proveedor.direccion)}}const O=[{path:"",component:(()=>{var n;class c{constructor(t,o,i,l,_,m){this.authService=t,this.router=o,this.proService=i,this.toast=l,this.formBuilder=_,this.cdr=m,this.productoSeleccionado=null,this.products=[],this.selectedImage=null,this.isEditMode=!1,this.categorias=[],this.currentSection="dashboard",this.proveedor={},this.fotoSeleccionada=null,this.descripcion="",this.productoForm=this.formBuilder.group({nombre_producto:["",[s.k0.required]],precio:[0,[s.k0.required]],imagen_producto:["",[s.k0.required]],descripcion:["",[s.k0.required]],id_categoria:[0,[s.k0.required]]}),this.editarForm=this.formBuilder.group({nombre_producto:[""],precio:[0],imagen_producto:[""],descripcion:["",[s.k0.required]],id_categoria:[0],id_proveedor:[""]})}ngOnInit(){this.router.events.pipe((0,v.p)(t=>t instanceof p.wF)).subscribe(()=>{this.loadPerfil(),this.getProductos()}),this.getCategorias(),this.rutProveedor=localStorage.getItem("rut"),this.rutProveedor?this.getProductos():console.error("No se encontr\xf3 el RUT del proveedor en el localStorage")}loadPerfil(){this.authService.getProveedorPerfil().subscribe(t=>{this.proveedor=t},t=>{console.error("Error al cargar el perfil",t)})}actualizarFoto(t){const o=t.target;o.files&&o.files[0]&&(this.fotoSeleccionada=o.files[0])}actualizarPerfil(){var t=this;localStorage.getItem("rut");const i=new FormData;i.append("nombre",this.proveedor.nombre),i.append("apellido",this.proveedor.apellido),i.append("correo_electronico",this.proveedor.correo_electronico),i.append("direccion",this.proveedor.direccion),this.fotoSeleccionada&&i.append("foto",this.fotoSeleccionada),this.authService.actualizarPerfilProveedor(i).subscribe(function(){var l=(0,d.A)(function*(_){(yield t.toast.create({message:"Perfil actualizado correctamente.",duration:2e3})).present(),setTimeout(()=>{window.location.reload()},2e3)});return function(_){return l.apply(this,arguments)}}(),l=>{console.error("Error al actualizar el perfil",l)})}setSection(t){this.currentSection=t}onFileSelected(t){const o=t.target.files[0];if(o){const i=new FileReader;i.onload=l=>{this.selectedImage=l.target.result},i.readAsDataURL(o)}}showToast(t){var o=this;return(0,d.A)(function*(){(yield o.toast.create({message:t,duration:2e3,position:"top"})).present()})()}getProductos(){this.rutProveedor?this.proService.getProductosByProveedor(this.rutProveedor).subscribe(t=>{this.products=t}):console.error("No se encontr\xf3 el RUT del proveedor en el localStorage")}postProducto(){var t=this;return(0,d.A)(function*(){t.productoForm.value.imagen_producto=t.selectedImage,t.proService.agregarProducto(t.productoForm.value).subscribe(function(){var o=(0,d.A)(function*(i){t.showToast("Producto agregado correctamente."),t.getProductos(),t.productoForm.reset(),t.descripcion="",t.selectedImage=null});return function(i){return o.apply(this,arguments)}}(),function(){var o=(0,d.A)(function*(i){console.error("Error al crear el producto:",i),yield t.showToast("Error al agregar el producto.")});return function(i){return o.apply(this,arguments)}}())})()}contarCaracteres(){var t;this.descripcion=(null===(t=this.productoForm.get("descripcion"))||void 0===t?void 0:t.value)||""}editar(t){this.isEditMode=!this.isEditMode,this.productoSeleccionado=t,this.proService.getProductoById(t).subscribe(o=>{this.editarForm.patchValue({nombre_producto:o.nombre,precio:o.precio,id_categoria:o.id_categoria,id_proveedor:o.id_proveedor,imagen_producto:o.imagen_producto,rut_proveedor:o.id_proveedor,descripcion:o.descripcion}),console.log(o),console.log(this.editarForm.value),this.cdr.detectChanges()})}desEditar(){this.productoSeleccionado=null,this.isEditMode=!this.isEditMode}putProducto(t){var o=this;null!=this.selectedImage&&(this.editarForm.value.imagen_producto=this.selectedImage),console.log("Valores a modificar",this.editarForm.value),this.proService.modificarProducto(t,this.editarForm.value).subscribe(function(){var i=(0,d.A)(function*(l){yield o.showToast("Producto modificado correctamente."),o.getProductos()});return function(l){return i.apply(this,arguments)}}(),function(){var i=(0,d.A)(function*(l){console.error("Error al modificar el producto:",l),yield o.showToast("Error al modificar el producto.")});return function(l){return i.apply(this,arguments)}}()),this.productoSeleccionado=null,this.isEditMode=!this.isEditMode}eliminar(t){var o=this;return(0,d.A)(function*(){o.proService.eliminarProducto(t).subscribe(function(){var i=(0,d.A)(function*(l){yield o.showToast("Producto eliminado correctamente."),o.getProductos()});return function(l){return i.apply(this,arguments)}}(),function(){var i=(0,d.A)(function*(l){console.error("Error al eliminar el producto:",l),yield o.showToast("Error al eliminar el producto.")});return function(l){return i.apply(this,arguments)}}())})()}getCategorias(){this.proService.getCategorias().subscribe(t=>{this.categorias=t})}onLogout(){var t=this;return(0,d.A)(function*(){const o=localStorage.getItem("authToken"),i=new P.Lr({Authorization:`Token ${o}`});t.authService.logout(i).subscribe(function(){var l=(0,d.A)(function*(_){(yield t.toast.create({message:"Has cerrado sesi\xf3n correctamente.",duration:2e3})).present(),localStorage.removeItem("authToken"),localStorage.removeItem("userRole"),localStorage.removeItem("user_data"),localStorage.removeItem("rut"),t.router.navigate(["/login"])});return function(_){return l.apply(this,arguments)}}(),function(){var l=(0,d.A)(function*(_){console.error("Error al cerrar sesi\xf3n:",_),(yield t.toast.create({message:"Error al cerrar sesi\xf3n. Intenta de nuevo.",duration:2e3})).present()});return function(_){return l.apply(this,arguments)}}())})()}}return(n=c).\u0275fac=function(t){return new(t||n)(e.rXU(h.P),e.rXU(p.Ix),e.rXU(b.P),e.rXU(a.K_),e.rXU(s.ok),e.rXU(e.gRc))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-panel-proveedor"]],decls:36,vars:6,consts:[["noProducts",""],["contentId","adminContent"],["side","start","menuId","mainMenu","contentId","adminContent","color","a",1,"fondomenu"],["color","A",1,"colormenus"],["alt","Avatar",1,"avatar",3,"src"],[1,"name"],["color","a",1,"fondodelmenu"],["color","a",1,"menu-button"],["color","a",1,"coloritem",3,"click"],["slot","start","name","home-outline"],["slot","start","name","flower-outline"],["slot","start","name","people-outline"],["slot","start","name","log-out-outline"],["id","adminContent",1,"main-content"],["slot","start"],[1,"titulo"],[4,"ngIf"],[1,"bigimage"],[1,"centrar"],[1,"titular"],["class","ion-text-center",4,"ngIf","ngIfElse"],["style","background: rgb(114, 191, 120);","color","a",4,"ngIf"],[1,"ion-text-center"],["size","12","size-md","6","size-lg","5.5",4,"ngFor","ngForOf"],["size","12","size-md","6","size-lg","5.5"],["class","container",4,"ngIf"],[1,"container"],[1,"card-body"],["class","profile-image","alt","Foto del producto",3,"src",4,"ngIf"],["src","assets/images/descarga.jpeg","class","profile-image","alt","Imagen por defecto",4,"ngIf"],[1,"profile-stats",2,"font-size","20px"],[1,""],[1,"card-section"],["fill","outline",3,"click"],["color","danger",3,"click"],["alt","Foto del producto",1,"profile-image",3,"src"],["src","assets/images/descarga.jpeg","alt","Imagen por defecto",1,"profile-image"],[3,"ngSubmit","formGroup"],["position","stacked"],["formControlName","nombre_producto","name","nombre_producto","required",""],["formControlName","precio","type","number","name","precio","required",""],["type","file","accept",".png, .jpg, .jpeg, .bmp",3,"change"],["formControlName","id_categoria","name","id_categoria","required",""],[3,"value",4,"ngFor","ngForOf"],["expand","full","type","submit"],["expand","full",3,"click"],[3,"value"],["color","a",2,"background","rgb(114, 191, 120)"],[2,"color","black"],["color","a",2,"background","rgb(114, 191, 120)","color","black"],["color","a","formControlName","nombre_producto","name","nombre_producto","required","",1,"formulario"],["formControlName","descripcion","maxlength","300","placeholder","Escribe la descripci\xf3n aqu\xed...",3,"ionInput"],["color","a","color","medium",2,"background","rgb(114, 191, 120)","color","black"],[1,"btn","btn-primary"],[3,"ngModelChange","ngModel"],["type","file","accept","image/*",3,"change"]],template:function(t,o){1&t&&(e.j41(0,"ion-split-pane",1)(1,"ion-menu",2)(2,"ion-header")(3,"ion-toolbar",3),e.nrm(4,"img",4),e.j41(5,"h4",5),e.EFF(6),e.nrm(7,"br"),e.EFF(8),e.k0s()()(),e.j41(9,"ion-content",6)(10,"ion-list",7)(11,"ion-item",8),e.bIt("click",function(){return o.setSection("dashboard")}),e.nrm(12,"ion-icon",9),e.j41(13,"ion-label"),e.EFF(14,"Dashboard"),e.k0s()(),e.j41(15,"ion-item",8),e.bIt("click",function(){return o.setSection("Productos")}),e.nrm(16,"ion-icon",10),e.j41(17,"ion-label"),e.EFF(18,"Productos"),e.k0s()(),e.j41(19,"ion-item",8),e.bIt("click",function(){return o.setSection("Perfil")}),e.nrm(20,"ion-icon",11),e.j41(21,"ion-label"),e.EFF(22,"Perfil"),e.k0s()(),e.j41(23,"ion-item",8),e.bIt("click",function(){return o.onLogout()}),e.nrm(24,"ion-icon",12),e.j41(25,"ion-label"),e.EFF(26,"Cerrar Sesi\xf3n"),e.k0s()()()()(),e.j41(27,"ion-content",13)(28,"ion-header")(29,"ion-toolbar",3),e.nrm(30,"ion-menu-button",14),e.j41(31,"ion-title",15),e.EFF(32,"Mi espacio"),e.k0s()()(),e.DNE(33,F,9,0,"div",16)(34,T,13,4,"div",16)(35,R,32,4,"div",16),e.k0s()()),2&t&&(e.R7$(4),e.Y8G("src","http://54.146.243.32:8000/"+o.proveedor.foto,e.B4B),e.R7$(2),e.SpI("",o.proveedor.nombre," "),e.R7$(2),e.SpI(" ",o.proveedor.apellido," "),e.R7$(25),e.Y8G("ngIf","dashboard"===o.currentSection),e.R7$(),e.Y8G("ngIf","Productos"===o.currentSection),e.R7$(),e.Y8G("ngIf","Perfil"===o.currentSection))},dependencies:[g.Sq,g.bT,s.qT,s.BC,s.cb,s.YS,s.tU,s.vS,a.Jm,a.b_,a.I9,a.ME,a.tN,a.hU,a.W9,a.lO,a.eU,a.iq,a.$w,a.uz,a.he,a.nf,a.oS,a.MC,a.ln,a.Nm,a.Ip,a.HP,a.IO,a.nc,a.BC,a.ai,a.su,a.Je,a.Gw,s.j4,s.JD,g.oe],styles:['@charset "UTF-8";.fondomenu[_ngcontent-%COMP%]{border-right:none;text-align:center;align-items:center}.fondodelmenu[_ngcontent-%COMP%]{--background: rgb(160, 214, 131)}.avatar[_ngcontent-%COMP%]{margin-top:16px;width:200px;height:200px;align-items:center;object-fit:cover;padding:12px;background:linear-gradient(135deg,#a0d683,#72bf78)}.name[_ngcontent-%COMP%]{font-family:Bebas Neue,sans-serif;font-weight:700;font-size:60px;margin-top:8px;font-weight:400;text-align:center;display:flex;justify-content:center;align-items:center}.menu-button[_ngcontent-%COMP%]{width:100%;background-color:#a0d683;align-items:center;justify-content:flex-start}.menu-button[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], .menu-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .menu-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-right:8px;color:#000;font-size:30px}.coloritem[_ngcontent-%COMP%]{background:#a0d683}.colormenus[_ngcontent-%COMP%]{background:#72bf78;color:#000}.titulo[_ngcontent-%COMP%]{font-weight:700;font-family:Bebas Neue,sans-serif;font-size:50px;border:10px;position:relative;text-align:start;display:flex;justify-content:center;align-items:center}.bigimage[_ngcontent-%COMP%]{width:100%;min-height:100vh;background:#f5f5f5;background-repeat:repeat;background-position:center center;background-size:cover;background-attachment:scroll;top:0;left:0}.full-width-height[_ngcontent-%COMP%]{width:100%;height:800px;position:absolute;left:0;top:0}.centrar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.titular[_ngcontent-%COMP%]{background-color:#a0d683;color:#000;width:300px;height:60px;display:flex;justify-content:center;align-items:center;font-weight:700;text-align:center;font-family:Bebas Neue,sans-serif;font-size:40px}.button-group[_ngcontent-%COMP%]{margin-top:150px;display:flex;gap:8px}@media (max-width: 768px){.card-title[_ngcontent-%COMP%], .card-section[_ngcontent-%COMP%], .boton-verp[_ngcontent-%COMP%], .card-rating[_ngcontent-%COMP%]{font-size:18px;padding:12px;width:170px;height:70px}}@media (max-width: 768px){.profile-stats[_ngcontent-%COMP%]{min-width:90px}}.container[_ngcontent-%COMP%]{font-weight:900;background-color:#72bf78;color:#000;height:350px;width:350px}.card[_ngcontent-%COMP%]{margin-bottom:1.5rem}.boton[_ngcontent-%COMP%]{color:#a0d683;background-color:#a0d683}.card-body[_ngcontent-%COMP%]{background-color:#72bf78;color:#000;font-weight:700}footer[_ngcontent-%COMP%]{background-color:#343a40;color:#fff;padding:1.5rem 0}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:underline}.btn-primary[_ngcontent-%COMP%]{background-color:#a0d683;border-color:#a0d683;color:#000}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#feff9f;border-color:#feff9f}.btn-outline-secondary[_ngcontent-%COMP%]{color:#000;border-color:#333}.btn-outline-secondary[_ngcontent-%COMP%]:hover{background-color:#feff9f;color:#000;border-color:#feff9f}']}),c})()}];let w=(()=>{var n;class c{}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[p.iI.forChild(O),p.iI]}),c})(),N=(()=>{var n;class c{}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[g.MD,s.YN,a.bv,w,s.X1]}),c})()}}]);