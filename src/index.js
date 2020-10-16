import './scss/index.scss';
import {
  Excel, Header, Formula, Table, Toolbar,
} from '@components';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
});

excel.render();
