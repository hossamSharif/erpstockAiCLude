"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_items_items_module_ts"],{

/***/ 34228:
/*!***********************************************!*\
  !*** ./src/app/items/items-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageRoutingModule": () => (/* binding */ ItemsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.page */ 79236);




const routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_0__.ItemsPage
    }
];
let ItemsPageRoutingModule = class ItemsPageRoutingModule {
};
ItemsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemsPageRoutingModule);



/***/ }),

/***/ 92029:
/*!***************************************!*\
  !*** ./src/app/items/items.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageModule": () => (/* binding */ ItemsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _items_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-routing.module */ 34228);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ 27533);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items.page */ 79236);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);









let ItemsPageModule = class ItemsPageModule {
};
ItemsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipeModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_3__.ShareModule,
            _items_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemsPageRoutingModule
        ],
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_2__.ItemsPage]
    })
], ItemsPageModule);



/***/ }),

/***/ 79236:
/*!*************************************!*\
  !*** ./src/app/items/items.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPage": () => (/* binding */ ItemsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.page.html?ngResource */ 1264);
/* harmony import */ var _items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page.scss?ngResource */ 66603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item-modal/item-modal.page */ 3671);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ 59055);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ 26772);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2canvas */ 33838);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dom-to-image */ 93463);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 1670);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ 18232);

















let ItemsPage = class ItemsPage {
    constructor(file, fileOpener, behavApi, storage, alertController, modalController, loadingController, datePipe, api, toast) {
        this.file = file;
        this.fileOpener = fileOpener;
        this.behavApi = behavApi;
        this.storage = storage;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.isOpen = false;
        this.notifArr = [];
        this.showNotif = false;
        this.LogHistoryLocalArr = [];
        this.logHistoryArr = [];
        this.isOpenNotif = false;
        this.newNotif = false;
        this.sortStatus = [];
        this.items = [];
        this.itemsAll = [];
        this.searcResult = [];
        this.searchMode = false;
        this.searchTerm = "";
        this.store_tot = 0;
        this.store_fltTot = 0;
        this.loading = false;
        this.loadingTot = false;
        this.brandList = [];
        this.modelList = [];
        this.itemsLocal = [];
        this.showMe = null;
        this.filterMode = false;
        this.exportMode = false;
        this.showBrand = false;
        this.showMdel = false;
        this.fileName = 'items.xlsx';
        this.currentPage = 1;
        this.itemsPerPage = 20; // Default items per page
        this.totalItems = 0;
        this.totalPages = 0;
        this.pageSizeOptions = [10, 20, 50, 100];
        this.store_info = { id: "", store_ref: "", store_name: "", location: "" };
        this.selectedItem2 = { id: null, item_name: "", model: "", part_no: "", min_qty: 0, brand: "", pay_price: 0, perch_price: 0, item_unit: "", item_desc: "", item_parcode: "", aliasEn: "" };
        this.colSetting = { id: true, item_name: true, model: true, part_no: true, min_qty: true, brand: true, pay_price: true, perch_price: true, item_unit: true, item_desc: true, item_parcode: true, profit: true, instock: true, total: true, lastSold: true, edit: true, delete: true, aliasEn: true };
        this.getAppInfo();
    }
    onKeydownHandler(event) {
        this.hideMe('3');
    }
    presentModal(id, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (id != 'null' && status == 'edit') {
                let fl = this.items.filter(x => x.id == id);
                //console.log(fl);
                this.selectedItem = {
                    id: fl[0]['id'],
                    item_desc: fl[0]['item_desc'],
                    model: fl[0]['model'],
                    item_name: fl[0]['item_name'],
                    min_qty: fl[0]['min_qty'],
                    part_no: fl[0]['part_no'],
                    brand: fl[0]['brand'],
                    item_unit: fl[0]['item_unit'],
                    item_parcode: fl[0]['item_parcode'],
                    pay_price: fl[0]['pay_price'],
                    perch_price: fl[0]['perch_price'],
                    aliasEn: fl[0]['aliasEn']
                };
            }
            const modal = yield this.modalController.create({
                component: _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_3__.ItemModalPage,
                componentProps: {
                    "item": this.selectedItem,
                    "colSetting": this.colSetting,
                    "filterArrayOrign": this.filterArrayOrign,
                    "filterArray": this.filterArray,
                    "brandList": this.brandList,
                    "modelList": this.modelList,
                    "status": status
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    //console.log(dataReturned )
                    this.doAfterDissmiss(dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    didDissmis() {
        this.isOpenNotif = false;
        //console.log('dismissOver')
    }
    presentPopover(e) {
        //console.log('preent me', e)
        this.popoverNotif33.event = e;
        this.isOpenNotif = true;
        this.showNotif = false;
    }
    prClick(i, item) {
        if (this.showMe == i) {
            console.log(i);
        }
        else {
            this.showMe = i;
            this.selectedItem2 = { id: item.id, item_name: item.item_name, model: item.model, part_no: item.part_no, min_qty: item.min_qty, brand: item.brand, pay_price: item.pay_price, perch_price: item.perch_price, item_unit: item.item_unit, item_desc: item.item_desc, item_parcode: item.item_parcode, aliasEn: item.aliasEn, quantity: item.firstQuantity };
        }
    }
    hideMe(i) {
        this.showMe = null;
        this.selectedItem2 = { id: null, item_name: "", model: "", part_no: "", min_qty: 0, brand: "", pay_price: 0, perch_price: 0, item_unit: "", item_desc: "", item_parcode: "", aliasEn: "", quantity: 0 };
    }
    update(mdata) {
        this.presentLoadingWithOptions('جاري تعديل البيانات ...');
        this.api.updateItem(mdata[0]).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Updated') {
                this.presentToast('تم التعديل بنجاح', 'success');
                this.saveLogHistory(mdata[0], undefined, 'update');
                this.getStockItems();
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    doit() {
        //console.log('hi man ')
    }
    editCell(i, item) {
        this.presentLoadingWithOptions('جاري تعديل البيانات ...');
        let fl = this.items.filter(x => x.id == item.id);
        if (this.selectedItem2.perch_price > 0 && this.selectedItem2.pay_price > 0 && this.selectedItem2.item_name != "") {
            // this.selectedItem2.perch_price = +this.selectedItem2.pay_price - (.15 * +this.selectedItem2.pay_price)
            this.api.updateItem(this.selectedItem2).subscribe(data => {
                //console.log(data)
                let res = data;
                if (data['message'] != 'Post Not Updated') {
                    this.updateFirstq(item);
                    this.loadingController.dismiss();
                    this.presentToast('تم التعديل بنجاح', 'success');
                }
                else {
                    this.presentToast('لم يتم  تعديل البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                    this.loadingController.dismiss();
                }
                this.hideMe(i);
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
                this.hideMe(i);
                this.loadingController.dismiss();
            });
        }
        else {
            this.presentToast("خطأ في الإدخال ", "danger");
        }
    }
    updateFirstq(item) {
        console.log(item);
        let ft = {
            "item_id": item.id,
            "quantity": this.selectedItem2.quantity,
            "pay_price": item.pay_price,
            "perch_price": item.perch_price,
            "store_id": this.store_info.id
        };
        this.api.updatfiratqtynew(ft).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Updated') {
                this.updateItemArrays(item.id);
            }
            else {
                this.presentToast('لم يتم تعديل الكمية الإفتتاحية , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }
            // this.getStockItems() 
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    payChange(i, item) {
        console.log(item);
        this.selectedItem2.perch_price = +item.pay_price - (.15 * +item.pay_price);
    }
    updateItemArrays(itemId) {
        // this.presentLoadingWithOptions('جاري تحديث البيانات ...') 
        // Fetch the updated item from the backend
        this.api.getItemById(itemId).subscribe((data) => {
            console.log('data in updateItemArrays', data);
            if (data) {
                console.log(data['data']['0'], ' emArrays');
                const updatedItem = data['data']['0'];
                // Update item in items array
                const itemIndex = this.items.findIndex(item => item.id === itemId);
                if (itemIndex !== -1) {
                    this.items[itemIndex] = Object.assign(Object.assign({}, this.items[itemIndex]), updatedItem);
                }
                // Update item in itemsAll array
                const itemAllIndex = this.itemsAll.findIndex(item => item.id === itemId);
                if (itemAllIndex !== -1) {
                    this.itemsAll[itemAllIndex] = Object.assign(Object.assign({}, this.itemsAll[itemAllIndex]), updatedItem);
                }
                console.log(this.itemsAll, 'all items');
                this.storage.set('itemsLocal', this.itemsAll).then((response) => {
                });
                // this.presentToast('تم تحديث البيانات بنجاح', 'success');
            }
            else {
                //this.presentToast('لم يتم العثور على البيانات المحدثة', 'danger');
            }
        }, (err) => {
            console.error(err);
            //this.presentToast('حدث خطأ أثناء تحديث البيانات', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    doAfterDissmiss(data) {
        if (data.role == 'edit') {
            //console.log('edit' ,data.data)
            this.update(data.data);
        }
        else if (data.role == 'save') {
            //console.log('save')
            this.save(data.data);
        }
        else if (data.role == 'dele') {
            //console.log('dele') 
            this.delete();
        }
        else if (data.role == 'price' && data.data.status == 'plus') {
            //console.log('plus') 
            this.incresePrice(data.data);
        }
        else if (data.role == 'price' && data.data.status == 'minus') {
            //console.log('plus') 
            this.decreasePrice(data.data);
        }
        else if (data.role == 'settings') {
            //console.log('settings' , data.data) 
            this.setColSetting(data.data);
            //   this.decreasePrice(data.data) 
        }
        else if (data.role == 'filter') {
            if (data.data[4] == 'filter') {
                //console.log('filter' , data.data) 
                this.applyFilter(data.data);
                this.filterArray = data.data[1];
                this.store_fltTot = data.data[1].reduce((acc, obj) => { return acc + (+obj.perch_price * +obj.quantity); }, 0);
            }
            else if (data.data[4] == 'clear') {
                this.removeFilter();
            }
        }
    }
    ngOnInit() {
        //   this.loading = true 
        this.setSortArayy();
        setTimeout(() => {
            this.getAllStockItems();
        }, 2000);
        //  setTimeout(() => {
        //   this.subiscribtionItem = this.behavApi.currentItem.subscribe(items=>{
        //     //console.log('items page behavApiRespnse',items)
        //     if(items.length >0){
        //        this.items = items
        //       this.prepareOnNotif()
        //     }
        //   })
        //    this.subiscribtionNotif= this.behavApi.currentNotif.subscribe(notif=>{
        //     //console.log('notif page currentNotif behavApiRespnse',notif)
        //     this.notifArr = notif
        //    })
        //   }, 10000); 
    }
    ionViewDidEnter() {
        ///setTimeout(() => {
        // //check all changes in case notif arr >0 
        //  this.subiscribtionNotif = this.behavApi.currentNotif.subscribe(notif=>{
        //   //console.log('notif page currentNotif behavApiRespnse',notif) 
        //    if(notif.length == 0){
        //     this.notifArr = []
        //    }else{
        //     this.notifArr =  notif[0]  
        //    }
        //   if(this.notifArr.length> 0){ 
        //     this.showNotif = true
        //     this.itemsLocal = notif[1] 
        //     this.items =  this.itemsLocal 
        //     this.prepareOnNotif()
        //     this.storage.get('LogHistoryLocal').then((response) => { 
        //       if (response) {
        //         this.LogHistoryLocalArr = response  
        //       } 
        //     });
        //   } else {
        //     //console.log('no updates')
        //     this.showNotif = false 
        //   } 
        //   })
        //  }, 10000); 
    }
    ionViewDidLeave() {
    }
    getAppInfo() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.user_info = response;
            }
        });
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
            }
        });
        this.storage.get('STORE_INFO').then((response) => {
            this.loading = true;
            if (response) {
                this.store_info = response;
                //console.log(response)
                //console.log(this.store_info) 
                //  this.getStockItems()  
            }
        });
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.items = response;
                //console.log(response)
                //console.log('items' ,this.items)
                // this.prepareOnNotif() 
                // this.getAllStockItems()
                // this.getStockItems()
            }
        });
        // this.storage.get('LogHistoryLocal').then((response) => {
        //   //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
        //   if (response) {
        //     this.LogHistoryLocalArr = response
        //   }   
        // });
        this.storage.get('colSetting').then((response) => {
            if (response) {
                this.colSetting = response;
                //console.log('colSetting',this.colSetting)  
            }
        });
        this.getStockItems();
        // this.getAllStockItems()
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                duration: 5000,
                message: msg,
                translucent: true,
                // cssClass: 'custom-class custom-loading',
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            //console.log('Loading dismissed with role:', role);
        });
    }
    createPdf() {
        this.exportMode = true;
        let pdfBlock = document.getElementById('exceltable');
        let options = {
            background: 'white',
            height: pdfBlock.clientWidth,
            width: pdfBlock.clientHeight,
        };
        dom_to_image__WEBPACK_IMPORTED_MODULE_9___default().toPng(pdfBlock, options)
            .then((fileUrl) => {
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('p', 'mm', 'a4');
            doc.addImage(fileUrl, 'PNG', 10, 10, 240, 180);
            doc.save('items.pdf');
            // let docRes = doc.output();
            // let buffer = new ArrayBuffer(docRes.length);
            // let array = new Uint8Array(buffer);
            // for (var i = 0; i < docRes.length; i++) {
            //   array[i] = docRes.charCodeAt(i);
            // }
            // const directory = this.file.dataDirectory;
            // const fileName = 'user-data.pdf';
            // let options: IWriteOptions = {
            //   replace: true,
            // };
            // this.file
            //   .checkFile(directory, fileName)
            //   .then((res) => {
            //     this.file
            //       .writeFile(directory, fileName, buffer, options)
            //       .then((res) => {
            //         //console.log('File generated' + JSON.stringify(res));
            //         this.fileOpener
            //           .open(this.file.dataDirectory + fileName, 'application/pdf')
            //           .then(() => //console.log('File is exported'))
            //           .catch((e) => //console.log(e));
            //       })
            //       .catch((error) => {
            //         //console.log(JSON.stringify(error));
            //       });
            //   })
            //   .catch((error) => {
            //     this.file
            //       .writeFile(directory, fileName, buffer)
            //       .then((res) => {
            //         //console.log('File generated' + JSON.stringify(res));
            //         this.fileOpener
            //           .open(this.file.dataDirectory + fileName, 'application/pdf')
            //           .then(() => //console.log('File exported'))
            //           .catch((e) => //console.log(e));
            //       })
            //       .catch((error) => {
            //         //console.log(JSON.stringify(error));
            //       });
            //   });
        })
            .catch(function (error) {
            console.error(error);
        });
    }
    openPDF() {
        this.exportMode = true;
        let DATA = document.getElementById('exceltable');
        //console.log(DATA.width)
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(DATA).then((canvas) => {
            let fileWidth = 208;
            let fileHeight = (canvas.height * fileWidth) / canvas.width;
            const FILEURI = canvas.toDataURL('image/png');
            let PDF = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('l', 'mm', 'a4');
            let position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
            PDF.save('items.pdf');
            this.exportMode = false;
        });
    }
    exportexcel() {
        this.exportMode = true;
        /* table id is passed over here */
        let element = document.getElementById('exceltable');
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.table_to_sheet(element);
        /* generate workbook and add the worksheet */
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_13__.writeFile(wb, this.fileName);
        this.exportMode = false;
    }
    getStockItems() {
        console.log('data inrange');
        this.loading = true;
        const startRange = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endRange = this.currentPage * this.itemsPerPage;
        this.api.readStockInrange(startRange, endRange).subscribe(data => {
            console.log('data inrange', data);
            let res = data;
            this.items = res['data'];
            this.totalItems = this.items[0]['totalCount'];
            this.sortingArrayOrign = this.items;
            this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
            this.prepareFilters();
            this.setSortArayy();
            // this.store_tot = 0
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
            if (this.colSetting) {
            }
            else {
                this.setColSetting();
            }
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
        //     this.api.getAllStockItemsWithouteCounts(this.store_info.id ,this.year.id).subscribe(data =>{
        //       console.log('data inrange',data)
        //       let res = data
        //       let items = res['data']  
        //       this.storage.set('itemsLocal' , items).then((response) => {
        //       }); 
        //   this.prepareFilters()
        //   this.setSortArayy()
        //  this.store_tot = 0
        //  this.store_tot = this.items.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
        //  if(this.colSetting){
        //  }else{
        //   this.setColSetting()
        //  }
        //     }, (err) => {
        //     //console.log(err);
        //   } ,
        //     ()=>{
        //     this.loading = false
        //   }
        //     ) 
    }
    // Go to next page
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.getStockItems();
        }
    }
    // Go to previous page
    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.getStockItems();
        }
    }
    // Go to specific page
    goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.getStockItems();
        }
    }
    // Change items per page
    changeItemsPerPage(event) {
        this.itemsPerPage = parseInt(event.detail.value);
        this.currentPage = 1; // Reset to first page
        this.getStockItems();
    }
    // Get page numbers for pagination controls
    getPageNumbers() {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        let startPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = startPage + maxPagesToShow - 1;
        if (endPage > this.totalPages) {
            endPage = this.totalPages;
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }
    getAllStockItems() {
        console.log('getAllStockItems');
        this.itemsAll = [];
        this.loadingTot = true;
        this.api.getAllStockItemsWithouteCounts(this.store_info.id, this.year.id).subscribe(data => {
            console.log('data inrange', data);
            let res = data;
            let items = res['data'];
            this.itemsAll = items;
            this.itemsAll.forEach(element => {
                if ((+element.availQty - +element.qtyReal) < 0) {
                    element.perchQuantity = +element.perchQuantity + Math.abs((+element.availQty - +element.qtyReal));
                }
                else if ((+element.availQty - +element.qtyReal) > 0) {
                    element.salesQuantity = +element.salesQuantity + (+element.availQty - +element.qtyReal);
                }
                element.availQty = +element.firstQuantity + +element.perchQuantity - +element.salesQuantity;
                element.stockValuePayPrice = +element.availQty * +element.pay_price;
            });
            this.store_tot = 0;
            this.store_tot = this.itemsAll.reduce((acc, obj) => { return acc + +Math.abs(obj.stockValuePayPrice); }, 0);
            this.storage.set('itemsLocal', items).then((response) => {
            });
            this.loadingTot = true;
            this.prepareFilters();
            this.setSortArayy();
            //  this.store_tot = this.items.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
            if (this.colSetting) {
            }
            else {
                this.setColSetting();
            }
        }, (err) => {
            //console.log(err);
            this.loadingTot = false;
        }, () => {
            this.loadingTot = false;
        });
    }
    prepareOnNotif() {
        this.sortingArrayOrign = this.items;
        // this.items.forEach(element => {
        //   if(+element.tswiaQuantity > 0){
        //     element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 
        //   }else if(+element.tswiaQuantity < 0){
        //     element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
        //   }
        //   element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
        // });
        this.prepareFilters();
        this.setSortArayy();
        // this.store_tot = 0
        // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
        if (this.colSetting) {
        }
        else {
            this.setColSetting();
        }
        this.loading = false;
    }
    //    sumStocksItems(){
    //     this.loading = true
    //     this.api.stockItems(this.store_info.id,this.year.id).subscribe(data =>{
    //       //console.log(data)
    //       let res = data
    //       let arr = res['data']
    //       for (let index = 0; index < this.items.length; index++) {
    //         const element = this.items[index];
    //         let flt = arr.filter(x=>x.id == element.id)
    //         if(flt.length>0){
    //           element.perchQuantity =  +element.perchQuantity + +flt[0].perchQuantity
    //         //  element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
    //           element.salesQuantity =  +element.salesQuantity + +flt[0].salesQuantity
    //         }
    //       }  
    //       this.sortingArrayOrign = this.items
    //       this.items.forEach(element => {
    //         element.quantity =  (+element.perchQuantity + +element.firstQuantity)  - +element.salesQuantity  
    //       });
    //       this.prepareFilters()
    //       this.setSortArayy()
    //      this.store_tot = 0
    //      this.store_tot = this.items.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
    //      if(this.colSetting){
    //      }else{
    //       this.setColSetting()
    //      }
    //     }, (err) => {
    //     //console.log(err);
    //   } ,
    //     ()=>{
    //     this.loading = false
    //   }
    //   )  
    // }
    setColSetting(data) {
        if (data) {
            this.colSetting = data;
            //console.log("col",this.colSetting)
            this.storage.set('colSetting', this.colSetting).then((response) => {
            });
        }
    }
    prepareFilters() {
        const idsbrand = this.items.map(o => o.brand);
        //console.log(idsbrand)
        const filtered = this.items.filter(({ brand }, index) => !idsbrand.includes(brand, index + 1));
        //console.log(filtered)
        for (let index = 0; index < filtered.length; index++) {
            const element = filtered[index];
            if (element.brand != "") {
                this.brandList.push({
                    "brand": element.brand,
                    "selected": false
                });
            }
        }
        //console.log(this.brandList)
        const idsm = this.items.map(o => o.model);
        //console.log(idsm)
        const filteredm = this.items.filter(({ model }, index) => !idsm.includes(model, index + 1));
        //console.log(filteredm)
        for (let index = 0; index < filteredm.length; index++) {
            const element = filteredm[index];
            if (element.model != "") {
                this.modelList.push({
                    "model": element.model,
                    "selected": false
                });
            }
        }
        //console.log(this.modelList) 
        this.filterArrayOrign = this.items;
        this.filterArray = this.filterArrayOrign;
        //console.log(this.filterArray ,  this.filterArrayOrign)
    }
    setSortArayy() {
        // all colomns and push them to sort array
        this.sortStatus.push({
            "col": "id",
            "type": null
        }, {
            "col": "item_name",
            "type": null
        }, {
            "col": "item_desc",
            "type": null
        }, {
            "col": "model",
            "type": null
        }, {
            "col": "part_no",
            "type": null
        }, {
            "col": "brand",
            "type": null
        }, {
            "col": "min_qty",
            "type": null
        }, {
            "col": "item_unit",
            "type": null
        }, {
            "col": "perch_price",
            "type": null
        }, {
            "col": "pay_price",
            "type": null
        }, {
            "col": "profit",
            "type": null
        }, {
            "col": "quantity",
            "type": null
        }, {
            "col": "total",
            "type": null
        }, {
            "col": "lastSold",
            "type": null
        }, {
            "col": "aliasEn",
            "type": null
        });
        ////console.log('hi there',this.sortStatus.includes(x=>x.type == 1 ? -1: 1))
    }
    sorting(col, type, arr) {
        // col which col cliced
        // type = desc or asc
        // arr = items , filter , search
        //console.log(col ,type ,arr)
        if (col == 'id') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.id > +b.id) ? -1 : 1);
                    this.sortStatus[0].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.id < +b.id) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.id < +b.id) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[0].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.id < +b.id) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.id < +b.id) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.id < +b.id) ? -1 : 1);
                }
            }
        }
        else if (col == 'item_name') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_name > b.item_name) ? -1 : 1);
                    this.sortStatus[1].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_name > b.item_name) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_name > b.item_name) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[1].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_name < b.item_name) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_name < b.item_name) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_name < b.item_name) ? -1 : 1);
                }
            }
        }
        else if (col == 'item_desc') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_desc > b.item_desc) ? -1 : 1);
                    this.sortStatus[2].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_desc > b.item_desc) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_desc > b.item_desc) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[2].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_desc < b.item_desc) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_desc < b.item_desc) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_desc < b.item_desc) ? -1 : 1);
                }
            }
        }
        else if (col == 'model') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.model > b.model) ? -1 : 1);
                    this.sortStatus[3].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.model > b.model) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.model > b.model) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[3].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.model < b.model) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.model < b.model) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.model < b.model) ? -1 : 1);
                }
            }
        }
        else if (col == 'part_no') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.part_no > b.part_no) ? -1 : 1);
                    this.sortStatus[4].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.part_no > b.part_no) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.part_no > b.part_no) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[4].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.part_no < b.part_no) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.part_no < b.part_no) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.part_no < b.part_no) ? -1 : 1);
                }
            }
        }
        else if (col == 'brand') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.brand > b.brand) ? -1 : 1);
                    this.sortStatus[5].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.brand > b.brand) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.brand > b.brand) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[5].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.brand < b.brand) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.brand < b.brand) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.brand < b.brand) ? -1 : 1);
                }
            }
        }
        else if (col == 'min_qty') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.min_qty > b.min_qty) ? -1 : 1);
                    this.sortStatus[6].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.min_qty > b.min_qty) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.min_qty > b.min_qty) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[6].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.min_qty < b.min_qty) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.min_qty < b.min_qty) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.min_qty < b.min_qty) ? -1 : 1);
                }
            }
        }
        else if (col == 'item_unit') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_unit > b.item_unit) ? -1 : 1);
                    this.sortStatus[7].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_unit > b.item_unit) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_unit > b.item_unit) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[7].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_unit < b.item_unit) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_unit < b.item_unit) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.item_unit < b.item_unit) ? -1 : 1);
                }
            }
        }
        else if (col == 'perch_price') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.perch_price > +b.perch_price) ? -1 : 1);
                    this.sortStatus[8].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.perch_price > +b.perch_price) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.perch_price > +b.perch_price) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[8].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.perch_price < +b.perch_price) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.perch_price < +b.perch_price) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.perch_price < +b.perch_price) ? -1 : 1);
                }
            }
        }
        else if (col == 'pay_price') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.pay_price > +b.pay_price) ? -1 : 1);
                    this.sortStatus[9].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.pay_price > +b.pay_price) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.pay_price > +b.pay_price) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[9].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.pay_price < +b.pay_price) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.pay_price < +b.pay_price) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.pay_price < +b.pay_price) ? -1 : 1);
                }
            }
        }
        else if (col == 'profit') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.profit > b.profit) ? -1 : 1);
                    this.sortStatus[10].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.profit > b.profit) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.profit > b.profit) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[10].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.profit < b.profit) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.profit < b.profit) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.profit < b.profit) ? -1 : 1);
                }
            }
        }
        else if (col == 'quantity') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.quantity > +b.quantity) ? -1 : 1);
                    this.sortStatus[11].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.quantity > +b.quantity) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.quantity > +b.quantity) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[11].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.quantity < +b.quantity) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.quantity < +b.quantity) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.quantity < +b.quantity) ? -1 : 1);
                }
            }
        }
        else if (col == 'total') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.total > +b.total) ? -1 : 1);
                    this.sortStatus[12].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.total > +b.total) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.total > b.total) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[12].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.total < +b.total) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.total < +b.total) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (+a.total < +b.total) ? -1 : 1);
                }
            }
        }
        else if (col == 'lastSold') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.lastSoldDate > b.lastSoldDate) ? -1 : 1);
                    this.sortStatus[13].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.lastSoldDate > b.lastSoldDate) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.lastSoldDate > b.lastSoldDate) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[13].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.lastSoldDate < b.lastSoldDate) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.lastSoldDate < b.lastSoldDate) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.lastSoldDate < b.lastSoldDate) ? -1 : 1);
                }
            }
        }
        else if (col == 'aliasEn') {
            if (type == 'desc') {
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.aliasEn > b.aliasEn) ? -1 : 1);
                    this.sortStatus[13].type = 'asc';
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.aliasEn > b.aliasEn) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.aliasEn > b.aliasEn) ? -1 : 1);
                }
            }
            else if (type == 'asc' || type == null) {
                this.sortStatus[13].type = 'desc';
                if (arr == 'items') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.aliasEn < b.aliasEn) ? -1 : 1);
                }
                else if (arr == 'filter') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.aliasEn < b.aliasEn) ? -1 : 1);
                }
                else if (arr == 'search') {
                    this.items = this.sortingArrayOrign.sort((a, b) => (a.aliasEn < b.aliasEn) ? -1 : 1);
                }
            }
        }
        //  
    }
    applyFilter(data) {
        this.filterMode = true;
        this.modelList = data[2];
        this.brandList = data[3];
        //console.log( this.modelList , this.brandList ,data )
        this.modelList.forEach(element => {
            if (element.selected == true) {
                this.showMdel = true;
            }
        });
        this.brandList.forEach(element => {
            if (element.selected == true) {
                this.showBrand = true;
            }
        });
    }
    setFilter() {
        this.filterArray = this.items;
        let flt = [];
        for (let index = 0; index < this.brandList.length; index++) {
            const element = this.brandList[index];
            if (element.selected == true) {
                let fltbre = [];
                fltbre = this.filterArray.filter(x => x.brand == element.brand);
                if (fltbre.length > 0) {
                    fltbre.forEach(element => {
                        flt.push(element);
                    });
                }
            }
        }
        for (let index = 0; index < this.modelList.length; index++) {
            const element = this.modelList[index];
            if (element.selected == true) {
                let fltbre = [];
                fltbre = this.filterArray.filter(x => x.model == element.model);
                if (fltbre.length > 0) {
                    fltbre.forEach(element => {
                        flt.push(element);
                    });
                }
            }
        }
        this.filterArray = flt;
        this.store_fltTot = flt.reduce((acc, obj) => { return acc + (+obj.perch_price * +obj.quantity); }, 0);
        //console.log( 'store_fltTot',this.store_fltTot)
    }
    removeFilter(type) {
        this.presentLoadingWithOptions('....');
        if (type == 'model') {
            this.modelList.forEach(element => {
                element.selected = false;
            });
            this.setFilter();
        }
        else if (type == 'brand') {
            this.brandList.forEach(element => {
                element.selected = false;
            });
            this.setFilter();
        }
        else {
            this.modelList.forEach(element => {
                element.selected = false;
            });
            this.brandList.forEach(element => {
                element.selected = false;
            });
            this.setFilter();
        }
        let bl = 0;
        for (let index = 0; index < this.brandList.length; index++) {
            const element = this.brandList[index];
            if (element.selected == true) {
                bl = bl + 1;
            }
        }
        if (bl > 0) {
            this.showBrand = true;
        }
        else {
            this.showBrand = false;
        }
        let bl2 = 0;
        for (let index = 0; index < this.modelList.length; index++) {
            const element = this.modelList[index];
            if (element.selected == true) {
                bl2 = bl2 + 1;
            }
        }
        if (bl2 > 0) {
            this.showMdel = true;
        }
        else {
            this.showMdel = false;
        }
        if (bl == 0 && bl2 == 0) {
            this.filterArray = this.items;
            this.filterMode = false;
        }
        this.store_fltTot = this.filterArray.reduce((acc, obj) => { return acc + (+obj.perch_price * +obj.quantity); }, 0);
        //console.log( 'store_fltTot',this.store_fltTot)
        this.loadingController.dismiss();
    }
    filterItems(searchTerm) {
        //console.log(searchTerm)  
        this.searcResult = this.itemsAll.filter(item => item.item_name.toLowerCase().includes(searchTerm.toLowerCase()));
        //console.log(this.searcResult) 
    }
    searching($event) {
        if (this.searchTerm.length > 0) {
            this.searchMode = true;
            console.log($event, this.itemsAll);
        }
        else {
            this.searchMode = false;
        }
    }
    clearSearch() {
        //console.log('clear')
        this.searchMode = false;
        // this.searcResult = []
    }
    //  FocusSearch(){
    //     //console.log('FocusSearch')
    //     this.searchMode = true 
    //     this.searcResult = []
    // }	
    cancelSearch() {
        //console.log('cancelSearch' ,this.items)
        this.searchMode = false;
        this.searcResult = [];
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: color,
                cssClass: 'cust_Toast',
                mode: 'ios',
                position: 'top'
            });
            toast.present();
        });
    }
    save(mdata) {
        this.presentLoadingWithOptions('جاري حفظ البيانات ...');
        this.api.saveitemMulti(mdata[0]).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.firstq = { id: null, item_id: data['message'], store_id: this.store_info.id, quantity: mdata[1].quantity, pay_price: mdata[0].pay_price, perch_price: mdata[0].perch_price, fq_year: '2022' };
                this.saveFierstQty(mdata[0]);
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveFierstQty(itemData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveFirstQty(this.firstq).subscribe(data => {
                //console.log(data)  
                if (data['message'] != 'Post Not Created') {
                    this.firstq.id = data['message'];
                }
                this.saveLogHistory(itemData, this.firstq, 'insert');
                this.presentToast('تم الحفظ', 'success');
            }, (err) => {
                //console.log(err);
                this.presentToast('1لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }, () => {
                this.loadingController.dismiss();
            });
        });
    }
    generateRandom(role) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    prepareLogHistory(itemData, firstq, role) {
        this.logHistoryArr = [];
        let dt = new Date();
        let typee = "";
        if (role == 'insert') {
            typee = "insert firstq";
            itemData.id = firstq.item_id;
            this.logHistoryArr.push({
                "id": this.firstq.id,
                "logRef": this.generateRandom(typee),
                "userId": this.user_info.id,
                "typee": typee,
                "datee": moment__WEBPACK_IMPORTED_MODULE_7__(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                "logStatus": 0,
                "logToken": JSON.stringify(firstq),
                "yearId": this.year.id,
                "store_id": this.store_info.id
            });
            typee = "insert item";
            this.logHistoryArr.push({
                "id": null,
                "logRef": this.generateRandom(typee),
                "userId": this.user_info.id,
                "typee": typee,
                "datee": moment__WEBPACK_IMPORTED_MODULE_7__(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                "logStatus": 0,
                "logToken": JSON.stringify(itemData),
                "yearId": this.year.id,
                "store_id": this.store_info.id
            });
        }
        else {
            // typee = "insert firstq"
            // firstq.item_id =  itemData.id 
            // this.logHistoryArr.push(
            //   {
            //     "id":this.firstq.id,
            //     "logRef":this.generateRandom(),
            //     "userId": this.user_info.id,
            //     "typee":typee,
            //     "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
            //     "logStatus":0,
            //     "logToken": JSON.stringify(firstq)  ,
            //     "yearId": this.year.id,
            //     "store_id" :this.store_info.id
            //   }
            //   )
            if (role == 'update') {
                typee = "update item";
            }
            else if (role == 'delete') {
                typee = "delete item";
            }
            this.logHistoryArr.push({
                "id": null,
                "logRef": this.generateRandom(typee),
                "userId": this.user_info.id,
                "typee": typee,
                "datee": moment__WEBPACK_IMPORTED_MODULE_7__(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                "logStatus": 0,
                "logToken": JSON.stringify(itemData),
                "yearId": this.year.id,
                "store_id": this.store_info.id
            });
        }
        return this.logHistoryArr;
    }
    saveLogHistory(itemData, firstq, role) {
        let mdata = this.prepareLogHistory(itemData, firstq, role);
        //console.log('mdata',mdata)
        this.api.saveLogHistoryMulti(mdata[0], mdata[1], role).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.getStockItems();
                this.logHistoryArr = [];
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveItemStock() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveItemStock(this.itemSstock).subscribe(data => {
                //console.log(data)  
                // this.getStockItems()
                this.presentToast('تم الحفظ بنجاح', 'success');
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
                this.loadingController.dismiss();
            });
        });
    }
    incresePrice(data) {
        this.presentLoadingWithOptions('جاري تعديل الأسعار ...');
        this.api.increasePrice(data.payval, data.perchval).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Updated') {
                this.presentToast('تم التعديل بنجاح', 'success');
                //this.getStockItems()
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    decreasePrice(data) {
        this.presentLoadingWithOptions('جاري تعديل الأسعار ...');
        this.api.decreasePrice(data.payval, data.perchval).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Updated') {
                this.presentToast('تم التعديل بنجاح', 'success');
                this.getStockItems();
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: 'هل تريد حذف السجل ؟ ',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            this.delete();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteItem(item) {
        //console.log(item)
        this.selectedItem = item;
        if (item.salesQuantity > 0 || item.perchQuantity > 0) {
            this.presentToast('لا يمكن حذف الصنف , توجد كميات في المخزون    ', 'danger');
        }
        else {
            this.presentAlertConfirm();
        }
    }
    delete() {
        this.presentLoadingWithOptions('جاري حذف البيانات ...');
        this.api.deleteItems(this.selectedItem.id).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.presentToast('تم الحذف بنجاح', 'success');
                this.saveLogHistory(this.selectedItem, undefined, 'delete');
                // this.getStockItems() 
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
};
ItemsPage.ctorParameters = () => [
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__.File },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__.FileOpener },
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_8__.StockServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController }
];
ItemsPage.propDecorators = {
    onKeydownHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.HostListener, args: ['document:keydown.escape', ['$event'],] }],
    popoverNotif33: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['popoverNotif33',] }],
    exceltable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['exceltable',] }]
};
ItemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-items',
        template: _items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemsPage);



/***/ }),

/***/ 66603:
/*!**************************************************!*\
  !*** ./src/app/items/items.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".showMe {\n  color: black;\n}\n\n.hideMe {\n  display: none;\n}\n\n.custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custContent {\n  white-space: nowrap;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.custCol {\n  overflow-x: auto;\n  height: 400px;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 4px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7QUFDRDs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdJO0VBQ0ksa0JBQUE7QUFBUjs7QUFFQTtFQUdFLG1CQUFBO0FBREY7O0FBR0k7RUFDSSxnQkFBQTtBQUFSOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0U7RUFDSyxrQkFBQTtFQUNILFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUNFO0VBQVEseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsWUFBQTtFQUFjLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsWUFBQTtBQVF2RyIsImZpbGUiOiJpdGVtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd01le1xuIGNvbG9yOmJsYWNrO1xufVxuLmhpZGVNZXtcbiAgZGlzcGxheTogbm9uZTsgXG4gfVxuXG5cbiBcbiBcbi5jdXN0SW5wdXR7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuY3VzdC1jYXJke1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuLmN1c3RDb250ZW50e1xuICBcbiAgXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cbi5jdXN0Q29se1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuICAudGFibGV7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTJweDsgXG4gICAgXG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIH1cbiAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA0cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fSJdfQ== */";

/***/ }),

/***/ 1264:
/*!**************************************************!*\
  !*** ./src/app/items/items.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" class=\"poRel\" (click)=\"presentPopover($event)\">\n      <div class=\"poRel\">\n        <div class=\"posAb noti\">\n         <ion-label>\n           <ion-text *ngIf=\"showNotif == true && notifArr.length> 0\">{{notifArr.length}}</ion-text> \n         </ion-label> \n       </div>\n       <div (click)=\"presentPopover($event)\">\n         <ion-icon name=\"notifications-outline\"  class=\"dark\"  [ngClass]=\"{'warn':showNotif == true && notifArr.length> 0 , 'dark': showNotif == false }\"></ion-icon> \n       </div>\n     </div> \n     <ion-button fill=\"clear\" (click)=\"presentPopover($event)\">\n      <ion-label><ion-text color=\"dark\" >الإشعارات</ion-text></ion-label>  \n     </ion-button>\n    </ion-buttons>  \n    <ion-title>الأصنــاف</ion-title>\n  </ion-toolbar>\n  <ion-popover  #popoverNotif33 [isOpen]=\"isOpenNotif\" (didDismiss)=\"didDissmis()\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar dir=\"rtl\" class=\"ion-text-center\">\n          الإشعارات\n        </ion-toolbar>\n      </ion-header>\n      <ion-content  dir=\"rtl\">  \n        <ion-list class=\"ion-text-center\"  *ngIf=\"LogHistoryLocalArr.length>0\">\n         <ion-item *ngFor=\"let log of LogHistoryLocalArr\" >\n         <ion-grid >\n           <ion-row>\n             <ion-col size=\"9\"> \n                 {{log.desc}}    \n             </ion-col>\n             <ion-col size=\"3\">\n               <ion-text color = \"primary\">{{log.datee | dateAgo}}</ion-text>\n             </ion-col>\n           </ion-row>\n         </ion-grid>\n       </ion-item> \n        </ion-list> \n      </ion-content>\n    </ng-template>\n  </ion-popover>\n</ion-header>\n\n<ion-content class=\"custContent\">\n  <ion-grid>\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-margin\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"5\"> \n                <ion-item lines=\"none\" >\n                  <!-- <input placeholder=\"اختر  حساب العميل\" list=\"accounts\" id=\"account\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                 \n                  <datalist style=\"border: none;\" id=\"accounts\" style=\"height: auto;max-height: 20px;\">\n                    <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                </datalist> -->\n                <!-- <ion-input [(ngModel)]=\"searchTerm\" placeholder=\"بحــث\"></ion-input> -->\n                <ion-searchbar  [(ngModel)]=\"searchTerm\" (ionChange)=\"searching($event)\" showCancelButton=\"never\" placeholder=\"بحــث\" ></ion-searchbar>\n                </ion-item>  \n  \n              </ion-col>\n              <ion-col size=\"7\" >\n                <ion-item lines=\"none\">\n                  <ion-buttons slot=\"end\">\n                    <ion-button  fill=\"outline\" color=\"success\" shape=\"round\"  (click)=\"presentModal('null', 'settings')\"  > \n                      <ion-icon name=\"settings-outline\" color=\"success\"></ion-icon>\n                     <ion-label><ion-text color=\"dark\"> إخفاء الأعمدة</ion-text></ion-label> \n                    </ion-button>\n                    <ion-button  fill=\"outline\" color=\"success\" shape=\"round\"   (click)=\"presentModal('null', 'price')\"  > \n                      <ion-icon name=\"create-outline\" color=\"success\"></ion-icon>\n                      <ion-label><ion-text color=\"dark\">تعديل الأسعار</ion-text></ion-label> \n                    </ion-button>\n                    <ion-button  fill=\"outline\" color=\"success\" shape=\"round\"  (click)=\"presentModal('null', 'save')\"  > \n                      <ion-icon name=\"add-circle-outline\" color=\"success\"></ion-icon>\n                     <ion-label><ion-text color=\"dark\">صنف جديد</ion-text></ion-label> \n                    </ion-button>\n                    <ion-button  fill=\"outline\" color=\"success\"  shape=\"round\"  (click)=\"exportexcel()\"  > \n                     \n                      <ion-icon name=\"document-outline\" color=\"success\"></ion-icon>\n                     <ion-label class=\"ion-margin-start ion-margin-end\"><ion-text color=\"dark\"> تصدير XLS </ion-text></ion-label> \n                    </ion-button>\n                    <ion-button  fill=\"outline\" color=\"success\"  shape=\"round\"  (click)=\"openPDF()\"  > \n                     \n                      <ion-icon name=\"document-outline\" color=\"success\"></ion-icon>\n                     <ion-label class=\"ion-margin-start ion-margin-end\"><ion-text color=\"dark\"> تصدير PDF </ion-text></ion-label> \n                    </ion-button>\n                  </ion-buttons>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row dir=\"rtl\">\n       <!--<ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-label>\n          <strong>اسم الفرع :</strong> {{store_info.store_name}}\n          </ion-label>\n      </ion-col> -->\n\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <!-- <ion-label *ngIf = \"filterMode == true\"> \n          <strong >قيمة المخزون :</strong> {{store_fltTot.toFixed(2)}} \n          </ion-label> -->\n          <ion-label *ngIf = \"filterMode == false\">\n            <ion-text><strong >قيمة المخزون :  </strong> </ion-text>\n          </ion-label> \n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-start\">\n          <ion-label *ngIf = \"filterMode == false\"> \n            <ion-text *ngIf = \"loadingTot == false\">{{store_tot.toFixed(2)}}</ion-text> \n            <ion-text *ngIf = \"loadingTot == true\">\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </ion-text>\n          </ion-label> \n      </ion-col>\n    </ion-row>\n    <ion-row dir=\"rtl\"> \n      <ion-col size=\"5\" >\n        <ion-item lines=\"none\">\n          <!-- filter buttons -->\n          <!-- <ion-buttons >\n            <ion-button  fill=\"outline\" color=\"success\"  shape=\"round\"  (click)=\"presentModal('null', 'filter')\"  > \n              <ion-icon name=\"filter-outline\" color=\"success\"></ion-icon>\n             <ion-label class=\"ion-margin-start ion-margin-end\"><ion-text color=\"dark\"> فلتر </ion-text></ion-label> \n            </ion-button>\n             <ion-button *ngIf=\"showBrand == true\"  fill=\"outline\" color=\"medium\" shape=\"round\"   (click)=\"removeFilter('brand')\"  > \n              <ion-label><ion-text color=\"dark\">  الماركة (brand) </ion-text></ion-label> \n              <ion-icon name=\"close\" color=\"medium\"></ion-icon> \n            </ion-button> \n            <ion-label class=\"ion-margin-right\"><strong>:</strong></ion-label>\n            <ion-button *ngIf=\"showMdel == true\" fill=\"outline\" color=\"medium\" shape=\"round\"   (click)=\"removeFilter('model')\"  > \n              \n              <ion-label><ion-text color=\"dark\"> الموديل (model)  </ion-text></ion-label>\n              <ion-icon name=\"close\" color=\"medium\"></ion-icon> \n            </ion-button> \n          </ion-buttons> -->\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"7\" >\n        <ion-buttons>\n         \n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n<!-- \n  <ion-grid *ngIf=\"items\">\n    <ion-row> \n      <ion-col size=\"2\" class=\"ion-no-padding ion-padding-top\">\n        <ion-label>\n          <strong>تصفية النتائج :</strong>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"6\" > \n        <ion-badge (click)=\"prepareFilters()\" class=\"ion-padding\" >\n          <ion-label class=\"ion-margin-end\">All</ion-label>\n        </ion-badge>\n        <ion-select   multiple=\"true\" cancelText=\"cancel\" okText=\"ok\">\n          <ion-select-option *ngFor=\"let b of brandList\" value=\"b.brand\">\n            {{b.brand}}\n          </ion-select-option>\n        </ion-select>\n        <ion-badge (click)=\"filter('all')\" class=\"ion-padding\" [ngClass]=\"{'selected': selectedIdx == 'all' , 'noneSelected': selectedIdx !='all' }\">\n          <ion-label class=\"ion-margin-end\">All</ion-label>\n        </ion-badge>\n        <ion-badge *ngFor=\"let st of stores ; let i = index\" class=\"ion-padding\" (click)=\"filter(i)\" [ngClass]=\"{'selected':+selectedIdx == +st.id  , 'noneSelected': +selectedIdx != +st.id  }\" >\n          <ion-label>{{st.store_name}}</ion-label>\n        </ion-badge>\n      </ion-col>\n       \n    </ion-row>\n  </ion-grid> -->\n\n  <ion-grid>\n    <ion-row dir=\"rtl\" >\n      <ion-col size=\"12\" class=\"ion-no-padding custCol\">\n        <ion-grid>\n          <!-- <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"4\"> \n                     <ion-label  class=\"ion-padding\"><strong>الصنف</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input  list=\"browsers\" id=\"browser\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\">\n                         \n                          <datalist style=\"border: none;\" id=\"browsers\" style=\"height: auto;max-height: 20px;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\"></option>\n                        </datalist>\n                        </ion-item>  \n                    </ion-col>\n                    <ion-col size=\"2\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input  [(ngModel)]=\"selectedItem.qty\"  (ionChange)=\"qtyhange($event)\" #qtyId  ></ion-input>\n                      </ion-item> \n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>سعر الوحده</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.pay_price\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"ion-padding\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row> -->\n          <ion-row>\n            <ion-col size=\"12\" >\n               <table  class=\"table\"  *ngIf=\"searchMode == false && filterMode == false && searchTerm == ''\" >\n                <ion-item>\n                <ion-label class=\"ion-padding\"><strong>الاصناف</strong></ion-label>\n                </ion-item>\n                 <tr *ngIf=\"colSetting\">\n                  <th> \n                    التسلسل\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('id', sortStatus[0].type,'items')\">\n                      <ion-icon *ngIf=\"sortStatus[0].type == 'asc' || sortStatus[0].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[0].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.item_name == false , 'showMe': colSetting.item_name == true }\">\n                    الصنف\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('item_name', sortStatus[1].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[1].type == 'asc' || sortStatus[1].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[1].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.item_desc== false , 'showMe': colSetting.item_desc== true }\">اسم الصنف  (English)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('item_desc', sortStatus[0].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[2].type == 'asc' || sortStatus[2].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[2].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.aliasEn== false , 'showMe': colSetting.aliasEn== true }\">اسم  مستعار  (Alias)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('aliasEn', sortStatus[0].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[2].type == 'asc' || sortStatus[2].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[2].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.model == false , 'showMe': colSetting.model == true }\">الموديل (model)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('model', sortStatus[3].type,'items')\">\n                      <ion-icon *ngIf=\"sortStatus[3].type == 'asc' || sortStatus[3].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[3].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                 \n                  <th  [ngClass]=\"{'hideMe': colSetting.part_no == false , 'showMe': colSetting.part_no == true }\">الكود (part no)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('part_no', sortStatus[4].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[4].type == 'asc' || sortStatus[4].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[4].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.brand == false , 'showMe': colSetting.brand == true }\">الماركة (brand) \n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('brand', sortStatus[5].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[5].type == 'asc' || sortStatus[5].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[5].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.min_qty == false , 'showMe': colSetting.min_qty == true }\">اقل كمية (MSQ)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('min_qty', sortStatus[6].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[6].type == 'asc' || sortStatus[6].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[6].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.item_unit== false , 'showMe': colSetting.item_unit== true }\">الوحده (unit)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('item_unit', sortStatus[7].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[7].type == 'asc' || sortStatus[7].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[7].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.perch_price == false , 'showMe': colSetting.perch_price == true }\">سعر الشراء (purch price)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('perch_price', sortStatus[8].type,'items')\">\n                      <ion-icon *ngIf=\"sortStatus[8].type == 'asc' || sortStatus[8].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[8].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.pay_price == false , 'showMe': colSetting.pay_price == true }\">سعر الوحده (selling price)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('pay_price', sortStatus[9].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[9].type == 'asc' || sortStatus[9].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[9].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.profit == false , 'showMe': colSetting.profit == true }\">نسبة الفائدة (profit perc)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('profit', sortStatus[10].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[10].type == 'asc' || sortStatus[10].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[10].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>  \n                  <th  [ngClass]=\"{'hideMe': colSetting.instock == false , 'showMe': colSetting.instock == true }\">المخزون (in stock)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('quantity', sortStatus[11].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[11].type == 'asc' || sortStatus[11].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[11].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.total == false , 'showMe': colSetting.total == true }\">المجموع\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('total', sortStatus[12].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[12].type == 'asc' || sortStatus[12].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[12].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.lastSold == false , 'showMe': colSetting.lastSold == true }\">اخر عملية بيع\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('lastSold', sortStatus[13].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[13].type == 'asc' || sortStatus[13].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[13].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <!-- <th>sales28</th>\n                  <th>sales29</th>\n                  <th>purch28</th>\n                  <th>purch29</th>-->\n                  <th>المخزون الإفتتاحي</th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\"><strong>تعديل</strong>  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.delete == false , 'showMe': colSetting.delete == true }\"><strong>حذف</strong>  </th> \n                 </tr>\n                 <tr *ngFor=\"let item of items ; let i = index\"   (dblclick)=\"prClick(i , item)\">\n                  <!-- <td>{{i+1}}</td> -->\n                  <td>{{item.id}}</td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.item_name == false , 'showMe': colSetting.item_name == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_name}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_name\"  ></ion-input>\n                     </ion-item>\n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.item_desc == false , 'showMe': colSetting.item_desc == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_desc}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_desc\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.aliasEn == false , 'showMe': colSetting.aliasEn == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.aliasEn}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.aliasEn\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.model == false , 'showMe': colSetting.model == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.model}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.model\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.part_no == false , 'showMe': colSetting.part_no == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.part_no}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.part_no\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.brand == false , 'showMe': colSetting.brand == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.brand}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.brand\"  ></ion-input>\n                     </ion-item>\n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.min_qty == false , 'showMe': colSetting.min_qty == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.min_qty}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.min_qty\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.item_unit == false , 'showMe': colSetting.item_unit == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_unit}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_unit\"  ></ion-input>\n                     </ion-item> \n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.perch_price == false , 'showMe': colSetting.perch_price == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.perch_price}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.perch_price\"  ></ion-input>\n                     </ion-item> \n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.pay_price == false , 'showMe': colSetting.pay_price == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.pay_price}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.pay_price\"  ></ion-input>\n                     </ion-item> \n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.profit == false , 'showMe': colSetting.profit == true }\">\n                    <ion-text *ngIf=\"(item.pay_price && item.perch_price) && item.pay_price >= item.perch_price\">\n                      {{(((+item.pay_price - +item.perch_price)/+item.perch_price) * 100).toFixed(2)}}\n                    </ion-text>\n                    <ion-text *ngIf=\"(item.pay_price && item.perch_price) && item.pay_price < item.perch_price\">\n                      {{(((+item.perch_price - +item.pay_price)/+item.perch_price) * 100).toFixed(2)}}\n                    </ion-text>\n                  </td>\n                \n                  <td  [ngClass]=\"{'hideMe': colSetting.instock == false , 'showMe': colSetting.instock == true }\">{{item.quantity}}</td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.total == false , 'showMe': colSetting.total == true }\">{{+item.quantity * +item.perch_price }}</td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.lastSold == false , 'showMe': colSetting.lastSold == true }\">{{item.lastSoldDate }}</td>\n                  <!-- new -->\n                  <!-- <td   >{{item.sales28 }}</td>\n                  <td   >{{item.salesQuantity }}</td>\n                  <td   >{{item.purch28 }}</td> \n                  <td   >{{item.perchQuantity }}</td> -->\n                  <td>\n                     <ion-item *ngIf=\"showMe == i\">\n                    <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.quantity\"  ></ion-input>\n                     </ion-item>\n\n                    <ion-text *ngIf=\"showMe != i\">\n                      {{item.firstQuantity}}\n                    </ion-text> \n                  </td>\n                  \n\n                  <!-- end new -->\n\n                  <td  [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\">\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"presentModal(item.id , 'edit')\">\n                      <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon> \n                    </ion-button>\n                  </td>\n                   <td  [ngClass]=\"{'hideMe': colSetting.delete == false , 'showMe': colSetting.delete == true }\">\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(item)\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                    </ion-button>\n                  </td>  \n                 </tr> \n                 <tr  *ngIf=\"loading == true \" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                 </tr>\n               </table>  \n                <!-- filte mode  -->\n                <table  class=\"table\"  *ngIf=\"filterMode == true && searchTerm == ''\" >\n                  <tr *ngIf=\"colSetting\">\n                   <th>التسلسل</th>\n                   <th  [ngClass]=\"{'hideMe': colSetting.item_name == false , 'showMe': colSetting.item_name == true }\">\n                     الصنف\n                   </th>\n                   <th  [ngClass]=\"{'hideMe': colSetting.item_desc== false , 'showMe': colSetting.item_desc== true }\">اسم الصنف  (English)</th>\n                   <th  [ngClass]=\"{'hideMe': colSetting.aliasEn== false , 'showMe': colSetting.aliasEn== true }\">اسم مستعار   (Alias) </th>  \n                   <th  [ngClass]=\"{'hideMe': colSetting.model == false , 'showMe': colSetting.model == true }\">الموديل (model)</th>\n                  \n                   <th  [ngClass]=\"{'hideMe': colSetting.part_no == false , 'showMe': colSetting.part_no == true }\">الكود (part no)</th>\n                   <th  [ngClass]=\"{'hideMe': colSetting.brand == false , 'showMe': colSetting.brand == true }\">الماركة (brand) </th> \n                   <th  [ngClass]=\"{'hideMe': colSetting.min_qty == false , 'showMe': colSetting.min_qty == true }\">اقل كمية (MSQ)</th>\n                   <th  [ngClass]=\"{'hideMe': colSetting.item_unit== false , 'showMe': colSetting.item_unit== true }\">الوحده (unit)</th> \n                   <th  [ngClass]=\"{'hideMe': colSetting.perch_price == false , 'showMe': colSetting.perch_price == true }\">سعر الشراء (purch price)</th>\n                   <th  [ngClass]=\"{'hideMe': colSetting.pay_price == false , 'showMe': colSetting.pay_price == true }\">سعر الوحده (selling price)</th> \n                   <th  [ngClass]=\"{'hideMe': colSetting.profit == false , 'showMe': colSetting.profit == true }\">نسبة الفائدة (profit perc)</th>  \n                   <th  [ngClass]=\"{'hideMe': colSetting.instock == false , 'showMe': colSetting.instock == true }\">المخزون (in stock)</th>\n                   <th  [ngClass]=\"{'hideMe': colSetting.lastSold == false , 'showMe': colSetting.lastSold == true }\">اخر عملية بيع\n                    \n                  </th>\n                   <th  [ngClass]=\"{'hideMe': colSetting.total == false , 'showMe': colSetting.total == true }\">المجموع</th>\n                   <th  [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\"><strong>تعديل</strong>  </th> \n                   <th  [ngClass]=\"{'hideMe': colSetting.delete == false , 'showMe': colSetting.delete == true }\"><strong>حذف</strong>  </th> \n                  </tr>\n                  <tr *ngFor=\"let item of filterArray ; let i = index\"   (dblclick)=\"prClick(i , item)\">\n                    <td>{{i+1}}</td>\n                     \n                   <td  [ngClass]=\"{'hideMe': colSetting.item_name == false , 'showMe': colSetting.item_name == true }\">\n                     <ion-text *ngIf=\"showMe != i\">{{item.item_name}}</ion-text>\n                     <ion-item *ngIf=\"showMe == i\">\n                       <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_name\"  ></ion-input>\n                      </ion-item>\n                   </td> \n                   <td  [ngClass]=\"{'hideMe': colSetting.item_desc == false , 'showMe': colSetting.item_desc == true }\">\n                     <ion-text *ngIf=\"showMe != i\">{{item.item_desc}}</ion-text>\n                     <ion-item *ngIf=\"showMe == i\">\n                       <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_desc\"  ></ion-input>\n                      </ion-item>\n                   </td>\n                   <td  [ngClass]=\"{'hideMe': colSetting.aliasEn == false , 'showMe': colSetting.aliasEn == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.aliasEn}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.aliasEn\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                   <td  [ngClass]=\"{'hideMe': colSetting.model == false , 'showMe': colSetting.model == true }\">\n                     <ion-text *ngIf=\"showMe != i\">{{item.model}}</ion-text>\n                     <ion-item *ngIf=\"showMe == i\">\n                       <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.model\"  ></ion-input>\n                      </ion-item>\n                   </td>\n                   <td  [ngClass]=\"{'hideMe': colSetting.part_no == false , 'showMe': colSetting.part_no == true }\">\n                     <ion-text *ngIf=\"showMe != i\">{{item.part_no}}</ion-text>\n                     <ion-item *ngIf=\"showMe == i\">\n                       <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.part_no\"  ></ion-input>\n                      </ion-item>\n                   </td>\n                   <td  [ngClass]=\"{'hideMe': colSetting.brand == false , 'showMe': colSetting.brand == true }\">\n                     <ion-text *ngIf=\"showMe != i\">{{item.brand}}</ion-text>\n                     <ion-item *ngIf=\"showMe == i\">\n                       <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.brand\"  ></ion-input>\n                      </ion-item>\n                   </td> \n                   <td  [ngClass]=\"{'hideMe': colSetting.min_qty == false , 'showMe': colSetting.min_qty == true }\">\n                     <ion-text *ngIf=\"showMe != i\">{{item.min_qty}}</ion-text>\n                     <ion-item *ngIf=\"showMe == i\">\n                       <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.min_qty\"  ></ion-input>\n                      </ion-item>\n                   </td>\n                   <td  [ngClass]=\"{'hideMe': colSetting.item_unit == false , 'showMe': colSetting.item_unit == true }\">\n                     <ion-text *ngIf=\"showMe != i\">{{item.item_unit}}</ion-text>\n                     <ion-item *ngIf=\"showMe == i\">\n                       <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_unit\"  ></ion-input>\n                      </ion-item> \n                   </td> \n                   <td  [ngClass]=\"{'hideMe': colSetting.perch_price == false , 'showMe': colSetting.perch_price == true }\">\n                     <ion-text *ngIf=\"showMe != i\">{{item.perch_price}}</ion-text>\n                     <ion-item *ngIf=\"showMe == i\">\n                       <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.perch_price\"  ></ion-input>\n                      </ion-item> \n                   </td>\n                   <td  [ngClass]=\"{'hideMe': colSetting.pay_price == false , 'showMe': colSetting.pay_price == true }\">\n                     <ion-text *ngIf=\"showMe != i\">{{item.pay_price}}</ion-text>\n                     <ion-item *ngIf=\"showMe == i\">\n                       <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.pay_price\"  ></ion-input>\n                      </ion-item> \n                   </td> \n                   <td  [ngClass]=\"{'hideMe': colSetting.profit == false , 'showMe': colSetting.profit == true }\">\n                     <ion-text *ngIf=\"(item.pay_price && item.perch_price) && item.pay_price >= item.perch_price\">\n                       {{(((+item.pay_price - +item.perch_price)/+item.perch_price) * 100).toFixed(2)}}\n                     </ion-text>\n                     <ion-text *ngIf=\"(item.pay_price && item.perch_price) && item.pay_price < item.perch_price\">\n                       {{(((+item.perch_price - +item.pay_price)/+item.perch_price) * 100).toFixed(2)}}\n                     </ion-text>\n                   </td>\n                 \n                   <td  [ngClass]=\"{'hideMe': colSetting.instock == false , 'showMe': colSetting.instock == true }\">{{item.quantity}}</td>\n                   <td  [ngClass]=\"{'hideMe': colSetting.total == false , 'showMe': colSetting.total == true }\">{{+item.quantity * +item.perch_price }}</td>\n                   <td  [ngClass]=\"{'hideMe': colSetting.lastSold == false , 'showMe': colSetting.lastSold == true }\">{{item.lastSoldDate }}</td>\n                   <td  [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\">\n                     <ion-button fill=\"clear\" size=\"small\" (click)=\"presentModal(item.id , 'edit')\">\n                       <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon> \n                     </ion-button>\n                   </td>\n                    <td  [ngClass]=\"{'hideMe': colSetting.delete == false , 'showMe': colSetting.delete == true }\">\n                     <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(item)\">\n                       <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                     </ion-button>\n                   </td>  \n                  </tr> \n                  <tr  *ngIf=\"loading == true \" >\n                   <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                   <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                   <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                   <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  </tr>\n                  <tr  *ngIf=\"loading == true\">\n                   <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                   <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  </tr>\n                </table>  \n\n           <!-- ///search  -->\n\n               <table class=\"table\" *ngIf=\"searchMode == true && searchTerm != ''\">\n                 <ion-item>\n                  <ion-label class=\"ion-padding\"><strong>البحث</strong></ion-label>\n                 </ion-item>\n                 <tr *ngIf=\"colSetting\">\n                  <th> \n                    التسلسل\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('id', sortStatus[0].type,'items')\">\n                      <ion-icon *ngIf=\"sortStatus[0].type == 'asc' || sortStatus[0].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[0].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.item_name == false , 'showMe': colSetting.item_name == true }\">\n                    الصنف\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('item_name', sortStatus[1].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[1].type == 'asc' || sortStatus[1].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[1].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.item_desc== false , 'showMe': colSetting.item_desc== true }\">اسم الصنف  (English)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('item_desc', sortStatus[0].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[2].type == 'asc' || sortStatus[2].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[2].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.aliasEn== false , 'showMe': colSetting.aliasEn== true }\">اسم  مستعار  (Alias)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('aliasEn', sortStatus[0].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[2].type == 'asc' || sortStatus[2].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[2].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.model == false , 'showMe': colSetting.model == true }\">الموديل (model)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('model', sortStatus[3].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[3].type == 'asc' || sortStatus[3].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[3].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                 \n                  <th  [ngClass]=\"{'hideMe': colSetting.part_no == false , 'showMe': colSetting.part_no == true }\">الكود (part no)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('part_no', sortStatus[4].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[4].type == 'asc' || sortStatus[4].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[4].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.brand == false , 'showMe': colSetting.brand == true }\">الماركة (brand) \n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('brand', sortStatus[5].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[5].type == 'asc' || sortStatus[5].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[5].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.min_qty == false , 'showMe': colSetting.min_qty == true }\">اقل كمية (MSQ)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('min_qty', sortStatus[6].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[6].type == 'asc' || sortStatus[6].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[6].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.item_unit== false , 'showMe': colSetting.item_unit== true }\">الوحده (unit)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('item_unit', sortStatus[7].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[7].type == 'asc' || sortStatus[7].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[7].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.perch_price == false , 'showMe': colSetting.perch_price == true }\">سعر الشراء (purch price)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('perch_price', sortStatus[8].type,'items')\">\n                      <ion-icon *ngIf=\"sortStatus[8].type == 'asc' || sortStatus[8].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[8].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.pay_price == false , 'showMe': colSetting.pay_price == true }\">سعر الوحده (selling price)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('pay_price', sortStatus[9].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[9].type == 'asc' || sortStatus[9].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[9].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.profit == false , 'showMe': colSetting.profit == true }\">نسبة الفائدة (profit perc)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('profit', sortStatus[10].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[10].type == 'asc' || sortStatus[10].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[10].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>  \n                  <th  [ngClass]=\"{'hideMe': colSetting.instock == false , 'showMe': colSetting.instock == true }\">المخزون (in stock)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('quantity', sortStatus[11].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[11].type == 'asc' || sortStatus[11].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[11].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.total == false , 'showMe': colSetting.total == true }\">المجموع\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('total', sortStatus[12].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[12].type == 'asc' || sortStatus[12].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[12].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.lastSold == false , 'showMe': colSetting.lastSold == true }\">اخر عملية بيع\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sorting('lastSold', sortStatus[13].type,'items')\">\n                    \n                      <ion-icon *ngIf=\"sortStatus[13].type == 'asc' || sortStatus[13].type == null\" name=\"chevron-down-outline\"></ion-icon>\n                      <ion-icon *ngIf=\"sortStatus[13].type == 'desc'\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <!-- <th>sales28</th>\n                  <th>sales29</th>\n                  <th>purch28</th>\n                  <th>purch29</th>-->\n                  <th>   المخزون الإفتتاحي </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\"><strong>تعديل</strong>  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.delete == false , 'showMe': colSetting.delete == true }\"><strong>حذف</strong>  </th> \n                 </tr>\n                 <tr *ngFor=\"let item of itemsAll | filter : searchTerm ; let i = index\"   (dblclick)=\"prClick(i , item)\">\n                  <!-- <td>{{i+1}}</td> -->\n                  <td>{{item.id}}</td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.item_name == false , 'showMe': colSetting.item_name == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_name}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_name\"  ></ion-input>\n                     </ion-item>\n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.item_desc == false , 'showMe': colSetting.item_desc == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_desc}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_desc\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.aliasEn == false , 'showMe': colSetting.aliasEn == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.aliasEn}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.aliasEn\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.model == false , 'showMe': colSetting.model == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.model}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.model\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.part_no == false , 'showMe': colSetting.part_no == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.part_no}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.part_no\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.brand == false , 'showMe': colSetting.brand == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.brand}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.brand\"  ></ion-input>\n                     </ion-item>\n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.min_qty == false , 'showMe': colSetting.min_qty == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.min_qty}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.min_qty\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.item_unit == false , 'showMe': colSetting.item_unit == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_unit}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_unit\"  ></ion-input>\n                     </ion-item> \n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.perch_price == false , 'showMe': colSetting.perch_price == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.perch_price}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.perch_price\"  ></ion-input>\n                     </ion-item> \n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.pay_price == false , 'showMe': colSetting.pay_price == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.pay_price}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                    <ion-input  (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.pay_price\"></ion-input>\n                     </ion-item> \n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.profit == false , 'showMe': colSetting.profit == true }\">\n                    <ion-text *ngIf=\"(item.pay_price && item.perch_price) && item.pay_price >= item.perch_price\">\n                      {{(((+item.pay_price - +item.perch_price)/+item.perch_price) * 100).toFixed(2)}}\n                    </ion-text>\n                    <ion-text *ngIf=\"(item.pay_price && item.perch_price) && item.pay_price < item.perch_price\">\n                      {{(((+item.perch_price - +item.pay_price)/+item.perch_price) * 100).toFixed(2)}}\n                    </ion-text>\n                  </td>\n                \n                  <td  [ngClass]=\"{'hideMe': colSetting.instock == false , 'showMe': colSetting.instock == true }\">{{item.quantity}}</td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.total == false , 'showMe': colSetting.total == true }\">{{+item.quantity * +item.perch_price }}</td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.lastSold == false , 'showMe': colSetting.lastSold == true }\">{{item.lastSoldDate }}</td>\n                  <!-- new -->\n                  <!-- <td   >{{item.sales28 }}</td>\n                  <td   >{{item.salesQuantity }}</td>\n                  <td   >{{item.purch28 }}</td> \n                  <td   >{{item.perchQuantity }}</td> -->\n                  <td>\n                     <ion-item *ngIf=\"showMe == i\">\n                    <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.quantity\"  ></ion-input>\n                     </ion-item>\n\n                    <ion-text *ngIf=\"showMe != i\">\n                      {{item.firstQuantity}}\n                    </ion-text> \n                  </td>\n                  \n\n                  <!-- end new -->\n\n                  <td  [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\">\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"presentModal(item.id , 'edit')\">\n                      <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon> \n                    </ion-button>\n                  </td>\n                   <td  [ngClass]=\"{'hideMe': colSetting.delete == false , 'showMe': colSetting.delete == true }\">\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(item)\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                    </ion-button>\n                  </td>  \n                 </tr> \n                 <tr  *ngIf=\"loading == true \" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                 </tr>\n              </table>  \n            \n           </ion-col>\n\n           <!-- exporting mode   -->\n\n\n          <ion-col  *ngIf=\"exportMode == true\">\n\n         <!-- <div   #exceltable> -->\n           <table  id=\"exceltable\" class=\"table\" *ngIf=\"searchMode == false && filterMode == false\"  >\n            <tr *ngIf=\"colSetting\">\n             <th> \n               التسلسل\n               \n             </th>\n             <th *ngIf=\"colSetting.item_name == true\" >\n               الصنف\n               \n             </th>\n             <th *ngIf=\"colSetting.item_desc == true\"  >اسم الصنف  (English)\n                \n             </th> \n\n             <th *ngIf=\"colSetting.aliasEn true\"  >اسم  مستعار  ( Alias)\n                \n            </th>\n             <th *ngIf=\"colSetting.model == true\"  >الموديل (model)\n                \n             </th>\n            \n             <th *ngIf=\"colSetting.part_no == true\" >الكود (part no)\n              \n             </th>\n             <th *ngIf=\"colSetting.brand == true\"  >الماركة (brand) \n                \n             </th> \n             <th *ngIf=\"colSetting.min_qty == true\"  >اقل كمية (MSQ)\n              \n             </th>\n             <th *ngIf=\"colSetting.item_unit == true\"  >الوحده (unit)\n               \n             </th> \n             <th *ngIf=\"colSetting.perch_price == true\"  >سعر الشراء (purch price)\n                \n             </th>\n             <th *ngIf=\" colSetting.pay_price == true\"  >سعر الوحده (selling price)\n               \n             </th> \n             <th *ngIf=\"colSetting.profit == true\" >نسبة الفائدة (profit perc)\n               \n             </th>  \n             <th *ngIf=\"colSetting.instock == true\"  >المخزون (in stock)\n              \n             </th>\n             <th *ngIf=\" colSetting.total == true\"  >المجموع\n              \n             </th>\n             <th *ngIf=\"colSetting.lastSold == true\" >اخر عملية بيع\n                \n             </th>\n            \n            </tr>\n            <tr *ngFor=\"let item of items ; let i = index\" >\n             <!-- <td>{{i+1}}</td> -->\n             <td>{{item.id}}</td>\n             <td *ngIf=\"colSetting.item_name == true\" >\n               <ion-text *ngIf=\"showMe != i\">{{item.item_name}}</ion-text>\n               \n             </td> \n             <td *ngIf=\"colSetting.item_desc == true\" >\n               <ion-text *ngIf=\"showMe != i\">{{item.item_desc}}</ion-text>\n                \n             </td>\n             <td *ngIf=\"colSetting.aliasEn == true\" >\n              <ion-text *ngIf=\"showMe != i\">{{item.aliasEn}}</ion-text>\n               \n            </td>\n             <td *ngIf=\"colSetting.model == true\" >\n               <ion-text *ngIf=\"showMe != i\">{{item.model}}</ion-text>\n               \n             </td>\n             <td *ngIf=\"colSetting.part_no == true\" >\n               <ion-text *ngIf=\"showMe != i\">{{item.part_no}}</ion-text>\n                \n             </td>\n             <td *ngIf=\"colSetting.brand == true\" >\n               <ion-text *ngIf=\"showMe != i\">{{item.brand}}</ion-text>\n                \n             </td> \n             <td *ngIf=\"colSetting.min_qty == true\" >\n               <ion-text *ngIf=\"showMe != i\">{{item.min_qty}}</ion-text>\n               \n             </td>\n             <td *ngIf=\"colSetting.item_unit == true\" >\n               <ion-text *ngIf=\"showMe != i\">{{item.item_unit}}</ion-text>\n                \n             </td> \n             <td *ngIf=\"colSetting.perch_price == true\" >\n               <ion-text *ngIf=\"showMe != i\">{{item.perch_price}}</ion-text>\n                \n             </td>\n             <td *ngIf=\"colSetting.pay_price == true\" >\n               <ion-text *ngIf=\"showMe != i\">{{item.pay_price}}</ion-text>\n               \n             </td> \n             <td *ngIf=\"colSetting.profit == true\">\n               <ion-text *ngIf=\"(item.pay_price && item.perch_price) && item.pay_price >= item.perch_price\">\n                 {{(((+item.pay_price - +item.perch_price)/+item.perch_price) * 100).toFixed(2)}}\n               </ion-text>\n               <ion-text *ngIf=\"(item.pay_price && item.perch_price) && item.pay_price < item.perch_price\">\n                 {{(((+item.perch_price - +item.pay_price)/+item.perch_price) * 100).toFixed(2)}}\n               </ion-text>\n             </td>\n           \n             <td *ngIf=\"colSetting.profit == true\" >{{item.quantity}}</td>\n             <td *ngIf=\"colSetting.total == true\"  >{{+item.quantity * +item.perch_price }}</td>\n             <td *ngIf=\"colSetting.lastSold == true\" >{{item.lastSoldDate }}</td>\n\n\n               \n            </tr> \n         \n         \n          </table>\n         <!-- </div>   -->\n           <!-- filte mode  -->\n           <table id=\"exceltable\" class=\"table\"  *ngIf=\"filterMode == true\" >\n            <tr *ngIf=\"colSetting\">\n              <th> \n                التسلسل\n                \n              </th>\n              <th *ngIf=\"colSetting.item_name == true\" >\n                الصنف\n                \n              </th>\n              <th *ngIf=\"colSetting.item_desc == true\" >اسم الصنف  (English)\n                 \n              </th> \n              <th *ngIf=\"colSetting.aliasEn == true\" >اسم مستعار  (Alias)\n                 \n              </th> \n              <th *ngIf=\"colSetting.model == true\" >الموديل (model)\n                 \n              </th>\n             \n              <th *ngIf=\"colSetting.part_no == true\" >الكود (part no)\n               \n              </th>\n              <th *ngIf=\"colSetting.brand == true\" >الماركة (brand) \n                 \n              </th> \n              <th *ngIf=\"colSetting.min_qty == true\">اقل كمية (MSQ)\n               \n              </th>\n              <th *ngIf=\"colSetting.item_unit == true\" >الوحده (unit)\n                \n              </th> \n              <th *ngIf=\"colSetting.perch_price == true\" >سعر الشراء (purch price)\n                 \n              </th>\n              <th *ngIf=\" colSetting.pay_price == true\">سعر الوحده (selling price)\n                \n              </th> \n              <th *ngIf=\"colSetting.profit == true\" >نسبة الفائدة (profit perc)\n                \n              </th>  \n              <th *ngIf=\"colSetting.instock == true\" >المخزون (in stock)\n               \n              </th>\n              <th *ngIf=\" colSetting.total == true\" >المجموع\n               \n              </th>\n              <th *ngIf=\"colSetting.lastSold == true\" >اخر عملية بيع\n                 \n              </th>\n             \n             </tr>\n             <tr *ngFor=\"let item of filterArray ; let i = index\"   >\n              <!-- <td>{{i+1}}</td> -->\n              <td>{{item.id}}</td>\n              <td *ngIf=\"colSetting.item_name == true\"  >\n                <ion-text *ngIf=\"showMe != i\">{{item.item_name}}</ion-text>\n                \n              </td> \n              <td *ngIf=\"colSetting.item_desc == true\"  >\n                <ion-text *ngIf=\"showMe != i\">{{item.item_desc}}</ion-text>\n                 \n              </td>\n              <td *ngIf=\"colSetting.aliasEn\"  >\n                <ion-text *ngIf=\"showMe != i\">{{item.aliasEn}}</ion-text>\n                 \n              </td>\n\n              <td *ngIf=\"colSetting.model == true\"  >\n                <ion-text *ngIf=\"showMe != i\">{{item.model}}</ion-text>\n                \n              </td>\n              <td *ngIf=\"colSetting.part_no == true\"  >\n                <ion-text *ngIf=\"showMe != i\">{{item.part_no}}</ion-text>\n                 \n              </td>\n              <td *ngIf=\"colSetting.brand == true\"  >\n                <ion-text *ngIf=\"showMe != i\">{{item.brand}}</ion-text>\n                 \n              </td> \n              <td *ngIf=\"colSetting.min_qty == true\" >\n                <ion-text *ngIf=\"showMe != i\">{{item.min_qty}}</ion-text>\n                \n              </td>\n              <td *ngIf=\"colSetting.item_unit == true\">\n                <ion-text *ngIf=\"showMe != i\">{{item.item_unit}}</ion-text>\n                 \n              </td> \n              <td *ngIf=\"colSetting.perch_price == true\" >\n                <ion-text *ngIf=\"showMe != i\">{{item.perch_price}}</ion-text>\n                 \n              </td>\n              <td *ngIf=\"colSetting.pay_price == true\">\n                <ion-text *ngIf=\"showMe != i\">{{item.pay_price}}</ion-text>\n                \n              </td> \n              <td *ngIf=\"colSetting.profit == true\" >\n                <ion-text *ngIf=\"(item.pay_price && item.perch_price) && item.pay_price >= item.perch_price\">\n                  {{(((+item.pay_price - +item.perch_price)/+item.perch_price) * 100).toFixed(2)}}\n                </ion-text>\n                <ion-text *ngIf=\"(item.pay_price && item.perch_price) && item.pay_price < item.perch_price\">\n                  {{(((+item.perch_price - +item.pay_price)/+item.perch_price) * 100).toFixed(2)}}\n                </ion-text>\n              </td>\n            \n              <td *ngIf=\"colSetting.instock == true\" >{{item.quantity}}</td>\n              <td *ngIf=\"colSetting.total == true\" >{{+item.quantity * +item.perch_price }}</td>\n              <td *ngIf=\"colSetting.lastSold == true\" >{{item.lastSoldDate }}</td>\n \n \n                \n             </tr> \n           </table>  \n         </ion-col>\n\n\n          </ion-row>\n        </ion-grid>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n  \n\n  <!-- Pagination Controls -->\n<ion-grid *ngIf=\"!loading && !searchMode && !filterMode\">\n  <ion-row dir=\"rtl\" class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-item lines=\"none\">\n        <ion-label>عناصر لكل صفحة:</ion-label>\n        <ion-select [value]=\"itemsPerPage\" (ionChange)=\"changeItemsPerPage($event)\">\n          <ion-select-option *ngFor=\"let option of pageSizeOptions\" [value]=\"option\">{{ option }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      \n      <ion-button fill=\"clear\" [disabled]=\"currentPage === 1\" (click)=\"prevPage()\">\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n        السابق\n      </ion-button>\n     \n\n\n      <ion-button *ngFor=\"let page of getPageNumbers()\" \n                 [fill]=\"page === currentPage ? 'solid' : 'clear'\"\n                 [color]=\"page === currentPage ? 'primary' : 'medium'\"\n                 (click)=\"goToPage(page)\">\n        {{ page }}\n      </ion-button>\n      \n      <ion-button fill=\"clear\" [disabled]=\"currentPage === totalPages\" (click)=\"nextPage()\">\n        التالي \n        <ion-icon name=\"chevron-back\"></ion-icon>\n      </ion-button>\n\n\n       \n      <ion-text color=\"medium\">\n        صفحة {{ currentPage }} من {{ totalPages }} (إجمالي العناصر: {{ totalItems }})\n      </ion-text>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n<!-- <ion-footer>\n  <ion-item button (click)=\"createPdf()\"></ion-item>\n</ion-footer> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_items_items_module_ts.js.map