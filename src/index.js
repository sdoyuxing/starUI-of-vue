import Vue from 'vue'
import sButton from './components/button'
import Icon from './components/icon'
import sRadio from './components/radio'
import sInput from './components/input'
import sCheckbox from './components/checkbox'
import sSwitch from './components/switch'
import sAlert from './components/alert'
import sTag from './components/tag'
import sPagination from './components/Pagination'
import message from './components/message'
import progressBar from './utils/progressBar'
import notice from './components/notice'
import sPoptip from './components/poptip'
import sModal from './components/modal'
import sTable from './components/table'
import sTabs from './components/tabs'
import sDatePicker from './components/date-picker'
import sDatePickerInput from './components/date-picker-input'
import {
    sSelect,
    Option
} from './components/select'
import sTooltip from './components/tooltip'
import sTree from './components/tree'
import sMenu from './components/menu'
import sForm from './components/form'

const components = {
    sButton,
    sButtonGroup: sButton.Group,
    Icon,
    sRadio,
    sInput,
    sRadioGroup: sRadio.Group,
    sCheckbox,
    sCheckboxGroup: sCheckbox.Group,
    sSwitch,
    sAlert,
    sTag,
    sSelect,
    Option,
    sTooltip,
    sPagination,
    sPoptip,
    sModal,
    sTable,
    sTabs,
    sTabPane: sTabs.Pane,
    sDatePicker,
    sDatePickerInput,
    sTree,
    sMenu,
    sMenuItem: sMenu.MenuItem,
    sSubmenu: sMenu.submenu,
    sForm,
    sFormItem: sForm.formItem
};

const iview = components;

const install = function (Vue, opts = {}) {
    Object.keys(iview).forEach(key => {
        Vue.component(key, iview[key]);
    });
};

Vue.prototype.$progressBar = progressBar
Vue.prototype.$Message = message
Vue.prototype.$Notice = notice
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    install,
    progressBar,
    ...components
};
export default API