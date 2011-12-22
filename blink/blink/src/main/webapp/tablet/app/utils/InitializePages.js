synchronicity.views.home = new synchronicity.views.Home();
synchronicity.views.accountList = new synchronicity.views.AccountList();
synchronicity.views.contactList = new synchronicity.views.ContactList();
synchronicity.views.opportunityList = new synchronicity.views.OpportunityList();
synchronicity.views.activityList = new synchronicity.views.ActivityList();
synchronicity.views.reportList = new synchronicity.views.ReportList();
synchronicity.views.settings = new synchronicity.views.Settings();
synchronicity.views.accountDetail = new synchronicity.views.AccountDetail();
synchronicity.views.opportunityDetail = new synchronicity.views.OpportunityDetail();
synchronicity.views.contactDetail = new synchronicity.views.ContactDetail();

var persistentStore = Ext.getStore('synchronicity.stores.persistentAccounts');
persistentStore.load();
persistentStore = Ext.getStore('synchronicity.stores.persistentContacts');
persistentStore.load();
persistentStore = Ext.getStore('synchronicity.stores.persistentOpportunities');
persistentStore.load();
persistentStore = Ext.getStore('synchronicity.stores.persistentActivities');
persistentStore.load();
persistentStore = Ext.getStore('synchronicity.stores.persistentProducts');
persistentStore.load();
persistentStore = Ext.getStore('synchronicity.stores.persistentRevenues');
persistentStore.load();
persistentStore = Ext.getStore('synchronicity.stores.persistentListOfValues');
persistentStore.load();
