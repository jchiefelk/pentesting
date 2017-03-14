
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var moment = require('moment'); 
var _store;

var ArticleStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  getArticleData: function() {
    return _store;
  }
});
//
AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.UPDATE_TABLE_DATA: 
      _store = action.data; 
      ArticleStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});
module.exports = ArticleStore;
