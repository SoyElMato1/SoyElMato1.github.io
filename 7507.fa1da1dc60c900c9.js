"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7507],{7507:(j,p,a)=>{a.r(p),a.d(p,{CatalogoProductoPageModule:()=>k});var g=a(177),d=a(4341),c=a(4742),l=a(6766),f=a(467),h=a(5964),o=a(3953),m=a(3114),P=a(9368),b=a(1626);function C(e,i){if(1&e&&o.nrm(0,"img",41),2&e){const r=o.XpG().$implicit;o.Y8G("src","https://9dcb-54-146-243-32.ngrok-free.app/"+r.imagen_producto,o.B4B)}}function v(e,i){1&e&&o.nrm(0,"img",42)}function F(e,i){if(1&e){const r=o.RV6();o.j41(0,"ion-col",30)(1,"div",31),o.DNE(2,C,1,1,"img",32)(3,v,1,0,"img",33),o.j41(4,"div",34)(5,"h5"),o.EFF(6),o.k0s(),o.j41(7,"h5"),o.EFF(8),o.k0s(),o.j41(9,"div",35),o.nrm(10,"input",36)(11,"label",37)(12,"input",36)(13,"label",37)(14,"input",36)(15,"label",37)(16,"input",36)(17,"label",37)(18,"input",36)(19,"label",37),o.k0s(),o.j41(20,"p",38),o.EFF(21),o.k0s(),o.j41(22,"div",39)(23,"button",40),o.bIt("click",function(){const n=o.eBV(r).$implicit,s=o.XpG();return o.Njj(s.agregarAlCarrito(n.codigo_producto))}),o.EFF(24,"Agregar al carrito"),o.k0s()()()()()}if(2&e){const r=i.$implicit;o.R7$(2),o.Y8G("ngIf",r.imagen_producto),o.R7$(),o.Y8G("ngIf",!r.imagen_producto),o.R7$(3),o.JRh(r.nombre_producto),o.R7$(2),o.SpI("$",r.precio,""),o.R7$(2),o.Y8G("value",5)("name","rating"+r.codigo_producto)("id","star5-"+r.codigo_producto),o.R7$(),o.Y8G("for","star5-"+r.codigo_producto),o.R7$(),o.Y8G("value",4)("name","rating"+r.codigo_producto)("id","star4-"+r.codigo_producto),o.R7$(),o.Y8G("for","star4-"+r.codigo_producto),o.R7$(),o.Y8G("value",3)("name","rating"+r.codigo_producto)("id","star3-"+r.codigo_producto),o.R7$(),o.Y8G("for","star3-"+r.codigo_producto),o.R7$(),o.Y8G("value",2)("name","rating"+r.codigo_producto)("id","star2-"+r.codigo_producto),o.R7$(),o.Y8G("for","star2-"+r.codigo_producto),o.R7$(),o.Y8G("value",1)("name","rating"+r.codigo_producto)("id","star1-"+r.codigo_producto),o.R7$(),o.Y8G("for","star1-"+r.codigo_producto),o.R7$(2),o.JRh(r.descripcion)}}const M=[{path:"",component:(()=>{var e;class i{constructor(t,n,s,u,O){this.productoService=t,this.serviciocarrito=n,this.http=s,this.toastController=u,this.router=O,this.carrito=[],this.productos=[],this.cantidadCarrito=0,this.showSearchBar=!1,this.productosFiltrados=[]}ngOnInit(){this.loadProductos(),this.router.events.pipe((0,h.p)(t=>t instanceof l.wF)).subscribe(()=>{this.loadProductos()})}toggleSearchBar(){this.showSearchBar=!this.showSearchBar}onSearch(t){const n=t.target.value.trim().toLowerCase();console.log("Buscando: ",n),this.productosFiltrados=""!==n?this.productos.filter(s=>s.nombre_producto.toLowerCase().includes(n)):this.productos}loadProductos(){this.productoService.getProductos().subscribe(t=>{this.productos=t,this.productosFiltrados=t},t=>{console.error("Error al cargar los productos:",t)})}agregarAlCarrito(t){this.serviciocarrito.agregar_Carrito(t).subscribe(n=>{this.mostrarMensaje(n.mensaje)},n=>{this.mostrarMensaje("Error al agregar el producto al carrito")})}mostrarMensaje(t){var n=this;return(0,f.A)(function*(){yield(yield n.toastController.create({message:t,duration:2e3,position:"top"})).present()})()}generateItems(){const t=this.productos.length+1;for(let n=0;n<50;n++)this.productos.push(`Item ${t+n}`)}onIonInfinite(t){this.generateItems(),setTimeout(()=>{t.target.complete()},100)}navigateToLogin(){this.router.navigate(["/login"])}verDetalleProducto(t){this.router.navigate(["/detalle-producto",t])}a\u00f1adioracarrito(){this.cantidadCarrito=this.serviciocarrito.obtenerCantidadCarrito(),this.serviciocarrito.cantidadCarrito.subscribe(t=>{this.cantidadCarrito=t})}}return(e=i).\u0275fac=function(t){return new(t||e)(o.rXU(m.P),o.rXU(P.D),o.rXU(b.Qq),o.rXU(c.K_),o.rXU(l.Ix))},e.\u0275cmp=o.VBU({type:e,selectors:[["app-catalogo-producto"]],decls:65,vars:1,consts:[[1,"bigimage"],[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link","active"],[1,"nav-item","dropdown"],["href","#","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"dropdown-menu"],["href","#",1,"dropdown-item"],[1,"dropdown-divider"],["aria-disabled","true",1,"nav-link","disabled"],["role","search",1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2",3,"ionInput"],["type","submit",1,"btn","btn-outline-success"],[1,"text-center","container",2,"color","black"],[1,"ion-justify-content-center","py-4"],["size-md","8","size-sm","12",1,"ion-text-center"],["src","../../../../assets/images/logo.png","alt","Imagen descriptiva",1,"img-fluid","mb-4"],[1,"fw-light"],[1,"lead","text-secondary"],[1,"container"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","g-3"],["size","12","size-md","6","size-lg","4",4,"ngFor","ngForOf"],[1,"footer"],[1,"float-end"],["href","#",1,"back-to-top"],[1,"footer-text"],["href","#"],["size","12","size-md","6","size-lg","4"],[1,"card","shadow-sm"],["class","bd-placeholder-img card-img-top","alt","Foto del producto","width","200","height","200",3,"src",4,"ngIf"],["src","assets/images/descarga.jpeg","class","bd-placeholder-img card-img-top","alt","Imagen por defecto",4,"ngIf"],[1,"card-body"],[1,"rating"],["type","radio",3,"value","name","id"],[3,"for"],[1,"card-text"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-primary",3,"click"],["alt","Foto del producto","width","200","height","200",1,"bd-placeholder-img","card-img-top",3,"src"],["src","assets/images/descarga.jpeg","alt","Imagen por defecto",1,"bd-placeholder-img","card-img-top"]],template:function(t,n){1&t&&(o.j41(0,"ion-content")(1,"main",0)(2,"nav",1)(3,"div",2)(4,"div",3)(5,"ul",4)(6,"li",5)(7,"a",6),o.EFF(8,"Categorias"),o.k0s()(),o.j41(9,"li",7)(10,"a",8),o.EFF(11," Filtro de seleccion "),o.k0s(),o.j41(12,"ul",9)(13,"li")(14,"a",10),o.EFF(15,"Plantas"),o.k0s()(),o.j41(16,"li")(17,"a",10),o.EFF(18,"Plantas"),o.k0s()(),o.j41(19,"li")(20,"a",10),o.EFF(21,"Plantas"),o.k0s()(),o.j41(22,"li")(23,"a",10),o.EFF(24,"Another action"),o.k0s()(),o.j41(25,"li"),o.nrm(26,"hr",11),o.k0s(),o.j41(27,"li")(28,"a",10),o.EFF(29,"Something else here"),o.k0s()()()(),o.j41(30,"li",5)(31,"a",12),o.EFF(32,"Disabled"),o.k0s()()(),o.j41(33,"form",13)(34,"ion-input",14),o.bIt("ionInput",function(u){return n.onSearch(u)}),o.k0s(),o.j41(35,"button",15),o.EFF(36,"Search"),o.k0s()()()()(),o.j41(37,"section",16)(38,"ion-grid")(39,"ion-row",17)(40,"ion-col",18),o.nrm(41,"img",19),o.j41(42,"h1",20),o.EFF(43,"Productos Destacados"),o.k0s(),o.j41(44,"p",21),o.EFF(45,"ESTE APARTADO ESTARA PROXIMAMENTE DISPONIBLE"),o.k0s()()()()(),o.j41(46,"div")(47,"div",22)(48,"div",23),o.DNE(49,F,25,25,"ion-col",24),o.k0s()()()(),o.j41(50,"footer",25)(51,"div",22)(52,"p",26)(53,"a",27),o.EFF(54,"Volver arriba"),o.k0s()(),o.j41(55,"p",28),o.EFF(56," \xa9 2024 "),o.j41(57,"strong"),o.EFF(58,"GreenMarket"),o.k0s(),o.EFF(59," Portafolio. "),o.j41(60,"a",29),o.EFF(61,"Privacidad"),o.k0s(),o.EFF(62," \xb7 "),o.j41(63,"a",29),o.EFF(64,"T\xe9rminos"),o.k0s()()()()()),2&t&&(o.R7$(49),o.Y8G("ngForOf",n.productosFiltrados))},dependencies:[g.Sq,g.bT,d.qT,d.cb,d.cV,c.hU,c.W9,c.lO,c.$w,c.ln,c.Gw],styles:['@charset "UTF-8";.container-fluid[_ngcontent-%COMP%]{font-weight:900;font-size:20px}.card[_ngcontent-%COMP%]{margin-bottom:1.5rem}.boton[_ngcontent-%COMP%]{color:#a0d683;background-color:#a0d683}.card-body[_ngcontent-%COMP%]{background-color:#72bf78;color:#000;font-weight:700}footer[_ngcontent-%COMP%]{background-color:#343a40;color:#fff;padding:1.5rem 0}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:underline}.btn-primary[_ngcontent-%COMP%]{background-color:#a0d683;border-color:#a0d683;color:#000}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#feff9f;border-color:#feff9f}.btn-outline-secondary[_ngcontent-%COMP%]{color:#000;border-color:#333}.btn-outline-secondary[_ngcontent-%COMP%]:hover{background-color:#feff9f;color:#000;border-color:#feff9f}.rating[_ngcontent-%COMP%]{display:inline-block}.rating[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{float:right;cursor:pointer;color:#ccc;transition:color .3s}.rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{content:"\\2605";font-size:30px}.rating[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover ~ label[_ngcontent-%COMP%]{color:#feff9f;transition:color .3s}.bigimage[_ngcontent-%COMP%]{width:100%;min-height:100vh;background:#f5f5f5;background-repeat:repeat;background-position:center center;background-size:cover;background-attachment:scroll;top:0;left:0}.footer[_ngcontent-%COMP%]{background:#72bf78;color:#000;text-align:center;padding:20px 0;border-top:4px solid rgb(160,214,131);box-shadow:0 -4px 10px #0000001a}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#feff9f;text-decoration:none;font-weight:700}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.footer-text[_ngcontent-%COMP%]{font-size:14px;margin:0}.footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#a0d683}.back-to-top[_ngcontent-%COMP%]{background-color:#a0d683;color:#000;padding:8px 12px;border-radius:5px;font-size:12px;font-weight:700;text-decoration:none;transition:all .3s}.back-to-top[_ngcontent-%COMP%]:hover{background-color:#feff9f;color:#000}']}),i})()}];let _=(()=>{var e;class i{}return(e=i).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[l.iI.forChild(M),l.iI]}),i})(),k=(()=>{var e;class i{}return(e=i).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[g.MD,d.YN,c.bv,_]}),i})()}}]);