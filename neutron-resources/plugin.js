var api = parent.pluginApi('NeutronPlugin');

api.register({
  UiInit: function () {
    // Вариант A: встроенный контейнер Network (id проверить!)
    api.addSecondaryMenuPlace(
      'network', 'Neutron', 'neutron-place',
      'plugin/NeutronPlugin/neutron.html',
      { priority: 100 }
    );

    // Вариант B (если A не работает):
    // api.addPrimaryMenuContainer('Network (Neutron)', 'neutron-container', { icon: 'fa-sitemap' });
    // api.addSecondaryMenuPlace('neutron-container', 'Neutron', 'neutron-place',
    //   'plugin/NeutronPlugin/neutron.html');
  }
});

api.ready();