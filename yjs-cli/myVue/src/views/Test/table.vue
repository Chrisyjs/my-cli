<template>
  <div>
    <el-table
      class="table-wrap"
      jlb-ui
      border
      :data="tableData"
      v-loading="tableLoading"
      style="width:100%"
      :height="tableHeight"
      tooltip-effect="dark"
      header-cell-class-name="table-header-cell"
    >
      <el-table-column v-for="(item, idx) in columnData" :prop="item.prop" :label="item.label" :width="item.width || 130" :align="item.align || 'center'">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import columnData from './column-data.js'
export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableLoading: {
      type: Boolean,
      default: false
    },
    tableHeight: {
      type: Number,
      default: 800
    }
  },
  data() {
    return {
      columnData
    };
  },
  computed: {
  },
  methods: {
};
</script>
<style lang="scss" scoped>
</style>
