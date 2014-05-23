Router.map(function() {

  this.route('home', {
    path: '/'
  });

  this.route('project', {
    path: '/project/:project'
  });

  this.route('func', {
    path: '/project/:project/:function'
  });

});
