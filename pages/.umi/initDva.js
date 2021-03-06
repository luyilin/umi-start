import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'index', ...(require('/Users/uc/code/source/umi-start/pages/test/models/index.js').default) });
app.model({ namespace: 'index', ...(require('/Users/uc/code/source/umi-start/pages/users/models/index.js').default) });
