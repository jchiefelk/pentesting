var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var moment = require('moment'); 
var _store = {
  firstname: null,
  lastname: null,
  subjects: null,
  abstract: null,
  article: null,
  submissiondate: moment().format('YYYY-MM-DD'),
  httpstatus: 'null',
  status: null
};
var updateStatus = function(item) {
  _store.httpstatus = item;
};
var setFirstName = function(item)  {
    _store.firstname = item;
};
var setLastName = function(item)  {
    _store.lastname = item;
};
var setArticle = function (item){
      _store.article = item;
};
var setAbstract = function(item){
    _store.abstract = item;
};
var setSubjects = function(item)  {
    _store.subjects = item;
};

var PublishingStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  getStatus: function(){
    return _store.status;
  },
  getArticleData: function() {
    return _store;
  }
});
//
AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.SAVE_CLICKED:  
      if(_store.firstname==null && _store.lastname==null && _store.subjects==null && _store.abstract==null && _store.article==null) {
          _store.status = 'Something needs to be filled out';
      } 
      if(_store.firstname==null){ _store.status = 'Fill out your first name';}
      if(_store.lastname==null){_store.status = 'Fill out your last name';}
      if(_store.subjects==null){_store.status = "You didn't pick a subject"; }
      if(_store.abstract==null){_store.status = 'Fill out an abstract';}
      if(_store.article==null){_store.status = 'Compose and Article before submitting'; }
      PublishingStore.emit(CHANGE_EVENT);
      break;
    case appConstants.STATUS:
      _store.status = action.data;
      break;
    case appConstants.FIRSTNAME:
      setFirstName(action.data);
      break;
    case appConstants.LASTNAME:
      setLastName(action.data);
      break;
    case appConstants.ABSTRACT:
      setAbstract(action.data);
      break;
    case appConstants.ARTICLE:
      setArticle(action.data);
      break;
    case appConstants.SUBJECTS:
      setSubjects(action.data)
      break;
    case appConstants.CLEAR_MESSAGE:
      _store.status=null;
      break;
    default:
      return true;
  }
});
module.exports = PublishingStore;