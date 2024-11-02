"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7507],{7507:(z,d,c)=>{c.r(d),c.d(d,{CatalogoProductoPageModule:()=>j});var g=c(177),p=c(4341),i=c(4742),l=c(6766),u=c(467),h=c(5964),t=c(3953),f=c(3114),m=c(9368),b=c(1626);const x=()=>["/proveedor"],P=()=>["/carrito"],_=()=>["/chatbot"];function C(o,a){if(1&o&&(t.j41(0,"ion-badge",23),t.EFF(1),t.k0s()),2&o){const r=t.XpG();t.R7$(),t.JRh(r.cartItemCount)}}function v(o,a){if(1&o&&t.nrm(0,"img",35),2&o){const r=t.XpG().$implicit;t.Y8G("src","http://localhost:8000"+r.imagen_producto,t.B4B)}}function k(o,a){1&o&&t.nrm(0,"img",36)}function M(o,a){if(1&o){const r=t.RV6();t.j41(0,"ion-col",24)(1,"div")(2,"ion-card",25)(3,"div",26),t.DNE(4,v,1,1,"img",27)(5,k,1,0,"img",28),t.k0s(),t.j41(6,"ion-card-content",29)(7,"div",30),t.EFF(8),t.k0s(),t.j41(9,"div",31),t.bIt("click",function(){const n=t.eBV(r).$implicit,s=t.XpG();return t.Njj(s.agregarAlCarrito(n.codigo_producto))}),t.EFF(10," Agregar al carrito "),t.k0s(),t.j41(11,"div",32),t.nrm(12,"img",33),t.k0s(),t.j41(13,"div",34),t.bIt("click",function(){const n=t.eBV(r).$implicit,s=t.XpG();return t.Njj(s.verDetalleProducto(n.codigo_producto))}),t.EFF(14," Detalle del producto "),t.k0s()()()()()}if(2&o){const r=a.$implicit;t.R7$(4),t.Y8G("ngIf",r.imagen_producto),t.R7$(),t.Y8G("ngIf",!r.imagen_producto),t.R7$(3),t.SpI(" ",r.nombre_producto," ")}}function w(o,a){if(1&o){const r=t.RV6();t.j41(0,"ion-searchbar",37),t.bIt("ionInput",function(n){t.eBV(r);const s=t.XpG();return t.Njj(s.onSearch(n))}),t.k0s()}}const O=[{path:"",component:(()=>{var o;class a{constructor(e,n,s,I,F){this.productoService=e,this.serviciocarrito=n,this.http=s,this.toastController=I,this.router=F,this.carrito=[],this.productos=[],this.cartItemCount=0,this.showSearchBar=!1,this.productosFiltrados=[]}ngOnInit(){this.loadProductos(),this.router.events.pipe((0,h.p)(e=>e instanceof l.wF)).subscribe(()=>{this.loadProductos()})}toggleSearchBar(){this.showSearchBar=!this.showSearchBar}onSearch(e){const n=e.target.value.trim().toLowerCase();console.log("Buscando: ",n),this.productosFiltrados=""!==n?this.productos.filter(s=>s.nombre_producto.toLowerCase().includes(n)):this.productos}loadProductos(){this.productoService.getProductos().subscribe(e=>{this.productos=e,this.productosFiltrados=e},e=>{console.error("Error al cargar los productos:",e)})}agregarAlCarrito(e){this.serviciocarrito.agregar_Carrito(e).subscribe(n=>{this.mostrarMensaje(n.mensaje)},n=>{this.mostrarMensaje("Error al agregar el producto al carrito")})}mostrarMensaje(e){var n=this;return(0,u.A)(function*(){yield(yield n.toastController.create({message:e,duration:2e3,position:"top"})).present()})()}generateItems(){const e=this.productos.length+1;for(let n=0;n<50;n++)this.productos.push(`Item ${e+n}`)}onIonInfinite(e){this.generateItems(),setTimeout(()=>{e.target.complete()},100)}navigateToLogin(){this.router.navigate(["/login"])}verDetalleProducto(e){this.router.navigate(["/detalle-producto",e])}}return(o=a).\u0275fac=function(e){return new(e||o)(t.rXU(f.P),t.rXU(m.D),t.rXU(b.Qq),t.rXU(i.K_),t.rXU(l.Ix))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-catalogo-producto"]],decls:32,vars:10,consts:[[3,"translucent"],["color","A ",1,"colormenus"],["slot","start"],[3,"routerLink"],["name","arrow-back-outline"],["slot","end"],["name","cart",1,"big-icon"],["color","danger",4,"ngIf"],[1,"titulo"],[1,"bigimage"],[1,"centrar"],["id","productos",1,"titular"],[1,"ion-text-center"],["size","12","size-md","6","size-lg","4",4,"ngFor","ngForOf"],[2,"background-color","yellow","border-radius","50%",3,"click"],["name","search-outline",2,"color","black"],["placeholder","Buscar...","style","margin: 10px;",3,"ionInput",4,"ngIf"],[1,"center-button"],[2,"--padding-start","0","--padding-end","0","--border-radius","50%","width","40px","height","40px",3,"routerLink"],["src","../../../assets/images/JARDENBOT.png",2,"width","40px","height","40px"],["slot","end",3,"click"],[2,"background-color","yellow","border-radius","50%"],["name","person-outline",2,"color","black"],["color","danger"],["size","12","size-md","6","size-lg","4"],[1,"profile-card"],[1,"profile-image"],["class","profile-image","alt","Foto del proveedor",3,"src",4,"ngIf"],["src","assets/images/descarga.jpeg","class","profile-image","alt","Imagen por defecto",4,"ngIf"],[1,"profile-stats"],[1,"card-title"],[1,"boton-verp","button-div",3,"click"],[1,"card-rating"],["src","../../../assets/images/JARDENBOT.png",1,"rating-value",2,"width","60px","height","60px"],[1,"card-section","button-div",3,"click"],["alt","Foto del proveedor",1,"profile-image",3,"src"],["src","assets/images/descarga.jpeg","alt","Imagen por defecto",1,"profile-image"],["placeholder","Buscar...",2,"margin","10px",3,"ionInput"]],template:function(e,n){1&e&&(t.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),t.nrm(4,"ion-icon",4),t.k0s()(),t.j41(5,"ion-buttons",5)(6,"ion-button",3),t.nrm(7,"ion-icon",6),t.DNE(8,C,2,1,"ion-badge",7),t.k0s()(),t.j41(9,"ion-title",8),t.EFF(10,"GreenMarket"),t.k0s()()(),t.j41(11,"ion-content")(12,"div",9)(13,"ion-grid")(14,"ion-row")(15,"ion-col",10)(16,"div",11),t.EFF(17," Lista de productos "),t.k0s()()(),t.j41(18,"ion-row",12),t.DNE(19,M,15,3,"ion-col",13),t.k0s()()()(),t.j41(20,"ion-footer")(21,"ion-toolbar",1)(22,"ion-buttons",2)(23,"ion-button",14),t.bIt("click",function(){return n.toggleSearchBar()}),t.nrm(24,"ion-icon",15),t.k0s(),t.DNE(25,w,1,0,"ion-searchbar",16),t.k0s(),t.j41(26,"div",17)(27,"ion-button",18),t.nrm(28,"img",19),t.k0s()(),t.j41(29,"ion-buttons",20),t.bIt("click",function(){return n.navigateToLogin()}),t.j41(30,"ion-button",21),t.nrm(31,"ion-icon",22),t.k0s()()()()),2&e&&(t.Y8G("translucent",!0),t.R7$(3),t.Y8G("routerLink",t.lJ4(7,x)),t.R7$(3),t.Y8G("routerLink",t.lJ4(8,P)),t.R7$(2),t.Y8G("ngIf",n.cartItemCount>0),t.R7$(11),t.Y8G("ngForOf",n.productosFiltrados),t.R7$(6),t.Y8G("ngIf",n.showSearchBar),t.R7$(2),t.Y8G("routerLink",t.lJ4(9,_)))},dependencies:[g.Sq,g.bT,i.In,i.Jm,i.QW,i.b_,i.I9,i.hU,i.W9,i.M0,i.lO,i.eU,i.iq,i.ln,i.S1,i.BC,i.ai,i.Gw,i.N7,l.Wk],styles:['@charset "UTF-8";ion-toolbar[_ngcontent-%COMP%]{position:relative}.center-button[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1}.big-icon[_ngcontent-%COMP%]{font-size:52px;color:#000}ion-buttons[_ngcontent-%COMP%]{font-size:bold}.bigimage[_ngcontent-%COMP%]{width:100%;min-height:100vh;background:#f5f5f5;background-repeat:repeat;background-position:center center;background-size:cover;background-attachment:scroll;top:0;left:0}.full-width-height[_ngcontent-%COMP%]{width:100%;height:800px;position:absolute;left:0;top:0}.ajustar[_ngcontent-%COMP%]{text-align:center;display:flex;justify-content:center;align-items:center}.centrar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.titulo[_ngcontent-%COMP%]{font-weight:700;font-family:Bebas Neue,sans-serif;font-size:50px;border:10px;position:relative;text-align:start;display:flex;justify-content:center;align-items:center}.titular[_ngcontent-%COMP%]{background-color:#a0d683;color:#000;width:300px;height:60px;display:flex;justify-content:center;align-items:center;font-weight:700;text-align:center;font-family:Bebas Neue,sans-serif;font-size:40px}.colormenus[_ngcontent-%COMP%]{background:#72bf78;color:#000}.status-time[_ngcontent-%COMP%]{font-weight:590;font-size:17px}.status-icons[_ngcontent-%COMP%]{display:flex;gap:8px;margin-left:auto;margin-right:16px}.icon-rect[_ngcontent-%COMP%]{width:19px;height:12px;background-color:#000}.icon-signal[_ngcontent-%COMP%]{width:17px;height:12px;background-color:#000}.icon-battery[_ngcontent-%COMP%]{width:27px;height:13px;position:relative}.battery-outline[_ngcontent-%COMP%]{width:25px;height:13px;border:1px solid black;opacity:.35}.battery-tip[_ngcontent-%COMP%]{width:1.3px;height:4px;background-color:#000;opacity:.4;position:absolute;top:4.7px;left:26px}.battery-inner[_ngcontent-%COMP%]{width:21px;height:9px;background-color:#000;border-radius:2.5px;position:absolute;top:2px;left:2px}.bottom-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.bottom-icon[_ngcontent-%COMP%]{background-color:#e5f900f7;border-radius:50%;width:71px;height:53px;display:flex;justify-content:center;align-items:center}.bottom-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:43px;height:43px}.profile-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;position:relative;background-color:#72bf78;border:rgb(160,214,131) 2px solid;box-shadow:0 10px 10px #0000001a}.profile-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:10px}.profile-image[_ngcontent-%COMP%]{flex:1;display:flex;padding:16;justify-content:center;align-items:center;width:420px;height:265px}.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-width:145px;width:100%;height:100%}.rating-value[_ngcontent-%COMP%]{background-color:#a0d683;border-radius:50%;width:45px;height:45px;display:flex;justify-content:center;align-items:center;font-size:20px;font-weight:700;color:#060505}.button-div[_ngcontent-%COMP%]:hover{background-color:#fcff5e}.card-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#000;position:absolute;background-color:#a0d683;right:0;padding:16px;width:280px;height:80px;box-sizing:border-box;border:black 1px solid}.profile-stats[_ngcontent-%COMP%]{flex-direction:column;padding:0 10px 10px;min-width:280px;display:flex;align-items:center;width:100%;max-width:200px}.card-section[_ngcontent-%COMP%]{font-size:20px;text-align:center;align-items:center;color:#000;position:absolute;background-color:#feff9f;right:0;bottom:126px;padding:16px;width:280px;height:60px;box-sizing:border-box;border:black 1px solid;font-weight:700}.boton-verp[_ngcontent-%COMP%]{font-size:20px;text-align:center;align-items:center;color:#000;position:absolute;background-color:#feff9f;right:0;padding:16px;width:280px;height:60px;bottom:0;box-sizing:border-box;border:black 1px solid;font-weight:700}.card-rating[_ngcontent-%COMP%]{display:flex;justify-content:center;position:relative;font-size:20px;font-weight:700;text-align:center;align-items:center;color:#000;position:absolute;right:0;padding:16px;width:280px;height:60px;bottom:64px;box-sizing:border-box}@media (max-width: 768px){.card-title[_ngcontent-%COMP%], .card-section[_ngcontent-%COMP%], .boton-verp[_ngcontent-%COMP%], .card-rating[_ngcontent-%COMP%]{font-size:18px;padding:12px;width:170px;height:70px}}@media (max-width: 768px){.profile-stats[_ngcontent-%COMP%]{min-width:90px}}']}),a})()}];let y=(()=>{var o;class a{}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[l.iI.forChild(O),l.iI]}),a})(),j=(()=>{var o;class a{}return(o=a).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[g.MD,p.YN,i.bv,y]}),a})()}}]);