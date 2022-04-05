import { computed, reactive } from 'vue';
import isEqual from 'lodash/isEqual';
import {
  TreeNode,
  TreeNodeValue,
  TdCascaderProps,
  TreeNodeModel,
  CascaderChangeSource,
  CascaderValue,
  CascaderContextType,
} from './interface';

export default (props: TdCascaderProps, setInnerValue: TdCascaderProps['onChange']) => {
  const statusContext = reactive({
    inputWidth: 0,
    visible: false,
    treeStore: null,
    inputVal: '',
    scopeVal: undefined,
    treeNodes: [],
    filterActive: false,
    expend: [],
  });

  return {
    statusContext,
    cascaderContext: computed<CascaderContextType>(() => {
      const {
        size,
        checkStrictly,
        lazy,
        multiple,
        filterable,
        clearable,
        checkProps,
        max,
        disabled,
        showAllLevels,
        minCollapsedNum,
        loading,
        valueType,
      } = props;
      return {
        value: statusContext.scopeVal,
        size,
        checkStrictly,
        lazy,
        multiple,
        filterable,
        clearable,
        checkProps,
        max,
        disabled,
        showAllLevels,
        minCollapsedNum,
        loading,
        valueType,
        ...statusContext,
        setTreeNodes: (nodes: TreeNode[]) => {
          statusContext.treeNodes = nodes;
        },
        setValue: (val: CascaderValue, source: CascaderChangeSource, node?: TreeNodeModel) => {
          if (isEqual(val, statusContext.scopeVal)) return;
          setInnerValue(val, { source, node });
        },
        setVisible: (val: boolean) => {
          statusContext.visible = val;
        },
        setFilterActive: (val: boolean) => {
          statusContext.filterActive = val;
        },
        setInputVal: (val: string) => {
          statusContext.inputVal = val;
        },
        setExpend: (val: TreeNodeValue[]) => {
          statusContext.expend = val;
        },
        setInputWidth: (val: number) => {
          statusContext.inputWidth = val;
        },
      };
    }),
  };
};
