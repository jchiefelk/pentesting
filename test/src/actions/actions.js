var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var _ = require( 'lodash' );
var _store = {
  firstname: null,
  lastname: null,
  subjects: null,
  abstract: null,
  article: null,
  submissiondate: null
};
var makeGETRequest = function() {
     console.log('Get Engage');
     fetch('/api', {
          method: 'get',
          accept: 'application/json',
        }).then(function(response) {
          if(response.status!=undefined){
              Actions.setStatus(response.status);
          }
         // console.log(response.json());
          return response.json();
        }).then(function(data) {
            Actions.updateTableContents(data);
        }).catch(function(error) {
          console.log(error);
        }); 
};

var makePOSTRequest = function(){
    console.log(window.location);
    fetch('/api', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(_store)
            })
            .then( (response) => {
                  if(response.status!=undefined){
                      Actions.setStatus(response.status);
                  }
                  return response.json(); 
                }).then(function(data) {
                }).catch((err) => {
                    console.log(err)
                });
};

var Actions = {

  postToPending: function(item){
    _store = item;
    makePOSTRequest();
  },
  setStatus: function(item) {
    AppDispatcher.handleAction({
      actionType: appConstants.HTTPSTATUS,
      data: item 
    });
  },
  
  SaveClick: function(event){

    AppDispatcher.handleAction({
      actionType: appConstants.SAVE_CLICKED,	
      data: event
    });
  },
  setFirstName: function(item){
    AppDispatcher.handleAction({
        actionType: appConstants.FIRSTNAME,
        data: item
    });
  },
  setLastName: function(item){
    AppDispatcher.handleAction({
        actionType: appConstants.LASTNAME,
        data: item
    });
  },
  setSubjects: function(item){
    AppDispatcher.handleAction({
      actionType: appConstants.SUBJECTS,
      data: item
    });
  },
  setArticle: function(item){
    AppDispatcher.handleAction({
      actionType: appConstants.ARTICLE,
      data: item
    });
  },
  setAbstract: function(item){
    AppDispatcher.handleAction({
      actionType: appConstants.ABSTRACT,
      data: item
    });
  },

  clearMessage: function(item){
    AppDispatcher.handleAction({
      actionType: appConstants.CLEAR_MESSAGE,
      data: item
    });
  },

  getTableContent: function(item){
    makeGETRequest();
  },

  updateTableContents: function(item){
      AppDispatcher.handleAction({
          actionType: appConstants.UPDATE_TABLE_DATA,
          data: item
      });
  }
  
};
module.exports = Actions;