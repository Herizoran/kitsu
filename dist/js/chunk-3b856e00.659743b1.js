(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b856e00"],{"0d40":function(t,i,s){},"0d55":function(t,i,s){"use strict";var e=s("0d40"),l=s.n(e);l.a},"71ff":function(t,i,s){},afa5:function(t,i,s){"use strict";var e=s("71ff"),l=s.n(e);l.a},d1e3:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"productions page fixed-page"},[s("div",{staticClass:"columns"},[t.playlists.length>0?s("div",{staticClass:"playlist-list-column column"},[t.isCurrentUserManager?s("button",{key:"new-playlist-button",class:{button:!0,"is-loading":t.loading.addPlaylist},on:{click:t.showAddModal}},[s("plus-icon",{staticClass:"icon is-small"}),t._v(" "+t._s(t.$t("playlists.new_playlist"))+" ")],1):t._e(),t.loading.playlists?s("spinner",{staticClass:"mt2"}):s("div",{staticClass:"playlists"},t._l(t.playlists,(function(i){return s("router-link",{key:i.id,class:{"playlist-item":!0,"for-client":i.for_client||!1,selected:i.id===t.currentPlaylist.id},attrs:{to:t.getPlaylistPath(i.id)}},[s("span",[t._v(" "+t._s(i.name)+" ")]),s("span",{staticClass:"playlist-date",attrs:{title:"last modified"}},[t._v(" "+t._s(t.$t("playlists.updated_at"))+" "+t._s(t.formatDate(i.updated_at))+" ")])])})),1),t.errors.playlistLoading?s("error-text",{attrs:{text:"$t('playlists.loading_error')"}}):t._e()],1):t._e(),t.playlists.length>0&&!t.currentPlaylist.id?s("div",{staticClass:"playlist-column no-selection"},[s("h2",[t._v(t._s(t.$t("playlists.last_creation")))]),t.loading.playlists?s("spinner",{staticClass:"mt2"}):s("div",{staticClass:"flexrow"},t._l(t.lastPlaylistsCreated,(function(i){return s("router-link",{key:"recent-playlist-"+i.id,staticClass:"recent-playlist flexrow-item",attrs:{to:t.getPlaylistPath(i.id)}},[s("light-entity-thumbnail",{attrs:{"preview-file-id":i.first_preview_file_id,type:"previews",width:"300px",height:"auto","empty-height":"150px"}}),s("h3",[t._v(t._s(i.name))]),s("span",[t._v(" "+t._s(t.$t("playlists.created_at"))+" "+t._s(t.formatDate(i.created_at))+" ")])],1)})),1),s("h2",[t._v(t._s(t.$t("playlists.last_modification")))]),t.loading.playlists?s("spinner",{staticClass:"mt2"}):s("div",{staticClass:"flexrow"},t._l(t.lastPlaylistsUpdated,(function(i){return s("router-link",{key:"recent-modified-playlist-"+i.id,staticClass:"recent-playlist flexrow-item",attrs:{to:t.getPlaylistPath(i.id)}},[s("light-entity-thumbnail",{attrs:{"preview-file-id":i.first_preview_file_id,type:"previews",width:"300px",height:"auto","empty-height":"150px"}}),s("h3",[t._v(t._s(i.name))]),s("span",[t._v(" "+t._s(t.$t("playlists.updated_at"))+" "+t._s(t.formatDate(i.updated_at))+" ")])],1)})),1)],1):0===t.playlists.length?s("div",{staticClass:"playlist-column no-selection has-text-centered"},[t.loading.playlists?s("spinner",{staticClass:"mt2"}):s("div",[s("p",{staticClass:"empty-explaination"},[t._v(" "+t._s(t.$t("playlists.no_playlist"))+" ")]),t.isCurrentUserManager?s("button",{key:"new-playlist-button",class:{big:!0,button:!0,"is-loading":t.loading.addPlaylist},on:{click:t.showAddModal}},[t._v(" "+t._s(t.$t("playlists.new_playlist"))+" ")]):t._e()])],1):s("div",{staticClass:"playlist-column column"},[s("playlist-player",{ref:"playlist-player",attrs:{playlist:t.currentPlaylist,entities:t.currentEntities,"is-loading":t.loading.playlist,"is-adding-entity":t.isAddingEntity,"is-asset-playlist":t.isAssetPlaylist},on:{"edit-clicked":t.showEditModal,"show-add-entities":t.toggleAddEntities,"preview-changed":t.onPreviewChanged,"task-type-changed":t.onTaskTypeChanged,"playlist-deleted":t.goFirstPlaylist,"remove-entity":t.removeEntity,"order-change":t.onOrderChange,annotationchanged:t.onAnnotationChanged,"for-client-changed":t.onForClientChanged}}),t.isCurrentUserManager&&t.isAddingEntity?s("div",[s("div",{staticClass:"addition-header"},[s("div",{staticClass:"flexrow"},[s("page-subtitle",{staticClass:"flexrow-item",attrs:{text:t.addEntitiesText}}),s("span",{staticClass:"filler"}),s("a",{staticClass:"close-button",on:{click:t.toggleAddEntities}},[s("x-icon")],1)],1),s("div",{staticClass:"flexrow"},[s("search-field",{ref:"search-field",staticClass:"flexrow-item",attrs:{"can-save":!1,placeholder:t.isAssetPlaylist?"chars mode=wfa":"ex: seq01 anim=wfa"},on:{change:t.onSearchChange}}),t.isAddSearchVisible?s("button",{class:{button:!0,"flexrow-item":!0,"add-sequence":!0},attrs:{disabled:t.isAdditionLoading},on:{click:t.addCurrentSelection}},[t._v(" "+t._s(t.$t("playlists.add_selection"))+" ")]):t._e(),s("span",{staticClass:"filler"}),t.isAssetPlaylist?t._e():s("button",{class:{button:!0,"add-sequence":!0,"is-loading":this.loading.addDaily},attrs:{disabled:t.isAdditionLoading},on:{click:t.addDailyPending}},[t._v(" "+t._s(t.$t("playlists.build_daily"))+" ")]),t.isTVShow&&!t.isAssetPlaylist?s("button",{class:{button:!0,"add-sequence":!0,"is-loading":this.loading.addEpisode},attrs:{disabled:t.isAdditionLoading},on:{click:t.addEpisodePending}},[t._v(" "+t._s(t.$t("playlists.add_episode"))+" ")]):t.isAssetPlaylist?t._e():s("button",{class:{button:!0,"add-sequence":!0,"is-loading":this.loading.addMovie},attrs:{disabled:t.isAdditionLoading},on:{click:t.addMovie}},[t._v(" "+t._s(t.$t("playlists.add_movie"))+" ")])],1)])]):t._e(),t.isCurrentUserManager&&t.isAddingEntity?s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onBodyScroll,expression:"onBodyScroll"}],ref:"List",staticClass:"addition-section"},[t.isShotsLoading||t.isAssetsLoading?s("spinner",{key:"entity-loader",staticClass:"mt2"}):s("div",{ref:"entityListContent"},[t.isAssetPlaylist?s("div",t._l(t.displayedAssetsByType,(function(i,e){return s("div",{key:"asset-type-"+e},[i.length>0?s("h2",{staticClass:"entity-group-title"},[t._v(" "+t._s(i[0].asset_type_name)+" ")]):t._e(),s("div",{staticClass:"addition-entities"},t._l(i,(function(i){return s("div",{key:i.id,class:{"addition-shot":!0},on:{click:function(s){return s.preventDefault(),t.addEntityToPlaylist(i)}}},[s("light-entity-thumbnail",{attrs:{"preview-file-id":i.preview_file_id,width:"150px",height:"100px"}}),s("span",{staticClass:"playlisted-shot-name"},[t._v(t._s(i.name))])],1)})),0)])})),0):s("div",t._l(t.displayedShotsBySequence,(function(i,e){return s("div",{key:"sequence-"+e},[i.length>0?s("h2",{staticClass:"entity-group-title"},[t._v(" "+t._s(i[0].sequence_name)+" "),t.isCurrentUserManager?s("button",{key:"add-sequence-button-"+i[0].sequence_id,staticClass:"button",on:{click:function(s){return t.addSequence(i)}}},[t._v(" "+t._s(t.$t("playlists.add_sequence"))+" ")]):t._e()]):t._e(),s("div",{staticClass:"addition-entities"},t._l(i,(function(i){return s("div",{key:i.id,class:{"addition-shot":!0,playlisted:void 0!==t.currentEntities[i.id]},on:{click:function(s){return s.preventDefault(),t.addEntityToPlaylist(i)}}},[s("light-entity-thumbnail",{attrs:{"preview-file-id":i.preview_file_id,width:"150px",height:"100px"}}),s("span",{staticClass:"playlisted-shot-name"},[t._v(t._s(i.name))])],1)})),0)])})),0)])],1):t._e()],1)]),s("edit-playlist-modal",{ref:"edit-playlist-modal",attrs:{active:t.modals.isEditDisplayed,"is-loading":t.loading.editPlaylist,"is-error":t.errors.editPlaylist,"playlist-to-edit":t.playlistToEdit},on:{cancel:t.hideEditModal,confirm:t.confirmEditPlaylist}})],1)},l=[],a=(s("a4d3"),s("99af"),s("4de4"),s("4160"),s("fb6a"),s("b0c0"),s("e439"),s("dbb4"),s("b64b"),s("07ac"),s("159b"),s("2909")),n=s("ade3"),o=s("ceca"),r=s.n(o),d=s("7f45"),c=s.n(d),y=s("2f62"),u=s("0a35"),h=s("3657"),p=s("9d8b"),f=s("66e7"),_=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{class:{modal:!0,"is-active":t.active}},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"box"},[t.isEditing?s("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("playlists.edit_title"))+" ")]):s("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("playlists.create_title"))+" ")]),s("form",{on:{submit:function(t){t.preventDefault()}}},[s("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:t.$t("playlists.fields.name")},on:{enter:t.runConfirmation},model:{value:t.form.name,callback:function(i){t.$set(t.form,"name",i)},expression:"form.name"}}),s("combobox",{attrs:{label:t.$t("playlists.fields.for_client"),options:t.forClientOptions},model:{value:t.forClient,callback:function(i){t.forClient=i},expression:"forClient"}}),t.isEditing?t._e():s("combobox",{attrs:{label:t.$t("playlists.fields.for_entity"),options:t.forEntityOptions},model:{value:t.form.for_entity,callback:function(i){t.$set(t.form,"for_entity",i)},expression:"form.for_entity"}})],1),s("p",{staticClass:"has-text-right"},[s("a",{class:{button:!0,"is-primary":!0,"is-loading":t.isLoading},on:{click:t.runConfirmation}},[t._v(" "+t._s(t.$t("main.confirmation"))+" ")]),s("button",{staticClass:"button is-link",on:{click:function(i){return t.$emit("cancel")}}},[t._v(" "+t._s(t.$t("main.cancel"))+" ")])]),t.isError?s("p",{staticClass:"error has-text-right info-message"},[t._v(" "+t._s(t.$t("assets.edit_fail"))+" ")]):t._e()])])])},v=[],P=s("992f"),m=s("7bf8"),g=s("d065"),b={name:"edit-playlist-modal",mixins:[g["a"]],components:{Combobox:P["a"],TextField:m["a"]},props:["active","cancelRoute","isLoading","isError","playlistToEdit"],data:function(){return{forClient:"false",forClientOptions:[{label:this.$t("playlists.for_client"),value:"true"},{label:this.$t("playlists.for_studio"),value:"false"}],forEntityOptions:[{label:this.$t("assets.title"),value:"asset"},{label:this.$t("shots.title"),value:"shot"}],form:{name:this.playlistToEdit.name,for_entity:this.playlistToEdit.for_entity||"shot",for_client:this.playlistToEdit.for_client}}},computed:{isEditing:function(){return this.playlistToEdit&&this.playlistToEdit.id}},methods:{runConfirmation:function(){this.form.for_client="true"===this.forClient,this.$emit("confirm",this.form)},resetForm:function(){this.isEditing?(this.form.name=this.playlistToEdit.name,this.form.for_entity=this.playlistToEdit.for_entity):this.form={name:this.playlistToEdit.name,for_entity:"shot",for_client:"false"}}},watch:{playlistToEdit:function(){this.resetForm()},active:function(){var t=this;this.active&&(this.forClient=this.playlistToEdit.for_client?"true":"false",this.resetForm(),setTimeout((function(){t.$refs.nameField.focus()}),100))}}},E=b,C=(s("0d55"),s("2877")),w=Object(C["a"])(E,_,v,!1,null,"8e599574",null),A=w.exports,$=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("p",{class:{error:!0,"has-text-right":t.alignRight,"is-hidden":t.hidden}},[t._v(" "+t._s(t.text)+" ")])},S=[],T={name:"error-text",props:{text:{default:"",type:String},hidden:{default:!1,type:Boolean},alignRight:{default:!1,type:Boolean}}},k=T,x=Object(C["a"])(k,$,S,!1,null,null,null),D=x.exports,O=s("d793"),M=s("8751"),j=s("1ea9"),L=s("4d04"),F=s("be83");function q(t,i){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),s.push.apply(s,e)}return s}function B(t){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?q(Object(s),!0).forEach((function(i){Object(n["a"])(t,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):q(Object(s)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))}))}return t}var Y={name:"productions",components:{ErrorText:D,EditPlaylistModal:A,LightEntityThumbnail:O["a"],PageSubtitle:M["a"],PlaylistPlayer:j["a"],PlusIcon:u["B"],SearchField:L["a"],Spinner:F["a"],XIcon:u["N"]},data:function(){return{currentPlaylist:{name:this.$t("playlists.no_selection")},currentEntities:{},isAddingEntity:!0,playlistToEdit:{name:"".concat(c()().format("YYYY-MM-DD HH:mm:ss")),for_client:!1},modals:{isDeleteDisplayed:!1,isEditDisplayed:!1},loading:{addPlaylist:!1,addDaily:!1,addEpisode:!1,addMovie:!1,addSequence:!1,addWeekly:!1,deletePlaylist:!1,editPlaylist:!1,playlist:!1,playlists:!0},errors:{addPlaylist:!1,editPlaylist:!1,deletePlaylist:!1,playlistLoading:!1}}},computed:B({},Object(y["c"])(["assetMap","assetSearchText","currentEpisode","currentProduction","displayedAssets","displayedAssetsByType","displayedShots","displayedShotsBySequence","isAssetsLoading","isCurrentUserManager","isShotsLoading","isTVShow","playlistMap","playlists","playlistsPath","shotsByEpisode","shotSearchText","shotMap","taskTypeMap"]),{isAdditionLoading:function(){return this.loading.addSequence||this.loading.addWeekly||this.loading.addDaily||this.loading.addEpisode},isAssetPlaylist:function(){return"asset"===this.currentPlaylist.for_entity},isAddSearchVisible:function(){return this.isAssetPlaylist&&this.assetSearchText||!this.isAssetPlaylist&&this.shotSearchText},lastPlaylistsUpdated:function(){return this.playlists.concat().sort(r()("updated_at")).reverse().slice(0,3)},lastPlaylistsCreated:function(){return this.playlists.slice(0,3)},playlistPlayer:function(){return this.$refs["playlist-player"]},addEntitiesText:function(){return this.isAssetPlaylist?this.$t("playlists.add_assets"):this.$t("playlists.add_shots")}}),methods:B({},Object(y["b"])(["addNewBuildJob","pushEntityToPlaylist","changePlaylistOrder","changePlaylistPreview","changePlaylistType","displayMoreAssets","displayMoreShots","editPlaylist","getPending","loadPlaylist","loadPlaylists","loadEntityPreviewFiles","loadShots","loadAssets","markBuildJobAsDone","newPlaylist","refreshPlaylist","removeEntityPreviewFromPlaylist","removeBuildJobFromList","setAssetSearch","setShotSearch","updatePreviewAnnotation"]),{formatDate:function(t){return Object(h["a"])(t)},getPlaylistPath:function(t,i){return Object(p["b"])(this.currentProduction.id,this.currentEpisode?this.currentEpisode.id:null,t,i)},loadShotsData:function(t){0===this.displayedShots.length?this.loadShots(t):t()},loadAssetsData:function(t){0===this.displayedAssets.length?this.loadAssets(t):t()},loadPlaylistsData:function(){var t=this,i=function(){t.setCurrentPlaylist((function(){t.currentPlaylist&&t.currentPlaylist.id||t.goFirstPlaylist()}))};0===this.playlists.length?(this.loading.playlists=!0,this.loadPlaylists((function(s){s&&(t.errors.loadPlaylists=!0),t.loading.playlists=!1,s||i()}))):(this.loading.playlists=!1,i())},rebuildCurrentEntities:function(){var t=this;this.currentEntities={};var i={};this.currentPlaylist&&this.currentPlaylist.shots&&this.currentPlaylist.shots.forEach((function(s){var e=t.convertEntityToPlaylistFormat(s);e&&(i[e.id]=e)})),this.$nextTick((function(){t.currentEntities=i}))},convertEntityToPlaylistFormat:function(t){var i;if(i=this.isAssetPlaylist?this.assetMap[t.id]:this.shotMap[t.id],i){var s={id:t.id,name:i.name,parent_name:i.sequence_name||i.asset_type_name,preview_files:t.preview_files,preview_file_id:t.preview_file_id||i.preview_file_id,preview_file_extension:t.preview_file_extension||i.preview_file_extension,preview_file_task_id:t.task_id||t.preview_file_task_id||i.preview_file_task_id,preview_file_annotations:t.preview_file_annotations||i.preview_file_annotations};return s}return null},setCurrentPlaylist:function(t){var i=this,s=this.$route.params.playlist_id,e=this.playlistMap[s];this.loading.playlist=!0,e?this.loadPlaylist({playlist:e,callback:function(s,e){i.loading.playlist=!1,s&&console.error(s),i.currentPlaylist=e,i.rebuildCurrentEntities(),t&&t()}}):(this.currentPlaylist={name:this.$t("playlists.no_selection")},this.currentShots={})},addEntity:function(t){var i=this;return this.loadEntityPreviewFiles(t).then((function(s){return i.addToStorePlaylistAndSave(s,t)})).then(this.addToPlayerPlaylist).catch((function(t){return console.error(t)}))},addToStorePlaylistAndSave:function(t,i){return this.pushEntityToPlaylist({playlist:this.currentPlaylist,previewFiles:t,entity:B({},i)})},addToPlayerPlaylist:function(t){var i=this,s=this.convertEntityToPlaylistFormat(t);this.currentEntities[s.id]=s,this.playlistPlayer.entityList.push(s),this.$nextTick((function(){i.playlistPlayer.scrollToRight()}))},addEntityToPlaylist:function(t){this.currentEntities[t.id]||this.addEntity(t).then(this.playlistPlayer.scrollToRight())},removeEntity:function(t){var i=this;this.removeEntityPreviewFromPlaylist({playlist:this.currentPlaylist,entity:t,callback:function(){delete i.currentEntities[t.id]}})},clearCurrentPlaylist:function(){this.currentPlaylist={},this.currentShots={}},resetPlaylist:function(){this.clearCurrentPlaylist(),this.setCurrentPlaylist()},addCurrentSelection:function(){var t=this;this.$options.silent=!0;var i=this.isAssetPlaylist?this.displayedAssets:this.displayedShots;this.addEntities(Object(a["a"])(i).reverse(),(function(){t.$options.silent=!1}))},addSequence:function(t){var i=this;if(t.length>0){var s=t[0].sequence_id,e=Object.values(this.shotMap).filter((function(t){return t.sequence_id===s})).sort(r()("name")).reverse();this.$options.silent=!0,this.addEntities(e,(function(){i.$options.silent=!1}))}},addAllPending:function(){var t=this;this.$options.silent=!0,this.loading.addWeekly=!0,this.getPending(!1).then((function(i){t.addEntities(i.reverse(),(function(){t.loading.addWeekly=!1,t.$options.silent=!1}))}))},addDailyPending:function(){var t=this;this.loading.addDaily=!0,this.$options.silent=!0,this.getPending(!0).then((function(i){t.addEntities(i.reverse(),(function(){t.loading.addDaily=!1,t.$options.silent=!1}))}))},addEpisodePending:function(){var t,i=this;this.loading.addEpisode=!0,this.$options.silent=!0;var s=(t=[]).concat.apply(t,Object(a["a"])(this.shotsByEpisode)).reverse();this.addEntities(s,(function(){i.loading.addEpisode=!1,i.$options.silent=!1}))},addMovie:function(){var t=this;this.loading.addMovie=!0,this.$options.silent=!0;var i=Object.values(this.shotMap);this.addEntities(i.reverse(),(function(){t.loading.addMovie=!1,t.$options.silent=!1}))},addEntities:function(t,i){var s=this;if(t&&t.length>0){var e=t.pop();this.addEntity(e).then((function(){s.addEntities(t,i)}))}else i()},onPreviewChanged:function(t,i){this.changePlaylistPreview({playlist:this.currentPlaylist,entity:t,previewFileId:i})},onOrderChange:function(t){this.changePlaylistOrder({playlist:this.currentPlaylist,info:t})},onAnnotationChanged:function(t){var i=t.preview,s=t.annotations,e=i.task_id;this.updatePreviewAnnotation({taskId:e,preview:i,annotations:s})},onSearchChange:function(t){t.length>1?this.isAssetPlaylist?(this.setAssetSearch(t),this.displayMoreAssets()):(this.setShotSearch(t),this.displayMoreShots()):this.isAssetPlaylist?this.setAssetSearch(""):this.setShotSearch("")},onForClientChanged:function(t){this.editPlaylist({data:{id:this.currentPlaylist.id,for_client:t}})},runAddPlaylist:function(t){var i=this,s={name:t.name,production_id:this.currentProduction.id,for_client:t.for_client,for_entity:t.for_entity};this.isTVShow&&this.currentEpisode&&(s.episode_id=this.currentEpisode.id),this.loading.editPlaylist=!0,this.errors.editPlaylist=!1,this.newPlaylist({data:s,callback:function(t,s){t&&(i.errors.editPlaylist=!0),i.$router.push(i.getPlaylistPath(s.id)),i.loading.editPlaylist=!1,i.modals.isEditDisplayed=!1}})},confirmEditPlaylist:function(t){this.playlistToEdit.id?(t.id=this.currentPlaylist.id,this.runEditPlaylist(t)):this.runAddPlaylist(t)},runEditPlaylist:function(t){var i=this;this.loading.editPlaylist=!0,this.errors.editPlaylist=!1,this.editPlaylist({data:{id:t.id,for_client:t.for_client,for_entity:t.for_entity,name:t.name},callback:function(t,s){t&&(i.errors.editPlaylist=!0),i.loading.editPlaylist=!1,i.modals.isEditDisplayed=!1,Object.assign(i.currentPlaylist,s)}})},goFirstPlaylist:function(){this.playlists.length>0?this.$router.push({name:"playlist",params:{production_id:this.currentProduction.id,playlist_id:this.playlists[0].id}}):this.$router.push(this.playlistsPath)},toggleAddEntities:function(){this.isAddingEntity&&this.resetPlaylist(),this.isAddingEntity=!this.isAddingEntity},onTaskTypeChanged:function(t){var i=this;this.changePlaylistType({playlist:this.currentPlaylist,taskTypeId:t,callback:function(){i.rebuildCurrentEntities()}})},onBodyScroll:function(t,i){var s=this.$refs.entityListContent.scrollHeight-this.$refs.entityListContent.offsetHeight;s<i.scrollTop&&this.displayMoreShots()},showAddModal:function(){this.playlistToEdit={name:"".concat(c()().format("YYYY-MM-DD HH:mm:ss")),for_client:!1},this.$refs["edit-playlist-modal"]=!0,this.modals.isEditDisplayed=!0},showEditModal:function(){this.playlistToEdit=this.currentPlaylist,this.modals.isEditDisplayed=!0},hideEditModal:function(){this.playlistToEdit={name:"".concat(c()().format("YYYY-MM-DD HH:mm:ss")),for_client:!1},this.modals.isEditDisplayed=!1},reloadAll:function(){var t=this;this.loadShotsData((function(){t.loadAssetsData((function(){t.loadPlaylistsData((function(){t.resetPlaylist()}))}))}))}}),mounted:function(){this.reloadAll()},watch:{$route:function(){this.setCurrentPlaylist()},currentPlaylist:function(){this.currentPlaylist.shots?this.isAddingEntity=0===Object.keys(this.currentPlaylist.shots).length:this.isAddingEntity=!0},currentProduction:function(){this.$store.commit("LOAD_PLAYLISTS_END",[]),this.reloadAll()},currentEpisode:function(){this.$store.commit("LOAD_PLAYLISTS_END",[]),this.currentEpisode&&this.reloadAll()}},metaInfo:function(){return this.isTVShow?{title:"".concat(this.currentProduction?this.currentProduction.name:""," ")+"- ".concat(this.currentEpisode?this.currentEpisode.name:""," |")+" ".concat(this.$t("playlists.title")," - Kitsu")}:{title:"".concat(this.currentProduction?this.currentProduction.name:"")+" ".concat(this.$t("playlists.title"))+" - Kitsu"}},socket:{events:{"playlist:new":function(t){this.playlistMap[t.playlist_id]||this.refreshPlaylist(t.playlist_id)},"playlist:update":function(t){},"playlist:delete":function(t){this.$store.commit("DELETE_PLAYLIST_END",{id:t.playlist_id})},"build-job:new":function(t){t.playlist_id===this.currentPlaylist.id&&(this.currentPlaylist.build_jobs=[{id:t.build_job_id,created_at:t.created_at,status:"running",playlist_id:this.currentPlaylist.id}].concat(this.currentPlaylist.build_jobs))},"build-job:update":function(t){t.playlist_id===this.currentPlaylist.id&&Object(f["f"])(this.currentPlaylist.build_jobs,{id:t.build_job_id,status:t.status})},"build-job:delete":function(t){t.playlist_id===this.currentPlaylist.id&&(this.currentPlaylist.build_jobs=Object(f["e"])(this.currentPlaylist.build_jobs,{id:t.build_job_id}))}}}},I=Y,H=(s("afa5"),Object(C["a"])(I,e,l,!1,null,"6d4ff974",null));i["default"]=H.exports}}]);
//# sourceMappingURL=chunk-3b856e00.659743b1.js.map