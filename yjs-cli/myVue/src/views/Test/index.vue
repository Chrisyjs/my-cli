<template>
  <div>
    <div class="search">
      <jlbSearch :heightChange="heightChange">
        <div slot="form" class="market-search-list-new jlb-search">
          <el-form ref="form" size="mini" label-position="top">
            <el-row :gutter="16">
              <jlbSearchLayout>
                <el-form-item label="所属校区：" prop="schoolId">
                  <el-select
                    filterable
                    clearable
                    placeholder="全部"
                    border="bottom"
                    size="mini"
                    v-model="schoolId"
                    class="selected-alone"
                  >
                    <el-option
                      v-for="(item, index) in schoolList"
                      :value="item.id"
                      :label="item.name"
                      :key="index"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </jlbSearchLayout>
              <jlbSearchLayout>
                <el-form-item label="班级名称：" prop="className">
                  <el-input
                    size="mini"
                    clearable
                    border="bottomtest"
                    v-model="className"
                    placeholder="请输入"
                    class="selected-alone"
                  ></el-input>
                </el-form-item>
              </jlbSearchLayout>
              <jlbSearchLayout>
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="handleSearch(true)"
                    size="mini"
                    >查询 {{ total }}</el-button
                  >
                  <el-button type="primary" size="mini" @click="resetSearch"
                    >重置</el-button
                  >
                </el-form-item>
              </jlbSearchLayout>
            </el-row>
          </el-form>
        </div>
      </jlbSearch>
    </div>
    <div class="content-wrapper">
      <div class="wrapper">
        <div class="content-header" flex="cross:center main:justify">
          <span>共个班级</span>
          <div>
            <el-button
              type="success"
              size="mini"
              v-if="getAccessControlOfButton('OL_NEW_NORMAL_CLASS_MANAGE.add')"
              @click="handleAddClass"
              >新建常规课班级</el-button
            >
          </div>
        </div>
        <class-table
          :tableHeight="tableHeight"
          :tableLoading="tableLoading"
          :tableData="tableData"
        ></class-table>
        <el-pagination
          class="pagination page"
          flex="cross:center main:right"
          jlb-ui
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[20, 30, 50, 100]"
          :total="total"
          :page-size="pageSize"
          layout="sizes, prev, pager, next, jumper"
        >
        </el-pagination>
      </div>
    </div>
    <create-class-drawer-new
      @success-callback="handleSearch"
      ref="createClassNew"
    ></create-class-drawer-new>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import calcTableMixin from "@/mixins/calc-table-height/mounted";
import ClassTable from "./table.vue";
import JlbSearchLayout from "@/components/jlb-search-layout";
import JlbSearch from "@/components/jlb-search/jlbSearch";
export default {
  name: "Test",
  components: {
    ClassTable,
    JlbSearchLayout,
    JlbSearch,
  },
  data() {
    return {
      schoolId: "",
      schoolList: [],
      className: "",
      tableData: [],
      total: 0,
      pageSize: 20,
      currentPage: 1,
      tableLoading: false
    };
  },
  mixins: [calcTableMixin],
  computed: {
  },
  activated() {
  },
  mounted() {
  },
  methods: {
    heightChange() {
      this.$nextTick(() => this.calcTableHeight());
    },
    /**
     * 获取所属校区列表
     * @param
     */
    async getschoolList() {
      const { rs, code } = await getschoolList();
      if (code === 200) {
        this.schoolList = rs;
      }
    },
    /**
     * @description: 点击查询
     * @param {type}
     * @return:
     */
    handleSearch(flag) {
      flag && (this.currentPage = 1);
      this.queryClassList();
    },
    async queryClassList() {
      const dateObj = this.$refs.datePickerArea.getTime() || {};
      const params = this.$util.deleteEmptyKey({
        schoolId: this.schoolId,
        className: this.className,
        pageNum: this.currentPage,
        pageSize: this.pageSize
      });
      try {
        this.tableLoading = true;
        const { code, rs } = await queryClassList(params, 1);
        this.tableLoading = false;
        if (code === 200 && rs) {
          this.tableData = rs.data || [];
          // this.tableData = [{className: '阶段1的班级', classId: '2009069', schoolId: '3243'}] || [];
          this.total = rs.count;
        }
      } catch {
        this.tableLoading = false;
      }
      this.heightChange();
    },
    /**
     * @description: 重置条件查询
     * @param {type}
     * @return:
     */
    resetSearch(option) {
      this.
      this.handleSearch(true);
    },
    /**
     * @description: 分页每页展示条数调整
     * @param {type}
     * @return:
     */
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.queryClassList();
    },
    /**
     * @description: 当前页数调整
     * @param {type}
     * @return:
     */
    handleCurrentChange(page) {
      this.currentPage = page;
      this.queryClassList();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
