> Notes for Vue.js

### Vue模版

  ```vue
   <template>
   <div>
     <PageHeaderLayout>

     </PageHeaderLayout>
     </div>
   </template>

   <script>
     // 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
     import PageHeaderLayout from '@/layouts/PageHeaderLayout'
     import ApeDrawer from '@/components/ApeDrawer'
     import ModalDialog from '@/components/ModalDialog'
     import ApeUploader from '@/components/ApeUploader'
     import ApeEditor from '@/components/ApeEditor'
     import { mapGetters } from 'vuex'

     export default {
       components: {
         PageHeaderLayout,
         ApeDrawer,
         ModalDialog,
         ApeUploader,
         ApeEditor
       },
       // 定义属性
       data() {
         return {

         }
       },
       // 计算属性，会监听依赖属性值随之变化
       computed: {
         ...mapGetters(['userPermissions','buttonType'])
       },
       // 监控data中的数据变化
       watch: {},
       // 方法集合
       methods: {

       },
       // 生命周期 - 创建完成（可以访问当前this实例）
       created() {

       },
       // 生命周期 - 挂载完成（可以访问DOM元素）
       mounted() {

       },
       beforeCreate() {}, // 生命周期 - 创建之前
       beforeMount() {}, // 生命周期 - 挂载之前
       beforeUpdate() {}, // 生命周期 - 更新之前
       updated() {}, // 生命周期 - 更新之后
       beforeDestroy() {}, // 生命周期 - 销毁之前
       destroyed() {}, // 生命周期 - 销毁完成
       activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
     }
   </script>

   <style lang='stylus' scoped>

   </style>
   ```
