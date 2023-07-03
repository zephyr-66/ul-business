import t from "element-plus/es/components/table/src/table/defaults";
import { default as o } from "element-plus/es/components/table/src/table/defaults";
const n = {
  ...t,
  searchForms: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    required: !0,
    default: () => []
  },
  hasOperateColumn: {
    type: Boolean,
    default: !0
  },
  opWidth: {
    type: String,
    default: "160px"
  },
  hasPagination: {
    type: Boolean,
    default: !0
  },
  sizeKey: String,
  pageKey: String,
  pagingAlign: {
    type: String,
    default: "flex-end"
  },
  pagingAttr: {
    type: Object,
    default: () => ({})
  },
  forms: {
    type: Array,
    default: () => []
  },
  getList: Function,
  dataPath: String,
  totalPath: String,
  immediate: {
    type: Boolean,
    default: !0
  },
  onNew: Function,
  newSumbit: Function,
  deleteSumbit: Function,
  getDetail: Function,
  onView: Function,
  editSumbit: Function,
  onEdit: Function
};
export {
  o as elTableProps,
  n as tableProps
};
